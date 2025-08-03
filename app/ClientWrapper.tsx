'use client';

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/loading-screen/LoadingScreen";

export default function ClientWrapper({children}: {children: React.ReactNode}) {
    const [animateUp, setAnimateUp] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setAnimateUp(true), 3800)
        return() => clearTimeout(timeout);
    }, [])


    return(
        <>
            <LoadingScreen animateUp={animateUp}/>
            {
                animateUp && (
                    <>
                    {children}
                    </>
                )
            }
        </>
    )
}