'use client';

import {useState} from 'react';
import Link from 'next/link';
import {Menu, X, Sun, Moon, Globe} from 'lucide-react';
import {useTheme} from '@/contexts/ThemeContext';
import {useI18n} from '@/contexts/I18nContext';

export default function Header() {
    const {theme, toggleTheme} = useTheme();
    const {t, language, changeLanguage} = useI18n();
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <header className="w-full z-50 bg-light-background dark:bg-dark-background backdrop-blur-md shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <Link href="/"
                      className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary hover:text-light-accent-purple dark:hover:text-dark-accent-purple transition">
                    {t('header.brand')}
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    <div className="relative">
                        <button
                            onClick={() => setLanguageMenuOpen(prev => !prev)}
                            className="p-2 rounded-full hover:bg-light-card dark:hover:bg-dark-card transition mr-2"
                            aria-label={t('header.language')}
                        >
                            <Globe className="text-light-text-secondary dark:text-dark-text-secondary"/>
                        </button>
                        {languageMenuOpen && (
                            <div
                                className="absolute right-0 mt-2 w-48 rounded-lg shadow-sm ring-1 ring-black bg-light-card dark:bg-dark-card">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    <button
                                        className={`block px-4 py-2 text-sm w-full text-left ${
                                            language === 'en'
                                                ? 'text-light-accent-purple dark:text-dark-accent-purple font-medium'
                                                : 'text-light-text-primary dark:text-dark-text-primary'
                                        }`}
                                        onClick={() => {
                                            changeLanguage('en');
                                            setLanguageMenuOpen(false);
                                        }}
                                        role="menuitem"
                                    >
                                        {t('header.languageEN')}
                                    </button>
                                    <button
                                        className={`block px-4 py-2 text-sm w-full text-left ${
                                            language === 'pt'
                                                ? 'text-light-accent-purple dark:text-dark-accent-purple font-medium'
                                                : 'text-light-text-primary dark:text-dark-text-primary'
                                        }`}
                                        onClick={() => {
                                            changeLanguage('pt');
                                            setLanguageMenuOpen(false);
                                        }}
                                        role="menuitem"
                                    >
                                        {t('header.languagePT')}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-light-card dark:hover:bg-dark-card transition"
                    >
                        {theme === 'dark' ? <Sun className="text-yellow-400"/> :
                            <Moon className="text-light-text-secondary dark:text-dark-text-secondary"/>}
                    </button>
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setLanguageMenuOpen(prev => !prev)}
                        className="p-2 mr-2 rounded-full hover:bg-light-card dark:hover:bg-dark-card transition"
                        aria-label={t('header.language')}
                    >
                        <Globe className="text-light-text-secondary dark:text-dark-text-secondary"/>
                    </button>
                    <button onClick={toggleTheme}
                            className="p-2 mr-2 rounded-full hover:bg-light-card dark:hover:bg-dark-card transition">
                        {theme === 'dark' ? <Sun className="text-yellow-400"/> :
                            <Moon className="text-light-text-secondary dark:text-dark-text-secondary"/>}
                    </button>
                    <button onClick={toggleMenu}
                            className="p-2 rounded-md text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition">
                        {menuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </div>
        </header>
    );
}