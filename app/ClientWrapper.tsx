'use client';

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/loading-screen/LoadingScreen";
import NavBar from "@/components/nav-bar/NavBar";
import { LayoutGroup } from "motion/react";

export default function ClientWrapper({children}: {children: React.ReactNode}) {
    const [animateUp, setAnimateUp] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setAnimateUp(true), 5800)
        return() => clearTimeout(timeout);
    }, [])


    return(
        <>
            <LoadingScreen animateUp={animateUp}/>
            {
                animateUp && (
                    <>
                    <NavBar/>
                    {children}
                    </>
                )
            }
        </>
    )
}