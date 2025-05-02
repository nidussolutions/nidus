'use client';

import {useI18n} from "@/contexts/I18nContext";
import Header from "@/components/Header";

export default function Home() {
    const {t} = useI18n();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-light-background dark:bg-dark-background">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-center text-light-text dark:text-dark-text-secondary">
                    {t("page.welcome")}
                </h1>
                <p className="mt-4 text-lg text-center text-light-text-secondary dark:text-dark-text-secondary">
                    {t("page.description")}
                </p>
            </div>
        </div>
    );
}
