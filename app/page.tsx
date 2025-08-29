"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import hero from "@/public/hero.svg"
import service from "@/public/setup-analytics-animate.svg";
import webDevelopment from "@/public/website-creator-animate.svg";
import mobileDevelopment from "@/public/mobile-development-animate.svg";
import uiux from "@/public/ui-ux-design-animate.svg";
import api from "@/public/software-code-testing-animate.svg"
import custom from "@/public/developer-activity-animate.svg";
import web3 from "@/public/bitcoin-animate.svg"
import gallery from "@/public/online-gallery-animate.svg"
import Dreamer from "@/public/dreamer-animate.svg"
import theArk from "@/public/Component 1.png"
import Footer from "@/components/footer/Footer" 
import BlackButton from "@/components/ui/BlackButton";
import WhiteButton from "@/components/ui/WhiteButton";
import { hover, motion, useInView } from "motion/react";
import { useRef, useState } from "react";



// ServiceCard component
type ServiceCardProps = {
  title: string;
  image: any;
  description: string;
};

// SplitText animation component
type SplitTextProps = {
  text: string;
  isVisible: boolean;
  className?: string;
};

// design showcase component
type DesignShowcaseProps = {
  thumbnail: any;
  title: string; 
  tag: string;
  description: string;
  teaser?: string;
  embed?: string;
};

function ServiceCard({ title, image, description }: ServiceCardProps) {
  return (
    <div className={styles.service__grid__item}>
      <div className={styles.service__grid__item_face2}>
        <div className={styles.content}>
          <Image src={image} alt={title} />
          <h3>{description}</h3>
        </div>
      </div>
      <div className={styles.service__grid__item_face1}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function SplitText({ text, isVisible, className }: SplitTextProps) {
  return (
    <motion.h2
      className={`split-text ${className || ""}`}
      variants={letterContainer}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {text.split("").map((letterChar, i) => (
        <motion.span
          key={i}
          variants={letter}
          className={styles.split__text__letter}
          style={{
            whiteSpace: letterChar === " " ? "pre" : "normal",
          }}
        >
          {letterChar}
        </motion.span>
      ))}
    </motion.h2>
  );
};

function DesignShowcase ({thumbnail, title, tag, description, teaser, embed}: DesignShowcaseProps){
  const [hovered, setHovered] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const [loading, setLoading] = useState(false);

    const handleShowEmbed = () => {
    setLoading(true);
    setShowEmbed(true);
    setHovered(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000); // 3 seconds
  };

  const handleCloseEmbed = () => {
    setShowEmbed(false);
    setLoading(false);
    setHovered(false);
  };
  return(
    <div
      className={styles.showcase__grid__item}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setShowEmbed(false);
        setLoading(false);
      }}
    >
      <div className={styles.showcase__media}>
        {/* Netflix effect: swap image for video on hover if teaser exists */}
        {teaser ? (
          !hovered ? (
            thumbnail && <Image src={thumbnail} alt={title} />
          ) : (
            <video
              src={teaser}
              autoPlay
              loop
              muted
              playsInline
              className={styles.showcase__video}
              style={{ width: "100%", borderRadius: "12px" }}
            />
          )
        ) : (
          thumbnail && <Image src={thumbnail} alt={title} />
        )}
        {/* Show embed iframe if embed exists and showEmbed is true */}
        {embed && embed.trim() !== "" && showEmbed && hovered && (
          <iframe
            src={embed}
            style={{ border: "1px solid rgba(0,0,0,0.1)", width: "100%", height: "200px", borderRadius: "12px" }}
            allowFullScreen
            title="Figma Embed"
            className={styles.showcase__iframe}
          />
        )}
      </div>
      <motion.div 
        className={styles.showcase__info}
        variants={infoVariant}
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}
      >
        <h2>{title}</h2>
        <span>{tag}</span>
        <p>{description}</p>
        {/* Show Figma button on hover if embed exists */}
        {embed && embed.trim() !== "" && hovered &&( 
          loading ? (
            <WhiteButton
              text={
                <span className={styles.loader}>
                </span>
              }  
              className={styles.figmaButton}
              disabled
            />
          ) : showEmbed ? (
            <WhiteButton
              text="Close"
              className={styles.figmaButton}
              onClick={handleCloseEmbed}
            />
          )  : (
            <WhiteButton
              text="Show Figma"
              className={styles.figmaButton}
              onClick={handleShowEmbed}
            />
          )
        )}
      </motion.div>
    </div>
  )
}



const letterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,   // ⏳ delay before letters start animating
      staggerChildren: 0.1, // delay between letters
    },
  },
};

const letter = {
  hidden: { y: 50, opacity: 0 },
  visible:{
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 2 } }, 
}
const infoVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: .1 } }, 
}

