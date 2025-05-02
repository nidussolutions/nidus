import {motion, AnimatePresence, useInView, useScroll, useTransform} from "framer-motion";
import React, { useRef } from "react";

type SectionsProps = {
    name: string;
    children?: React.ReactNode;
}

const containerVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const Sections = ({name, children}: SectionsProps) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { 
        once: false, 
        amount: 0.3, // Trigger when 30% of the section is visible
        margin: "-50px 0px" // Negative margin to trigger slightly before the section enters the viewport
    });

    // Scroll-linked animation
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to opacity and y values
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

    return (
        <section 
            id={name} 
            ref={sectionRef}
            className="flex flex-col items-center justify-center w-full min-h-[80vh] py-12 md:py-16 lg:py-20"
        >
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8"
                transition={{ duration: 0.5 }}
                style={{ opacity, y }}
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
