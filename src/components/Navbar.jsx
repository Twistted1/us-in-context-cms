import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, 
  Rss, 
  StickyNote, 
  Calendar, 
  Twitter, 
  Instagram, 
  Clapperboard, 
  Linkedin 
} from 'lucide-react';

const navItems = [
    { name: 'Overview', to: '/', icon: LayoutGrid },
    { name: 'Projects', to: '/projects', icon: Rss },
    { name: 'Notes', to: '/notes', icon: StickyNote },
    { name: 'Calendar', to: '/calendar', icon: Calendar },
    { name: 'X-Twitter', to: '/x-twitter', icon: Twitter },
    { name: 'Instagram', to: '/instagram', icon: Instagram },
    { name: 'TikTok', to: '/tiktok', icon: Clapperboard },
    { name: 'LinkedIn', to: '/linkedin', icon: Linkedin },
];

const Navbar = () => {
    const location = useLocation();

    return (
        <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Left side: Main links */}
                <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-bold text-gray-800">Us In Context</h1>
                    <div className="hidden md:flex items-center space-x-1 bg-gray-100 p-1 rounded-lg">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                className={({ isActive }) =>
                                    `flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                                    isActive ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-200'
                                    }`
                                }
                            >
                                <item.icon className="w-4 h-4 mr-2" />
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Right side: CMS link */}
                <div className="flex items-center">
                    {/* THIS IS THE LINE THAT WAS CHANGED */}
                    <NavLink to="/cms" className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}>
                        Content Management System
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;