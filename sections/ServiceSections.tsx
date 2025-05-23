import Section from "@/components/Section";
import {AnimatePresence, motion} from "framer-motion";
import React from "react";
import {useI18n} from "@/contexts/I18nContext";
import {Cloud, Layout, Globe, Server, Settings, Puzzle, Mail, LucideProps} from "lucide-react";

import {Variant} from "framer-motion";

type ServiceProps = {
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

const ServiceSections = ({
                             containerVariants,
                             textChangeVariants,
                             fadeInVariants,
                         }: ServiceProps) => {
    const {t, language} = useI18n();

    const serviceIcons: Record<string, React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>> = {
        'saas': Cloud,
        'landingPage': Layout,
        'domain': Globe,
        'hosting': Server,
        'maintenance': Settings,
        'custom': Puzzle
    };

    const services = [
        'saas',
        'landingPage',
        'domain',
        'hosting',
        'maintenance',
        'custom'
    ] as const;

    return (
        <Section name={'services'}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col sm:mt-4 items-center justify-center w-full p-4 sm:p-6 md:p-8 py-6 sm:py-8 md:py-10"
            >
                <motion.div
                    variants={fadeInVariants}
                    className="flex flex-col items-center justify-center w-full max-w-6xl"
                >
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`services-title-${language}`}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={textChangeVariants}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-light-text dark:text-dark-text mb-8 sm:mb-10 md:mb-12"
                        >
                            {t('services.title')}
                        </motion.h1>
                    </AnimatePresence>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {services.map((service) => (
                            <motion.div
                                key={`service-${service}`}
                                variants={fadeInVariants}
                                className="bg-white dark:bg-gray-800 p-4 sm:p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                                    <div className="mb-2 sm:mb-0 sm:mr-3 p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                                        {React.createElement(serviceIcons[service], {
                                            size: 24,
                                            className: "text-blue-500 dark:text-blue-300"
                                        })}
                                    </div>
                                    <AnimatePresence mode="wait">
                                        <motion.h3
                                            key={`services-${service}-${language}`}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            variants={textChangeVariants}
                                            className="text-lg sm:text-xl font-semibold text-center sm:text-left text-light-text dark:text-dark-text">
                                            {t(`services.${service}.title`)}
                                        </motion.h3>
                                    </AnimatePresence>
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={`services-${service}-desc-${language}`}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        variants={textChangeVariants}
                                        className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center sm:text-left">
                                        {t(`services.${service}.description`)}
                                    </motion.p>
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        className="mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 flex items-center"
                        onClick={() => window.location.href = `mailto:${t('page.email')}`}
                    >
                        <Mail className="mr-2" size={20}/>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`services-contact-${language}`}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={textChangeVariants}
                            >
                                {t('services.contact')}
                            </motion.p>
                        </AnimatePresence>
                    </button>
                </motion.div>
            </motion.div>
        </Section>
    )
}

export default ServiceSections;
