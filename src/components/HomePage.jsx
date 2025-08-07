import React, { useEffect } from 'react';

// This component is self-contained. You can save it as e.g., src/pages/HomePage.jsx
// and import it into your main App.jsx file to use it.
// Ensure you have Tailwind CSS configured in your Vite project.

// Reusable component for fade-in-on-scroll animations
const AnimatedSection = ({ children, className = '' }) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-700 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </div>
  );
};


// Main Component
export default function UsInContextPage() {
    useEffect(() => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const handleMenuToggle = () => mobileMenu.classList.toggle('hidden');

        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', handleMenuToggle);
        }

        return () => {
            if (mobileMenuButton) {
                mobileMenuButton.removeEventListener('click', handleMenuToggle);
            }
        };
    }, []);

    return (
        <div className="bg-white font-sans text-[#111827] antialiased">
            {/* HEADER & NAVIGATION */}
            <header id="navbar" className="bg-white/95 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="flex items-center space-x-3">
                        <svg className="w-10 h-10" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 13.5C23.9853 13.5 26 11.4853 26 9C26 6.51472 23.9853 4.5 21.5 4.5C19.0147 4.5 17 6.51472 17 9C17 11.4853 19.0147 13.5 21.5 13.5Z" fill="#A9B4C2"/>
                            <path d="M26.6667 35.5C29.4286 35.5 31.6667 30.3741 31.6667 24C31.6667 17.6259 29.4286 12.5 26.6667 12.5C23.9048 12.5 21.6667 17.6259 21.6667 24C21.6667 30.3741 23.9048 35.5 26.6667 35.5Z" fill="#2E3A48"/>
                            <path d="M16.3333 35.5C19.0952 35.5 21.3333 30.3741 21.3333 24C21.3333 17.6259 19.0952 12.5 16.3333 12.5C13.5714 12.5 11.3333 17.6259 11.3333 24C11.3333 30.3741 13.5714 35.5 16.3333 35.5Z" fill="#A9B4C2" fillOpacity="0.8"/>
                        </svg>
                        <div className="flex flex-col justify-center">
                            <div className="text-xl font-bold text-gray-900 tracking-wide leading-tight">Us In Context</div>
                            <div className="text-[10px] text-gray-500 tracking-widest leading-tight">CONNECTING PERSPECTIVES</div>
                        </div>
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="nav-link text-gray-500 hover:text-black">About</a>
                        <a href="#latest" className="nav-link text-gray-500 hover:text-black">Latest Articles</a>
                        <a href="#premium" className="nav-link text-gray-500 hover:text-black font-medium">Premium</a>
                        <a href="#contact" className="nav-link text-gray-500 hover:text-black">Contact</a>
                    </div>
                    <button id="mobile-menu-button" className="md:hidden text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </nav>
                <div id="mobile-menu" className="hidden md:hidden border-t border-gray-200">
                    <a href="#about" className="block py-3 px-6 text-sm hover:bg-gray-50">About</a>
                    <a href="#latest" className="block py-3 px-6 text-sm hover:bg-gray-50">Latest Articles</a>
                    <a href="#premium" className="block py-3 px-6 text-sm hover:bg-gray-50 font-medium">Premium</a>
                    <a href="#contact" className="block py-3 px-6 text-sm hover:bg-gray-50">Contact</a>
                </div>
            </header>

            <main>
                {/* HERO SECTION */}
                <section id="home" className="bg-black py-24 md:py-40 text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto font-serif">Insightful Analysis for the Engaged Citizen.</h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">We move beyond the headlines to explore the underlying systems shaping our society with clarity and realism.</p>
                        <a href="#premium" className="mt-8 inline-block bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition-colors">Go Premium</a>
                    </div>
                </section>

                {/* LATEST ARTICLES SECTION */}
                <AnimatedSection>
                    <section id="latest" className="py-20 md:py-28 bg-white">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif">Latest Analysis</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <a href="#" className="article-card block bg-white rounded-lg overflow-hidden border border-gray-200">
                                    <div className="overflow-hidden"><img src="https://images.unsplash.com/photo-1503252947299-4193b6d69526?q=80&w=1920&auto=format&fit=crop" alt="Industrial smokestacks" className="w-full h-48 object-cover" /></div>
                                    <div className="p-6">
                                        <p className="text-sm font-semibold text-blue-600 mb-2">ECONOMIC COMMENTARY</p>
                                        <h3 className="text-xl font-bold mb-3 font-serif">The Hidden Costs of Unchecked Corporate Power</h3>
                                        <p className="text-gray-600">An examination of how profit-driven strategies impact society beyond the balance sheet.</p>
                                    </div>
                                </a>
                                <a href="#" className="article-card block bg-white rounded-lg overflow-hidden border border-gray-200">
                                    <div className="overflow-hidden"><img src="https://images.unsplash.com/photo-1528642474498-1af5a7220263?q=80&w=1920&auto=format&fit=crop" alt="Government building" className="w-full h-48 object-cover" /></div>
                                    <div className="p-6">
                                        <p className="text-sm font-semibold text-red-600 mb-2">POLITICAL INSIGHTS</p>
                                        <h3 className="text-xl font-bold mb-3 font-serif">The Erosion of Democratic Norms</h3>
                                        <p className="text-gray-600">Delving into the subtle and overt shifts threatening the foundations of governance.</p>
                                    </div>
                                </a>
                                <a href="#" className="article-card block bg-white rounded-lg overflow-hidden border border-gray-200">
                                    <div className="overflow-hidden"><img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1920&auto=format&fit=crop" alt="Forest landscape" className="w-full h-48 object-cover" /></div>
                                    <div className="p-6">
                                        <p className="text-sm font-semibold text-green-600 mb-2">SOCIAL RESPONSIBILITY</p>
                                        <h3 className="text-xl font-bold mb-3 font-serif">Corporate Accountability in Climate Action</h3>
                                        <p className="text-gray-600">Who is truly responsible for protecting our planet, and who is prioritizing profit?</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>
                
                {/* PREMIUM SECTION */}
                <AnimatedSection>
                    <section id="premium" className="py-20 md:py-28 bg-gray-50">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Go Premium. Get Deeper Insights.</h2>
                            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Support independent analysis and unlock exclusive content, in-depth reports, and direct access to our research.</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div className="tier-card border border-gray-200 rounded-lg p-8">
                                    <h3 className="text-xl font-bold mb-2 font-serif">Supporter</h3>
                                    <p className="text-4xl font-bold mb-4">£5<span className="text-lg font-medium text-gray-500">/month</span></p>
                                    <ul className="text-left space-y-3 text-gray-600 mb-8">
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Access to all articles</li>
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Supporter newsletter</li>
                                    </ul>
                                    <a href="#" className="w-full inline-block bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition-colors">Choose Supporter</a>
                                </div>
                                <div className="tier-card border-2 border-blue-600 rounded-lg p-8 relative">
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                                    <h3 className="text-xl font-bold mb-2 font-serif">Premium</h3>
                                    <p className="text-4xl font-bold mb-4">£10<span className="text-lg font-medium text-gray-500">/month</span></p>
                                    <ul className="text-left space-y-3 text-gray-600 mb-8">
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Everything in Supporter</li>
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Exclusive in-depth reports</li>
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Access to data sets</li>
                                    </ul>
                                    <a href="#" className="w-full inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">Choose Premium</a>
                                </div>
                                <div className="tier-card border border-gray-200 rounded-lg p-8">
                                    <h3 className="text-xl font-bold mb-2 font-serif">Partner</h3>
                                    <p className="text-4xl font-bold mb-4">£25<span className="text-lg font-medium text-gray-500">/month</span></p>
                                    <ul className="text-left space-y-3 text-gray-600 mb-8">
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Everything in Premium</li>
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Monthly Q&A sessions</li>
                                        <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Early access to content</li>
                                    </ul>
                                    <a href="#" className="w-full inline-block bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition-colors">Choose Partner</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>
                
                {/* ABOUT SECTION */}
                <AnimatedSection>
                    <section id="about" className="py-20 md:py-28 bg-white">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">About Us In Context</h2>
                            <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-4">
                                <p>People deserve more than just headlines. Us In Context was founded to provide the full story, challenging conventional narratives and exposing the complexities of pressing issues.</p>
                                <p>Our mission is to inform, provoke thought, and foster discussion by shining a light on the injustices and abuses of power impacting individuals and society.</p>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                {/* CONTACT SECTION */}
                <AnimatedSection>
                    <section id="contact" className="py-20 md:py-28 bg-gray-50">
                        <div className="container mx-auto px-6">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="text-left">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Stay Informed.</h2>
                                    <p className="text-gray-600 mb-8 text-lg">Subscribe to our newsletter for the latest public insights, or reach out for partnerships and inquiries.</p>
                                    <div className="space-y-4 text-gray-700">
                                        <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>contact@usincontext.com</p>
                                    </div>
                                </div>
                                <div className="bg-white p-8 rounded-lg shadow-md border">
                                    <form>
                                        <div className="mb-5">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                                            <input type="email" id="email" className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="your.email@example.com" />
                                        </div>
                                        <button type="submit" className="w-full bg-black text-white font-semibold px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </AnimatedSection>
            </main>

            {/* FOOTER */}
            <footer className="bg-white border-t border-gray-200">
                <div className="container mx-auto px-6 py-10">
                    <div className="text-center">
                        <h3 className="font-semibold text-gray-800 mb-4">Connect With Us</h3>
                        <div className="flex justify-center space-x-6">
                            <a href="https://www.youtube.com/@usincontext" target="_blank" rel="noopener noreferrer" title="YouTube" className="social-icon text-gray-500 hover:text-[#FF0000]">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22.96.26 1.47.05.87.06 1.74.06 2.62s0 1.75-.06 2.62c-.04.51-.13 1-.26 1.47-.25.9-.83 1.48-1.73 1.73-.47.13-.96.22-1.47.26-.87.05-1.74.06-2.62.06s-1.75 0-2.62-.06c-.51-.04-1-.13-1.47-.26-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-.96-.26-1.47-.05-.87-.06-1.74-.06-2.62s0-1.75.06-2.62c.04-.51.13-1 .26-1.47.25-.9.83-1.48 1.73-1.73.47-.13.96-.22 1.47-.26.87-.05 1.74-.06 2.62-.06s1.75 0 2.62.06c.51.04 1 .13 1.47.26.9.25 1.48.83 1.73 1.73z"/></svg>
                            </a>
                            <a href="https://www.instagram.com/usincontext" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-icon text-gray-500 hover:text-pink-600">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
                            </a>
                            <a href="https://www.tiktok.com/@usincontext" target="_blank" rel="noopener noreferrer" title="TikTok" className="social-icon text-gray-500 hover:text-black">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.53.02C13.84.01 15.14 0 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.36-4.36-2.02-6.77.22-1.55.63-3.09 1.36-4.44.73-1.35 1.74-2.56 2.99-3.56.83-.68 1.74-1.24 2.65-1.74.9-.49 1.82-.9 2.7-1.32v3.34c-.95.5-1.9 1-2.85 1.5-1.06.57-2.08 1.2-3.04 1.94-1.2 1-2.1 2.27-2.7 3.73-.42 1-1.04 2.4-1.18 3.85-.03.36-.05.72-.05 1.09 0 .7.08 1.39.24 2.08.52 2.2 2.16 4.03 4.2 4.9 2.04.87 4.32.94 6.4.24 2.08-.7 3.72-2.2 4.6-4.1.3-.64.5-1.3.6-1.98.02-.18.03-.36.04-.54v-8.7c-2.1-.2-4.1-.9-5.7-2.2-1.6-1.3-2.6-3.3-2.8-5.3-.1-1 .2-2 .8-2.8.1-.1.2-.2.3-.3z"/></svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
                        <p className="mb-2">&copy; 2025 Us In Context. All Rights Reserved.</p>
                        <div className="space-x-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Terms of Service</a>
                            <a href="#" className="hover:underline">Partnerships & Consulting</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
