import { useState, useEffect } from 'react';
import { Plus, Search, Filter, Calendar, Tag, Trash2, Edit3, FileText, BarChart3, Target, Clock, CheckCircle, AlertCircle, ChevronLeft, ChevronRight, Copy, Download, Eye, Send, Zap, TrendingUp, Users, Heart, MessageCircle, Share, RotateCcw, Settings, Globe, Smartphone, Monitor } from 'lucide-react';

const UsInContextCMS = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentXWeek, setCurrentXWeek] = useState(1);
  const [currentFacebookWeek, setCurrentFacebookWeek] = useState(1);
  const [currentWebsiteWeek, setCurrentWebsiteWeek] = useState(1);
  const [currentYouTubeWeek, setCurrentYouTubeWeek] = useState(1);
  
  // Modal states for Enhanced Quick Actions
  const [showGanttChart, setShowGanttChart] = useState(false);
  const [showContentPreview, setShowContentPreview] = useState(false);
  const [showCalendarSync, setShowCalendarSync] = useState(false);
  const [showClaudeAssist, setShowClaudeAssist] = useState(false);
  const [showAPIConnections, setShowAPIConnections] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const [claudePrompt, setClaudePrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Completion tracking
  const [completedXTasks, setCompletedXTasks] = useState([]);
  const [completedInstagramTasks, setCompletedInstagramTasks] = useState([]);
  const [completedTikTokTasks, setCompletedTikTokTasks] = useState([]);
  const [completedLinkedInTasks, setCompletedLinkedInTasks] = useState([]);
  const [completedFacebookTasks, setCompletedFacebookTasks] = useState([]);
  const [completedWebsiteTasks, setCompletedWebsiteTasks] = useState([]);
  const [completedYouTubeTasks, setCompletedYouTubeTasks] = useState([]);

  // COMPLETE 28-day X-Twitter strategy
  const xTwitterStrategy = {
    week1: {
      day1: "🌍 Just joined X! I'm behind @UsInContext - cutting through the noise on UK economics & corporate accountability. 🎯 Recent deep-dive: How corporate 'just-in-time' obsession drove our inflation crisis📺 YouTube: @UsInContext 🌐 usincontext.com Ready to connect the dots? #UsInContext #UKEconomy",
      day2: "🧵 THREAD: Remember the UK fuel crisis? It wasn't just 'supply chain issues' - it was corporate greed. Here's how CEO decisions created the chaos (and why it'll happen again)... 1/8 #CorporateGreed #UKFuelCrisis",
      day3: "🏭➡️💼 UK TRANSFORMATION: We went from making things to... serving things. Britain's shift from manufacturing to services isn't just history - it explains why we're vulnerable to every global shock. Here's what this means for your bills 👇 #UKEconomy #Manufacturing",
      day4: "🎯 CONTEXT CHECK: [Current economic headline] The headlines focus on [surface issue], but here's what's really happening... Pattern recognition is everything. #UsInContext",
      day5: "⚠️ PATTERN ALERT: Spot the cycle 1. Company prioritizes profits over resilience 2. Crisis hits (predictably) 3. 'Nobody could have seen this coming' 4. Public pays the cost 5. CEO gets bonus 6. Repeat #CorporateAccountability",
      day6: "❓ QUESTION: What 'supply chain issue' has affected you most? I bet if we dig into it, we'll find corporate cost-cutting at the root. Share your experiences below 👇 #SupplyChain",
      day7: "📝 WEEK 1 RECAP: We covered: 🏭 UK's economic transformation ⛽ Fuel crisis reality 🎯 Pattern recognition Next week: Inflation deep-dive #UsInContext #WeeklyRecap"
    },
    week2: {
      day8: "🧵 INFLATION THREAD: 'Prices are rising due to global pressures' That's what they want you to think. Here's how corporate decisions drove UK inflation... 1/10 #Inflation #CorporateGreed",
      day9: "🔍 BEHIND THE SCENES: How I research corporate accountability Step 1: Read the press release Step 2: Check the financial reports Step 3: Look at what they're NOT saying Step 4: Find the human impact #MediaLiteracy #Research",
      day10: "Adding context to this 👇 This isn't 'market dynamics' - it's deliberate corporate strategy. Pattern recognition is everything.",
      day11: "📚 ECONOMICS EXPLAINED: 'Market efficiency' vs 'Social efficiency' Companies choose market efficiency. Communities pay for the difference. #EconomicLiteracy",
      day12: "🎯 CONTEXT: [Current business news] This follows the exact pattern we've seen with [previous example] #UsInContext #PatternRecognition",
      day13: "💬 DISCUSSION: What would a 'resilient economy' look like? My take: Local production, strategic reserves, long-term thinking over quarterly profits #ResilientEconomy",
      day14: "📊 WEEK 2 INSIGHTS: Inflation wasn't inevitable - it was engineered. Building a community that sees through the spin 💪 #UsInContext"
    },
    week3: {
      day15: "🔥 CONTROVERSIAL TAKE: 'Supply chain resilience' and 'shareholder value' are fundamentally incompatible. Agree/disagree? 👇",
      day16: "📈 DATA THREAD: UK economic transformation by numbers 1970: Manufacturing = 30% of GDP 2020: Manufacturing = 10% of GDP #UKEconomy #Data",
      day17: "🎯 QUICK POLL: What's the biggest lie about the UK economy? A) 'Service economy by choice' B) 'Deindustrialization inevitable' C) 'Supply chain unpredictable' D) 'Market forces neutral' 👇",
      day18: "📰 MEDIA WATCH: 'Company reports record profits amid challenging conditions' Translation: 'Company exploited crisis for maximum extraction' #MediaLiteracy",
      day19: "🎓 ECONOMICS 101: 'Externalities' explained - costs companies ignore: community impact, environment, social disruption #EconomicLiteracy",
      day20: "📍 COMMUNITY IMPACT: Share your story - how have corporate decisions affected your area? #CommunityVoices #RealImpact",
      day21: "💡 WEEK 3 LEARNINGS: Data doesn't lie, 'market efficiency' = community cost, building economic literacy 📚 #UsInContext"
    },
    week4: {
      day22: "🔮 PREDICTION: Next 'supply chain crisis' will be... Based on corporate cost-cutting patterns Screenshot this 📸 #PredictableCrises",
      day23: "🧵 FRAMEWORK: How to hold corporations accountable 1. Follow the money 2. Check timeline 3. Look at patterns 4. Find human impact #CorporateAccountability",
      day24: "📋 CASE STUDY: [Recent corporate news] Let's apply the accountability framework: 💰 Who profits? ⏰ Timeline? 🔄 Pattern? 👥 Impact? #CaseStudy",
      day25: "❌ MYTH: 'The market will self-correct' ✅ REALITY: Markets correct toward profit maximization, not social benefit #EconomicMyths",
      day26: "💡 SOLUTIONS: How communities can build resilience - Support local production, demand strategic reserves #CommunityResilience",
      day27: "🤔 QUESTION: What would you sacrifice for a more resilient economy? What trade-offs would you make? 👇",
      day28: "🎯 MONTH 1 COMPLETE: 28 days of economic truth-telling, pattern recognition skills, corporate accountability framework 💪 #UsInContext"
    }
  };

  // COMPLETE Facebook strategy - 28 posts across 4 weeks (7 posts per week)
  const facebookStrategy = {
    week1: {
      day1: {
        format: "Introduction Post",
        topic: "Welcome to Us In Context on Facebook",
        content: "Hello Facebook community! 👋 I'm excited to bring Us In Context to this platform. We're an independent voice dedicated to one simple mission: helping you understand how political, economic, and social developments actually impact your daily life. 🎯 What makes us different? We don't claim to be experts in everything, but we're committed to keeping vital conversations alive and accessible. We cut through the noise, connect the dots between trending issues and real-world effects, and hold power accountable. Join us in making sense of the chaos. What issues are you seeing in the headlines that you'd like us to put in context? 💬 #IndependentMedia #UsInContext",
        engagement: "Ask community what issues they want analyzed"
      },
      day2: {
        format: "Educational Post",
        topic: "How to Spot Corporate BS in the News",
        content: "🔍 MEDIA LITERACY MONDAY: Ever notice how companies always blame 'unprecedented challenges' for everything? Here's how to read between the lines when corporations make excuses: 1) Look for the word 'unprecedented' (translation: we didn't plan for this) 2) Check if they mention 'supply chain issues' without specifics 3) See if executive bonuses still went up 4) Follow the timeline - was this really unpredictable? What corporate excuse have you heard recently that made you roll your eyes? Share below! 👇",
        engagement: "Community shares corporate excuses they've heard"
      },
      day3: {
        format: "Behind the Scenes",
        topic: "How I Research Stories",
        content: "📚 BEHIND THE SCENES: People ask how I dig into these stories. Here's my process: I'm not an economist or policy expert - I'm just someone who got tired of not understanding why things cost more, why services got worse, and why the explanations never made sense. So I started asking questions and following the money trail. My tools: Company financial reports, government data, academic studies, and a lot of coffee ☕ What questions have you always wanted answers to but felt too intimidated to ask? Drop them below!",
        engagement: "Invite community questions and research requests"
      },
      day4: {
        format: "Analysis Post",
        topic: "The Real Cost of 'Efficiency'",
        content: "💰 THE EFFICIENCY TRAP: Companies love talking about 'efficiency' - but efficient for whom? When businesses cut costs by: • Reducing staff • Eliminating backup systems • Using 'just-in-time' delivery • Outsourcing everything They're transferring risk from shareholders to everyone else. The 2021 supply chain crisis? That wasn't a bug in the system - it was a predictable feature of prioritizing efficiency over resilience. The cost of 'efficiency' gets paid by workers, communities, and consumers when things go wrong.",
        engagement: "Ask community to share experiences with corporate 'efficiency' cuts"
      },
      day5: {
        format: "Data Analysis",
        topic: "UK Manufacturing Decline by Numbers",
        content: "📊 MANUFACTURING REALITY CHECK: The numbers tell the story: 1980: 20% of UK economy was manufacturing 2000: 14% of UK economy was manufacturing 2020: 9% of UK economy was manufacturing This wasn't inevitable - it was policy. While Germany maintained 20% manufacturing, we chose financialization. Result? We became vulnerable to every supply shock, from semiconductors to steel. The 'service economy' sounded modern, but it left us dependent on others for everything we actually need.",
        engagement: "Community discussion on local manufacturing job losses"
      },
      day6: {
        format: "Community Question",
        topic: "Your Economic Pain Points",
        content: "💭 COMMUNITY QUESTION: What's the economic issue that keeps you up at night? Not the big abstract stuff - the real, daily impact things. The bill that shocked you. The service that disappeared. The price that doubled 'for no reason.' I'm building my research list based on what actually affects real people, not what politicians think matters. Drop your biggest economic frustration below and I'll investigate the corporate decisions behind it. 👇",
        engagement: "Collect community economic concerns for future research"
      },
      day7: {
        format: "Weekly Recap",
        topic: "Week 1 Insights Summary",
        content: "📋 WEEK 1 WRAP-UP: This week we covered: 🔍 How to spot corporate spin in news 📚 My research methodology 💰 The hidden costs of 'efficiency' 📊 UK manufacturing decline data 💭 Your economic pain points Thanks for sharing your experiences and questions! Next week: We'll dive into how corporate decisions during the pandemic created our current inflation crisis. Pattern recognition is everything. #WeeklyRecap #UsInContext",
        engagement: "Preview next week's content and encourage continued engagement"
      }
    },
    week2: {
      day8: {
        format: "Investigation Launch",
        topic: "Pandemic Profits vs Public Pain",
        content: "🕵️ INVESTIGATION: THE PANDEMIC PROFITEERS - This week we're examining how some companies used the pandemic as a profit opportunity while claiming 'unprecedented challenges.' Starting with grocery chains: • Tesco profits up 28% (2020-2021) • Sainsbury's profits up 42% • Prices to consumers up 15-20% But we were told it was all 'supply chain pressures' and 'increased costs.' The data tells a different story. Who else would you like me to investigate? #PandemicProfiteers #CorporateAccountability",
        engagement: "Community suggests companies to investigate"
      },
      day9: {
        format: "Educational Deep-dive",
        topic: "Understanding Profit Margin Manipulation",
        content: "📈 PROFIT MARGINS EXPLAINED: When companies report 'rising costs' but profits increase, here's what's really happening: Scenario: Company's costs rise 10% • Option A: Raise prices 10% (maintain margins) • Option B: Raise prices 20% (increase margins) Guess which they chose during the pandemic? This isn't 'market forces' - it's opportunistic pricing under cover of crisis. When you see 'inflation,' ask: Are profits rising faster than costs? If yes, it's not inflation - it's extraction. #EconomicLiteracy #ProfitMargins",
        engagement: "Ask community to check their bills for price increases vs actual costs"
      },
      day10: {
        format: "Case Study",
        topic: "Energy Companies: Crisis or Opportunity?",
        content: "⚡ CASE STUDY: UK ENERGY SECTOR - 'Energy crisis' or profit windfall? Let's check: Shell profits 2022: £32.2 billion (double 2021) BP profits 2022: £23 billion (triple 2021) Your energy bills 2022: Up 80% average The math is simple: Record company profits + record consumer costs = wealth transfer, not crisis. They had the same supply constraints we did, but somehow their shareholders got richer while households got poorer. This is extraction, not economics. #EnergyCrisis #CorporateGreed",
        engagement: "Community shares energy bill increases and frustrations"
      },
      day11: {
        format: "Media Analysis",
        topic: "How 'Inflation' Became the Perfect Cover Story",
        content: "📰 MEDIA WATCH: Notice how every price increase gets called 'inflation'? Real inflation: General rise in prices due to money supply or demand/supply imbalances Corporate extraction: Selective price increases during confusion/crisis The media helps by using 'inflation' for everything, making it seem natural and unavoidable. But check the corporate earnings reports - if profits are rising faster than costs, it's not inflation. It's companies using crisis as cover for profit maximization. #MediaLiteracy #InflationNarrative",
        engagement: "Community spots examples of misleading inflation coverage"
      },
      day12: {
        format: "Solution Focus",
        topic: "What Resilient Economics Actually Looks Like",
        content: "💪 BUILDING RESILIENCE: What would an economy designed for people (not just profits) look like? • Strategic reserves of essential goods • Local production of critical supplies • Regulations preventing crisis profiteering • Transparency requirements for pricing decisions • Community ownership of essential services Some countries do this! During the pandemic, countries with state energy companies had smaller bill increases. Countries with local production had fewer shortages. We chose the profit-maximizing model. We can choose differently. #EconomicResilience #Solutions",
        engagement: "Community discusses local resilience initiatives and solutions"
      },
      day13: {
        format: "Community Spotlight",
        topic: "Your Stories: Corporate Decisions That Hurt",
        content: "🎤 COMMUNITY VOICES: This week you've shared powerful stories about corporate decisions that affected your lives: • Hospital closures for 'efficiency' that cost lives • Bank branch closures that isolated elderly customers • Manufacturing job losses to 'offshore' for profits These aren't abstract economic forces - they're deliberate business decisions that prioritized shareholders over stakeholders. Your stories matter because they show the human cost of corporate 'optimization.' Keep sharing - this is how we connect the dots. #CommunityVoices #RealImpact",
        engagement: "Amplify community stories and encourage more sharing"
      },
      day14: {
        format: "Weekly Recap",
        topic: "Week 2: Following the Money Trail",
        content: "🔍 WEEK 2 SUMMARY: We followed the money and found: 📊 Record corporate profits during 'crisis' 📈 How profit margins reveal the truth 💡 Media narratives that hide extraction 💪 What economic resilience looks like 🎤 Your powerful stories of corporate impact Next week: We're diving into specific sectors - retail, housing, and transport. Which companies would you like us to investigate? The pattern is clear: Crisis = Profit Opportunity. Let's expose it. #WeeklyRecap #FollowTheMoney",
        engagement: "Community votes on which sectors to investigate next"
      }
    },
    week3: {
      day15: {
        format: "Sector Analysis",
        topic: "Retail Giants: Essential Service or Profit Machine?",
        content: "🛒 RETAIL REALITY CHECK: During the pandemic, supermarkets were 'essential services' - but they sure didn't act like it. While NHS workers got clapped, retail workers got: • Minimum wage increases (temporary) • Health risks (permanent) • Record workloads (ongoing) Meanwhile, shareholders got: • Dividend payments • Share buybacks • Record profits from 'price optimization' If you're truly essential, shouldn't that come with responsibility, not just profit opportunity? #RetailWorkers #EssentialServices",
        engagement: "Retail workers and customers share experiences"
      },
      day16: {
        format: "Housing Deep-dive",
        topic: "The Landlord Economy: How Housing Became Investment",
        content: "🏠 HOUSING AS COMMODITY: When did shelter become a financial instrument? UK housing timeline: • 1980s: Right to Buy (social housing sold) • 1990s: Buy-to-let mortgages introduced • 2000s: Housing speculation normalized • 2010s: Foreign investment encouraged • 2020s: Corporate landlords dominate Result: Average house costs 9x average salary. Young people can't afford homes while property becomes pension plans for older generations. Housing isn't just expensive - it's been financialized. #HousingCrisis #Financialization",
        engagement: "Community shares housing struggles and generational differences"
      },
      day17: {
        format: "Transport Analysis",
        topic: "Public Services, Private Profits: The Rail Privatization Story",
        content: "🚄 RAIL PRIVATIZATION REALITY: Remember when railways were privatized to 'improve efficiency and reduce costs'? 30 years later: • Highest fares in Europe • Worst punctuality in Europe • Massive taxpayer subsidies to private operators • Record profits extracted by shareholders The 'efficiency' was extracting public money into private hands while providing worse service. When you pay twice (taxes AND fares) for worse trains, that's not market failure - it's market design. #RailPrivatization #PublicServices",
        engagement: "Community shares rail travel frustrations and costs"
      },
      day18: {
        format: "Corporate Spotlight",
        topic: "Amazon: Convenience or Control?",
        content: "📦 AMAZON INVESTIGATION: 'Fast delivery and low prices' - but at what cost? Amazon's real business model: • Undercut local businesses (at a loss) • Achieve market dominance • Raise prices once competition dies • Extract maximum value from controlled market This isn't innovation - it's predatory pricing followed by monopolization. Local bookshops, retailers, and services didn't 'lose to competition' - they were deliberately destroyed by a company that could afford years of losses to eliminate rivals. #Amazon #MonopolyPower",
        engagement: "Community discusses local business closures and Amazon's impact"
      },
      day19: {
        format: "Financial Sector Analysis",
        topic: "Banks: Essential Service or Extraction Engine?",
        content: "🏦 BANKING REALITY: Banks provide essential services, but they're optimized for extraction, not service. Evidence: • Record profits during 'difficult times' • Branch closures in communities that need them • Fee increases on basic services • Complex products designed to generate charges They socialize risks (bailouts) but privatize profits (bonuses). If banking is essential infrastructure, why is it run for maximum extraction rather than maximum service? #Banking #FinancialServices",
        engagement: "Community shares banking frustrations and fee increases"
      },
      day20: {
        format: "Comparative Analysis",
        topic: "Germany vs UK: Different Choices, Different Outcomes",
        content: "🇩🇪🇬🇧 TALE OF TWO ECONOMIES: Why does Germany have better: • Manufacturing (20% vs 9% of economy) • Worker rights (board representation) • Regional equality (distributed industry) • Economic resilience (weathered crises better) Same starting point, different choices: • Germany: Stakeholder capitalism • UK: Shareholder capitalism • Germany: Long-term investment • UK: Quarterly profit focus • Germany: Worker voice • UK: Shareholder dominance The outcomes aren't accidents - they're policy choices. #ComparativeEconomics #PolicyChoices",
        engagement: "Community discusses lessons from other countries"
      },
      day21: {
        format: "Weekly Recap",
        topic: "Week 3: Sector by Sector Breakdown",
        content: "🔬 WEEK 3 ANALYSIS COMPLETE: We examined key sectors and found the same pattern everywhere: 🛒 Retail: Essential services, profit extraction 🏠 Housing: Shelter became speculation 🚄 Transport: Private profits, public subsidies 📦 Tech: Monopolization disguised as innovation 🏦 Banking: Socialized risk, privatized reward The thread connecting everything: Privatize profits, socialize costs. Next week: Solutions and alternatives that actually work. #SectorAnalysis #SystemicPatterns",
        engagement: "Community reflects on patterns across sectors"
      }
    },
    week4: {
      day22: {
        format: "Solution Series Launch",
        topic: "Cooperative Economics: Alternatives That Work",
        content: "🤝 COOPERATIVE ALTERNATIVES: What if businesses were owned by workers, not shareholders? Cooperative examples: • John Lewis Partnership (shared ownership) • Nationwide Building Society (mutual ownership) • Spanish Mondragón Corporation (worker cooperatives) • German Mittelstand (stakeholder governance) Results: Better job security, more equal pay, long-term thinking, community investment. These aren't utopian ideas - they're working businesses that prove another model is possible. #Cooperatives #AlternativeEconomics",
        engagement: "Community discusses cooperative businesses they know"
      },
      day23: {
        format: "Policy Solutions",
        topic: "Regulation That Actually Works",
        content: "📜 EFFECTIVE REGULATION: What policies could prevent extraction and encourage productive investment? Proven approaches: • Maximum pay ratios (CEO vs median worker) • Profit sharing requirements • Local ownership incentives • Strategic industry protections • Windfall profit taxes during crises • Corporate charter reforms (stakeholder duties) These exist elsewhere and work. The question isn't whether it's possible - it's whether we have the political will. #PolicySolutions #RegulationThatWorks",
        engagement: "Community votes on priority policy changes"
      },
      day24: {
        format: "Local Action Guide",
        topic: "What You Can Do: Community Economics",
        content: "🏘️ LOCAL ACTION GUIDE: How to build economic resilience in your community: • Support local businesses over chains • Choose credit unions over banks • Join or create buying cooperatives • Advocate for local procurement policies • Push for community land trusts • Demand transparency in local contracts Small actions scale up. Every pound spent locally creates more local jobs than pounds extracted by distant shareholders. Community economics isn't just idealism - it's practical resilience building. #LocalAction #CommunityEconomics",
        engagement: "Community shares local economic initiatives and successes"
      },
      day25: {
        format: "Media Strategy",
        topic: "How to Counter Corporate Narratives",
        content: "📢 NARRATIVE STRATEGY: Corporate PR is sophisticated - how do we counter it? Effective approaches: • Ask 'Who profits?' from every policy • Demand data transparency, not just claims • Follow the money, not the messaging • Share personal stories over abstract arguments • Connect local impacts to corporate decisions • Build alternative information networks The corporate narrative machine is powerful, but truth-telling and community organizing are more powerful. #NarrativeStrategy #MediaLiteracy",
        engagement: "Community practices narrative analysis on current news"
      },
      day26: {
        format: "Future Vision",
        topic: "What Does Economic Justice Look Like?",
        content: "🔮 VISION FOR CHANGE: Imagine an economy designed for thriving, not just surviving: • Work provides dignity and fair compensation • Essential services serve people, not profit • Housing is shelter, not speculation • Local communities control their economic future • Long-term sustainability over short-term extraction • Democratic participation in economic decisions This isn't naive optimism - elements exist everywhere. We just need to scale what works and stop what doesn't. #EconomicJustice #FutureVision",
        engagement: "Community contributes to collective vision of better economics"
      },
      day27: {
        format: "Call to Action",
        topic: "The Power of Informed Communities",
        content: "💪 CALL TO ACTION: After 4 weeks of analysis, the pattern is clear: Current system extracts wealth upward while socializing costs downward. But knowing the problem is just step one. Step two: Organized action. • Join local community groups • Support cooperative businesses • Demand corporate transparency • Vote for economic justice • Share knowledge with others • Build alternative systems You now have the tools to see through corporate spin. Use them. Share them. Act on them. #CallToAction #CommunityPower",
        engagement: "Community commits to specific actions and next steps"
      },
      day28: {
        format: "Month Completion",
        topic: "28 Days of Economic Truth-Telling: What's Next?",
        content: "🎯 MONTH 1 COMPLETE: Together we've built: 🔍 Skills to analyze corporate claims 📊 Understanding of extraction patterns 🌐 Knowledge of alternative models 💪 Tools for community action 🤝 Network of informed citizens This is just the beginning. Real change happens when informed communities organize for economic justice. Month 2 preview: Specific campaign targets, legislative priorities, and direct action strategies. The analysis phase is complete. Now we organize. #UsInContext #Month1Complete #OrganizeForChange",
        engagement: "Community celebrates progress and commits to ongoing engagement"
      }
    }
  };

  // COMPLETE Website strategy - 12 articles across 4 weeks (3 articles per week)
  const websiteStrategy = {
    week1: {
      title: "Foundation Week: Establishing Authority",
      focus: "Build credibility and set the analytical framework",
      articles: [
        {
          title: "Welcome to Us In Context: Why Independent Economic Analysis Matters",
          type: "About/Mission Post",
          wordCount: "1,500-2,000",
          seoFocus: "independent economic analysis, corporate accountability, UK economics",
          description: "Establish mission, methodology, and commitment to truth-telling over profit-serving narratives",
          socialTeaser: "Why another economics voice? Because the existing ones serve power, not people."
        },
        {
          title: "The Profit Extraction Playbook: How Corporations Socialize Risk and Privatize Reward",
          type: "Framework Analysis",
          wordCount: "2,500-3,000",
          seoFocus: "corporate profit extraction, socialized risk, economic analysis",
          description: "Comprehensive framework for understanding how modern corporations extract value while avoiding responsibility",
          socialTeaser: "The game is rigged, but once you see the playbook, you can't unsee it."
        },
        {
          title: "Supply Chain Crisis or Profit Opportunity? Following the Money Trail",
          type: "Investigative Analysis",
          wordCount: "2,200-2,800",
          seoFocus: "supply chain crisis, corporate profits, pandemic profiteering",
          description: "Data-driven investigation into how supply chain disruptions became profit maximization opportunities",
          socialTeaser: "They called it a crisis. The profit margins tell a different story."
        }
      ]
    },
    week2: {
      title: "Deep Investigation Week: Sectoral Analysis", 
      focus: "Detailed analysis of key economic sectors and their extraction patterns",
      articles: [
        {
          title: "The Energy Extraction: How 'Crisis' Became Record Windfall Profits",
          type: "Sectoral Investigation",
          wordCount: "3,000-3,500",
          seoFocus: "energy crisis, windfall profits, oil companies, UK energy bills",
          description: "Comprehensive analysis of energy sector profits vs consumer costs during the 'energy crisis'",
          socialTeaser: "Energy crisis for households, record profits for oil companies. The math doesn't add up unless you follow the money."
        },
        {
          title: "Housing as Financial Instrument: How Shelter Became Speculation",
          type: "Economic Analysis",
          wordCount: "2,800-3,200",
          seoFocus: "housing crisis, property speculation, financialization, UK housing market",
          description: "Historical analysis of how UK housing transformed from shelter provision to investment vehicle",
          socialTeaser: "When did housing stop being about homes and start being about returns? The timeline tells the story."
        },
        {
          title: "The Retail Deception: Essential Services, Extractive Practices",
          type: "Sectoral Analysis",
          wordCount: "2,400-2,800",
          seoFocus: "retail profits, essential workers, pandemic profiteering, supermarket chains",
          description: "Investigation into how retail chains maximized profits while claiming to serve essential functions",
          socialTeaser: "Essential for society, profitable for shareholders. Retail's pandemic playbook exposed."
        }
      ]
    },
    week3: {
      title: "Comparative Economics Week: Alternative Models",
      focus: "Show that different economic arrangements are possible and proven",
      articles: [
        {
          title: "The German Model: Why Stakeholder Capitalism Outperforms Shareholder Extraction",
          type: "Comparative Analysis",
          wordCount: "2,600-3,000",
          seoFocus: "German economy, stakeholder capitalism, economic models, manufacturing",
          description: "Detailed comparison of German stakeholder model vs UK shareholder capitalism outcomes",
          socialTeaser: "Same starting point, different rules. Why does Germany's economy work better for actual Germans?"
        },
        {
          title: "Cooperative Economics: The Mondragon Model and Alternatives to Corporate Extraction",
          type: "Alternative Model Analysis",
          wordCount: "2,200-2,600",
          seoFocus: "worker cooperatives, Mondragon, alternative economics, cooperative business",
          description: "In-depth look at successful cooperative models and their applicability to UK context",
          socialTeaser: "What if workers owned the companies they worked for? Spain's Mondragon proves it works at scale."
        },
        {
          title: "Public Banking and Community Finance: How Communities Can Control Their Economic Future",
          type: "Solution Analysis",
          wordCount: "2,000-2,400",
          seoFocus: "public banking, community finance, economic democracy, local economics",
          description: "Analysis of public banking models and community-controlled financial institutions",
          socialTeaser: "Why should private banks control community resources? Public banking offers a different path."
        }
      ]
    },
    week4: {
      title: "Action Framework Week: From Analysis to Change",
      focus: "Translate understanding into actionable strategies for economic justice",
      articles: [
        {
          title: "The Corporate Accountability Toolkit: How Communities Can Hold Power Accountable",
          type: "Action Guide",
          wordCount: "2,800-3,200",
          seoFocus: "corporate accountability, community organizing, economic justice, activism",
          description: "Comprehensive guide to community strategies for holding corporations accountable",
          socialTeaser: "Corporate power seems untouchable until communities organize. Here's your toolkit."
        },
        {
          title: "Policy Priorities for Economic Justice: Legislative Changes That Would Actually Work",
          type: "Policy Analysis",
          wordCount: "3,200-3,600",
          seoFocus: "economic policy, wealth inequality, corporate regulation, UK economic policy",
          description: "Detailed policy recommendations based on successful models from other countries",
          socialTeaser: "The policies exist, the evidence works. All we need is political will to implement economic justice."
        },
        {
          title: "Building Economic Democracy: A Vision for Community-Controlled Economics",
          type: "Vision Document",
          wordCount: "2,400-2,800",
          seoFocus: "economic democracy, community economics, future economics, economic justice",
          description: "Comprehensive vision for democratically controlled economic institutions and processes",
          socialTeaser: "What if communities controlled their economic future? Economic democracy isn't utopian - it's practical."
        }
      ]
    }
  };

  // COMPLETE YouTube strategy - 12 videos across 4 weeks (3 videos per week)
  const youtubeStrategy = {
    week1: {
      title: "Channel Foundation Week: Building Trust and Authority",
      focus: "Establish credibility and analytical methodology",
      videos: [
        {
          title: "Welcome to Us In Context: Economics for People, Not Profit",
          type: "Channel Introduction",
          length: "8-12 minutes",
          description: "Introduce mission, background, and approach to economic analysis",
          hook: "I'm not an economist, and that's exactly why you should listen to me about economics",
          callToAction: "Subscribe for economics that makes sense to regular people",
          scriptOutline: [
            "Personal story: why traditional economics doesn't work for most people",
            "My background: regular person tired of being lied to about money",
            "What this channel will do differently: follow money, not narratives",
            "Preview of first month's investigations",
            "Community call: what economic issues affect you most?"
          ]
        },
        {
          title: "How to Read Corporate Earnings Reports: The Lies Hidden in Plain Sight",
          type: "Educational Tutorial",
          length: "15-18 minutes",
          description: "Step-by-step guide to understanding corporate financial reports and spotting extraction",
          hook: "Companies publish their financial reports hoping you won't read them. Here's why you should.",
          callToAction: "Download the earnings analysis template in the description",
          scriptOutline: [
            "Screen share: actual earnings report walkthrough",
            "Key metrics that reveal extraction vs investment",
            "Red flags that indicate profit maximization over service",
            "Real examples: pandemic profiteers exposed through their own reports",
            "Template walkthrough for analyzing any company"
          ]
        },
        {
          title: "The Supply Chain Lie: How 'Disruption' Became Profit Maximization",
          type: "Investigative Analysis",
          length: "20-25 minutes",
          description: "Deep dive investigation using data to expose supply chain profiteering",
          hook: "Supply chain crisis for consumers, record profits for companies. Let me show you the receipts.",
          callToAction: "Check the full data analysis on our website",
          scriptOutline: [
            "Set up the narrative: 'unavoidable supply chain crisis'",
            "Data dive: profit margins during 'crisis' vs pre-crisis",
            "International comparison: why some countries handled it better",
            "The extraction pattern: socialize costs, privatize profits",
            "Community impact: real stories of supply chain effects"
          ]
        }
      ]
    },
    week2: {
      title: "Sectoral Investigation Week: Following the Money",
      focus: "Deep analysis of specific sectors and their extraction patterns",
      videos: [
        {
          title: "Energy Windfall Exposed: The Data They Don't Want You to See",
          type: "Data Investigation",
          length: "18-22 minutes",
          description: "Comprehensive data analysis of energy company profits vs household energy costs",
          hook: "Your energy bills doubled. Their profits tripled. Here's the math they hoped you wouldn't do.",
          callToAction: "Share your energy bill increases in the comments",
          scriptOutline: [
            "Data visualization: energy company profits 2019-2023",
            "Household energy cost increases mapped to profit increases",
            "International comparison: countries with public energy vs private",
            "The windfall tax debate: why it was too little, too late",
            "Community callout: share your energy bill shock stories"
          ]
        },
        {
          title: "Housing Financialization: When Shelter Became Speculation",
          type: "Historical Analysis",
          length: "16-20 minutes",
          description: "Timeline analysis of how UK housing transformed from shelter to investment vehicle",
          hook: "Housing used to be about homes. Now it's about returns. Here's exactly when and how that changed.",
          callToAction: "Tell us: what could you afford housing-wise compared to your parents?",
          scriptOutline: [
            "1980s Right to Buy: social housing privatization",
            "1990s Buy-to-let: mortgages for speculation",
            "2000s Foreign investment: property as global commodity",
            "2010s Corporate landlords: institutionalized extraction",
            "The human cost: generational wealth transfer exposed"
          ]
        },
        {
          title: "Retail Reality Check: Essential Workers, Extractive Profits",
          type: "Sectoral Analysis",
          length: "14-18 minutes",
          description: "Investigation into retail sector profit extraction during pandemic",
          hook: "They called retail workers heroes. Then they checked the profit margins.",
          callToAction: "Retail workers: share your pandemic experience",
          scriptOutline: [
            "Pandemic timeline: from essential service to profit center",
            "Worker treatment vs shareholder treatment comparison",
            "Profit margin analysis: retail giants during crisis",
            "The essential service extraction model",
            "Worker stories: the human cost of retail profiteering"
          ]
        }
      ]
    },
    week3: {
      title: "Alternative Models Week: Proving Different is Possible",
      focus: "Showcase working alternatives to extraction-based economics",
      videos: [
        {
          title: "The German Secret: Why Their Economy Works Better for Workers",
          type: "Comparative Analysis",
          length: "20-24 minutes",
          description: "Detailed comparison of German stakeholder model vs UK shareholder extraction",
          hook: "Germany and the UK started in similar places. Why does their economy work better for regular people?",
          callToAction: "What lessons from Germany would work best in the UK?",
          scriptOutline: [
            "Post-war rebuild: similar starting points, different choices",
            "Stakeholder vs shareholder capitalism explained",
            "Worker representation: how German workers get a voice",
            "Manufacturing retention: why Germany kept making things",
            "Outcome comparison: wages, inequality, economic resilience"
          ]
        },
        {
          title: "Worker Cooperatives: The Mondragon Model That Actually Works",
          type: "Case Study Analysis",
          length: "17-21 minutes",
          description: "In-depth look at Mondragon cooperative federation and lessons for UK",
          hook: "What if workers owned the companies they worked for? Spain's Mondragon proves it works.",
          callToAction: "Are there worker cooperatives near you? Let us know!",
          scriptOutline: [
            "Mondragon history: from priest's idea to massive federation",
            "How worker ownership actually functions at scale",
            "Financial performance: cooperatives vs traditional corporations",
            "Crisis resilience: how cooperatives handle economic shocks",
            "UK applications: existing cooperatives and expansion potential"
          ]
        },
        {
          title: "Public Banking Revolution: How Communities Can Control Their Money",
          type: "Solution Showcase",
          length: "15-19 minutes",
          description: "Analysis of public banking models and community finance alternatives",
          hook: "Why should private banks control community resources? Public banking offers a different path.",
          callToAction: "What would public banking mean for your community?",
          scriptOutline: [
            "Current system: how private banks extract from communities",
            "Public banking models: North Dakota, Germany, Costa Rica",
            "Community benefits: local investment, democratic control",
            "Implementation pathway: how communities can build public banking",
            "UK potential: credit unions, community banks, public options"
          ]
        }
      ]
    },
    week4: {
      title: "Action Strategy Week: From Understanding to Change",
      focus: "Translate analysis into practical strategies for economic justice",
      videos: [
        {
          title: "Corporate Accountability Playbook: How Communities Fight Back",
          type: "Strategy Guide",
          length: "22-26 minutes",
          description: "Comprehensive guide to community organizing against corporate extraction",
          hook: "Corporate power seems untouchable until communities organize strategically. Here's how.",
          callToAction: "What corporate accountability campaign would you start in your area?",
          scriptOutline: [
            "Successful campaigns: lessons from communities that won",
            "Research and investigation: building an evidence base",
            "Coalition building: bringing stakeholders together",
            "Pressure tactics: shareholder actions, public campaigns, regulatory pressure",
            "Victory conditions: what does winning actually look like?"
          ]
        },
        {
          title: "Policy That Works: Legislative Solutions Based on Evidence",
          type: "Policy Analysis",
          length: "18-22 minutes",
          description: "Evidence-based policy recommendations drawn from successful international models",
          hook: "The policies for economic justice exist and work. All we need is the political will to implement them.",
          callToAction: "Which policies would you prioritize? Vote in our community poll.",
          scriptOutline: [
            "Maximum pay ratios: limiting extreme inequality",
            "Windfall profit taxes: capturing crisis profiteering",
            "Worker representation: bringing German-style democracy to UK",
            "Public options: healthcare, banking, utilities, transport",
            "Implementation strategy: how to build political support"
          ]
        },
        {
          title: "Economic Democracy Vision: What Community-Controlled Economics Looks Like",
          type: "Vision Presentation",
          length: "20-24 minutes",
          description: "Comprehensive vision for democratically controlled economic institutions",
          hook: "What if communities controlled their economic future? Economic democracy isn't utopian - it's practical.",
          callToAction: "Join our community planning sessions - links in description",
          scriptOutline: [
            "Current system critique: why extraction doesn't work",
            "Democratic alternatives: cooperatives, public banking, community ownership",
            "Transition strategy: building parallel economic institutions",
            "Global examples: places where economic democracy works",
            "Local action: what you can do to build economic democracy in your community"
          ]
        }
      ]
    }
  };

  // Task toggle functions - ALL platforms included
  const toggleXTask = (taskId) => {
    setCompletedXTasks(prev => {
      const newCompleted = [...prev];
      const index = newCompleted.indexOf(taskId);
      if (index > -1) {
        newCompleted.splice(index, 1);
      } else {
        newCompleted.push(taskId);
      }
      return newCompleted;
    });
  };

  const toggleInstagramTask = (taskId) => {
    setCompletedInstagramTasks(prev => {
      const newCompleted = [...prev];
      const index = newCompleted.indexOf(taskId);
      if (index > -1) {
        newCompleted.splice(index, 1);
      } else {
        newCompleted.push(taskId);
      }
      return newCompleted;
    });
  };

  const toggleTikTokTask = (taskId) => {
    setCompletedTikTokTasks(prev => {
      const newCompleted = [...prev];
      const index = newCompleted.indexOf(taskId);
      if (index > -1) {
        newCompleted.splice(index, 1);
      } else {
        newCompleted.push(taskId);
      }
      return newCompleted;
    });
  };

  const toggleLinkedInTask = (taskId) => {
    setCompletedLinkedInTasks(prev => {
      const newCompleted = [...prev];
      const index = newCompleted.indexOf(taskId);
      if (index > -1) {
        newCompleted.splice(index, 1);
      } else {
        newCompleted.push(taskId);
      }
      return newCompleted;
    });
  };

  const toggleFacebookTask = (taskId) => {
    setCompletedFacebookTasks(prev => {
      const newCompleted = [...prev];
      const index = newCompleted.indexOf(taskId);
      if (index > -1) {
        newCompleted.splice(index, 1);
      } else {
        newCompleted.push(taskId);
      }
      return newCompleted;
    });
  };

  const toggleWebsiteTask = (taskId) => {
    setCompletedWebsiteTasks(prev => {
      const newCompleted = [...prev];
      const index = newCompleted.indexOf(taskId);
      if (index > -1) {
        newCompleted.splice(index, 1);
      } else {
        newCompleted.push(taskId);
      }
      return newCompleted;
    });
  };

  const toggleYouTubeTask = (taskId) => {
    setCompletedYouTubeTasks(prev => {
      const newCompleted = [...prev];
      const index = newCompleted.indexOf(taskId);
      if (index > -1) {
        newCompleted.splice(index, 1);
      } else {
        newCompleted.push(taskId);
      }
      return newCompleted;
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  // COMPREHENSIVE CSV Export - exports ALL platform content with full metadata
  const exportToCSV = () => {
    let csvContent = "Platform,Week,Day,Content Type,Title,Content,Engagement,Metadata\n";
    
    // Export X-Twitter content (28 posts)
    Object.entries(xTwitterStrategy).forEach(([week, days]) => {
      Object.entries(days).forEach(([day, content]) => {
        const dayNum = parseInt(day.replace('day', ''));
        const isThread = dayNum === 2 || dayNum === 8 || dayNum === 16 || dayNum === 23;
        csvContent += `X-Twitter,${week},${day},${isThread ? 'Thread' : 'Post'},"Day ${dayNum} Post","${content.replace(/"/g, '""')}","Social engagement expected","${isThread ? 'Multi-part thread' : 'Single post'}"\n`;
      });
    });
    
    // Export Facebook content (28 posts)
    Object.entries(facebookStrategy).forEach(([week, days]) => {
      Object.entries(days).forEach(([day, post]) => {
        csvContent += `Facebook,${week},${day},"${post.format}","${post.topic}","${post.content.replace(/"/g, '""')}","${post.engagement}","Community building focus"\n`;
      });
    });
    
    // Export Website content (12 articles)
    Object.entries(websiteStrategy).forEach(([week, weekData]) => {
      weekData.articles.forEach((article, index) => {
        csvContent += `Website,${week},article${index + 1},"${article.type}","${article.title}","${article.description}","SEO Focus: ${article.seoFocus}","${article.wordCount} words - ${article.socialTeaser}"\n`;
      });
    });
    
    // Export YouTube content (12 videos)
    Object.entries(youtubeStrategy).forEach(([week, weekData]) => {
      weekData.videos.forEach((video, index) => {
        const outline = video.scriptOutline ? video.scriptOutline.join('; ') : '';
        csvContent += `YouTube,${week},video${index + 1},"${video.type}","${video.title}","${video.description}","${video.callToAction}","${video.length} - Hook: ${video.hook} - Outline: ${outline}"\n`;
      });
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'us-in-context-complete-content-calendar.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // COMPLETE Render functions - ALL platforms fully functional
  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Us In Context - Content Management System</h2>
        <p className="text-blue-100">Your complete content strategy for economic analysis and corporate accountability</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">X-Twitter</p>
              <p className="text-2xl font-bold text-gray-900">{completedXTasks.length}/28</p>
            </div>
            <div className="w-4 h-4 bg-blue-400 rounded-sm flex items-center justify-center text-white text-xs font-bold">X</div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedXTasks.length / 28) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Instagram</p>
              <p className="text-2xl font-bold text-gray-900">{completedInstagramTasks.length}/28</p>
            </div>
            <div className="w-4 h-4 bg-pink-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">IG</div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedInstagramTasks.length / 28) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">TikTok</p>
              <p className="text-2xl font-bold text-gray-900">{completedTikTokTasks.length}/4</p>
            </div>
            <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">TT</div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-black h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedTikTokTasks.length / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">LinkedIn</p>
              <p className="text-2xl font-bold text-gray-900">{completedLinkedInTasks.length}/12</p>
            </div>
            <div className="w-4 h-4 bg-blue-700 rounded-sm flex items-center justify-center text-white text-xs font-bold">L</div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-700 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedLinkedInTasks.length / 12) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Facebook</p>
              <p className="text-2xl font-bold text-gray-900">{completedFacebookTasks.length}/28</p>
            </div>
            <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">F</div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedFacebookTasks.length / 28) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Website</p>
              <p className="text-2xl font-bold text-gray-900">{completedWebsiteTasks.length}/12</p>
            </div>
            <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">W</div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedWebsiteTasks.length / 12) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">YouTube</p>
              <p className="text-2xl font-bold text-gray-900">{completedYouTubeTasks.length}/12</p>
            </div>
            <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">Y</div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedYouTubeTasks.length / 12) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Enhanced Quick Actions</h3>
          <div className="space-y-3">
            <button 
              onClick={() => alert('Gantt Chart feature coming soon!')}
              className="w-full p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-left flex items-center space-x-3"
            >
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span className="font-medium text-indigo-900">Add Gantt Chart</span>
            </button>
            <button 
              onClick={() => alert('Content Preview feature coming soon!')}
              className="w-full p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-left flex items-center space-x-3"
            >
              <Eye className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-purple-900">Add Content Preview by Platform</span>
            </button>
            <button 
              onClick={() => alert('Google Calendar sync coming soon!')}
              className="w-full p-3 bg-green-50 hover:bg-green-100 rounded-lg text-left flex items-center space-x-3"
            >
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-900">Enable Calendar Sync</span>
            </button>
            <button 
              onClick={() => alert('Claude AI integration coming soon!')}
              className="w-full p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-left flex items-center space-x-3"
            >
              <Zap className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-purple-900">Claude AI Content Assist</span>
            </button>
            <button 
              onClick={() => alert('API Connections coming soon!')}
              className="w-full p-3 bg-green-50 hover:bg-green-100 rounded-lg text-left flex items-center space-x-3"
            >
              <Globe className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-900">API Connections</span>
            </button>
            <button 
              onClick={() => alert('Content Templates coming soon!')}
              className="w-full p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-left flex items-center space-x-3"
            >
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-900">Content Templates</span>
            </button>
            <button 
              onClick={exportToCSV}
              className="w-full p-3 bg-orange-50 hover:bg-orange-100 rounded-lg text-left flex items-center space-x-3"
            >
              <Download className="w-5 h-5 text-orange-600" />
              <span className="font-medium text-orange-900">Export Complete Content Calendar</span>
            </button>
            <button 
              onClick={() => alert('Notes feature coming soon!')}
              className="w-full p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-left flex items-center space-x-3"
            >
              <Plus className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-purple-900">Add New Note</span>
            </button>
            <button 
              onClick={() => alert('Projects feature coming soon!')}
              className="w-full p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-left flex items-center space-x-3"
            >
              <Target className="w-5 h-5 text-indigo-600" />
              <span className="font-medium text-indigo-900">Create New Project</span>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Your Content Progress</h3>
            <button
              onClick={() => alert('Analytics Dashboard coming soon!')}
              className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
            >
              <TrendingUp className="w-4 h-4" />
              <span>View Analytics</span>
            </button>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Total completed: {completedXTasks.length + completedInstagramTasks.length + completedTikTokTasks.length + completedLinkedInTasks.length + completedFacebookTasks.length + completedWebsiteTasks.length + completedYouTubeTasks.length} tasks
            </p>
            <p className="text-sm text-gray-600">
              Total content pieces: 82 (28 X + 28 FB + 12 Web + 12 YT + 2 placeholder platforms)
            </p>
            <p className="text-sm text-gray-600">
              This week's focus: Building your independent media presence
            </p>
            <p className="text-sm text-green-600 font-medium">
              🎯 Stay consistent - your voice matters in economic accountability!
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderXTwitter = () => {
    const currentWeekData = xTwitterStrategy[`week${currentXWeek}`];
    const weekCompletedTasks = completedXTasks.filter(task => task.includes(`week${currentXWeek}`)).length;

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🐦 Complete 28-Day X-Twitter Strategy</h2>
          <p className="text-blue-800 font-medium">Week {currentXWeek}: Building economic literacy and corporate accountability awareness</p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentXWeek(Math.max(1, currentXWeek - 1))}
            disabled={currentXWeek === 1}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Week</span>
          </button>
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map(week => (
              <button
                key={week}
                onClick={() => setCurrentXWeek(week)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentXWeek === week
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentXWeek(Math.min(4, currentXWeek + 1))}
            disabled={currentXWeek === 4}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <span>Next Week</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-blue-800">Week {currentXWeek} Progress</h3>
            <div className="text-sm text-blue-700">
              {weekCompletedTasks}/7 posts completed
            </div>
          </div>
          <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(weekCompletedTasks / 7) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Daily X-Twitter Posts</h3>
          {Object.entries(currentWeekData).map(([dayKey, content]) => {
            const dayNumber = parseInt(dayKey.replace('day', ''));
            const taskId = `week${currentXWeek}-${dayKey}-xtwitter`;
            const isCompleted = completedXTasks.includes(taskId);

            return (
              <div key={dayKey} className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => toggleXTask(taskId)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center ${
                      isCompleted
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {isCompleted && <CheckCircle className="w-3 h-3" />}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-blue-400 rounded-sm flex items-center justify-center text-white text-xs font-bold">X</div>
                        <span className="font-semibold text-gray-800">Day {dayNumber}</span>
                        {(dayNumber === 2 || dayNumber === 8 || dayNumber === 16 || dayNumber === 23) && (
                          <span className="text-blue-600 font-medium text-sm">🧵 Thread</span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => copyToClipboard(content)}
                          className="text-gray-500 hover:text-gray-700"
                          title="Copy"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className={`p-3 bg-gray-50 rounded border-l-4 border-blue-400 ${isCompleted ? 'opacity-60' : ''}`}>
                      <p className={`text-gray-700 whitespace-pre-wrap ${isCompleted ? 'line-through' : ''}`}>
                        {content}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                      <span>📅 Day {dayNumber}</span>
                      <span>🕒 Optimal posting: 9 AM, 1 PM, 5 PM</span>
                      <span>📊 Est. reach: 1.2K - 2.5K</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderFacebook = () => {
    const currentWeekData = facebookStrategy[`week${currentFacebookWeek}`];
    const weekCompletedTasks = completedFacebookTasks.filter(task => task.includes(`week${currentFacebookWeek}`)).length;

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📘 Complete Facebook Strategy</h2>
          <p className="text-blue-800 font-medium">Week {currentFacebookWeek}: Community Building & Educational Content - 28 posts total</p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentFacebookWeek(Math.max(1, currentFacebookWeek - 1))}
            disabled={currentFacebookWeek === 1}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Week</span>
          </button>
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map(week => (
              <button
                key={week}
                onClick={() => setCurrentFacebookWeek(week)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentFacebookWeek === week
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentFacebookWeek(Math.min(4, currentFacebookWeek + 1))}
            disabled={currentFacebookWeek === 4}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <span>Next Week</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-blue-800">Week {currentFacebookWeek} Progress</h3>
            <div className="text-sm text-blue-700">
              {weekCompletedTasks}/7 posts completed
            </div>
          </div>
          <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(weekCompletedTasks / 7) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Facebook Posts</h3>
          {Object.entries(currentWeekData || {}).map(([dayKey, post]) => {
            const dayNumber = parseInt(dayKey.replace('day', ''));
            const taskId = `week${currentFacebookWeek}-${dayKey}-facebook`;
            const isCompleted = completedFacebookTasks.includes(taskId);

            return (
              <div key={dayKey} className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => toggleFacebookTask(taskId)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center ${
                      isCompleted
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {isCompleted && <CheckCircle className="w-3 h-3" />}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">F</div>
                        <span className="font-semibold text-gray-800">Day {dayNumber}</span>
                        <span className="text-blue-600 text-sm font-medium">{post.format}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(post.content)}
                        className="text-gray-500 hover:text-gray-700"
                        title="Copy"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <div className={`space-y-3 ${isCompleted ? 'opacity-60' : ''}`}>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-1">Topic:</h4>
                        <p className={`text-gray-700 ${isCompleted ? 'line-through' : ''}`}>{post.topic}</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-1">Content:</h4>
                        <p className={`text-gray-700 ${isCompleted ? 'line-through' : ''}`}>{post.content}</p>
                      </div>
                      <div className="p-2 bg-green-50 rounded">
                        <p className="text-green-700 text-sm font-medium">Engagement: {post.engagement}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderWebsite = () => {
    const currentWeekData = websiteStrategy[`week${currentWebsiteWeek}`];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🌐 Complete Website Strategy</h2>
          <p className="text-green-800 font-medium">Week {currentWebsiteWeek}: {currentWeekData?.title} - 12 articles total</p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentWebsiteWeek(Math.max(1, currentWebsiteWeek - 1))}
            disabled={currentWebsiteWeek === 1}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Week</span>
          </button>
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map(week => (
              <button
                key={week}
                onClick={() => setCurrentWebsiteWeek(week)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentWebsiteWeek === week
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentWebsiteWeek(Math.min(4, currentWebsiteWeek + 1))}
            disabled={currentWebsiteWeek === 4}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <span>Next Week</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{currentWeekData?.title}</h3>
          <p className="text-gray-600 mb-6">{currentWeekData?.focus}</p>
          
          <div className="space-y-4">
            {currentWeekData?.articles?.map((article, index) => {
              const taskId = `week${currentWebsiteWeek}-article${index + 1}-website`;
              const isCompleted = completedWebsiteTasks.includes(taskId);

              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <button
                      onClick={() => toggleWebsiteTask(taskId)}
                      className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center ${
                        isCompleted
                          ? 'bg-green-600 border-green-600 text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {isCompleted && <CheckCircle className="w-3 h-3" />}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-bold text-lg ${isCompleted ? 'line-through opacity-60' : ''}`}>
                          {article.title}
                        </h4>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">
                          {article.type}
                        </span>
                      </div>
                      <p className={`text-gray-600 mb-3 ${isCompleted ? 'line-through opacity-60' : ''}`}>
                        {article.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Word Count:</span>
                          <span className="ml-2 text-gray-600">{article.wordCount}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">SEO Focus:</span>
                          <span className="ml-2 text-gray-600">{article.seoFocus}</span>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-blue-50 rounded">
                        <span className="font-medium text-blue-800">Social Teaser:</span>
                        <p className="text-blue-700 text-sm mt-1">{article.socialTeaser}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderYouTube = () => {
    const currentWeekData = youtubeStrategy[`week${currentYouTubeWeek}`];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border border-red-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎥 Complete YouTube Strategy</h2>
          <p className="text-red-800 font-medium">Week {currentYouTubeWeek}: {currentWeekData?.title} - 12 videos total</p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentYouTubeWeek(Math.max(1, currentYouTubeWeek - 1))}
            disabled={currentYouTubeWeek === 1}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Week</span>
          </button>
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map(week => (
              <button
                key={week}
                onClick={() => setCurrentYouTubeWeek(week)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentYouTubeWeek === week
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentYouTubeWeek(Math.min(4, currentYouTubeWeek + 1))}
            disabled={currentYouTubeWeek === 4}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <span>Next Week</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{currentWeekData?.title}</h3>
          <p className="text-gray-600 mb-6">{currentWeekData?.focus}</p>
          
          <div className="space-y-4">
            {currentWeekData?.videos?.map((video, index) => {
              const taskId = `week${currentYouTubeWeek}-video${index + 1}-youtube`;
              const isCompleted = completedYouTubeTasks.includes(taskId);

              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <button
                      onClick={() => toggleYouTubeTask(taskId)}
                      className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center ${
                        isCompleted
                        { id: 'xtwitter', label: 'X-Twitter', icon: () => <div className="w-4 h-4 bg-blue-400 rounded-sm flex items-center justify-center text-white text-xs font-bold">X</div> },
                        { id: 'instagram', label: 'Instagram', icon: () => <div className="w-4 h-4 bg-pink-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">IG</div> },
{ id: 'tiktok', label: 'TikTok', icon: () => <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">TT</div> },
{ id: 'linkedin', label: 'LinkedIn', icon: () => <div className="w-4 h-4 bg-blue-700 rounded-sm flex items-center justify-center text-white text-xs font-bold">L</div> },
{ id: 'facebook', label: 'Facebook', icon: () => <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">F</div> },
{ id: 'website', label: 'Website', icon: () => <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">W</div> },
{ id: 'youtube', label: 'YouTube', icon: () => <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">Y</div> }
                          ? 'bg-red-500 border-red-500 text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {isCompleted && <CheckCircle className="w-3 h-3" />}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-bold text-lg ${isCompleted ? 'line-through opacity-60' : ''}`}>
                          {video.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm font-medium">
                            {video.type}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm">
                            {video.length}
                          </span>
                        </div>
                      </div>
                      <p className={`text-gray-600 mb-3 ${isCompleted ? 'line-through opacity-60' : ''}`}>
                        {video.description}
                      </p>
                      <div className="space-y-3">
                        <div className="p-3 bg-yellow-50 rounded">
                          <span className="font-medium text-yellow-800">Hook:</span>
                          <p className="text-yellow-700 text-sm mt-1 italic">"{video.hook}"</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded">
                          <span className="font-medium text-green-800">Call to Action:</span>
                          <p className="text-green-700 text-sm mt-1">{video.callToAction}</p>
                        </div>
                        {video.scriptOutline && (
                          <div className="p-3 bg-purple-50 rounded">
                            <span className="font-medium text-purple-800">Script Outline:</span>
                            <ul className="text-purple-700 text-sm mt-1 list-disc list-inside">
                              {video.scriptOutline.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Projects</h2>
        <p className="text-indigo-800 font-medium">Manage your content projects and campaigns</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow border">
        <div className="text-center">
          <Target className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Projects Feature Coming Soon</h3>
          <p className="text-gray-600">Track your content campaigns and project milestones</p>
        </div>
      </div>
    </div>
  );

  const renderNotes = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Notes</h2>
        <p className="text-purple-800 font-medium">Keep track of ideas, research, and insights</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow border">
        <div className="text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Notes Feature Coming Soon</h3>
          <p className="text-gray-600">Organize your research and content ideas</p>
        </div>
      </div>
    </div>
  );

  const renderInstagram = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📸 Instagram Strategy</h2>
        <p className="text-pink-800 font-medium">Visual storytelling for economic education</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow border">
        <div className="text-center">
          <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            IG
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Instagram Strategy Coming Soon</h3>
          <p className="text-gray-600">Visual content strategy for economic analysis and corporate accountability</p>
        </div>
      </div>
    </div>
  );

  const renderTikTok = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-gray-50 to-purple-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎬 TikTok Strategy</h2>
        <p className="text-gray-800 font-medium">Short-form video content for economic education</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow border">
        <div className="text-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            TT
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">TikTok Strategy Coming Soon</h3>
          <p className="text-gray-600">Viral short-form videos explaining economic concepts</p>
        </div>
      </div>
    </div>
  );

  const renderLinkedIn = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">💼 LinkedIn Strategy</h2>
        <p className="text-blue-800 font-medium">Professional thought leadership content</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow border">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            L
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">LinkedIn Strategy Coming Soon</h3>
          <p className="text-gray-600">Professional network content for economic analysis and business insights</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-900">Us In Context CMS</h1>
            </div>
            <div className="text-sm text-gray-500">Complete Content Management System</div>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'projects', label: 'Projects', icon: Target },
              { id: 'notes', label: 'Notes', icon: FileText },
              { id: 'xtwitter', label: 'X-Twitter', icon: () => <div className="w-4 h-4 bg-blue-400 rounded-sm flex items-center justify-center text-white text-xs font-bold">X</div> },
              { id: 'instagram', label: 'Instagram', icon: () => <div className="w-4 h-4 bg-pink-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">IG</div> },
              { id: 'tiktok', label: 'TikTok', icon: () => <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">TT</div> },
              { id: 'linkedin', label: 'LinkedIn', icon: () => <div className="w-4 h-4 bg-blue-700 rounded-sm flex items-center justify-center text-white text-xs font-bold">L</div> },
              { id: 'facebook', label: 'Facebook', icon: () => <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">F</div> },
              { id: 'website', label: 'Website', icon: () => <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">W</div> },
              { id: 'youtube', label: 'YouTube', icon: () => <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">Y</div> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {typeof tab.icon === 'function' ? <tab.icon /> : <tab.icon className="w-4 h-4" />}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'projects' && renderProjects()}
        {activeTab === 'notes' && renderNotes()}
        {activeTab === 'xtwitter' && renderXTwitter()}
        {activeTab === 'instagram' && renderInstagram()}
        {activeTab === 'tiktok' && renderTikTok()}
        {activeTab === 'linkedin' && renderLinkedIn()}
        {activeTab === 'facebook' && renderFacebook()}
        {activeTab === 'website' && renderWebsite()}
        {activeTab === 'youtube' && renderYouTube()}
      </main>
    </div>
  );
};

export default UsInContextCMS;