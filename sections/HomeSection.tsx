import Section from "@/components/Section";
import {AnimatePresence, motion} from "framer-motion";
import React from "react";
import {useI18n} from "@/contexts/I18nContext";
import {Mail} from "lucide-react";

import {Variant} from "framer-motion";

type HomeProps = {
    containerVariants: {
        hidden: Variant;
        visible: Variant;
    },
    textChangeVariants: {
        enter: Variant;
        center: Variant;
        exit: Variant;
    },
    fadeInVariants: {
        hidden: Variant;
        visible: Variant;
    }
}

const HomeSection = ({
                         containerVariants,
                         textChangeVariants,
                         fadeInVariants,
                     }: HomeProps) => {
    const {t, language} = useI18n();

    return (
        <Section name={'home'}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col items-center justify-center w-full h-screen p-4"
            >
                <motion.div
                    variants={fadeInVariants}
                    className="flex flex-col items-center justify-center"
                >
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`home-title-${language}`}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={textChangeVariants}
                            className="text-4xl font-bold text-center text-light-text dark:text-dark-text"
                        >
                            {t('home.title')}
                        </motion.h1>
                        <motion.p
                            key={`home-description-${language}`}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={textChangeVariants}
                            className="mt-4 text-lg text-center text-light-text dark:text-dark-text"
                        >
                            {t('home.description')}
                        </motion.p>
                    </AnimatePresence>

                    <button
                        className="mt-6 px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 flex items-center"
                        onClick={() => window.location.href = `mailto:${t('page.email')}`}
                    >
                        <Mail className="mr-2" size={20} />
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`page-contact-${language}`}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={textChangeVariants}
                            >
                                {t('page.contact')}
                            </motion.p>
                        </AnimatePresence>
                    </button>
                </motion.div>
            </motion.div>
        </Section>
    )
}

export default HomeSection;
