import styles from "./navbar.module.scss";
import Image from "next/image";
import Logo from "@/public/logo.svg"
import {motion} from "motion/react"
import Link from "next/link";
import BlackButton from "../ui/BlackButton";

export default function NavBar () {
    return(
        <div className={styles.nav}>
            <div className={styles.nav__container}>
                <div className={styles.nav__links}>
                        <ul>
                            <Link href={'/about-us'}><li>About us</li></Link>
                            <Link href={'/projects'}><li>Projects</li></Link>
                            <Link href={'/pricing'}><li>Pricing</li></Link>
                            
                        </ul>
                </div>
                <Link href={'/home'}>
                    <motion.div className={styles.nav__logo} layoutId="logo">
                        <Image src={Logo} alt="rexon logo" className={styles.logo}/>
                        <motion.span
                            className={styles.nav__category}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.8, delay: 4 }}
                        >
                            <h4>Dev.</h4>
                        </motion.span>
                    </motion.div>
                </Link>
                <div className={styles.nav__button}>
                    <BlackButton
                        text="Start your dream" 
                        onClick={() => window.location.href = "mailto:"}
                    />
                </div>
            </div>
        </div>
    )
}