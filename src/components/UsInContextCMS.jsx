import React, { useState, useMemo, useCallback } from 'react';
import { Twitter, Instagram, Facebook, Linkedin, Globe, Youtube, Clapperboard, CheckCircle, Download, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

const UsInContextCMS = () => {
    const [activeTab, setActiveTab] = useState('X-Twitter');
    const [completedTasks, setCompletedTasks] = useState([]);
    
    const [currentWeeks, setCurrentWeeks] = useState({
        'X-Twitter': 1, 'Instagram': 1, 'Facebook': 1, 'LinkedIn': 1,
        'Website': 1, 'YouTube': 1, 'TikTok': 1,
    });

    const strategies = useMemo(() => ({
        'X-Twitter': {
            week1: { day1: "Post 1 about economic indicators", day2: "Post 2 engaging question", day3: "Post 3 myth busting", day4: "Post 4 data visualization", day5: "Post 5 expert quote", day6: "Post 6 weekend reading link", day7: "Post 7 weekly summary" },
            week2: { day1: "Post 1 on inflation", day2: "Post 2 poll on interest rates", day3: "Post 3 explaining stagflation", day4: "Post 4 chart of the day", day5: "Post 5 success story", day6: "Post 6 behind-the-scenes", day7: "Post 7 looking ahead" },
            week3: { day1: "Post 1 on fiscal policy", day2: "Post 2 'what if' scenario", day3: "Post 3 common misconception", day4: "Post 4 historical data", day5: "Post 5 industry leader insight", day6: "Post 6 fun fact Friday", day7: "Post 7 week in review" },
            week4: { day1: "Post 1 on trade deficits", day2: "Post 2 ask me anything", day3: "Post 3 debunking a theory", day4: "Post 4 infographic", day5: "Post 5 user-generated content feature", day6: "Post 6 personal finance tip", day7: "Post 7 final thoughts of the month" }
        },
        'Instagram': {
            week1: { post1: "Carousel on UK economy basics", post2: "Reel explaining GDP", post3: "Story Q&A", post4: "Infographic on employment rates", post5: "Quote graphic", post6: "Behind-the-scenes of content creation", post7: "Weekly roundup post" },
            week2: { post1: "Carousel on inflation", post2: "Reel simplifying interest rates", post3: "Story poll", post4: "Infographic on housing market", post5: "User-submitted question answer", post6: "Meet the team post", post7: "Highlights of the week" },
            week3: { post1: "Carousel on government spending", post2: "Reel on supply chains", post3: "Story 'this or that'", post4: "Infographic on renewable energy investment", post5: "Collaborator shout-out", post6: "A day in the life story", post7: "Preview of next week's content" },
            week4: { post1: "Carousel on global trade", post2: "Reel on currency exchange", post3: "Story AMA with an expert", post4: "Infographic on UK tech sector growth", post5: "Testimonial graphic", post6: "Throwback Thursday to an old article", post7: "Month's top content summary" }
        },
        'Facebook': {
            week1: { post1: "Link to website article with discussion prompt", post2: "Short video on economic indicators", post3: "Question post to drive engagement", post4: "Share a surprising statistic graphic", post5: "Community spotlight", post6: "Long-form text post with personal insight", post7: "Weekly summary and discussion" },
            week2: { post1: "Link to inflation article", post2: "Video explaining fiscal vs monetary policy", post3: "Poll on consumer confidence", post4: "Share a relevant news article and ask for opinions", post5: "Fan of the week", post6: "Live Q&A announcement", post7: "Recap and thank you to the community" },
            week3: { post1: "Link to article on UK's budget", post2: "Video case study", post3: "Fill-in-the-blank post", post4: "Chart showing historical trends", post5: "Behind-the-scenes video", post6: "Ask for content suggestions", post7: "Weekly highlights and user comments feature" },
            week4: { post1: "Link to article on future trends", post2: "Video interview snippet", post3: "'Caption this' economic cartoon", post4: "Share a major report with a simplified summary", post5: "Post celebrating a milestone", post6: "End of month live Q&A session", post7: "Monthly review and what's next" }
        },
        'LinkedIn': {
            week1: { post1: "Article summary on UK's economic outlook", post2: "Thought leadership piece on industry trends", post3: "Data analysis of a recent report" },
            week2: { post1: "Deep dive into a specific policy change", post2: "Professional insights on market volatility", post3: "Company news/milestone" },
            week3: { post1: "Analysis of a successful economic strategy", post2: "Networking prompt for professionals in the field", post3: "Case study of a UK business" },
            week4: { post1: "Future-focused article on AI in economics", post2: "Career advice for economists", post3: "End-of-month analysis and predictions" }
        },
        'Website': {
            week1: { article1: "The UK's Q3 Economic Performance", article2: "Understanding Inflation: A Guide for Beginners", article3: "Key Industries to Watch This Year" },
            week2: { article1: "How Government Policy is Shaping the Market", article2: "A Deep Dive into the UK Housing Crisis", article3: "The Rise of the Gig Economy" },
            week3: { article1: "Sustainable Investment: A UK Perspective", article2: "The Impact of Brexit: An Updated Analysis", article3: "Technological Disruption in Traditional Finance" },
            week4: { article1: "Economic Predictions for the Coming Year", article2: "The Psychology of Consumer Spending", article3: "UK's Role in the Global Economy: A 2025 Outlook" }
        },
        'YouTube': {
            week1: { video1: "Explainer: What is GDP and Why Does It Matter?", video2: "Interview with a UK Economist", video3: "Whiteboard Session: The Bank of England's Role" },
            week2: { video1: "Visualizing Inflation: A Data Story", video2: "Street Interviews: What Do People Think About the Economy?", video3: "A Brief History of the British Pound" },
            week3: { video1: "Top 5 Economic Myths Debunked", video2: "A Look Inside a Thriving UK Startup", video3: "How Supply Chains REALLY Work" },
            week4: { video1: "Economic Forecasting for Dummies", video2: "A Conversation with a Financial Advisor", video3: "2025 UK Economic Preview" }
        },
        'TikTok': {
            week1: { video1: "15-second explainer on inflation." }, week2: { video1: "Quick tip for spotting economic trends." },
            week3: { video1: "One economic term you should know." }, week4: { video1: "Surprising fact about the UK economy." }
        }
    }), []);

    const platformData = useMemo(() => Object.fromEntries(
        Object.entries(strategies).map(([platform, content]) => [
            platform, {
                content,
                total: Object.values(content).reduce((acc, week) => acc + Object.keys(week).length, 0),
                weeks: Object.keys(content).length,
            }
        ])
    ), [strategies]);

    const handleWeekChange = useCallback((platform, direction) => {
        setCurrentWeeks(prev => ({ ...prev, [platform]: Math.max(1, Math.min(platformData[platform].weeks, prev[platform] + direction)) }));
    }, [platformData]);

    const toggleTask = useCallback((taskId) => {
        setCompletedTasks(prev => prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]);
    }, []);

    const getProgress = useCallback((platform) => {
        const platformInfo = platformData[platform];
        if (!platformInfo || platformInfo.total === 0) return 0;
        const completedPlatformTasks = completedTasks.filter(taskId => taskId.startsWith(`${platform}-`));
        return (completedPlatformTasks.length / platformInfo.total) * 100;
    }, [completedTasks, platformData]);

    const renderWeekNavigation = (platform) => {
        const { weeks } = platformData[platform];
        const currentWeek = currentWeeks[platform];
        if (weeks <= 1) return null;
        return (
            <div className="flex items-center justify-center space-x-4 my-4">
                <button onClick={() => handleWeekChange(platform, -1)} disabled={currentWeek === 1} className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"><ArrowLeft size={16} /></button>
                <span className="font-semibold">Week {currentWeek}</span>
                <button onClick={() => handleWeekChange(platform, 1)} disabled={currentWeek === weeks} className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"><ArrowRight size={16} /></button>
            </div>
        );
    };

    const renderContent = () => {
        const platformInfo = platformData[activeTab];
        if (!platformInfo) return null;
        const currentWeek = currentWeeks[activeTab];
        const weekContent = platformInfo.content[`week${currentWeek}`];
        if (!weekContent) return <div className="text-center text-gray-500 py-8">No content for this week.</div>;
        return (
            <div>
                {renderWeekNavigation(activeTab)}
                <ul className="space-y-3">
                    {Object.entries(weekContent).map(([key, value]) => {
                        const taskId = `${activeTab}-week${currentWeek}-${key}`;
                        const isCompleted = completedTasks.includes(taskId);
                        return (
                            <li key={taskId} className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-between">
                                <div className="flex items-center">
                                    <button onClick={() => toggleTask(taskId)} className="mr-4 flex-shrink-0">
                                        <CheckCircle size={24} className={`transition-colors ${isCompleted ? "text-green-500" : "text-gray-300 hover:text-gray-400"}`} />
                                    </button>
                                    <div>
                                        <span className="font-bold text-gray-600 uppercase text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                        <p className="text-gray-800">{value}</p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };
    
    const tabs = useMemo(() => [
        { name: 'X-Twitter', icon: Twitter }, { name: 'Instagram', icon: Instagram }, { name: 'Facebook', icon: Facebook },
        { name: 'LinkedIn', icon: Linkedin }, { name: 'Website', icon: Globe }, { name: 'YouTube', icon: Youtube },
        { name: 'TikTok', icon: Clapperboard },
    ], []);
    
    const { totalTasks, totalProgress } = useMemo(() => {
        const total = Object.values(platformData).reduce((sum, p) => sum + p.total, 0);
        const progress = total === 0 ? 0 : (completedTasks.length / total) * 100;
        return { totalTasks: total, totalProgress: progress };
    }, [completedTasks, platformData]);

    return (
      <div className="bg-gray-50 min-h-screen font-sans">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Us In Context - CMS</h1>
                <p className="text-gray-500 mt-1">Content Dashboard for all social media strategies.</p>
            </header>

            <div className="mb-8 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                <h2 className="text-lg font-semibold mb-2 text-gray-700">Overall Progress ({completedTasks.length} / {totalTasks})</h2>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-600 h-4 rounded-full transition-all duration-500" style={{ width: `${totalProgress}%` }}></div>
                </div>
            </div>

            <div className="md:flex md:space-x-8">
                <aside className="md:w-1/4 mb-8 md:mb-0">
                    <h3 className="text-lg font-semibold mb-3 text-gray-700">Platforms</h3>
                    <div className="space-y-2">
                        {tabs.map(tab => (
                            <button
                                key={tab.name} onClick={() => setActiveTab(tab.name)}
                                className={`w-full text-left p-3 rounded-md flex items-center justify-between transition-all duration-200 ${activeTab === tab.name ? 'bg-blue-600 text-white shadow' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
                            >
                                <div className="flex items-center">
                                    <tab.icon size={20} className="mr-3" />
                                    <span className="font-semibold">{tab.name}</span>
                                </div>
                                <span className="text-xs font-mono">{Math.round(getProgress(tab.name))}%</span>
                            </button>
                        ))}
                    </div>
                    
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-3 text-gray-700">Quick Actions</h3>
                        <div className="space-y-2">
                            <button className="w-full text-left p-3 rounded-md flex items-center bg-white hover:bg-gray-100 text-gray-700 transition-all duration-200 border">
                                <Download size={20} className="mr-3 text-blue-500"/> Export All to CSV
                            </button>
                            <button className="w-full text-left p-3 rounded-md flex items-center bg-white hover:bg-gray-100 text-gray-700 transition-all duration-200 border">
                                <Calendar size={20} className="mr-3 text-green-500"/> View Calendar (soon)
                            </button>
                        </div>
                    </div>
                </aside>

                <main className="md:w-3/4">
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
                        {renderContent()}
                    </div>
                </main>
            </div>
        </div>
      </div>
    );
};

export default UsInContextCMS;