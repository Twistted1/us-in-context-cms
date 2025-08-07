import { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, Plus, Download, Edit, Copy, Share, Trash2, CheckCircle 
} from 'lucide-react';

const ContentManagementSystem = () => {
  // YouTube State
  const [youtubeContent, setYoutubeContent] = useState({
    week1: {
      title: "Foundation Week: Establishing Authority",
      focus: "Build credibility and set the analytical framework",
      videos: [
        {
          id: 1,
          day: 1,
          type: "Introduction Video",
          title: "Welcome to Us In Context: Why Independent Economic Analysis Matters",
          description: "Establish mission, methodology, and commitment to truth-telling over profit-serving narratives",
          content: "In an era of economic confusion and misinformation, independent analysis has never been more crucial. Us In Context was founded on a simple premise: economic understanding should be accessible to everyone, not just those with PhDs in economics. We're not traditional economists. We're regular people who got tired of explanations that didn't add up, narratives that served power rather than truth, and an economic system that seems to work for everyone except actual people.",
          tags: ["independent media", "economic analysis", "corporate accountability"],
          metrics: { plannedViews: 5000, expectedEngagement: 5.2 },
          createdAt: new Date(),
          status: "draft"
        },
        {
          id: 2,
          day: 2,
          type: "Framework Analysis",
          title: "The Profit Extraction Playbook: How Corporations Socialize Risk and Privatize Reward",
          description: "Comprehensive framework for understanding how modern corporations extract value while avoiding responsibility",
          content: "Modern corporations have mastered a dangerous playbook: extract maximum value while socializing risk and avoiding responsibility. This framework will help you understand how this works across different sectors and contexts. The extraction playbook typically follows five phases: 1) Create or exploit a crisis 2) Blame external factors 3) Raise prices while cutting costs 4) Extract maximum profit 5) Use PR and lobbying to maintain favorable environment.",
          tags: ["corporate profits", "economic extraction", "risk socialization"],
          metrics: { plannedViews: 7500, expectedEngagement: 6.8 },
          createdAt: new Date(),
          status: "draft"
        }
      ]
    },
    week2: {
      title: "Deep Investigation Week: Sectoral Analysis",
      focus: "Detailed analysis of key economic sectors and their extraction patterns",
      videos: [
        {
          id: 3,
          day: 3,
          type: "Sectoral Investigation",
          title: "The Energy Extraction: How 'Crisis' Became Record Windfall Profits",
          description: "Comprehensive analysis of energy sector profits vs consumer costs during the 'energy crisis'",
          content: "The UK energy crisis of 2022 was characterized by headlines about 'unprecedented global challenges' and 'unavoidable price increases.' Yet corporate financial statements tell a radically different story. Shell reported profits of £32.2 billion in 2022, more than double their 2021 profits. BP recorded £23 billion in profits, triple their previous year. Meanwhile, UK households faced average energy bill increases of 80%.",
          tags: ["energy crisis", "windfall profits", "oil companies"],
          metrics: { plannedViews: 12000, expectedEngagement: 8.5 },
          createdAt: new Date(),
          status: "draft"
        }
      ]
    }
  });

  // Facebook State
  const [facebookContent, setFacebookContent] = useState({
    week1: {
      title: "Introduction and educational content",
      focus: "Building community and introducing economic concepts",
      posts: [
        {
          id: 1,
          day: 1,
          type: "Introduction Post",
          title: "Welcome to Us In Context on Facebook",
          content: "Hello Facebook community! 👋 I'm excited to bring Us In Context to this platform. We're an independent voice dedicated to one simple mission: helping you understand how political, economic, and social developments actually impact your daily life. 🎯 What makes us different? We don't claim to be experts in everything, but we're committed to keeping vital conversations alive and accessible.",
          hashtags: "#IndependentMedia #UsInContext #EconomicAnalysis",
          callToAction: "Ask the community what issues they want analyzed",
          metrics: { plannedReach: 2500, expectedEngagement: 5.2 },
          createdAt: new Date(),
          status: "draft"
        },
        {
          id: 2,
          day: 2,
          type: "Educational Post",
          title: "How to Spot Corporate BS in the News",
          content: "🔍 MEDIA LITERACY MONDAY: Ever notice how companies always blame 'unprecedented challenges' for everything? Here's how to read between the lines when corporations make excuses: 1) Look for the word 'unprecedented' (translation: we didn't plan for this) 2) Check if they mention 'supply chain issues' without specifics 3) See if executive bonuses still went up 4) Follow the timeline - was this really unpredictable?",
          hashtags: "#MediaLiteracy #CorporateBS #NewsAnalysis",
          callToAction: "Community shares corporate excuses they've heard",
          metrics: { plannedReach: 3200, expectedEngagement: 6.8 },
          createdAt: new Date(),
          status: "draft"
        }
      ]
    },
    week2: {
      title: "Pandemic profiteering investigation",
      focus: "Examining how corporations used crises for profit extraction",
      posts: [
        {
          id: 3,
          day: 3,
          type: "Investigation Launch",
          title: "Pandemic Profits vs Public Pain",
          content: "🕵️ INVESTIGATION: THE PANDEMIC PROFITEERS - This week we're examining how some companies used the pandemic as a profit opportunity while claiming 'unprecedented challenges.' Starting with grocery chains: • Tesco profits up 28% (2020-2021) • Sainsbury's profits up 42% • Prices to consumers up 15-20% But we were told it was all 'supply chain pressures' and 'increased costs.' The data tells a different story.",
          hashtags: "#PandemicProfiteers #CorporateAccountability",
          callToAction: "Community suggests companies to investigate",
          metrics: { plannedReach: 4500, expectedEngagement: 8.5 },
          createdAt: new Date(),
          status: "draft"
        }
      ]
    }
  });

  // Website State
  const [websiteContent, setWebsiteContent] = useState({
    week1: {
      title: "Foundation Week: Establishing Authority",
      focus: "Build credibility and set the analytical framework",
      articles: [
        {
          id: 1,
          day: 1,
          type: "About/Mission Post",
          title: "Welcome to Us In Context: Why Independent Economic Analysis Matters",
          wordCount: "1,500-2,000",
          seoFocus: "independent economic analysis, corporate accountability, UK economics",
          description: "Establish mission, methodology, and commitment to truth-telling over profit-serving narratives",
          content: "In an era of economic confusion and misinformation, independent analysis has never been more crucial. Us In Context was founded on a simple premise: economic understanding should be accessible to everyone, not just those with PhDs in economics. We're not traditional economists. We're regular people who got tired of explanations that didn't add up, narratives that served power rather than truth, and an economic system that seems to work for everyone except actual people.",
          socialTeaser: "Why another economics voice? Because the existing ones serve power, not people.",
          tags: ["independent media", "economic analysis", "corporate accountability"],
          metrics: { plannedViews: 3000, expectedEngagement: 4.5 },
          createdAt: new Date(),
          status: "draft"
        },
        {
          id: 2,
          day: 2,
          type: "Framework Analysis",
          title: "The Profit Extraction Playbook: How Corporations Socialize Risk and Privatize Reward",
          wordCount: "2,500-3,000",
          seoFocus: "corporate profit extraction, socialized risk, economic analysis",
          description: "Comprehensive framework for understanding how modern corporations extract value while avoiding responsibility",
          content: "Modern corporations have mastered a dangerous playbook: extract maximum value while socializing risk and avoiding responsibility. This framework will help you understand how this works across different sectors and contexts. The extraction playbook typically follows five phases: 1) Create or exploit a crisis 2) Blame external factors ('supply chain issues', 'unprecedented challenges') 3) Raise prices on consumers while cutting costs (often jobs) 4) Extract maximum profit through various mechanisms 5) Use PR and lobbying to maintain favorable regulatory environment.",
          socialTeaser: "The game is rigged, but once you see the playbook, you can't unsee it.",
          tags: ["corporate profits", "economic extraction", "risk socialization"],
          metrics: { plannedViews: 4200, expectedEngagement: 5.8 },
          createdAt: new Date(),
          status: "draft"
        }
      ]
    },
    week2: {
      title: "Deep Investigation Week: Sectoral Analysis",
      focus: "Detailed analysis of key economic sectors and their extraction patterns",
      articles: [
        {
          id: 3,
          day: 3,
          type: "Sectoral Investigation",
          title: "The Energy Extraction: How 'Crisis' Became Record Windfall Profits",
          wordCount: "3,000-3,500",
          seoFocus: "energy crisis, windfall profits, oil companies, UK energy bills",
          description: "Comprehensive analysis of energy sector profits vs consumer costs during the 'energy crisis'",
          content: "The UK energy crisis of 2022 was characterized by headlines about 'unprecedented global challenges' and 'unavoidable price increases.' Yet corporate financial statements tell a radically different story. Shell reported profits of £32.2 billion in 2022, more than double their 2021 profits. BP recorded £23 billion in profits, triple their previous year. Meanwhile, UK households faced average energy bill increases of 80%.",
          socialTeaser: "Energy crisis for households, record profits for oil companies. The math doesn't add up unless you follow the money.",
          tags: ["energy crisis", "windfall profits", "oil companies"],
          metrics: { plannedViews: 6200, expectedEngagement: 7.9 },
          createdAt: new Date(),
          status: "draft"
        }
      ]
    }
  });

  // LinkedIn State
  const [linkedInContent, setLinkedInContent] = useState({
    week1: [
      {
        id: 1,
        title: "From Just-In-Time to Just-Too-Late: How Efficiency Doctrine Created Systemic Fragility",
        type: "Thought Leadership",
        audience: "Business leaders, supply chain professionals",
        wordCount: "1200-1500",
        keyPoints: ["Just-in-time origins and benefits", "Hidden costs of efficiency", "Systemic fragility creation", "Alternative resilience models"],
        cta: "What's your experience with supply chain fragility? Share your insights.",
        engagement: "Tag supply chain leaders who need to see this",
        metrics: { plannedViews: 5000, expectedEngagement: 6.2 },
        createdAt: new Date(),
        status: "draft"
      },
      {
        id: 2,
        title: "The Hidden Cost of Shareholder Primacy: Why Short-Term Thinking Is Destroying Long-Term Value",
        type: "Business Analysis",
        audience: "C-suite executives, investors",
        wordCount: "1000-1200",
        keyPoints: ["Shareholder primacy history", "Quarterly pressure impacts", "Long-term value destruction", "Stakeholder capitalism alternatives"],
        cta: "How is your organization balancing short-term and long-term thinking?",
        engagement: "Share examples of long-term thinking in your industry",
        metrics: { plannedViews: 4500, expectedEngagement: 5.8 },
        createdAt: new Date(),
        status: "draft"
      },
      {
        id: 3,
        title: "5 Economic Patterns Every Business Leader Should Recognize in 2024",
        type: "Pattern Analysis",
        audience: "Business professionals, analysts",
        wordCount: "800-1000",
        keyPoints: ["Crisis capitalism patterns", "Consolidation trends", "Externality shifting", "Narrative control", "Resistance emergence"],
        cta: "Which patterns are you seeing in your industry?",
        engagement: "Comment with patterns you've observed",
        metrics: { plannedViews: 6000, expectedEngagement: 7.5 },
        createdAt: new Date(),
        status: "draft"
      }
    ],
    week2: [
      {
        id: 4,
        title: "Inflation Reality Check: How Corporate Price-Setting Power Reshaped the Economy",
        type: "Economic Analysis",
        audience: "Economists, policy makers, business analysts",
        wordCount: "1500-1800",
        keyPoints: ["Inflation causes analysis", "Corporate pricing power", "Market concentration effects", "Policy implications"],
        cta: "What solutions do you see for addressing corporate pricing power?",
        engagement: "Share this with policy professionals in your network",
        metrics: { plannedViews: 5500, expectedEngagement: 6.7 },
        createdAt: new Date(),
        status: "draft"
      },
      {
        id: 5,
        title: "Britain's Strategic Vulnerability: The Hidden Costs of Deindustrialization",
        type: "Strategic Analysis",
        audience: "Policy makers, strategic planners",
        wordCount: "1300-1600",
        keyPoints: ["Deindustrialization timeline", "Strategic implications", "Dependency creation", "Reindustrialization possibilities"],
        cta: "How can we rebuild strategic resilience in your sector?",
        engagement: "Tag someone working on industrial strategy",
        metrics: { plannedViews: 4800, expectedEngagement: 6.2 },
        createdAt: new Date(),
        status: "draft"
      },
      {
        id: 6,
        title: "The ROI of Resilience: Why Investing in Redundancy Pays Long-Term Dividends",
        type: "Business Case",
        audience: "CFOs, risk managers, strategic planners",
        wordCount: "1000-1200",
        keyPoints: ["Resilience vs efficiency trade-offs", "Hidden costs of fragility", "Resilience investment models", "ROI calculations"],
        cta: "What resilience investments is your organization making?",
        engagement: "Share examples of successful resilience investments",
        metrics: { plannedViews: 5200, expectedEngagement: 5.9 },
        createdAt: new Date(),
        status: "draft"
      }
    ],
    week3: [
      {
        id: 7,
        title: "Corporate Accountability in the Age of Extraction: A Framework for Stakeholder Capitalism",
        type: "Framework Development",
        audience: "Corporate governance professionals, ESG specialists",
        wordCount: "1400-1700",
        keyPoints: ["Current accountability gaps", "Stakeholder framework", "Measurement methodologies", "Implementation strategies"],
        cta: "How is your organization implementing stakeholder capitalism?",
        engagement: "Share your accountability framework experiences",
        metrics: { plannedViews: 4700, expectedEngagement: 6.5 },
        createdAt: new Date(),
        status: "draft"
      },
      {
        id: 8,
        title: "The Economics of Value Extraction: Understanding Modern Corporate Strategy",
        type: "Strategic Analysis",
        audience: "Business strategists, analysts",
        wordCount: "1200-1500",
        keyPoints: ["Value creation vs extraction", "Extraction mechanisms", "Systemic impacts", "Alternative strategies"],
        cta: "How do you distinguish value creation from extraction in your work?",
        engagement: "Comment with examples from your industry",
        metrics: { plannedViews: 5300, expectedEngagement: 7.1 },
        createdAt: new Date(),
        status: "draft"
      },
      {
        id: 9,
        title: "Building Anti-Fragile Supply Chains: Lessons from Systems Thinking",
        type: "Systems Analysis",
        audience: "Supply chain professionals, systems thinkers",
        wordCount: "1100-1400",
        keyPoints: ["Anti-fragility principles", "Supply chain redesign", "Redundancy strategies", "Local production benefits"],
        cta: "What anti-fragile principles are you implementing?",
        engagement: "Share your supply chain resilience strategies",
        metrics: { plannedViews: 4900, expectedEngagement: 6.8 },
        createdAt: new Date(),
        status: "draft"
      }
    ],
    week4: [
      {
        id: 10,
        title: "Predictive Crisis Analysis: Using Pattern Recognition for Strategic Planning",
        type: "Strategic Tool",
        audience: "Strategic planners, risk analysts",
        wordCount: "1000-1300",
        keyPoints: ["Crisis pattern identification", "Predictive methodologies", "Early warning systems", "Strategic responses"],
        cta: "What crisis patterns are you tracking in your planning?",
        engagement: "Share your predictive analysis tools",
        metrics: { plannedViews: 5100, expectedEngagement: 6.4 },
        createdAt: new Date(),
        status: "draft"
      },
      {
        id: 11,
        title: "Redefining Economic Success: Beyond GDP and Profit Maximization",
        type: "Vision Piece",
        audience: "Policy makers, thought leaders",
        wordCount: "1300-1600",
        keyPoints: ["Current metrics limitations", "Alternative success measures", "Wellbeing economics", "Implementation challenges"],
        cta: "What metrics should we use to measure real economic success?",
        engagement: "Tag economists and policy makers in your network",
        metrics: { plannedViews: 5700, expectedEngagement: 7.8 },
        createdAt: new Date(),
        status: "draft"
      },
      {
        id: 12,
        title: "The Business Case for Truth-Telling: Why Transparency Creates Competitive Advantage",
        type: "Business Strategy",
        audience: "Communications professionals, executives",
        wordCount: "900-1200",
        keyPoints: ["Trust as competitive advantage", "Transparency benefits", "Truth-telling strategies", "Stakeholder engagement"],
        cta: "How has transparency created value in your organization?",
        engagement: "Share examples of truth-telling in business",
        metrics: { plannedViews: 5400, expectedEngagement: 7.2 },
        createdAt: new Date(),
        status: "draft"
      }
    ]
  });

  // UI State
  const [activeTab, setActiveTab] = useState('youtube');
  const [currentYoutubeWeek, setCurrentYoutubeWeek] = useState(1);
  const [currentFacebookWeek, setCurrentFacebookWeek] = useState(1);
  const [currentWebsiteWeek, setCurrentWebsiteWeek] = useState(1);
  const [currentLinkedInWeek, setCurrentLinkedInWeek] = useState(1);
  const [editingYoutubeVideo, setEditingYoutubeVideo] = useState(null);
  const [editingFacebookPost, setEditingFacebookPost] = useState(null);
  const [editingWebsiteArticle, setEditingWebsiteArticle] = useState(null);
  const [editingLinkedInArticle, setEditingLinkedInArticle] = useState(null);
  const [completedYoutubeTasks, setCompletedYoutubeTasks] = useState([]);
  const [completedFacebookTasks, setCompletedFacebookTasks] = useState([]);
  const [completedWebsiteTasks, setCompletedWebsiteTasks] = useState([]);
  const [completedLinkedInTasks, setCompletedLinkedInTasks] = useState([]);

  // YouTube CRUD Operations
  const updateYoutubeVideo = (weekKey, videoId, updates) => {
    setYoutubeContent(prev => ({
      ...prev,
      [weekKey]: {
        ...prev[weekKey],
        videos: prev[weekKey].videos.map(video =>
          video.id === videoId ? { ...video, ...updates, updatedAt: new Date() } : video
        )
      }
    }));
  };

  const deleteYoutubeVideo = (weekKey, videoId) => {
    setYoutubeContent(prev => ({
      ...prev,
      [weekKey]: {
        ...prev[weekKey],
        videos: prev[weekKey].videos.filter(video => video.id !== videoId)
      }
    }));
  };

  const duplicateYoutubeVideo = (weekKey, videoId) => {
    const week = youtubeContent[weekKey];
    const originalVideo = week.videos.find(v => v.id === videoId);
    if (originalVideo) {
      const newVideo = {
        ...originalVideo,
        id: Math.max(...Object.values(youtubeContent).flatMap(w => w.videos.map(v => v.id))) + 1,
        title: `${originalVideo.title} (Copy)`,
        status: 'draft',
        createdAt: new Date()
      };
      setYoutubeContent(prev => ({
        ...prev,
        [weekKey]: {
          ...prev[weekKey],
          videos: [...prev[weekKey].videos, newVideo]
        }
      }));
    }
  };

  const addNewYoutubeVideo = (weekKey) => {
    const week = youtubeContent[weekKey];
    const newVideo = {
      id: Math.max(...Object.values(youtubeContent).flatMap(w => w.videos.map(v => v.id))) + 1,
      day: week.videos.length + 1,
      type: "Standard Video",
      title: "New YouTube Video",
      description: "Video description to be written...",
      content: "Video script to be written...",
      tags: ["UsInContext", "EconomicAnalysis"],
      metrics: { plannedViews: 1000, expectedEngagement: 3.0 },
      createdAt: new Date(),
      status: "draft"
    };
    setYoutubeContent(prev => ({
      ...prev,
      [weekKey]: {
        ...prev[weekKey],
        videos: [...prev[weekKey].videos, newVideo]
      }
    }));
  };

  const toggleYoutubeTask = (taskId) => {
    setCompletedYoutubeTasks(prev => {
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

  const exportYoutubeWeekData = (weekKey) => {
    const week = youtubeContent[weekKey];
    let csvContent = "Day,Type,Title,Description,Tags,Status\n";
    week.videos.forEach(video => {
      const cleanDescription = video.description.replace(/"/g, '""').replace(/\n/g, ' ');
      csvContent += `${video.day},"${video.type}","${video.title}","${cleanDescription}","${video.tags.join(',')}","${video.status}"\n`;
    });
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `youtube-week-${weekKey}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Facebook CRUD Operations
  const updateFacebookPost = (weekKey, postId, updates) => {
    setFacebookContent(prev => ({
      ...prev,
      [weekKey]: {
        ...prev[weekKey],
        posts: prev[weekKey].posts.map(post =>
          post.id === postId ? { ...post, ...updates, updatedAt: new Date() } : post
        )
      }
    }));
  };

  const deleteFacebookPost = (weekKey, postId) => {
    setFacebookContent(prev => ({
      ...prev,
      [weekKey]: {
        ...prev[weekKey],
        posts: prev[weekKey].posts.filter(post => post.id !== postId)
      }
    }));
  };

  const duplicateFacebookPost = (weekKey, postId) => {
    const week = facebookContent[weekKey];
    const originalPost = week.posts.find(p => p.id === postId);
    if (originalPost) {
      const newPost = {
        ...originalPost,
        id: Math.max(...Object.values(facebookContent).flatMap(w => w.posts.map(p => p.id))) + 1,
        title: `${originalPost.title} (Copy)`,
        status: 'draft',
        createdAt: new Date()
      };
      setFacebookContent(prev => ({
        ...prev,
        [weekKey]: {
          ...prev[weekKey],
          posts: [...prev[weekKey].posts, newPost]
        }
      }));
    }
  };

  const addNewFacebookPost = (weekKey) => {
    const week = facebookContent[weekKey];
    const newPost = {
      id: Math.max(...Object.values(facebookContent).flatMap(w => w.posts.map(p => p.id))) + 1,
      day: week.posts.length + 1,
      type: "Standard Post",
      title: "New Facebook Post",
      content: "Content to be written...",
      hashtags: "#UsInContext #EconomicAnalysis",
      callToAction: "Engage with our content",
      metrics: { plannedReach: 1000, expectedEngagement: 3.5 },
      createdAt: new Date(),
      status: "draft"
    };
    setFacebookContent(prev => ({
      ...prev,
      [weekKey]: {
        ...prev[weekKey],
        posts: [...prev[weekKey].posts, newPost]
      }
    }));
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

  const exportFacebookWeekData = (weekKey) => {
    const week = facebookContent[weekKey];
    let csvContent = "Day,Type,Title,Content,Hashtags,Status\n";
    week.posts.forEach(post => {
      const cleanContent = post.content.replace(/"/g, '""').replace(/\n/g, ' ');
      csvContent += `${post.day},"${post.type}","${post.title}","${cleanContent}","${post.hashtags}","${post.status}"\n`;
    });
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `facebook-week-${weekKey}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Website CRUD Operations
  const updateWebsiteArticle = (weekKey, articleId, updates) => {
    setWebsiteContent(prev => ({
      ...prev,
      [weekKey]: {
        ...prev[weekKey],
        articles: prev[weekKey].articles.map(article =>
          article.id === articleId ? { ...article, ...updates, updatedAt: new Date() } : article
        )
      }
    }));
  };

  const deleteWebsiteArticle = (weekKey, articleId) => {
    setWebsiteContent(prev => ({
      ...prev,
      [weekKey]: {
        ...prev[weekKey],
        articles: prev[weekKey].articles.filter(article => article.id !== articleId)
      }
    }));
  };

  const duplicateWebsiteArticle = (weekKey, articleId) => {
    const week = websiteContent[weekKey];
    const originalArticle = week.articles.find(a => a.id === articleId);
    if (originalArticle) {
      const newArticle = {
        ...originalArticle,
        id: Math.max(...Object.values(websiteContent).flatMap(w => w.articles.map(a => a.id))) + 1,
        title: `${originalArticle.title} (Copy)`,
        status: 'draft',
        createdAt: new Date()
      };
      setWebsiteContent(prev => ({
        ...prev,
        [weekKey]: {
          ...prev[weekKey],
          articles: [...prev[weekKey].articles, newArticle]
        }
      }));
    }
  };

  const addNewWebsiteArticle = (weekKey) => {
    const week = websiteContent[weekKey];
    const newArticle = {
      id: Math.max(...Object.values(websiteContent).flatMap(w => w.articles.map(a => a.id))) + 1,
      day: week.articles.length + 1,
      type: "Standard Article",
      title: "New Website Article",
      wordCount: "1,000-1,500",
      seoFocus: "economic analysis, corporate accountability",
      description: "Article description to be written...",
      content: "Article content to be written...",
      socialTeaser: "Engaging teaser to be written...",
      tags: ["UsInContext", "EconomicAnalysis"],
      metrics: { plannedViews: 2000, expectedEngagement: 3.0 },
      createdAt: new Date(),
      status: "draft"
    };
    setWebsiteContent(prev => ({
      ...prev,
      [weekKey]: {
        ...prev[weekKey],
        articles: [...prev[weekKey].articles, newArticle]
      }
    }));
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

  const exportWebsiteWeekData = (weekKey) => {
    const week = websiteContent[weekKey];
    let csvContent = "Day,Type,Title,Word Count,SEO Focus,Tags,Status\n";
    week.articles.forEach(article => {
      const cleanDescription = article.description.replace(/"/g, '""').replace(/\n/g, ' ');
      const cleanTags = article.tags.join(',').replace(/"/g, '""');
      csvContent += `${article.day},"${article.type}","${article.title}","${article.wordCount}","${article.seoFocus}","${cleanTags}","${article.status}"\n`;
    });
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `website-week-${weekKey}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // LinkedIn CRUD Operations
  const updateLinkedInArticle = (weekKey, articleId, updates) => {
    setLinkedInContent(prev => ({
      ...prev,
      [weekKey]: prev[weekKey].map(article =>
        article.id === articleId ? { ...article, ...updates, updatedAt: new Date() } : article
      )
    }));
  };

  const deleteLinkedInArticle = (weekKey, articleId) => {
    setLinkedInContent(prev => ({
      ...prev,
      [weekKey]: prev[weekKey].filter(article => article.id !== articleId)
    }));
  };

  const duplicateLinkedInArticle = (weekKey, articleId) => {
    const originalArticle = linkedInContent[weekKey].find(a => a.id === articleId);
    if (originalArticle) {
      const newArticle = {
        ...originalArticle,
        id: Math.max(...Object.values(linkedInContent).flat().map(a => a.id)) + 1,
        title: `${originalArticle.title} (Copy)`,
        status: 'draft',
        createdAt: new Date()
      };
      setLinkedInContent(prev => ({
        ...prev,
        [weekKey]: [...prev[weekKey], newArticle]
      }));
    }
  };

  const addNewLinkedInArticle = (weekKey) => {
    const newId = Math.max(...Object.values(linkedInContent).flat().map(a => a.id)) + 1;
    const newArticle = {
      id: newId,
      title: "New LinkedIn Article",
      type: "Thought Leadership",
      audience: "Business professionals",
      wordCount: "1000-1200",
      keyPoints: ["Key point 1", "Key point 2", "Key point 3"],
      cta: "Engage with this content",
      engagement: "Share with your network",
      metrics: { plannedViews: 3000, expectedEngagement: 4.0 },
      createdAt: new Date(),
      status: "draft"
    };
    setLinkedInContent(prev => ({
      ...prev,
      [weekKey]: [...prev[weekKey], newArticle]
    }));
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

  const exportLinkedInWeekData = (weekKey) => {
    const week = linkedInContent[weekKey];
    let csvContent = "ID,Title,Type,Audience,Word Count,Status\n";
    week.forEach(article => {
      const cleanTitle = article.title.replace(/"/g, '""');
      csvContent += `${article.id},"${cleanTitle}","${article.type}","${article.audience}","${article.wordCount}","${article.status}"\n`;
    });
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `linkedin-week-${weekKey}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Utility Functions
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  // Render Functions
  const renderYoutube = () => {
    const currentWeekData = youtubeContent[`week${currentYoutubeWeek}`];
    const weekCompletedTasks = completedYoutubeTasks.filter(task => task.includes(`week${currentYoutubeWeek}`)).length;
    
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">YouTube Strategy</h2>
          <p className="text-red-200">Video content and in-depth analysis</p>
        </div>
        
        <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border border-red-200 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📹 YouTube Content Strategy</h2>
          <p className="text-red-800 font-medium mb-4">{currentWeekData?.title}: {currentWeekData?.focus}</p>
          
          <div className="bg-red-100 p-4 rounded-lg border border-red-300 mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-red-800">Week {currentYoutubeWeek} Progress</h3>
              <div className="text-sm text-red-700">
                {weekCompletedTasks}/{currentWeekData?.videos.length || 0} videos completed
              </div>
            </div>
            <div className="w-full bg-red-200 rounded-full h-3">
              <div
                className="bg-red-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${currentWeekData ? (weekCompletedTasks / currentWeekData.videos.length) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setCurrentYoutubeWeek(Math.max(1, currentYoutubeWeek - 1))}
            disabled={currentYoutubeWeek === 1}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Week</span>
          </button>
          <div className="flex space-x-2">
            {[1, 2].map(week => (
              <button
                key={week}
                onClick={() => setCurrentYoutubeWeek(week)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentYoutubeWeek === week
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentYoutubeWeek(Math.min(2, currentYoutubeWeek + 1))}
            disabled={currentYoutubeWeek === 2}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <span>Next Week</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => addNewYoutubeVideo(`week${currentYoutubeWeek}`)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Video</span>
          </button>
          <button
            onClick={() => exportYoutubeWeekData(`week${currentYoutubeWeek}`)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export Week</span>
          </button>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Weekly YouTube Videos</h3>
          {currentWeekData?.videos.map(video => {
            const taskId = `week${currentYoutubeWeek}-day${video.day}-youtube`;
            const isCompleted = completedYoutubeTasks.includes(taskId);
            const isEditing = editingYoutubeVideo === video.id;
            return (
              <div key={video.id} className="bg-white border rounded-lg shadow-sm">
                <div className="p-4 border-b bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleYoutubeTask(taskId)}
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                          isCompleted
                            ? 'bg-red-500 border-red-500 text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {isCompleted && <CheckCircle className="w-4 h-4" />}
                      </button>
                      <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                        YT
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Day {video.day}</span>
                        <span className="ml-2 text-red-600 text-sm font-medium">{video.type}</span>
                        <span className={`ml-2 px-2 py-1 rounded text-xs ${
                          video.status === 'published' ? 'bg-green-100 text-green-800' :
                          video.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {video.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingYoutubeVideo(isEditing ? null : video.id)}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => copyToClipboard(video.content)}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Copy Content"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => duplicateYoutubeVideo(`week${currentYoutubeWeek}`, video.id)}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Duplicate"
                      >
                        <Share className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteYoutubeVideo(`week${currentYoutubeWeek}`, video.id)}
                        className="p-2 hover:bg-gray-200 rounded text-red-500"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Title</label>
                          <input
                            type="text"
                            value={video.title}
                            onChange={(e) => updateYoutubeVideo(`week${currentYoutubeWeek}`, video.id, { title: e.target.value })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Type</label>
                          <select
                            value={video.type}
                            onChange={(e) => updateYoutubeVideo(`week${currentYoutubeWeek}`, video.id, { type: e.target.value })}
                            className="w-full p-2 border rounded"
                          >
                            <option value="Introduction Video">Introduction Video</option>
                            <option value="Framework Analysis">Framework Analysis</option>
                            <option value="Investigative Analysis">Investigative Analysis</option>
                            <option value="Sectoral Investigation">Sectoral Investigation</option>
                            <option value="Comparative Analysis">Comparative Analysis</option>
                            <option value="Solution Analysis">Solution Analysis</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                          value={video.description}
                          onChange={(e) => updateYoutubeVideo(`week${currentYoutubeWeek}`, video.id, { description: e.target.value })}
                          className="w-full h-24 p-3 border rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Content (Script)</label>
                        <textarea
                          value={video.content}
                          onChange={(e) => updateYoutubeVideo(`week${currentYoutubeWeek}`, video.id, { content: e.target.value })}
                          className="w-full h-48 p-3 border rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
                        <input
                          type="text"
                          value={video.tags.join(', ')}
                          onChange={(e) => updateYoutubeVideo(`week${currentYoutubeWeek}`, video.id, { tags: e.target.value.split(',').map(tag => tag.trim()) })}
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Status</label>
                          <select
                            value={video.status}
                            onChange={(e) => updateYoutubeVideo(`week${currentYoutubeWeek}`, video.id, { status: e.target.value })}
                            className="w-full p-2 border rounded"
                          >
                            <option value="draft">Draft</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="published">Published</option>
                          </select>
                        </div>
                        <div className="flex items-end">
                          <button
                            onClick={() => setEditingYoutubeVideo(null)}
                            className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`${isCompleted ? 'opacity-60' : ''}`}>
                      <h4 className={`text-xl font-bold mb-3 ${isCompleted ? 'line-through' : ''}`}>
                        {video.title}
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-red-50 rounded-lg">
                            <h5 className="font-semibold text-red-800 mb-2">Description:</h5>
                            <div className="text-gray-700 text-sm">
                              {video.description.length > 300 ? `${video.description.substring(0, 300)}...` : video.description}
                            </div>
                          </div>
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h5 className="font-semibold text-blue-800 mb-2">Content:</h5>
                            <div className="text-gray-700 text-sm">
                              {video.content.length > 300 ? `${video.content.substring(0, 300)}...` : video.content}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <h5 className="font-semibold text-purple-800 mb-2">Tags:</h5>
                            <div className="text-purple-700 text-sm">
                              {video.tags.join(', ')}
                            </div>
                          </div>
                          <div className="p-4 bg-yellow-50 rounded-lg">
                            <h5 className="font-semibold text-yellow-800 mb-2">Expected Performance:</h5>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="text-yellow-700">
                                Views: {video.metrics.plannedViews.toLocaleString()}
                              </div>
                              <div className="text-yellow-700">
                                Engagement: {video.metrics.expectedEngagement}%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                        Created: {video.createdAt.toLocaleDateString()} •
                        Type: {video.type}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Week {currentYoutubeWeek} Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{currentWeekData?.videos.length || 0}</div>
              <div className="text-sm text-gray-600">Total Videos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{weekCompletedTasks}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {currentWeekData?.videos.reduce((acc, video) => acc + video.metrics.plannedViews, 0).toLocaleString() || 0}
              </div>
              <div className="text-sm text-gray-600">Total Planned Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {currentWeekData ? (currentWeekData.videos.reduce((acc, video) => acc + video.metrics.expectedEngagement, 0) / currentWeekData.videos.length).toFixed(1) : 0}%
              </div>
              <div className="text-sm text-gray-600">Avg Expected Engagement</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFacebook = () => {
    const currentWeekData = facebookContent[`week${currentFacebookWeek}`];
    const weekCompletedTasks = completedFacebookTasks.filter(task => task.includes(`week${currentFacebookWeek}`)).length;
    
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Facebook Strategy</h2>
          <p className="text-blue-200">Community building and educational content</p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📘 28-Day Facebook Strategy</h2>
          <p className="text-blue-800 font-medium mb-4">{currentWeekData?.title}: {currentWeekData?.focus}</p>
          
          <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-blue-800">Week {currentFacebookWeek} Progress</h3>
              <div className="text-sm text-blue-700">
                {weekCompletedTasks}/{currentWeekData?.posts.length || 0} posts completed
              </div>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${currentWeekData ? (weekCompletedTasks / currentWeekData.posts.length) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setCurrentFacebookWeek(Math.max(1, currentFacebookWeek - 1))}
            disabled={currentFacebookWeek === 1}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Week</span>
          </button>
          <div className="flex space-x-2">
            {[1, 2].map(week => (
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
            onClick={() => setCurrentFacebookWeek(Math.min(2, currentFacebookWeek + 1))}
            disabled={currentFacebookWeek === 2}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <span>Next Week</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => addNewFacebookPost(`week${currentFacebookWeek}`)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Post</span>
          </button>
          <button
            onClick={() => exportFacebookWeekData(`week${currentFacebookWeek}`)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export Week</span>
          </button>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Daily Facebook Posts</h3>
          {currentWeekData?.posts.map(post => {
            const taskId = `week${currentFacebookWeek}-day${post.day}-facebook`;
            const isCompleted = completedFacebookTasks.includes(taskId);
            const isEditing = editingFacebookPost === post.id;
            return (
              <div key={post.id} className="bg-white border rounded-lg shadow-sm">
                <div className="p-4 border-b bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleFacebookTask(taskId)}
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                          isCompleted
                            ? 'bg-blue-500 border-blue-500 text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {isCompleted && <CheckCircle className="w-4 h-4" />}
                      </button>
                      <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                        F
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Day {post.day}</span>
                        <span className="ml-2 text-blue-600 text-sm font-medium">{post.type}</span>
                        <span className={`ml-2 px-2 py-1 rounded text-xs ${
                          post.status === 'published' ? 'bg-green-100 text-green-800' :
                          post.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {post.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingFacebookPost(isEditing ? null : post.id)}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => copyToClipboard(post.content)}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Copy Content"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => duplicateFacebookPost(`week${currentFacebookWeek}`, post.id)}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Duplicate"
                      >
                        <Share className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteFacebookPost(`week${currentFacebookWeek}`, post.id)}
                        className="p-2 hover:bg-gray-200 rounded text-red-500"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Title</label>
                          <input
                            type="text"
                            value={post.title}
                            onChange={(e) => updateFacebookPost(`week${currentFacebookWeek}`, post.id, { title: e.target.value })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Type</label>
                          <select
                            value={post.type}
                            onChange={(e) => updateFacebookPost(`week${currentFacebookWeek}`, post.id, { type: e.target.value })}
                            className="w-full p-2 border rounded"
                          >
                            <option value="Introduction Post">Introduction Post</option>
                            <option value="Educational Post">Educational Post</option>
                            <option value="Behind the Scenes">Behind the Scenes</option>
                            <option value="Analysis Post">Analysis Post</option>
                            <option value="Data Analysis">Data Analysis</option>
                            <option value="Community Question">Community Question</option>
                            <option value="Weekly Recap">Weekly Recap</option>
                            <option value="Investigation Launch">Investigation Launch</option>
                            <option value="Educational Deep-dive">Educational Deep-dive</option>
                            <option value="Case Study">Case Study</option>
                            <option value="Media Analysis">Media Analysis</option>
                            <option value="Solution Focus">Solution Focus</option>
                            <option value="Community Spotlight">Community Spotlight</option>
                            <option value="Sectoral Analysis Launch">Sectoral Analysis Launch</option>
                            <option value="Solution Series Launch">Solution Series Launch</option>
                            <option value="Policy Solutions">Policy Solutions</option>
                            <option value="Local Action Guide">Local Action Guide</option>
                            <option value="Media Strategy">Media Strategy</option>
                            <option value="Future Vision">Future Vision</option>
                            <option value="Call to Action">Call to Action</option>
                            <option value="Month Completion">Month Completion</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Content</label>
                        <textarea
                          value={post.content}
                          onChange={(e) => updateFacebookPost(`week${currentFacebookWeek}`, post.id, { content: e.target.value })}
                          className="w-full h-48 p-3 border rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Hashtags</label>
                        <input
                          type="text"
                          value={post.hashtags}
                          onChange={(e) => updateFacebookPost(`week${currentFacebookWeek}`, post.id, { hashtags: e.target.value })}
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Call to Action</label>
                        <input
                          type="text"
                          value={post.callToAction}
                          onChange={(e) => updateFacebookPost(`week${currentFacebookWeek}`, post.id, { callToAction: e.target.value })}
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Status</label>
                          <select
                            value={post.status}
                            onChange={(e) => updateFacebookPost(`week${currentFacebookWeek}`, post.id, { status: e.target.value })}
                            className="w-full p-2 border rounded"
                          >
                            <option value="draft">Draft</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="published">Published</option>
                          </select>
                        </div>
                        <div className="flex items-end">
                          <button
                            onClick={() => setEditingFacebookPost(null)}
                            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`${isCompleted ? 'opacity-60' : ''}`}>
                      <h4 className={`text-xl font-bold mb-3 ${isCompleted ? 'line-through' : ''}`}>
                        {post.title}
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h5 className="font-semibold text-blue-800 mb-2">Content:</h5>
                            <div className={`text-gray-700 text-sm whitespace-pre-wrap ${isCompleted ? 'line-through' : ''}`}>
                              {post.content.length > 300 ? `${post.content.substring(0, 300)}...` : post.content}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h5 className="font-semibold text-blue-800 mb-2">Hashtags:</h5>
                            <div className="text-blue-700 text-sm break-words">{post.hashtags}</div>
                          </div>
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h5 className="font-semibold text-green-800 mb-2">Call to Action:</h5>
                            <p className="text-green-700 text-sm">{post.callToAction}</p>
                          </div>
                          <div className="p-4 bg-yellow-50 rounded-lg">
                            <h5 className="font-semibold text-yellow-800 mb-2">Expected Performance:</h5>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="text-yellow-700">
                                Reach: {post.metrics.plannedReach.toLocaleString()}
                              </div>
                              <div className="text-yellow-700">
                                Engagement: {post.metrics.expectedEngagement}%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                        Created: {post.createdAt.toLocaleDateString()} •
                        Character count: {post.content.length} •
                        Hashtag count: {post.hashtags.split(' ').length}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Week {currentFacebookWeek} Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{currentWeekData?.posts.length || 0}</div>
              <div className="text-sm text-gray-600">Total Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{weekCompletedTasks}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {currentWeekData?.posts.reduce((acc, post) => acc + post.metrics.plannedReach, 0).toLocaleString() || 0}
              </div>
              <div className="text-sm text-gray-600">Total Planned Reach</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {currentWeekData ? (currentWeekData.posts.reduce((acc, post) => acc + post.metrics.expectedEngagement, 0) / currentWeekData.posts.length).toFixed(1) : 0}%
              </div>
              <div className="text-sm text-gray-600">Avg Expected Engagement</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderWebsite = () => {
    const currentWeekData = websiteContent[`week${currentWebsiteWeek}`];
    const weekCompletedTasks = completedWebsiteTasks.filter(task => task.includes(`week${currentWebsiteWeek}`)).length;
    
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Website Strategy</h2>
          <p className="text-green-200">Long-form content and in-depth analysis</p>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🌐 12-Article Website Strategy</h2>
          <p className="text-green-800 font-medium mb-4">{currentWeekData?.title}: {currentWeekData?.focus}</p>
          
          <div className="bg-green-100 p-4 rounded-lg border border-green-300 mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-green-800">Week {currentWebsiteWeek} Progress</h3>
              <div className="text-sm text-green-700">
                {weekCompletedTasks}/{currentWeekData?.articles.length || 0} articles completed
              </div>
            </div>
            <div className="w-full bg-green-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${currentWeekData ? (weekCompletedTasks / currentWeekData.articles.length) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setCurrentWebsiteWeek(Math.max(1, currentWebsiteWeek - 1))}
            disabled={currentWebsiteWeek === 1}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Week</span>
          </button>
          <div className="flex space-x-2">
            {[1, 2].map(week => (
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
            onClick={() => setCurrentWebsiteWeek(Math.min(2, currentWebsiteWeek + 1))}
            disabled={currentWebsiteWeek === 2}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <span>Next Week</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => addNewWebsiteArticle(`week${currentWebsiteWeek}`)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Article</span>
          </button>
          <button
            onClick={() => exportWebsiteWeekData(`week${currentWebsiteWeek}`)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export Week</span>
          </button>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Weekly Website Articles</h3>
          {currentWeekData?.articles.map(article => {
            const taskId = `week${currentWebsiteWeek}-day${article.day}-website`;
            const isCompleted = completedWebsiteTasks.includes(taskId);
            const isEditing = editingWebsiteArticle === article.id;
            return (
              <div key={article.id} className="bg-white border rounded-lg shadow-sm">
                <div className="p-4 border-b bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleWebsiteTask(taskId)}
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                          isCompleted
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {isCompleted && <CheckCircle className="w-4 h-4" />}
                      </button>
                      <div className="w-6 h-6 bg-green-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                        W
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Day {article.day}</span>
                        <span className="ml-2 text-green-600 text-sm font-medium">{article.type}</span>
                        <span className="ml-2 text-gray-500 text-sm">({article.wordCount})</span>
                        <span className={`ml-2 px-2 py-1 rounded text-xs ${
                          article.status === 'published' ? 'bg-green-100 text-green-800' :
                          article.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {article.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingWebsiteArticle(isEditing ? null : article.id)}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => copyToClipboard(article.content)}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Copy Content"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => duplicateWebsiteArticle(`week${currentWebsiteWeek}`, article.id)}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Duplicate"
                      >
                        <Share className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteWebsiteArticle(`week${currentWebsiteWeek}`, article.id)}
                        className="p-2 hover:bg-gray-200 rounded text-red-500"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Title</label>
                          <input
                            type="text"
                            value={article.title}
                            onChange={(e) => updateWebsiteArticle(`week${currentWebsiteWeek}`, article.id, { title: e.target.value })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Type</label>
                          <select
                            value={article.type}
                            onChange={(e) => updateWebsiteArticle(`week${currentWebsiteWeek}`, article.id, { type: e.target.value })}
                            className="w-full p-2 border rounded"
                          >
                            <option value="About/Mission Post">About/Mission Post</option>
                            <option value="Framework Analysis">Framework Analysis</option>
                            <option value="Investigative Analysis">Investigative Analysis</option>
                            <option value="Sectoral Investigation">Sectoral Investigation</option>
                            <option value="Economic Analysis">Economic Analysis</option>
                            <option value="Sectoral Analysis">Sectoral Analysis</option>
                            <option value="Comparative Analysis">Comparative Analysis</option>
                            <option value="Alternative Model Analysis">Alternative Model Analysis</option>
                            <option value="Solution Analysis">Solution Analysis</option>
                            <option value="Action Guide">Action Guide</option>
                            <option value="Policy Analysis">Policy Analysis</option>
                            <option value="Vision Document">Vision Document</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Word Count</label>
                          <input
                            type="text"
                            value={article.wordCount}
                            onChange={(e) => updateWebsiteArticle(`week${currentWebsiteWeek}`, article.id, { wordCount: e.target.value })}
                            className="w-full p-2 border rounded"
                            placeholder="e.g., 1,500-2,000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">SEO Focus</label>
                          <input
                            type="text"
                            value={article.seoFocus}
                            onChange={(e) => updateWebsiteArticle(`week${currentWebsiteWeek}`, article.id, { seoFocus: e.target.value })}
                            className="w-full p-2 border rounded"
                            placeholder="e.g., economic analysis, corporate accountability"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                          value={article.description}
                          onChange={(e) => updateWebsiteArticle(`week${currentWebsiteWeek}`, article.id, { description: e.target.value })}
                          className="w-full h-24 p-3 border rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Content</label>
                        <textarea
                          value={article.content}
                          onChange={(e) => updateWebsiteArticle(`week${currentWebsiteWeek}`, article.id, { content: e.target.value })}
                          className="w-full h-48 p-3 border rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Social Teaser</label>
                        <input
                          type="text"
                          value={article.socialTeaser}
                          onChange={(e) => updateWebsiteArticle(`week${currentWebsiteWeek}`, article.id, { socialTeaser: e.target.value })}
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
                        <input
                          type="text"
                          value={article.tags.join(', ')}
                          onChange={(e) => updateWebsiteArticle(`week${currentWebsiteWeek}`, article.id, { tags: e.target.value.split(',').map(tag => tag.trim()) })}
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Status</label>
                          <select
                            value={article.status}
                            onChange={(e) => updateWebsiteArticle(`week${currentWebsiteWeek}`, article.id, { status: e.target.value })}
                            className="w-full p-2 border rounded"
                          >
                            <option value="draft">Draft</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="published">Published</option>
                          </select>
                        </div>
                        <div className="flex items-end">
                          <button
                            onClick={() => setEditingWebsiteArticle(null)}
                            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`${isCompleted ? 'opacity-60' : ''}`}>
                      <h4 className={`text-xl font-bold mb-3 ${isCompleted ? 'line-through' : ''}`}>
                        {article.title}
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h5 className="font-semibold text-green-800 mb-2">Description:</h5>
                            <div className="text-gray-700 text-sm">
                              {article.description.length > 300 ? `${article.description.substring(0, 300)}...` : article.description}
                            </div>
                          </div>
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h5 className="font-semibold text-blue-800 mb-2">Content:</h5>
                            <div className="text-gray-700 text-sm">
                              {article.content.length > 300 ? `${article.content.substring(0, 300)}...` : article.content}
                            </div>
                          </div>
                          <div className="p-4 bg-yellow-50 rounded-lg">
                            <h5 className="font-semibold text-yellow-800 mb-2">Social Teaser:</h5>
                            <div className="text-gray-700 text-sm italic">
                              "{article.socialTeaser}"
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <h5 className="font-semibold text-purple-800 mb-2">SEO Focus:</h5>
                            <div className="text-purple-700 text-sm">{article.seoFocus}</div>
                          </div>
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <h5 className="font-semibold text-gray-800 mb-2">Tags:</h5>
                            <div className="text-gray-700 text-sm">
                              {article.tags.join(', ')}
                            </div>
                          </div>
                          <div className="p-4 bg-indigo-50 rounded-lg">
                            <h5 className="font-semibold text-indigo-800 mb-2">Expected Performance:</h5>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="text-indigo-700">
                                Views: {article.metrics.plannedViews.toLocaleString()}
                              </div>
                              <div className="text-indigo-700">
                                Engagement: {article.metrics.expectedEngagement}%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                        Created: {article.createdAt.toLocaleDateString()} •
                        Word Count: {article.wordCount} •
                        Type: {article.type}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Week {currentWebsiteWeek} Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{currentWeekData?.articles.length || 0}</div>
              <div className="text-sm text-gray-600">Total Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{weekCompletedTasks}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {currentWeekData?.articles.reduce((acc, article) => acc + article.metrics.plannedViews, 0).toLocaleString() || 0}
              </div>
              <div className="text-sm text-gray-600">Total Planned Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {currentWeekData ? (currentWeekData.articles.reduce((acc, article) => acc + article.metrics.expectedEngagement, 0) / currentWeekData.articles.length).toFixed(1) : 0}%
              </div>
              <div className="text-sm text-gray-600">Avg Expected Engagement</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLinkedIn = () => {
    const currentWeekData = linkedInContent[`week${currentLinkedInWeek}`];
    const weekCompletedTasks = completedLinkedInTasks.filter(task => task.includes(`week${currentLinkedInWeek}`)).length;
    
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">LinkedIn Strategy</h2>
          <p className="text-blue-200">Professional thought leadership and industry analysis</p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💼 12-Article LinkedIn Strategy</h2>
          <p className="text-blue-800 font-medium mb-4">
            Week {currentLinkedInWeek}: Professional thought leadership content for business leaders
          </p>
          
          <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-blue-800">Week {currentLinkedInWeek} Progress</h3>
              <div className="text-sm text-blue-700">
                {weekCompletedTasks}/{currentWeekData?.length || 0} articles completed
              </div>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${currentWeekData ? (weekCompletedTasks / currentWeekData.length) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setCurrentLinkedInWeek(Math.max(1, currentLinkedInWeek - 1))}
            disabled={currentLinkedInWeek === 1}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
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
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentLinkedInWeek(Math.min(4, currentLinkedInWeek + 1))}
            disabled={currentLinkedInWeek === 4}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <span>Next Week</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => addNewLinkedInArticle(`week${currentLinkedInWeek}`)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Article</span>
          </button>
          <button
            onClick={() => exportLinkedInWeekData(`week${currentLinkedInWeek}`)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export Week</span>
          </button>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Weekly LinkedIn Articles</h3>
          {currentWeekData?.map(article => {
            const taskId = `week${currentLinkedInWeek}-article${article.id}-linkedin`;
            const isCompleted = completedLinkedInTasks.includes(taskId);
            const isEditing = editingLinkedInArticle === article.id;
            return (
              <div key={article.id} className="bg-white border rounded-lg shadow-sm">
                <div className="p-4 border-b bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleLinkedInTask(taskId)}
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                          isCompleted
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {isCompleted && <CheckCircle className="w-4 h-4" />}
                      </button>
                      <div className="w-6 h-6 bg-blue-700 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                        in
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Article {article.id}</span>
                        <span className="ml-2 text-blue-700 text-sm font-medium">{article.type}</span>
                        <span className="ml-2 text-gray-500 text-sm">({article.wordCount})</span>
                        <span className={`ml-2 px-2 py-1 rounded text-xs ${
                          article.status === 'published' ? 'bg-green-100 text-green-800' :
                          article.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {article.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingLinkedInArticle(isEditing ? null : article.id)}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => copyToClipboard(article.title + "\n\n" + article.keyPoints.join("\n"))}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Copy Content"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => duplicateLinkedInArticle(`week${currentLinkedInWeek}`, article.id)}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Duplicate"
                      >
                        <Share className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteLinkedInArticle(`week${currentLinkedInWeek}`, article.id)}
                        className="p-2 hover:bg-gray-200 rounded text-red-500"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Title</label>
                          <input
                            type="text"
                            value={article.title}
                            onChange={(e) => updateLinkedInArticle(`week${currentLinkedInWeek}`, article.id, { title: e.target.value })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Type</label>
                          <select
                            value={article.type}
                            onChange={(e) => updateLinkedInArticle(`week${currentLinkedInWeek}`, article.id, { type: e.target.value })}
                            className="w-full p-2 border rounded"
                          >
                            <option value="Thought Leadership">Thought Leadership</option>
                            <option value="Business Analysis">Business Analysis</option>
                            <option value="Pattern Analysis">Pattern Analysis</option>
                            <option value="Economic Analysis">Economic Analysis</option>
                            <option value="Strategic Analysis">Strategic Analysis</option>
                            <option value="Business Case">Business Case</option>
                            <option value="Framework Development">Framework Development</option>
                            <option value="Systems Analysis">Systems Analysis</option>
                            <option value="Strategic Tool">Strategic Tool</option>
                            <option value="Vision Piece">Vision Piece</option>
                            <option value="Business Strategy">Business Strategy</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Audience</label>
                          <input
                            type="text"
                            value={article.audience}
                            onChange={(e) => updateLinkedInArticle(`week${currentLinkedInWeek}`, article.id, { audience: e.target.value })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Word Count</label>
                          <input
                            type="text"
                            value={article.wordCount}
                            onChange={(e) => updateLinkedInArticle(`week${currentLinkedInWeek}`, article.id, { wordCount: e.target.value })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Key Points (one per line)</label>
                        <textarea
                          value={article.keyPoints.join("\n")}
                          onChange={(e) => updateLinkedInArticle(`week${currentLinkedInWeek}`, article.id, { keyPoints: e.target.value.split("\n").filter(point => point.trim()) })}
                          className="w-full h-32 p-3 border rounded"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Call to Action</label>
                          <input
                            type="text"
                            value={article.cta}
                            onChange={(e) => updateLinkedInArticle(`week${currentLinkedInWeek}`, article.id, { cta: e.target.value })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Engagement Prompt</label>
                          <input
                            type="text"
                            value={article.engagement}
                            onChange={(e) => updateLinkedInArticle(`week${currentLinkedInWeek}`, article.id, { engagement: e.target.value })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Status</label>
                          <select
                            value={article.status}
                            onChange={(e) => updateLinkedInArticle(`week${currentLinkedInWeek}`, article.id, { status: e.target.value })}
                            className="w-full p-2 border rounded"
                          >
                            <option value="draft">Draft</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="published">Published</option>
                          </select>
                        </div>
                        <div className="flex items-end">
                          <button
                            onClick={() => setEditingLinkedInArticle(null)}
                            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`${isCompleted ? 'opacity-60' : ''}`}>
                      <h4 className={`text-xl font-bold mb-3 ${isCompleted ? 'line-through' : ''}`}>
                        {article.title}
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h5 className="font-semibold text-blue-800 mb-2">Key Points:</h5>
                            <ul className="text-gray-700 text-sm space-y-1">
                              {article.keyPoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h5 className="font-semibold text-green-800 mb-2">Call to Action:</h5>
                            <p className="text-green-700 text-sm">{article.cta}</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <h5 className="font-semibold text-purple-800 mb-2">Audience:</h5>
                            <div className="text-purple-700 text-sm">{article.audience}</div>
                          </div>
                          <div className="p-4 bg-yellow-50 rounded-lg">
                            <h5 className="font-semibold text-yellow-800 mb-2">Engagement Prompt:</h5>
                            <div className="text-yellow-700 text-sm">{article.engagement}</div>
                          </div>
                          <div className="p-4 bg-indigo-50 rounded-lg">
                            <h5 className="font-semibold text-indigo-800 mb-2">Expected Performance:</h5>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="text-indigo-700">
                                Views: {article.metrics.plannedViews.toLocaleString()}
                              </div>
                              <div className="text-indigo-700">
                                Engagement: {article.metrics.expectedEngagement}%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                        Created: {article.createdAt.toLocaleDateString()} •
                        Word Count: {article.wordCount} •
                        Type: {article.type}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Week {currentLinkedInWeek} Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{currentWeekData?.length || 0}</div>
              <div className="text-sm text-gray-600">Total Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{weekCompletedTasks}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {currentWeekData?.reduce((acc, article) => acc + article.metrics.plannedViews, 0).toLocaleString() || 0}
              </div>
              <div className="text-sm text-gray-600">Total Planned Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {currentWeekData ? (currentWeekData.reduce((acc, article) => acc + article.metrics.expectedEngagement, 0) / currentWeekData.length).toFixed(1) : 0}%
              </div>
              <div className="text-sm text-gray-600">Avg Expected Engagement</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Management System</h1>
          <p className="text-gray-600">Manage your multi-platform content strategy</p>
        </header>

        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab('youtube')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === 'youtube'
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            YouTube
          </button>
          <button
            onClick={() => setActiveTab('facebook')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === 'facebook'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Facebook
          </button>
          <button
            onClick={() => setActiveTab('website')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === 'website'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Website
          </button>
          <button
            onClick={() => setActiveTab('linkedin')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === 'linkedin'
                ? 'bg-blue-700 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            LinkedIn
          </button>
        </div>

        <main>
          {activeTab === 'youtube' && renderYoutube()}
          {activeTab === 'facebook' && renderFacebook()}
          {activeTab === 'website' && renderWebsite()}
          {activeTab === 'linkedin' && renderLinkedIn()}
        </main>
      </div>
    </div>
  );
};

export default ContentManagementSystem;