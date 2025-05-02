import "./globals.css";
import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {I18nProvider} from "@/contexts/I18nContext";
import {ThemeProvider} from '@/contexts/ThemeContext';
import Header from "@/components/Header";

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
            </I18nProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
