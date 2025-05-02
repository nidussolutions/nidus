'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import {Menu, X, Sun, Moon, Globe} from 'lucide-react';
import {useTheme} from '@/contexts/ThemeContext';
import {Language, useI18n} from '@/contexts/I18nContext';
import {motion, AnimatePresence} from 'framer-motion';

export default function Header() {
    const {theme, toggleTheme} = useTheme();
    const {t, language, changeLanguage} = useI18n();
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Close mobile menu if open
            if (menuOpen) {
                setMenuOpen(false);
            }

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            // Update URL without causing a page jump
            window.history.pushState(null, '', `/#${targetId}`);
        }
    };

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            // Check if click is outside language menu
            if (languageMenuOpen && !target.closest('.language-menu-container')) {
                setLanguageMenuOpen(false);
            }

            // Check if click is outside mobile menu and not on the menu toggle button
            if (menuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-toggle')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen, languageMenuOpen]);

    // Animações
    const textChangeVariants = {
        enter: {
            opacity: 0,
            y: 10,
            transition: {duration: 0.2}
        },
        center: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.2}
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: {duration: 0.2}
        }
    };

    const menuVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            y: -10,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 0.3,
                stiffness: 200,
                damping: 20
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: -10,
            transition: {
                duration: 0.2
            }
        }
    };

    const handleLanguageChange = async (newLanguage: Language) => {
        setLanguageMenuOpen(false);
        await new Promise(resolve => setTimeout(resolve, 150));
        changeLanguage(newLanguage);
    };

    return (
        <motion.header
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{type: "spring", stiffness: 100, damping: 20}}
            className="w-full z-50 bg-light-background dark:bg-dark-background backdrop-blur-md shadow-lg fixed top-0 left-0 right-0"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <motion.div
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    <Link href="/"
                          className="text-2xl font-bold   hover:text-light-accent-purple dark:hover:text-dark-accent-purple transition">
                        <motion.span
                            key={language}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.3}}
                        >
                            <div className='flex items-center space-x-2'>
                                <p className="text-[#F27405] dark:text-[#F25C05]">
                                    {t('header.brand').split(' ')[0]}
                                </p>
                                <p className='text-light-text-primary dark:text-dark-text-primary'>
                                    {t('header.brand').split(' ')[1]}{' '}
                                    {t('header.brand').split(' ')[2]}
                                </p>
                            </div>
                        </motion.span>
                    </Link>
                </motion.div>

                <div className="hidden md:flex items-center space-x-6">
                    <nav className="hidden md:flex space-x-8 text-light-text-secondary dark:text-dark-text-secondary">
                        {['services', 'aboutUs', 'contact'].map((item) => (
                            <Link
                                key={item}
                                href={`/#${item}`}
                                className="relative overflow-hidden"
                                onClick={(e) => handleSmoothScroll(e, item)}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={`header-${item}-${language}`}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        variants={textChangeVariants}
                                        className="block hover:text-light-accent-blue dark:hover:text-dark-accent-blue transition-colors"
                                    >
                                        {t(`header.${item}`)}
                                    </motion.span>
                                </AnimatePresence>
                            </Link>
                        ))}
                    </nav>

                    <div className="relative language-menu-container">
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            onClick={() => setLanguageMenuOpen(prev => !prev)}
                            className="p-2 rounded-full hover:bg-light-card dark:hover:bg-dark-card transition mr-2"
                            aria-label={t('header.language')}
                        >
                            <Globe className="text-light-text-secondary dark:text-dark-text-secondary"/>
                        </motion.button>
                        <AnimatePresence>
                            {languageMenuOpen && (
                                <motion.div
                                    variants={menuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="absolute right-0 mt-2 w-48 rounded-lg shadow-sm ring-1 ring-black bg-light-card dark:bg-dark-card z-50"
                                >
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        <motion.button
                                            whileHover={{backgroundColor: "rgba(0,0,0,0.05)"}}
                                            className={`block px-4 py-2 text-sm w-full text-left ${
                                                language === 'en'
                                                    ? 'text-light-accent-purple dark:text-dark-accent-purple font-medium'
                                                    : 'text-light-text-primary dark:text-dark-text-primary'
                                            }`}
                                            onClick={() => handleLanguageChange('en')}
                                            role="menuitem"
                                        >
                                            {t('header.languageEN')}
                                        </motion.button>
                                        <motion.button
                                            whileHover={{backgroundColor: "rgba(0,0,0,0.05)"}}
                                            className={`block px-4 py-2 text-sm w-full text-left ${
                                                language === 'pt'
                                                    ? 'text-light-accent-purple dark:text-dark-accent-purple font-medium'
                                                    : 'text-light-text-primary dark:text-dark-text-primary'
                                            }`}
                                            onClick={() => handleLanguageChange('pt')}
                                            role="menuitem"
                                        >
                                            {t('header.languagePT')}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-light-card dark:hover:bg-dark-card transition"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={theme}
                                initial={{opacity: 0, rotate: -180}}
                                animate={{opacity: 1, rotate: 0}}
                                exit={{opacity: 0, rotate: 180}}
                                transition={{duration: 0.3}}
                            >
                                {theme === 'dark' ? <Sun className="text-yellow-400"/> :
                                    <Moon className="text-light-text-secondary dark:text-dark-text-secondary"/>}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>
                </div>

                <div className="md:hidden flex items-center">
                    <div className="relative language-menu-container">
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            onClick={() => setLanguageMenuOpen(prev => !prev)}
                            className="p-2 mr-2 rounded-full hover:bg-light-card dark:hover:bg-dark-card transition"
                            aria-label={t('header.language')}
                        >
                            <Globe className="text-light-text-secondary dark:text-dark-text-secondary"/>
                        </motion.button>
                        <AnimatePresence>
                            {languageMenuOpen && (
                                <motion.div
                                    variants={menuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="absolute right-0 mt-2 w-48 rounded-lg shadow-sm ring-1 ring-black bg-light-card dark:bg-dark-card z-50"
                                >
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        <motion.button
                                            whileHover={{backgroundColor: "rgba(0,0,0,0.05)"}}
                                            className={`block px-4 py-2 text-sm w-full text-left ${
                                                language === 'en'
                                                    ? 'text-light-accent-purple dark:text-dark-accent-purple font-medium'
                                                    : 'text-light-text-primary dark:text-dark-text-primary'
                                            }`}
                                            onClick={() => handleLanguageChange('en')}
                                            role="menuitem"
                                        >
                                            {t('header.languageEN')}
                                        </motion.button>
                                        <motion.button
                                            whileHover={{backgroundColor: "rgba(0,0,0,0.05)"}}
                                            className={`block px-4 py-2 text-sm w-full text-left ${
                                                language === 'pt'
                                                    ? 'text-light-accent-purple dark:text-dark-accent-purple font-medium'
                                                    : 'text-light-text-primary dark:text-dark-text-primary'
                                            }`}
                                            onClick={() => handleLanguageChange('pt')}
                                            role="menuitem"
                                        >
                                            {t('header.languagePT')}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        onClick={toggleTheme}
                        className="p-2 mr-2 rounded-full hover:bg-light-card dark:hover:bg-dark-card transition"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={theme}
                                initial={{opacity: 0, rotate: -180}}
                                animate={{opacity: 1, rotate: 0}}
                                exit={{opacity: 0, rotate: 180}}
                                transition={{duration: 0.3}}
                            >
                                {theme === 'dark' ? <Sun className="text-yellow-400"/> :
                                    <Moon className="text-light-text-secondary dark:text-dark-text-secondary"/>}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        onClick={toggleMenu}
                        className="p-2 rounded-md text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition menu-toggle"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={menuOpen ? 'close' : 'open'}
                                initial={{opacity: 0, rotate: -180}}
                                animate={{opacity: 1, rotate: 0}}
                                exit={{opacity: 0, rotate: 180}}
                                transition={{duration: 0.3}}
                            >
                                {menuOpen ? <X size={24}/> : <Menu size={24}/>}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        className="md:hidden bg-light-background dark:bg-dark-background border-t border-gray-200 dark:border-gray-700 mobile-menu"
                    >
                        <nav className="flex flex-col p-4 space-y-4">
                            {['services', 'aboutUs', 'contact'].map((item) => (
                                <Link
                                    key={`mobile-${item}`}
                                    href={`/#${item}`}
                                    onClick={(e) => handleSmoothScroll(e, item)}
                                    className="py-2 px-4 text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-card dark:hover:bg-dark-card rounded-md transition-colors"
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={`mobile-header-${item}-${language}`}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            variants={textChangeVariants}
                                        >
                                            {t(`header.${item}`)}
                                        </motion.span>
                                    </AnimatePresence>
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
