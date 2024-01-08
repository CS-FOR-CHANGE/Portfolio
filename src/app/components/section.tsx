"use client";

import { motion } from "framer-motion";

export default function Section({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
            className="flex flex-col items-center sm:flex-row"
        >
            {children}
        </motion.div>
    );
}
