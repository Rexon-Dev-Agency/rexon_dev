'use client';

import { motion, AnimatePresence } from "motion/react"
import styles from "./loading-screen.module.scss";
import Logo from "@/public/logo.svg"
import Image from "next/image";

export default function LoadingScreen ({animateUp}:{animateUp: boolean}) {
    
    return(
        <AnimatePresence>
            { !animateUp && (
                <motion.div
                    key="splash"
                    className={styles.splash}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8 } }}
                >
                <motion.div className={styles.logo__section} layoutId="logo">
                    <Image src={Logo} alt="rexon logo" className={styles.logo} />

                    <motion.span
                    className={styles.logo__category}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    >
                    <h4>Dev.</h4>
                    </motion.span>
                </motion.div>

                <motion.div 
                    className={styles.logo__name}
                    exit={{opacity: 0, y:-30}}
                    transition={{duration: 0.6 }}
                >
                    <h1>rexon</h1>
                </motion.div>

                <motion.div
                    className={styles.loading__text}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Ready to
                        <ol>
                            <li><span>Dream?</span></li>
                            <li><span>Imagine?</span></li>
                        </ol>
                    </h2>
                </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
} 