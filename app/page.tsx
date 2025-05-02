'use client';

import {useI18n} from "@/contexts/I18nContext";
import React from "react";

export default function Home() {
    const {t} = useI18n();

    return (
        <div
            className="flex flex-col items-center min-h-screen justify-center mt-[-15em] p-4 bg-light-background dark:bg-dark-background">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-center text-light-accent-purple dark:text-dark-purple">
                    {t("page.welcome")}
                </h1>
                <p className="mt-4 text-lg text-center text-light-text-secondary dark:text-dark-text-secondary">
                    {t("page.description")}
                </p>
                <p className="mt-5 text-lg text-center text-light-accent-blue dark:text-dark-accent-purple">
                    {t("page.warning")}
                </p>
                <div className="mt-10">
                    <p className="mt-5 text-lg text-center text-light-text-secondary dark:text-dark-text-secondary">
                        {t("page.contact")}
                    </p>
                    <p className="text-lg text-center text-light-text-secondary dark:text-dark-text-secondary">
                        <a href="mailto:contato@nidussolutions.com"
                           className="text-light-accent-blue dark:text-dark-accent-purple">
                            contato@nidussoltuions.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
