import Section from "@/components/Section";
import {AnimatePresence, motion} from "framer-motion";
import React, {useState} from "react";
import {useI18n} from "@/contexts/I18nContext";
import {Mail, User, MessageSquare, Send} from "lucide-react";
import {useForm} from '@formspree/react';

import {Variant} from "framer-motion";

type ContactSectionProps = {
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

const ContactSection = ({
                            containerVariants,
                            textChangeVariants,
                            fadeInVariants,
                        }: ContactSectionProps) => {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_SPREE_KEY as string);
    const {t, language} = useI18n();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <Section name={'contact'}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col mt-2 sm:mt-4 items-center justify-center w-full p-4 sm:p-6 md:p-8 py-6 sm:py-8 md:py-10"
            >
                <motion.div
                    variants={fadeInVariants}
                    className="flex flex-col items-center justify-center w-full max-w-3xl"
                >
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`contact-title-${language}`}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={textChangeVariants}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-light-text dark:text-dark-text mb-8 sm:mb-10 md:mb-12"
                        >
                            {t('contact.title')}
                        </motion.h1>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`contact-description-${language}`}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={textChangeVariants}
                            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center mb-8"
                        >
                            {t('contact.description')}
                        </motion.p>
                    </AnimatePresence>

                    <motion.form
                        variants={fadeInVariants}
                        className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-4">
                            <label htmlFor="name"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {t('contact.form.name')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User size={18} className="text-gray-400"/>
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder={t('contact.form.namePlaceholder')}
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {t('contact.form.email')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail size={18} className="text-gray-400"/>
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder={t('contact.form.emailPlaceholder')}
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="subject"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {t('contact.form.subject')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MessageSquare size={18} className="text-gray-400"/>
                                </div>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder={t('contact.form.subjectPlaceholder')}
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {t('contact.form.message')}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                placeholder={t('contact.form.messagePlaceholder')}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {state.submitting ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            ) : (
                                <>
                                    <Send size={18} className="mr-2"/>
                                    {t('contact.form.submit')}
                                </>
                            )}
                        </button>

                        {state.succeeded && (
                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center"
                            >
                                {t('contact.form.successMessage')}
                            </motion.div>
                        )}

                        {state.errors && (
                            <motion.div
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-center"
                            >
                                {t('contact.form.errorMessage')}
                            </motion.div>
                        )}
                    </motion.form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600 dark:text-gray-300">
                            {t('contact.alternativeContact')}
                        </p>
                        <a
                            href={`mailto:${t('page.email')}`}
                            className="text-blue-500 hover:text-blue-600 font-medium flex items-center justify-center mt-2"
                        >
                            <Mail size={18} className="mr-2"/>
                            {t('page.email')}
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default ContactSection;