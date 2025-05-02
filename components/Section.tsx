import {motion, AnimatePresence} from "framer-motion";
import React from "react";

type SectionsProps = {
    name: string;
    children?: React.ReactNode;
}

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

const Sections = ({name, children}: SectionsProps) => {
    return (
        <section id={name} className="flex flex-col items-center justify-center w-full min-h-[80vh] py-12 md:py-16 lg:py-20">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8"
            >
                <motion.div
                    variants={containerVariants}
                    className="flex flex-col items-center justify-center"
                >
                    <AnimatePresence mode="wait">
                        {children}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Sections;
