'use client';

import React from "react";
import Layout from "@/components/Layout";
import HomeSection from "@/sections/HomeSection";
import AboutUs from "@/sections/AboutUs";
import ServiceSections from "@/sections/ServiceSections";

export default function Home() {
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

    const textChangeVariants = {
        enter: {
            opacity: 0,
            y: 5,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        center: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        exit: {
            opacity: 0,
            y: -5,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
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
        <Layout>
            <HomeSection
                containerVariants={containerVariants}
                textChangeVariants={textChangeVariants}
                fadeInVariants={fadeInVariants}
            />
            <ServiceSections
                containerVariants={containerVariants}
                textChangeVariants={textChangeVariants}
                fadeInVariants={fadeInVariants}
            />
            <AboutUs
                containerVariants={containerVariants}
                textChangeVariants={textChangeVariants}
                fadeInVariants={fadeInVariants}
            />
        </Layout>
    );
}
