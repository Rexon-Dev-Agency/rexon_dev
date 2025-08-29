"use client"

import logo from "@/public/logo.svg";
import Image from "next/image";
import styles from "./footer.module.scss"
import { IconBrandX } from '@tabler/icons-react';
import { IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className={styles.footer}>
            <div>
                <Image src={logo} alt="logo" width={40} height={40} />
                
            </div>
            {/* copyright text */}
            <div>
                <p>©{year} Rexon. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className={styles.socials}>
                <a href=""><IconBrandX stroke={2}/></a>
                <a href=""><IconBrandLinkedin stroke={2}/></a>
            </div>
        </div>
    );
}1