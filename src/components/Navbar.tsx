'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-develi-khaki/30 ${scrolled ? 'bg-black shadow-lg' : ''
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-serif font-bold tracking-wider text-white">
                            DEVELİ PİDE KEBAP
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <a
                                href="#home"
                                className="hover:text-develi-gold transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Ana Sayfa
                            </a>
                            <a
                                href="#about"
                                className="hover:text-develi-gold transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Hakkımızda
                            </a>
                            <a
                                href="#specialties"
                                className="hover:text-develi-gold transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Özel Lezzetlerimiz
                            </a>
                            <a
                                href="#menu"
                                className="hover:text-develi-gold transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Menü
                            </a>
                            <a
                                href="#contact"
                                className="bg-develi-khaki text-white hover:bg-opacity-80 transition-all px-4 py-2 rounded-none text-sm font-medium tracking-wide"
                            >
                                İLETİŞİM
                            </a>
                        </div>
                    </div>
                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                        >
                            <i className="fas fa-bars text-xl" suppressHydrationWarning></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`${mobileMenuOpen ? 'block' : 'hidden'
                    } md:hidden bg-black border-t border-develi-khaki/20`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                        href="#home"
                        className="block px-3 py-2 text-base font-medium text-white hover:text-develi-gold"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Ana Sayfa
                    </a>
                    <a
                        href="#about"
                        className="block px-3 py-2 text-base font-medium text-white hover:text-develi-gold"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Hakkımızda
                    </a>
                    <a
                        href="#specialties"
                        className="block px-3 py-2 text-base font-medium text-white hover:text-develi-gold"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Özel Lezzetlerimiz
                    </a>
                    <a
                        href="#menu"
                        className="block px-3 py-2 text-base font-medium text-white hover:text-develi-gold"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Menü
                    </a>
                    <a
                        href="#contact"
                        className="block px-3 py-2 text-base font-medium text-develi-gold"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        İletişim
                    </a>
                </div>
            </div>
        </nav>
    );
}
