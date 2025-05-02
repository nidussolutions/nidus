import Section from "@/components/Section";
import {AnimatePresence, motion} from "framer-motion";
import React from "react";
import {useI18n} from "@/contexts/I18nContext";
import {Building} from "lucide-react";
import Image from "next/image";

import {Variant} from "framer-motion";

type AboutUsProps = {
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

const AboutUs = ({
                     containerVariants,
                     textChangeVariants,
                     fadeInVariants,
                 }: AboutUsProps) => {
    const {t, language} = useI18n();

    const teamMembers = [
        {
            name: 'João Gustavo Bispo',
            role: t('aboutUs.founder_ceo'),
            history: t('aboutUs.founder_ceo_history'),
            imageSrc: '/founders/joao.png'
        },
        {
            name: 'Thiago Viana',
            role: t('aboutUs.founder_cmo'),
            history: t('aboutUs.founder_cmo_history'),
            imageSrc: '/founders/thiago.png'
        }
    ];

    return (
        <Section name={'aboutUs'}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col mt-2 sm:mt-4 items-center justify-center w-full p-4 sm:p-6 md:p-8 py-6 sm:py-8 md:py-10"
            >
                <motion.div
                    variants={fadeInVariants}
                    className="flex flex-col items-center justify-center w-full max-w-6xl"
                >
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`aboutUs-title-${language}`}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={textChangeVariants}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-light-text dark:text-dark-text mb-8 sm:mb-10 md:mb-12"
                        >
                            {t('aboutUs.title')}
                        </motion.h1>
                    </AnimatePresence>

                    <div className="mb-16 w-full">
                        <div className="flex items-center mb-4">
                            <div className="mr-3 p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                                <Building size={24} className="text-blue-500 dark:text-blue-300"/>
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={`aboutUs-company-${language}`}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    variants={textChangeVariants}
                                    className="text-xl sm:text-2xl font-semibold text-light-text dark:text-dark-text">
                                    {t('aboutUs.company_title')}
                                </motion.h2>
                            </AnimatePresence>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`aboutUs-company-desc-${language}`}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={textChangeVariants}
                                className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                                {t('aboutUs.company_description')}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={`aboutUs-team-${language}`}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={textChangeVariants}
                            className="text-xl sm:text-2xl font-semibold text-light-text dark:text-dark-text mb-6 sm:mb-8">
                            {t('aboutUs.team_title')}
                        </motion.h2>
                    </AnimatePresence>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {teamMembers.map((member) => (
                            <motion.div
                                key={`member-${member.name}`}
                                variants={fadeInVariants}
                                className="bg-white dark:bg-gray-800 p-4 sm:p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col items-center mb-4">
                                    <div className="flex flex-col sm:flex-row items-center mb-2">
                                        <div className="mb-3 sm:mb-0 sm:mr-3 overflow-hidden rounded-full w-16 h-16 flex">
                                            <Image
                                                src={member.imageSrc}
                                                alt={member.name}
                                                width={64}
                                                height={64}
                                                className="object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.onerror = null;
                                                    target.src = '/vercel.svg';
                                                }}
                                            />
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <h3 className="text-lg sm:text-xl font-semibold text-light-text dark:text-dark-text">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                            {member.history}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    )
}

export default AboutUs;
