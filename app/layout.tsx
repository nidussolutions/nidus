import "./globals.css";
import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {GoogleAnalytics} from "@next/third-parties/google";

import {I18nProvider} from "@/contexts/I18nContext";
import {ThemeProvider} from '@/contexts/ThemeContext';
import Header from "@/components/Header";
import Footer from "@/components/Footers";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Nidus",
    description: "Technology company specializing in web development and design.",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body
            className={`${inter.variable} antialiased`}
        >
        <ThemeProvider>
            <I18nProvider>
                <Header/>
                {children}
                <Footer/>
            </I18nProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}/>
        </body>
        </html>
    );
}
