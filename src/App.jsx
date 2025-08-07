import React, { useState, useCallback, useEffect } from 'react';
import { 
  BarChart3, CheckCircle, ChevronLeft, ChevronRight, Copy, Download, Eye, 
  Zap, TrendingUp, Calendar 
} from 'lucide-react';

// Toast notification component
const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center space-x-2">
      <span>{message}</span>
      <button onClick={onClose} className="text-white hover:text-gray-300">
        &times;
      </button>
    </div>
  );
};

// Platform card component
const PlatformCard = ({ name, count, total, color, bgColor }) => (
  <div className="bg-white p-4 rounded-lg shadow border">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{name}</p>
        <p className="text-2xl font-bold text-gray-900">{count}/{total}</p>
      </div>
      <div className={`w-4 h-4 ${bgColor} rounded-sm flex items-center justify-center text-white text-xs font-bold`}>
        {color}
      </div>
    </div>
    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
      <div 
        className={`${bgColor} h-2 rounded-full transition-all duration-300`}
        style={{ width: `${(count / total) * 100}%` }}
      ></div>
    </div>
  </div>
);

const UsInContextCMS = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentXWeek, setCurrentXWeek] = useState(1);
  const [currentInstagramWeek, setCurrentInstagramWeek] = useState(1);
  const [currentLinkedInWeek, setCurrentLinkedInWeek] = useState(1);
  
  // Toast notification state
  const [toast, setToast] = useState({ message: '', isVisible: false });
  
  // Completion tracking
  const [completedXTasks, setCompletedXTasks] = useState([]);
  const [completedInstagramTasks, setCompletedInstagramTasks] = useState([]);
  const [completedTikTokTasks, setCompletedTikTokTasks] = useState([]);
  const [completedLinkedInTasks, setCompletedLinkedInTasks] = useState([]);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('usInContextProgress');
    if (savedProgress) {
      const { 
        completedXTasks: savedX, 
        completedInstagramTasks: savedIG, 
        completedTikTokTasks: savedTT, 
        completedLinkedInTasks: savedLI 
      } = JSON.parse(savedProgress);
      
      setCompletedXTasks(savedX || []);
      setCompletedInstagramTasks(savedIG || []);
      setCompletedTikTokTasks(savedTT || []);
      setCompletedLinkedInTasks(savedLI || []);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    const progress = {
      completedXTasks,
      completedInstagramTasks,
      completedTikTokTasks,
      completedLinkedInTasks
    };
    localStorage.setItem('usInContextProgress', JSON.stringify(progress));
  }, [completedXTasks, completedInstagramTasks, completedTikTokTasks, completedLinkedInTasks]);

    // Platform content state
  const [youtubeContent, setYoutubeContent] = useState({ ... });
  const [facebookContent, setFacebookContent] = useState({ ... });
  const [websiteContent, setWebsiteContent] = useState({ ... });
  const [linkedinContent, setLinkedinContent] = useState({ ... });

  const showToast = useCallback((message) => {
    setToast({ message, isVisible: true });
    setTimeout(() => setToast({ message: '', isVisible: false }), 3000);
  }, []);


  // Toggle functions
  const toggleXTask = useCallback((taskId) => {
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
  }, []);

  const toggleInstagramTask = useCallback((taskId) => {
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
  }, []);

  const toggleTikTokTask = useCallback((taskId) => {
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
  }, []);

  const toggleLinkedInTask = useCallback((taskId) => {
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
  }, []);

  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      showToast('Failed to copy to clipboard');
    }
  }, [showToast]);

  // 28-DAY X-TWITTER STRATEGY (28 posts)
  const xTwitterStrategy = {
    week1: {
      day1: "🌍 Just joined X! I'm behind @UsInContext - cutting through the noise on UK economics & corporate accountability. 🎯 Recent deep-dive: How corporate \"just-in-time\" obsession drove our inflation crisis📺 YouTube: @UsInContext 🌐 usincontext.com Ready to connect the dots? #UsInContext #UKEconomy",
      day2: "🧵 THREAD: Remember the UK fuel crisis? It wasn't just \"supply chain issues\" - it was corporate greed. Here's how CEO decisions created the chaos (and why it'll happen again)... 1/8 #CorporateGreed #UKFuelCrisis",
      day3: "🏭➡️💼 UK TRANSFORMATION: We went from making things to... serving things. Britain's shift from manufacturing to services isn't just history - it explains why we're vulnerable to every global shock. Here's what this means for your bills 👇 #UKEconomy #Manufacturing",
      day4: "🎯 CONTEXT CHECK: [Current economic headline] The headlines focus on [surface issue], but here's what's really happening... Pattern recognition is everything. #UsInContext",
      day5: "⚠️ PATTERN ALERT: Spot the cycle 1. Company prioritizes profits over resilience 2. Crisis hits (predictably) 3. \"Nobody could have seen this coming\" 4. Public pays the cost 5. CEO gets bonus 6. Repeat #CorporateAccountability",
      day6: "❓ QUESTION: What \"supply chain issue\" has affected you most? I bet if we dig into it, we'll find corporate cost-cutting at the root. Share your experiences below 👇 #SupplyChain",
      day7: "📝 WEEK 1 RECAP: We covered: 🏭 UK's economic transformation ⛽ Fuel crisis reality 🎯 Pattern recognition Next week: Inflation deep-dive #UsInContext #WeeklyRecap"
    },
    week2: {
      day8: "🧵 INFLATION THREAD: \"Prices are rising due to global pressures\" That's what they want you to think. Here's how corporate decisions drove UK inflation... 1/10 #Inflation #CorporateGreed",
      day9: "🔍 BEHIND THE SCENES: How I research corporate accountability Step 1: Read the press release Step 2: Check the financial reports Step 3: Look at what they're NOT saying Step 4: Find the human impact #MediaLiteracy #Research",
      day10: "Adding context to this 👇 This isn't \"market dynamics\" - it's deliberate corporate strategy. Pattern recognition is everything.",
      day11: "📚 ECONOMICS EXPLAINED: \"Market efficiency\" vs \"Social efficiency\" Companies choose market efficiency. Communities pay for the difference. #EconomicLiteracy",
      day12: "🎯 CONTEXT: [Current business news] This follows the exact pattern we've seen with [previous example] #UsInContext #PatternRecognition",
      day13: "💬 DISCUSSION: What would a \"resilient economy\" look like? My take: Local production, strategic reserves, long-term thinking over quarterly profits #ResilientEconomy",
      day14: "📊 WEEK 2 INSIGHTS: Inflation wasn't inevitable - it was engineered. Building a community that sees through the spin 💪 #UsInContext"
    },
    week3: {
      day15: "🔥 CONTROVERSIAL TAKE: \"Supply chain resilience\" and \"shareholder value\" are fundamentally incompatible. Agree/disagree? 👇",
      day16: "📈 DATA THREAD: UK economic transformation by numbers 1970: Manufacturing = 30% of GDP 2020: Manufacturing = 10% of GDP #UKEconomy #Data",
      day17: "🎯 QUICK POLL: What's the biggest lie about the UK economy? A) \"Service economy by choice\" B) \"Deindustrialization inevitable\" C) \"Supply chain unpredictable\" D) \"Market forces neutral\" 👇",
      day18: "📰 MEDIA WATCH: \"Company reports record profits amid challenging conditions\" Translation: \"Company exploited crisis for maximum extraction\" #MediaLiteracy",
      day19: "🎓 ECONOMICS 101: \"Externalities\" explained - costs companies ignore: community impact, environment, social disruption #EconomicLiteracy",
      day20: "📍 COMMUNITY IMPACT: Share your story - how have corporate decisions affected your area? #CommunityVoices #RealImpact",
      day21: "💡 WEEK 3 LEARNINGS: Data doesn't lie, \"market efficiency\" = community cost, building economic literacy 📚 #UsInContext"
    },
    week4: {
      day22: "🔮 PREDICTION: Next \"supply chain crisis\" will be... Based on corporate cost-cutting patterns Screenshot this 📸 #PredictableCrises",
      day23: "🧵 FRAMEWORK: How to hold corporations accountable 1. Follow the money 2. Check timeline 3. Look at patterns 4. Find human impact #CorporateAccountability",
      day24: "📋 CASE STUDY: [Recent corporate news] Let's apply the accountability framework: 💰 Who profits? ⏰ Timeline? 🔄 Pattern? 👥 Impact? #CaseStudy",
      day25: "❌ MYTH: \"The market will self-correct\" ✅ REALITY: Markets correct toward profit maximization, not social benefit #EconomicMyths",
      day26: "💡 SOLUTIONS: How communities can build resilience - Support local production, demand strategic reserves #CommunityResilience",
      day27: "🤔 QUESTION: What would you sacrifice for a more resilient economy? What trade-offs would you make? 👇",
      day28: "🎯 MONTH 1 COMPLETE: 28 days of economic truth-telling, pattern recognition skills, corporate accountability framework 💪 #UsInContext"
    }
  };

  // 28-DAY INSTAGRAM STRATEGY (28 posts)
  const instagramStrategy = {
    week1: {
      day1: {
        type: "Feed Post",
        format: "Carousel",
        content: "Welcome to Us In Context on Instagram! 📊 Swipe to see what we're about: 1) Independent economic analysis 2) Corporate accountability 3) Real impact on your life 4) Community-driven insights 5) Pattern recognition skills Ready to see through the noise? #UsInContext #EconomicTruth #IndependentMedia",
        visual: "Brand introduction carousel with mission highlights",
        hashtags: "#UsInContext #EconomicTruth #IndependentMedia #CorporateAccountability #UKEconomy",
        engagement: "Ask followers what economic issue confuses them most"
      },
      day2: {
        type: "Reel",
        format: "Educational",
        content: "POV: You're reading corporate earnings and notice something fishy 🤔 Record profits ✅ Higher prices ✅ \"Supply chain issues\" ✅ Executive bonuses ✅ Worker wage increases ❌ Make it make sense... #CorporateGreed #Inflation #EconomicReality",
        visual: "Split screen showing corporate claims vs reality",
        hashtags: "#CorporateGreed #Inflation #EconomicReality #MediaLiteracy #TruthTelling",
        engagement: "Comment your favorite corporate excuse"
      },
      day3: {
        type: "Story Series",
        format: "Educational",
        content: "UK Economic Transformation 📈 Story 1: 1970 - Manufacturing powerhouse Story 2: 1980s - Deindustrialization begins Story 3: 2000s - Service economy dominance Story 4: 2020s - Crisis vulnerability Story 5: Why this matters to YOU",
        visual: "Historical timeline with key stats and impacts",
        hashtags: "#UKEconomy #EconomicHistory #Manufacturing #ServiceEconomy",
        engagement: "Poll: Do you think UK should re-industrialize?"
      },
      day4: {
        type: "Feed Post",
        format: "Infographic",
        content: "PATTERN RECOGNITION 101 🧠 How to spot corporate BS in the news: 🚩 \"Unprecedented challenges\" 🚩 \"Supply chain issues\" (without specifics) 🚩 \"Global pressures\" 🚩 \"Market forces\" ✅ Check: Executive pay, profit margins, timeline Save this post for reference! #MediaLiteracy #CorporateBS #PatternRecognition",
        visual: "Clean infographic with red flags and green checks",
        hashtags: "#MediaLiteracy #CorporateBS #PatternRecognition #EconomicEducation #TruthTelling",
        engagement: "Share this with someone who needs to see it"
      },
      day5: {
        type: "Reel",
        format: "Trending Audio",
        content: "When corporations blame 'supply chain issues' but their profit margins went up 📈 *trending audio* Caption: Every. Single. Time. #SupplyChain #CorporateProfits #InflationTruth",
        visual: "Trending format with economic data overlay",
        hashtags: "#SupplyChain #CorporateProfits #InflationTruth #EconomicReality #Trending",
        engagement: "Duet with your own supply chain story"
      },
      day6: {
        type: "Feed Post",
        format: "Community Question",
        content: "COMMUNITY CHECK-IN 💬 What \"supply chain issue\" has hit you hardest? 🛒 Grocery prices? 🚗 Car repairs? 🏠 Housing costs? 📱 Electronics? ⛽ Fuel prices? Share your story below - I'm investigating the real causes behind each one. #CommunityVoices #SupplyChain #RealImpact",
        visual: "Community question template with cost categories",
        hashtags: "#CommunityVoices #SupplyChain #RealImpact #EconomicImpact #YourStory",
        engagement: "Respond to every comment with follow-up questions"
      },
      day7: {
        type: "Feed Post",
        format: "Weekly Recap",
        content: "WEEK 1 COMPLETE ✅ What we covered: 📊 Pattern recognition basics 🏭 UK economic transformation 🔍 Corporate excuse decoder 💬 Your supply chain stories This week: Inflation deep-dive 🧵 See you Monday! #WeeklyRecap #UsInContext #EconomicEducation",
        visual: "Weekly summary with key highlights and preview",
        hashtags: "#WeeklyRecap #UsInContext #EconomicEducation #WeeklyPreview #CommunityUpdate",
        engagement: "What topic should we dive deeper into next week?"
      }
    },
    week2: {
      day8: {
        type: "Reel",
        format: "Educational Breakdown",
        content: "INFLATION EXPLAINED 📈 What they say: \"Global supply pressures\" What the data shows: Corporate profit margins at record highs 📊 Swipe for the receipts #InflationTruth #CorporateProfits #EconomicReality",
        visual: "Data visualization showing profit margins vs inflation claims",
        hashtags: "#InflationTruth #CorporateProfits #EconomicReality #DataDriven #FactCheck",
        engagement: "Share your inflation story in comments"
      },
      day9: {
        type: "Feed Post",
        format: "Behind the Scenes",
        content: "RESEARCH PROCESS REVEAL 🔍 How I dig into corporate claims: 1️⃣ Read the press release 2️⃣ Find the financial reports 3️⃣ Check what they're NOT saying 4️⃣ Look for human impact 5️⃣ Connect the patterns Tools: Company filings, gov data, academic studies ☕ Lots of coffee",
        visual: "Behind-scenes workspace with research materials",
        hashtags: "#ResearchProcess #MediaLiteracy #BehindTheScenes #FactChecking #Methodology",
        engagement: "What should I investigate next?"
      },
      day10: {
        type: "Story Series",
        format: "Live Commentary",
        content: "LIVE: Adding context to today's business news 📰 Story 1: The headline Story 2: What they're saying Story 3: What they're NOT saying Story 4: The pattern Story 5: Why it matters to you",
        visual: "Real-time news analysis with context layers",
        hashtags: "#LiveCommentary #NewsAnalysis #Context #MediaLiteracy #RealTime",
        engagement: "React with 🔥 if you see the pattern"
      },
      day11: {
        type: "Feed Post",
        format: "Educational Carousel",
        content: "MARKET vs SOCIAL EFFICIENCY 🤔 Slide 1: What is market efficiency? Slide 2: What is social efficiency? Slide 3: Why they conflict Slide 4: Who pays the difference? Slide 5: Real examples Slide 6: What we can do Save this for reference! #EconomicLiteracy #MarketEfficiency #SocialCost",
        visual: "Educational carousel with clear comparisons",
        hashtags: "#EconomicLiteracy #MarketEfficiency #SocialCost #EconomicEducation #SystemicIssues",
        engagement: "Which efficiency do you prioritize and why?"
      },
      day12: {
        type: "Reel",
        format: "Pattern Spotting",
        content: "PATTERN SPOTTED 🎯 Today's news: [Current business story] The pattern: Same as [previous example] Every. Single. Time. Caption: Once you see it, you can't unsee it #PatternRecognition #MediaLiteracy #UsInContext",
        visual: "Side-by-side comparison showing recurring patterns",
        hashtags: "#PatternRecognition #MediaLiteracy #UsInContext #BusinessNews #Patterns",
        engagement: "Comment other examples of this pattern"
      },
      day13: {
        type: "Feed Post",
        format: "Discussion Starter",
        content: "RESILIENT ECONOMY DISCUSSION 💭 What would it look like? My vision: 🏭 Local production capacity 📦 Strategic reserves 🎯 Long-term thinking over quarterly profits 🤝 Community over shareholders 💪 Resilience over efficiency What's your vision? #ResilientEconomy #EconomicVision #Community",
        visual: "Vision board style layout with community focus",
        hashtags: "#ResilientEconomy #EconomicVision #Community #LocalProduction #LongTermThinking",
        engagement: "Build the vision together in comments"
      },
      day14: {
        type: "Feed Post",
        format: "Week Summary",
        content: "WEEK 2 INSIGHTS ⚡ Key learnings: 📈 Inflation = engineered extraction 🔍 Research reveals hidden truths 🎯 Patterns are everywhere 💪 Community builds understanding 🌱 Your awareness is growing This is just the beginning! #WeeklyInsights #UsInContext #CommunityGrowth",
        visual: "Insights summary with community growth metrics",
        hashtags: "#WeeklyInsights #UsInContext #CommunityGrowth #EconomicAwareness #KeepGoing",
        engagement: "What's your biggest takeaway this week?"
      }
    },
    week3: {
      day15: {
        type: "Reel",
        format: "Controversial Take",
        content: "HOT TAKE 🔥 \"Supply chain resilience\" and \"shareholder value\" are fundamentally incompatible. You can't maximize profits AND build resilience. Choose one. *controversial audio* #ControversialTake #SupplyChain #ShareholderValue",
        visual: "Bold text overlay with compelling visual metaphor",
        hashtags: "#ControversialTake #SupplyChain #ShareholderValue #SystemicIssues #TruthBomb",
        engagement: "Agree or disagree? Defend your position!"
      },
      day16: {
        type: "Feed Post",
        format: "Data Thread",
        content: "UK ECONOMIC TRANSFORMATION BY THE NUMBERS 📊 1970: Manufacturing = 30% of GDP 1990: Manufacturing = 22% of GDP 2010: Manufacturing = 12% of GDP 2020: Manufacturing = 10% of GDP The result? Vulnerability to every global shock. #UKEconomy #Data #Manufacturing #Deindustrialization",
        visual: "Clear data visualization showing decline over time",
        hashtags: "#UKEconomy #Data #Manufacturing #Deindustrialization #EconomicHistory",
        engagement: "Is this decline inevitable or by design?"
      },
      day17: {
        type: "Story Poll",
        format: "Interactive",
        content: "QUICK POLL: What's the biggest lie about the UK economy? A) \"Service economy by choice\" B) \"Deindustrialization inevitable\" C) \"Supply chains unpredictable\" D) \"Market forces neutral\" Vote and see results!",
        visual: "Interactive poll with clear options",
        hashtags: "#Poll #UKEconomy #EconomicMyths #Interactive #YourVoice",
        engagement: "Share results and discuss in DMs"
      },
      day18: {
        type: "Feed Post",
        format: "Translation Guide",
        content: "CORPORATE SPEAK DECODER 📰 What they say ➡️ What they mean \"Record profits amid challenging conditions\" ➡️ \"We exploited the crisis perfectly\" \"Supply chain pressures\" ➡️ \"We cut costs and got caught\" \"Market dynamics\" ➡️ \"We control the market\" Save this decoder! #CorporateSpeak #MediaLiteracy #Translation",
        visual: "Translation guide format with before/after",
        hashtags: "#CorporateSpeak #MediaLiteracy #Translation #TruthTelling #CorporateBS",
        engagement: "Add your own translations in comments"
      },
      day19: {
        type: "Reel",
        format: "Educational",
        content: "EXTERNALITIES EXPLAINED 💡 Definition: Costs companies ignore Examples: 🌍 Environmental damage 🏘️ Community disruption 💼 Social instability 📈 Mental health impacts Who pays? YOU do. #Externalities #EconomicLiteracy #TrueCost",
        visual: "Simple animation showing hidden costs",
        hashtags: "#Externalities #EconomicLiteracy #TrueCost #SocialCost #SystemicIssues",
        engagement: "What externalities do you see in your area?"
      },
      day20: {
        type: "Feed Post",
        format: "Community Stories",
        content: "COMMUNITY IMPACT SPOTLIGHT 📍 Your stories matter. This week's featured impact: [Community story from previous engagement] This is exactly why this work matters. Keep sharing your experiences! #CommunityImpact #RealStories #YourVoiceMatters #CommunitySpotlight",
        visual: "Community story highlight with respectful presentation",
        hashtags: "#CommunityImpact #RealStories #YourVoiceMatters #CommunitySpotlight #RealImpact",
        engagement: "More community stories welcome in comments"
      },
      day21: {
        type: "Feed Post",
        format: "Weekly Learning",
        content: "WEEK 3 LEARNINGS 📚 Truth uncovered: 📊 Data doesn't lie 💰 \"Market efficiency\" = community cost 🧠 Economic literacy is power 🗣️ Your voices matter 📈 Awareness is spreading The conversation is growing! #WeeklyLearnings #EconomicLiteracy #CommunityPower #DataTruth",
        visual: "Learning summary with empowering visuals",
        hashtags: "#WeeklyLearnings #EconomicLiteracy #CommunityPower #DataTruth #KeepLearning",
        engagement: "What's your most important learning this week?"
      }
    },
    week4: {
      day22: {
        type: "Reel",
        format: "Prediction",
        content: "PREDICTION TIME 🔮 Next \"supply chain crisis\" will be... [Based on current corporate cost-cutting patterns] Screenshot this. You'll thank me later. #Prediction #SupplyChain #PatternRecognition #Screenshot",
        visual: "Bold prediction format with supporting evidence",
        hashtags: "#Prediction #SupplyChain #PatternRecognition #Screenshot #FutureProof",
        engagement: "Screenshot and tag a friend who needs to see this"
      },
      day23: {
        type: "Feed Post",
        format: "Framework Guide",
        content: "CORPORATE ACCOUNTABILITY FRAMEWORK 📋 How to hold them accountable: 1️⃣ FOLLOW THE MONEY (Who profits?) 2️⃣ CHECK THE TIMELINE (Was this predictable?) 3️⃣ LOOK FOR PATTERNS (Have they done this before?) 4️⃣ FIND HUMAN IMPACT (Who really pays?) Save and use! #CorporateAccountability #Framework #HoldThemAccountable",
        visual: "Framework infographic with clear steps",
        hashtags: "#CorporateAccountability #Framework #HoldThemAccountable #Methodology #Tools",
        engagement: "Use this framework on today's news and share results"
      },
      day24: {
        type: "Story Series",
        format: "Live Case Study",
        content: "LIVE CASE STUDY 📋 Applying the accountability framework to [Recent corporate news] Story 1: The situation Story 2: Follow the money Story 3: Check the timeline Story 4: Find the pattern Story 5: Human impact Story 6: Accountability verdict",
        visual: "Real-time framework application",
        hashtags: "#LiveCaseStudy #CorporateAccountability #Framework #RealTime #Analysis",
        engagement: "Rate the accountability level 1-10"
      },
      day25: {
        type: "Reel",
        format: "Myth Busting",
        content: "MYTH BUSTED 💥 MYTH: \"The market will self-correct\" REALITY: Markets correct toward profit maximization, not social benefit. Every. Single. Time. #MythBusted #MarketMyths #EconomicReality #TruthTelling",
        visual: "Myth vs reality format with strong visuals",
        hashtags: "#MythBusted #MarketMyths #EconomicReality #TruthTelling #FactCheck",
        engagement: "What other economic myths should we bust?"
      },
      day26: {
        type: "Feed Post",
        format: "Solutions Focus",
        content: "COMMUNITY RESILIENCE SOLUTIONS 💪 How we can build back better: 🏭 Support local production 📦 Demand strategic reserves 🗳️ Vote for long-term thinking 🤝 Choose community over corporations 💡 Share knowledge and resources Small actions, big impact. #CommunityResilience #Solutions #LocalAction #CommunityPower",
        visual: "Solutions-focused infographic with actionable steps",
        hashtags: "#CommunityResilience #Solutions #LocalAction #CommunityPower #BuildBetter",
        engagement: "What solutions are you implementing in your area?"
      },
      day27: {
        type: "Feed Post",
        format: "Discussion",
        content: "TOUGH QUESTION 🤔 What would you sacrifice for a more resilient economy? 💰 Higher prices for local products? 📈 Slower growth for stability? ⏰ Longer delivery times for worker rights? 🏭 Less efficiency for more security? Real trade-offs require real conversations. #TradeOffs #ResilientEconomy #ToughQuestions #RealTalk",
        visual: "Thought-provoking layout with balanced presentation",
        hashtags: "#TradeOffs #ResilientEconomy #ToughQuestions #RealTalk #DifficultChoices",
        engagement: "Share your honest thoughts - what trade-offs would you make?"
      },
      day28: {
        type: "Feed Post",
        format: "Celebration",
        content: "MONTH 1 COMPLETE! 🎯 What we've built together: 📚 28 days of economic truth-telling 🧠 Pattern recognition skills 📋 Corporate accountability framework 💪 Growing community of aware citizens 🌱 Foundation for real change This is just the beginning! Thank you for being part of this journey. #Month1Complete #Community #EconomicAwareness #JustTheBeginning #ThankYou",
        visual: "Celebration graphic with community highlights",
        hashtags: "#Month1Complete #Community #EconomicAwareness #JustTheBeginning #ThankYou #UsInContext",
        engagement: "What's your biggest takeaway from this month? Share your transformation!"
      }
    }
  };

  // 4 TIKTOK VIDEOS
  const tikTokStrategy = {
    video1: {
      title: "Corporations Crashed the Economy",
      hook: "POV: You realize the economy didn't just break... it was broken ON PURPOSE",
      content: "The supply chain crisis? Just-in-time delivery was designed to fail. The housing crisis? Investment firms buying everything. The cost of living crisis? Record corporate profits. They didn't predict it. They PLANNED it.",
      format: "Fast-paced reveal",
      duration: "45-60 seconds",
      trending: "#corporategreedy #economycrisis #conspiracy #awakening",
      engagement: "Comment if you're seeing the pattern too"
    },
    video2: {
      title: "Decoding Corporate BS",
      hook: "Corporate translation guide you need to see",
      content: "\"Supply chain issues\" = We cut costs and got caught \"Market dynamics\" = We control the market \"Unprecedented challenges\" = We didn't plan (or did we?) \"Consumer demand\" = We created artificial scarcity Save this!",
      format: "Text overlay translations",
      duration: "30-45 seconds",
      trending: "#corporatebs #translation #mediaLiteracy #exposed",
      engagement: "Add your own translations in comments"
    },
    video3: {
      title: "Why Everything Costs More",
      hook: "The real reason your groceries cost 40% more",
      content: "2019: Company profit margin 5% 2024: Company profit margin 15% 2019: CEO pay ratio 250:1 2024: CEO pay ratio 400:1 2019: Worker wages +2% 2024: Worker wages +3% It's not inflation. It's extraction.",
      format: "Data visualization",
      duration: "35-50 seconds",
      trending: "#inflation #corporategreed #wagetheft #datatok",
      engagement: "Screenshot this and share it"
    },
    video4: {
      title: "Economic Myths Debunked",
      hook: "Myths they tell you about the economy",
      content: "MYTH: Free markets are efficient REALITY: They're efficient at extracting wealth MYTH: Competition lowers prices REALITY: Oligopolies raise them MYTH: Innovation comes from corporations REALITY: It comes from public research they privatize",
      format: "Myth vs reality reveals",
      duration: "50-60 seconds",
      trending: "#mythbusted #economicfacts #systemexposed #truthtok",
      engagement: "Which myth did you believe? No judgment!"
    }
  };

  // 12 LINKEDIN ARTICLES
  const linkedInStrategy = {
    week1: [
      {
        title: "From Just-In-Time to Just-Too-Late: How Efficiency Doctrine Created Systemic Fragility",
        type: "Thought Leadership",
        audience: "Business leaders, supply chain professionals",
        wordCount: "1200-1500",
        keyPoints: ["Just-in-time origins and benefits", "Hidden costs of efficiency", "Systemic fragility creation", "Alternative resilience models"],
        cta: "What's your experience with supply chain fragility? Share your insights.",
        engagement: "Tag supply chain leaders who need to see this"
      },
      {
        title: "The Hidden Cost of Shareholder Primacy: Why Short-Term Thinking Is Destroying Long-Term Value",
        type: "Business Analysis",
        audience: "C-suite executives, investors",
        wordCount: "1000-1200",
        keyPoints: ["Shareholder primacy history", "Quarterly pressure impacts", "Long-term value destruction", "Stakeholder capitalism alternatives"],
        cta: "How is your organization balancing short-term and long-term thinking?",
        engagement: "Share examples of long-term thinking in your industry"
      },
      {
        title: "5 Economic Patterns Every Business Leader Should Recognize in 2024",
        type: "Pattern Analysis",
        audience: "Business professionals, analysts",
        wordCount: "800-1000",
        keyPoints: ["Crisis capitalism patterns", "Consolidation trends", "Externality shifting", "Narrative control", "Resistance emergence"],
        cta: "Which patterns are you seeing in your industry?",
        engagement: "Comment with patterns you've observed"
      }
    ],
    week2: [
      {
        title: "Inflation Reality Check: How Corporate Price-Setting Power Reshaped the Economy",
        type: "Economic Analysis",
        audience: "Economists, policy makers, business analysts",
        wordCount: "1500-1800",
        keyPoints: ["Inflation causes analysis", "Corporate pricing power", "Market concentration effects", "Policy implications"],
        cta: "What solutions do you see for addressing corporate pricing power?",
        engagement: "Share this with policy professionals in your network"
      },
      {
        title: "Britain's Strategic Vulnerability: The Hidden Costs of Deindustrialization",
        type: "Strategic Analysis",
        audience: "Policy makers, strategic planners",
        wordCount: "1300-1600",
        keyPoints: ["Deindustrialization timeline", "Strategic implications", "Dependency creation", "Reindustrialization possibilities"],
        cta: "How can we rebuild strategic resilience in your sector?",
        engagement: "Tag someone working on industrial strategy"
      },
      {
        title: "The ROI of Resilience: Why Investing in Redundancy Pays Long-Term Dividends",
        type: "Business Case",
        audience: "CFOs, risk managers, strategic planners",
        wordCount: "1000-1200",
        keyPoints: ["Resilience vs efficiency trade-offs", "Hidden costs of fragility", "Resilience investment models", "ROI calculations"],
        cta: "What resilience investments is your organization making?",
        engagement: "Share examples of successful resilience investments"
      }
    ],
    week3: [
      {
        title: "Corporate Accountability in the Age of Extraction: A Framework for Stakeholder Capitalism",
        type: "Framework Development",
        audience: "Corporate governance professionals, ESG specialists",
        wordCount: "1400-1700",
        keyPoints: ["Current accountability gaps", "Stakeholder framework", "Measurement methodologies", "Implementation strategies"],
        cta: "How is your organization implementing stakeholder capitalism?",
        engagement: "Share your accountability framework experiences"
      },
      {
        title: "The Economics of Value Extraction: Understanding Modern Corporate Strategy",
        type: "Strategic Analysis",
        audience: "Business strategists, analysts",
        wordCount: "1200-1500",
        keyPoints: ["Value creation vs extraction", "Extraction mechanisms", "Systemic impacts", "Alternative strategies"],
        cta: "How do you distinguish value creation from extraction in your work?",
        engagement: "Comment with examples from your industry"
      },
      {
        title: "Building Anti-Fragile Supply Chains: Lessons from Systems Thinking",
        type: "Systems Analysis",
        audience: "Supply chain professionals, systems thinkers",
        wordCount: "1100-1400",
        keyPoints: ["Anti-fragility principles", "Supply chain redesign", "Redundancy strategies", "Local production benefits"],
        cta: "What anti-fragile principles are you implementing?",
        engagement: "Share your supply chain resilience strategies"
      }
    ],
    week4: [
      {
        title: "Predictive Crisis Analysis: Using Pattern Recognition for Strategic Planning",
        type: "Strategic Tool",
        audience: "Strategic planners, risk analysts",
        wordCount: "1000-1300",
        keyPoints: ["Crisis pattern identification", "Predictive methodologies", "Early warning systems", "Strategic responses"],
        cta: "What crisis patterns are you tracking in your planning?",
        engagement: "Share your predictive analysis tools"
      },
      {
        title: "Redefining Economic Success: Beyond GDP and Profit Maximization",
        type: "Vision Piece",
        audience: "Policy makers, thought leaders",
        wordCount: "1300-1600",
        keyPoints: ["Current metrics limitations", "Alternative success measures", "Wellbeing economics", "Implementation challenges"],
        cta: "What metrics should we use to measure real economic success?",
        engagement: "Tag economists and policy makers in your network"
      },
      {
        title: "The Business Case for Truth-Telling: Why Transparency Creates Competitive Advantage",
        type: "Business Strategy",
        audience: "Communications professionals, executives",
        wordCount: "900-1200",
        keyPoints: ["Trust as competitive advantage", "Transparency benefits", "Truth-telling strategies", "Stakeholder engagement"],
        cta: "How has transparency created value in your organization?",
        engagement: "Share examples of truth-telling in business"
      }
    ]
  };

  // RENDER FUNCTIONS
  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Us In Context - Content Management System</h2>
        <p className="text-blue-100">Your complete content strategy for economic analysis and corporate accountability</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <PlatformCard 
          name="X-Twitter" 
          count={completedXTasks.length} 
          total={28} 
          color="X" 
          bgColor="bg-blue-400" 
        />
        
        <PlatformCard 
          name="Instagram" 
          count={completedInstagramTasks.length} 
          total={28} 
          color="IG" 
          bgColor="bg-pink-500" 
        />
        
        <PlatformCard 
          name="TikTok" 
          count={completedTikTokTasks.length} 
          total={4} 
          color="TT" 
          bgColor="bg-black" 
        />
        
        <PlatformCard 
          name="LinkedIn" 
          count={completedLinkedInTasks.length} 
          total={12} 
          color="L" 
          bgColor="bg-blue-700" 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Enhanced Quick Actions</h3>
          <div className="space-y-3">
            <button 
              onClick={() => showToast('Gantt Chart feature coming soon!')}
              className="w-full p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-left flex items-center space-x-3"
              aria-label="Add Gantt Chart"
            >
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span className="font-medium text-indigo-900">Add Gantt Chart</span>
            </button>
            <button 
              onClick={() => showToast('Content Preview feature coming soon!')}
              className="w-full p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-left flex items-center space-x-3"
              aria-label="Add Content Preview by Platform"
            >
              <Eye className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-purple-900">Add Content Preview by Platform</span>
            </button>
            <button 
              onClick={() => showToast('Claude AI integration coming soon!')}
              className="w-full p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-left flex items-center space-x-3"
              aria-label="Claude AI Content Assist"
            >
              <Zap className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-purple-900">Claude AI Content Assist</span>
            </button>
            <button 
              onClick={() => showToast('Export feature coming soon!')}
              className="w-full p-3 bg-orange-50 hover:bg-orange-100 rounded-lg text-left flex items-center space-x-3"
              aria-label="Export Complete Content Calendar"
            >
              <Download className="w-5 h-5 text-orange-600" />
              <span className="font-medium text-orange-900">Export Complete Content Calendar</span>
            </button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Your Content Progress</h3>
            <button
              onClick={() => showToast('Analytics Dashboard coming soon!')}
              className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
              aria-label="View Analytics"
            >
              <TrendingUp className="w-4 h-4" />
              <span>View Analytics</span>
            </button>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Total completed: {completedXTasks.length + completedInstagramTasks.length + completedTikTokTasks.length + completedLinkedInTasks.length}/72 tasks
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
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🐦 28-Day X-Twitter Strategy</h2>
          <p className="text-blue-800 font-medium">Week {currentXWeek}: Economic Truth-Telling & Pattern Recognition</p>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentXWeek(Math.max(1, currentXWeek - 1))}
            disabled={currentXWeek === 1}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
            aria-label="Previous week"
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
                aria-label={`Week ${week}`}
                aria-current={currentXWeek === week ? 'page' : undefined}
              >
                Week {week}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentXWeek(Math.min(4, currentXWeek + 1))}
            disabled={currentXWeek === 4}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
            aria-label="Next week"
          >
            <span>Next Week</span>
            <ChevronRight className="w-4 h-4" />
          </button>
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
                    aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
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
                          title="Copy content"
                          aria-label="Copy content"
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

  const renderInstagram = () => {
    const currentWeekData = instagramStrategy[`week${currentInstagramWeek}`];
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📸 28-Day Instagram Strategy</h2>
          <p className="text-pink-800 font-medium">Week {currentInstagramWeek}: Visual Economic Education & Community Building</p>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentInstagramWeek(Math.max(1, currentInstagramWeek - 1))}
            disabled={currentInstagramWeek === 1}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
            aria-label="Previous week"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Week</span>
          </button>
          
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map(week => (
              <button
                key={week}
                onClick={() => setCurrentInstagramWeek(week)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentInstagramWeek === week
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                aria-label={`Week ${week}`}
                aria-current={currentInstagramWeek === week ? 'page' : undefined}
              >
                Week {week}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentInstagramWeek(Math.min(4, currentInstagramWeek + 1))}
            disabled={currentInstagramWeek === 4}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
            aria-label="Next week"
          >
            <span>Next Week</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Instagram Posts</h3>
          {Object.entries(currentWeekData || {}).map(([dayKey, post]) => {
            const dayNumber = parseInt(dayKey.replace('day', ''));
            const taskId = `week${currentInstagramWeek}-${dayKey}-instagram`;
            const isCompleted = completedInstagramTasks.includes(taskId);
            
            return (
              <div key={dayKey} className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => toggleInstagramTask(taskId)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center ${
                      isCompleted
                        ? 'bg-pink-500 border-pink-500 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
                  >
                    {isCompleted && <CheckCircle className="w-3 h-3" />}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-pink-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">IG</div>
                        <span className="font-semibold text-gray-800">Day {dayNumber}</span>
                        <span className="text-pink-600 text-sm font-medium">{post.type}</span>
                        <span className="text-purple-600 text-sm">{post.format}</span>
                      </div>
                      
                      <button
                        onClick={() => copyToClipboard(post.content)}
                        className="text-gray-500 hover:text-gray-700"
                        title="Copy content"
                        aria-label="Copy content"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className={`space-y-3 ${isCompleted ? 'opacity-60' : ''}`}>
                      <div className="p-3 bg-pink-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-1">Content:</h4>
                        <p className={`text-gray-700 ${isCompleted ? 'line-through' : ''}`}>{post.content}</p>
                      </div>
                      
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-1">Visual Description:</h4>
                        <p className={`text-gray-700 ${isCompleted ? 'line-through' : ''}`}>{post.visual}</p>
                      </div>
                      
                      <div className="p-2 bg-blue-50 rounded">
                        <p className="text-blue-700 text-sm"><strong>Hashtags:</strong> {post.hashtags}</p>
                      </div>
                      
                      <div className="p-2 bg-green-50 rounded">
                        <p className="text-green-700 text-sm font-medium"><strong>Engagement:</strong> {post.engagement}</p>
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

  const renderTikTok = () => {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎬 4 TikTok Videos Strategy</h2>
          <p className="text-gray-800 font-medium">Short-form viral content for economic education</p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">TikTok Videos</h3>
          {Object.entries(tikTokStrategy).map(([videoKey, video]) => {
            const taskId = `${videoKey}-tiktok`;
            const isCompleted = completedTikTokTasks.includes(taskId);
            
            return (
              <div key={videoKey} className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => toggleTikTokTask(taskId)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center ${
                      isCompleted
                        ? 'bg-black border-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
                  >
                    {isCompleted && <CheckCircle className="w-3 h-3" />}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">TT</div>
                        <h4 className={`font-bold text-lg ${isCompleted ? 'line-through opacity-60' : ''}`}>
                          {video.title}
                        </h4>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm font-medium">
                          {video.format}
                        </span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                    
                    <div className={`space-y-3 ${isCompleted ? 'opacity-60' : ''}`}>
                      <div className="p-3 bg-yellow-50 rounded">
                        <span className="font-medium text-yellow-800">Hook:</span>
                        <p className="text-yellow-700 text-sm mt-1 italic">"{video.hook}"</p>
                      </div>
                      
                      <div className="p-3 bg-gray-50 rounded">
                        <span className="font-medium text-gray-800">Content:</span>
                        <p className="text-gray-700 text-sm mt-1">{video.content}</p>
                      </div>
                      
                      <div className="p-2 bg-blue-50 rounded">
                        <p className="text-blue-700 text-sm"><strong>Trending:</strong> {video.trending}</p>
                      </div>
                      
                      <div className="p-2 bg-green-50 rounded">
                        <p className="text-green-700 text-sm font-medium"><strong>Engagement:</strong> {video.engagement}</p>
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

  const renderLinkedIn = () => {
    const currentWeekData = linkedInStrategy[`week${currentLinkedInWeek}`];
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💼 12 LinkedIn Articles Strategy</h2>
          <p className="text-blue-800 font-medium">Week {currentLinkedInWeek}: Professional Thought Leadership</p>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentLinkedInWeek(Math.max(1, currentLinkedInWeek - 1))}
            disabled={currentLinkedInWeek === 1}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
            aria-label="Previous week"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Week</span>
          </button>
          
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map(week => (
              <button
                key={week}
                onClick={() => setCurrentLinkedInWeek(week)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentLinkedInWeek === week
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                aria-label={`Week ${week}`}
                aria-current={currentLinkedInWeek === week ? 'page' : undefined}
              >
                Week {week}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentLinkedInWeek(Math.min(4, currentLinkedInWeek + 1))}
            disabled={currentLinkedInWeek === 4}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
            aria-label="Next week"
          >
            <span>Next Week</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">LinkedIn Articles</h3>
          {currentWeekData?.map((article, index) => {
            const taskId = `week${currentLinkedInWeek}-article${index + 1}-linkedin`;
            const isCompleted = completedLinkedInTasks.includes(taskId);
            
            return (
              <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => toggleLinkedInTask(taskId)}
                    className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center ${
                      isCompleted
                        ? 'bg-blue-700 border-blue-700 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
                  >
                    {isCompleted && <CheckCircle className="w-3 h-3" />}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`font-bold text-lg ${isCompleted ? 'line-through opacity-60' : ''}`}>
                        {article.title}
                      </h4>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                        {article.type}
                      </span>
                    </div>
                    
                    <div className={`space-y-3 ${isCompleted ? 'opacity-60' : ''}`}>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Target Audience:</span>
                          <span className="ml-2 text-gray-600">{article.audience}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Word Count:</span>
                          <span className="ml-2 text-gray-600">{article.wordCount}</span>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-blue-50 rounded">
                        <span className="font-medium text-blue-800">Key Points:</span>
                        <ul className="text-blue-700 text-sm mt-1 list-disc list-inside">
                          {article.keyPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-2 bg-green-50 rounded">
                        <p className="text-green-700 text-sm font-medium"><strong>CTA:</strong> {article.cta}</p>
                      </div>
                      
                      <div className="p-2 bg-purple-50 rounded">
                        <p className="text-purple-700 text-sm"><strong>Engagement:</strong> {article.engagement}</p>
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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-900">Us In Context CMS</h1>
            </div>
            <div className="text-sm text-gray-500">Content Management System - 72 Total Pieces</div>
          </div>
        </div>
      </header>
      
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center space-x-2 px-4 py-3 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              aria-label="Overview tab"
              aria-current={activeTab === 'overview' ? 'page' : undefined}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Overview</span>
            </button>
            
            <button
              onClick={() => setActiveTab('xtwitter')}
              className={`flex items-center space-x-2 px-4 py-3 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'xtwitter'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              aria-label="X-Twitter tab"
              aria-current={activeTab === 'xtwitter' ? 'page' : undefined}
            >
              <div className="w-4 h-4 bg-blue-400 rounded-sm flex items-center justify-center text-white text-xs font-bold">X</div>
              <span>X-Twitter</span>
            </button>
            
            <button
              onClick={() => setActiveTab('instagram')}
              className={`flex items-center space-x-2 px-4 py-3 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'instagram'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              aria-label="Instagram tab"
              aria-current={activeTab === 'instagram' ? 'page' : undefined}
            >
              <div className="w-4 h-4 bg-pink-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">IG</div>
              <span>Instagram</span>
            </button>
            
            <button
              onClick={() => setActiveTab('tiktok')}
              className={`flex items-center space-x-2 px-4 py-3 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'tiktok'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              aria-label="TikTok tab"
              aria-current={activeTab === 'tiktok' ? 'page' : undefined}
            >
              <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">TT</div>
              <span>TikTok</span>
            </button>
            
            <button
              onClick={() => setActiveTab('linkedin')}
              className={`flex items-center space-x-2 px-4 py-3 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'linkedin'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              aria-label="LinkedIn tab"
              aria-current={activeTab === 'linkedin' ? 'page' : undefined}
            >
              <div className="w-4 h-4 bg-blue-700 rounded-sm flex items-center justify-center text-white text-xs font-bold">L</div>
              <span>LinkedIn</span>
            </button>
          </div>
        </div>
      </nav>
      {/* DEBUG block */}
      <div className="p-4 bg-yellow-100 border border-yellow-500 text-yellow-800">
         <h2>DEBUG: YouTube Week Focus</h2>
         <p>{youtubeContent?.week1?.focus}</p>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'xtwitter' && renderXTwitter()}
        {activeTab === 'instagram' && renderInstagram()}
        {activeTab === 'tiktok' && renderTikTok()}
        {activeTab === 'linkedin' && renderLinkedIn()}
      </main>
      
      <Toast 
        message={toast.message} 
        isVisible={toast.isVisible} 
        onClose={() => setToast({ message: '', isVisible: false })} 
      />
    </div>
  );
};

export default UsInContextCMS;