'use client';

import {useI18n} from "@/contexts/I18nContext";
import React from "react";
import {motion, AnimatePresence} from "framer-motion";

export default function Home() {
    const {t, language} = useI18n();

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const fadeInVariants = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center min-h-screen justify-center mt-[-5em] p-4 bg-gradient-to-b from-light-background to-light-card dark:from-dark-background dark:to-dark-card"
        >
            <motion.div
                className="flex flex-col items-center justify-center"
                variants={containerVariants}
            >
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={`welcome-${language}`}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={itemVariants}
                        className="text-4xl font-bold text-center bg-gradient-to-r from-light-accent-purple to-light-purple dark:from-dark-purple dark:to-dark-purple-hover bg-clip-text text-transparent"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        {t("page.welcome")}
                    </motion.h1>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.p
                        key={`description-${language}`}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="mt-4 text-lg text-center text-light-text-secondary dark:text-dark-text-secondary"
                    >
                        {t("page.description")}
                    </motion.p>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.p
                        key={`warning-${language}`}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="mt-5 text-lg text-center bg-gradient-to-r from-light-accent-blue to-light-accent-purple dark:from-dark-accent-blue dark:to-dark-accent-purple bg-clip-text text-transparent"
                        whileHover={{
                            scale: 1.02,
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                            }
                        }}
                    >
                        {t("page.warning")}
                    </motion.p>
                </AnimatePresence>

                <motion.div
                    variants={fadeInVariants}
                    className="mt-10"
                >
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`contact-${language}`}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="mt-5 text-lg text-center text-light-text-secondary dark:text-dark-text-secondary"
                        >
                            {t("page.contact")}
                        </motion.p>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`email-${language}`}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="text-lg text-center text-light-text-secondary dark:text-dark-text-secondary"
                        >
                            <motion.a
                                href="mailto:contato@nidussolutions.com"
                                className="bg-gradient-to-r from-light-accent-blue to-light-accent-purple dark:from-dark-accent-blue dark:to-dark-accent-purple bg-clip-text text-transparent inline-block"
                                whileHover={{
                                    scale: 1.1,
                                    transition: {type: "spring", stiffness: 400}
                                }}
                                whileTap={{scale: 0.9}}
                            >
                                {t("page.email")}
                            </motion.a>
                        </motion.p>
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}