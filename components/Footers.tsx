'use client';

import {useI18n} from '@/contexts/I18nContext';

export default function Footer() {
    const {t} = useI18n();

    return (
        <footer
            className="w-full z-50 bg-light-background/80 dark:bg-dark-card backdrop-blur-md shadow-lg"
        >
            <div className="text-center text-xs text-light-text-secondary dark:text-dark-text-secondary py-4">
                © {new Date().getFullYear()} {t('footer.copyright')}
            </div>
        </footer>
    );
}