export default function Home() {
  const serviceSvg = useRef<HTMLDivElement | null>(null);
  const showCaseSvg = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const showCaseSvgIsInView = useInView(showCaseSvg, {amount: "some", once: true})
  const serviceIsInView = useInView(serviceSvg, {amount: 0.2, once: true });
  const ctaIsInView = useInView(ctaRef, {amount: 0.2, once: true });

  const serviceHeader = "How we help you?";
  const showCaseHeader = "Don't just take our word for it."
  const ctaHeader = "So, ready to build your \n dream?"

  return (
    <div className={styles.home__page}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.3, delay: 0.5 }}
      >
        <motion.div 
          className={styles.hero__text}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h1>Transforming Visions into Digital Realities.</h1>
          <h3>We believe your ambition should know no limits. At Rexon Dev, <span>dream is free</span>, and we're here to build it.</h3>
          <p>Your dedicated team for exceptional web, mobile, and custom software solutions. Let's create something extraordinary.</p>
          <div className={styles.hero__button}>
            <BlackButton 
              text="Start your dream" 
              onClick={() => window.location.href = "mailto:rexonsinc@gmail.com"}
            />
          </div>
        </motion.div>
        <div className={styles.hero__image}>
          <Image src={hero} alt="hero image" className={styles.hero__img}/>
        </div>
      </motion.div>
      <motion.div 
        className={styles.service}
        ref={serviceSvg}
      >
        <div className={styles.service__header}>
          <div className={styles.service__image}>
            {serviceIsInView && (
              <Image
                src={service}
                alt="Service SVG"
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </div>
          <div className={styles.service__text} >
            <SplitText 
              text={serviceHeader} 
              isVisible={serviceIsInView} 
              className={styles.service__text__header}
            />
            <motion.p
              variants={textVariant}
              initial="hidden"
              animate={serviceIsInView ? "visible" : "hidden"}
              className={styles.service__text__description}
            >We specialize in crafting tailored solutions that empower your business to thrive in the digital landscape.</motion.p>
          </div>
        </div>
        <div className={styles.service__grid}>
            {/* services here */}
            {[
              {
                title: "Web Development",
                image: webDevelopment,
                description: "We build powerful, responsive web applications and websites that drive results. Our expertise covers modern frameworks to create scalable, secure, and high-performing digital experiences that function flawlessly on any device.",
              },
              {
                title: "Mobile Development",
                image: mobileDevelopment,
                description: "Extend your reach and connect with your audience everywhere. We craft engaging and user-friendly mobile apps for both iOS and Android, focusing on intuitive design and flawless performance to deliver real value to your users.",
              },
              {
                title: "UI/UX Design",
                image: uiux,
                description: "We believe that exceptional software is born from exceptional design. Our designers are focused on creating intuitive and visually stunning digital experiences. We conduct user research, build thoughtful interfaces, and perfect the user journey to ensure your product isn't just functional, but a joy to use.",
              },
              {
                title: "Custom Software",
                image: custom,
                description: "When off-the-shelf solutions don't fit, we build tailored software to solve your unique challenges. We design bespoke applications that automate processes and give your business a competitive edge.",
              },
              {
                title: "Web3 Development",
                image: web3,
                description: "Ready to build on the blockchain? We'll help you get started. We design and develop secure DApps, custom smart contracts, and even NFT marketplaces to bring your Web3 dream to life."
              },
              {
                title: "Api Integration",
                image: api,
                description: "Make your existing tools work better together. Our API integration service builds the digital bridges that allow your different software applications—like your CRM, e-commerce store, and marketing platforms—to share data automatically, eliminating manual work and boosting efficiency.",
              }
              // Add more services as needed
            ].map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                image={service.image}
                description={service.description}
              />
            ))}
        </div>
      </motion.div>
      <motion.div 
        className={styles.showcase}
        ref={showCaseSvg}
      >
        <div className={styles.showcase__header}>
          <div className={styles.showcase__header__text}>
            <SplitText 
              text={showCaseHeader} 
              isVisible={showCaseSvgIsInView} 
            />
            <motion.h3
              variants={textVariant}
              initial="hidden"
              animate={showCaseSvgIsInView ? "visible" : "hidden"}
            >Take our showcase too</motion.h3>
          </div>
          <div className={styles.showcase__header__image}>
            {showCaseSvgIsInView&&(
              <Image src={gallery} alt="gallery"/>
            )}
          </div>
        </div>
        <motion.div className={styles.showcase__grid}>
          {[
            {
              thumbnail: theArk,
              title: "The Ark",
              tag: "Web Design, Figma",
              description: "A sleek, modern website for a cutting-edge tech startup, showcasing their innovative solutions and dynamic team.",
              embed: "https://embed.figma.com/design/eHBxWHbbkw2PnXlTW1o4iR/TheArk?node-id=0-1&embed-host=share",
              teaser:"",

            }
          ].map((showcase, idx) => (
            <DesignShowcase
              key={idx}
              thumbnail={showcase.thumbnail}
              title={showcase.title}
              tag={showcase.tag}
              description={showcase.description}
              teaser={showcase.teaser}
              embed={showcase.embed}
            />
          ))}
          
        </motion.div>
      </motion.div>
      <div
        className={styles.cta}
        ref={ctaRef}
      >
        <motion.div
          className={styles.cta__container}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={ctaIsInView ? { duration: 0.8, delay: 0.3 } : {}}
        >
          <div className={styles.cta__container__text}>
            <SplitText text={ctaHeader} isVisible={ctaIsInView} className={styles.cta__header}/>
            <motion.p 
              className={styles.cta__description}
              variants={textVariant}
              initial="hidden"
              animate={ctaIsInView ? "visible" : "hidden"}
            >Whether you're a startup looking to make your mark, or an established business aiming to innovate, we're here to turn your <span>Dream</span> into reality. Let's build something extraordinary together.</motion.p>
            <div className={styles.cta__container__button}>
              <WhiteButton />
            </div>
          </div>
          <div className={styles.cta__image}>
            <Image src={Dreamer} alt="cta image"/>
          </div>
        </motion.div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
