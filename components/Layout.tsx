'use client';

import React, { useState, useEffect } from 'react';
import {MotionConfig, motion, AnimatePresence} from 'framer-motion';
import { ChevronUp } from 'lucide-react';

interface Props {
    children: React.ReactNode;
}

export default function Layout({children}: Props) {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className="min-h-screen text-light-text-primary dark:text-dark-text-primary bg-gradient-to-b from-light-background to-light-card dark:from-dark-background dark:to-dark-card">
            <MotionConfig transition={{duration: 0.5}}>
                <motion.main
                    key="page-transition"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="p-6 max-w-5xl mx-auto"
                >
                    <div className="w-full max-w-5xl mx-auto">
                        {children}
                    </div>
                </motion.main>

                <AnimatePresence>
                    {showBackToTop && (
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={scrollToTop}
                            className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 z-50"
                            aria-label="Back to top"
                        >
                            <ChevronUp size={24} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </MotionConfig>
        </div>
    );
}
