"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Zap,
  FileCode,
  Database,
  Globe,
  Box,
  Play,
  Settings,
  Monitor,
  Terminal,
  BookOpen,
  UploadCloud,
  MinusCircle,
  Moon,
  Hammer,
  Sparkles,
  Repeat,
  Beaker,
  Dot,
  Coffee,
  Twitter,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";

// TechIcon component to handle SVG icons
const TechIcon = ({ name }: { name: string }) => {
  const iconMap: { [key: string]: string } = {
    TypeScript: "/typescript.svg",
    FastAPI: "/fastapi.svg",
    "Spring Boot": "/springboot.svg",
    Python: "/python.svg",
    PostgreSQL: "/postgresql.svg",
    "Tailwind CSS": "/tailwindcss.svg",
    "Framer Motion": "/framer.svg",
    Docker: "/docker.svg",
    Vercel: "/vercel.svg",
    Postman: "/postman.svg",
    DBeaver: "/dbeaver.svg",
    Java: "/java.svg",
    Cursor: "/cursor.png",
  };

  const iconPath = iconMap[name];

  if (!iconPath) {
    // Fallback to Lucide icons for items without SVG
    const fallbackIcons: { [key: string]: any } = {
      TypeScript: FileCode,
      FastAPI: Play,
      "Spring Boot": Settings,
      Python: Code,
      PostgreSQL: Database,
      "Tailwind CSS": Palette,
      "Framer Motion": Zap,
      Docker: Box,
      Vercel: Globe,
      Postman: Monitor,
      DBeaver: Database,
      Java: FileCode,
      Cursor: Terminal,
    };

    const FallbackIcon = fallbackIcons[name];
    return FallbackIcon ? (
      <FallbackIcon className="h-4 w-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
    ) : null;
  }

  return <Image src={iconPath} alt={name} width={16} height={16} />;
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function WordsPullUp({
  text,
  className = "",
  lineIndex = 0,
}: {
  text: string;
  className?: string;
  lineIndex?: number;
}) {
  const splittedText = text.split(" ");

  const pullupVariant = {
    initial: { y: 20, opacity: 0, filter: "blur(20px)" },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: lineIndex * 0.15 + i * 0.12,
        duration: 0.5,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={cn(
            "text-5xl lg:text-8xl font-normal text-white leading-tight",
            "pr-2", // class to separate words
            className
          )}
        >
          {current == "" ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}

function SubheaderWordsPullUp({
  text,
  className = "",
  lineIndex = 0,
}: {
  text: string;
  className?: string;
  lineIndex?: number;
}) {
  const splittedText = text.split(" ");

  const pullupVariant = {
    initial: { y: 20, opacity: 0, filter: "blur(20px)" },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: lineIndex * 0.15 + i * 0.06,
        duration: 0.5,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={cn(
            "text-xl text-silver-300 leading-relaxed",
            "pr-1", // smaller spacing for subheader
            className
          )}
        >
          {current == "" ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}

export default function PersonalWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > scrollY) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const navbarOpacity = 0;
  const navbarBlur = 0;

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-black/20 ${
          isNavbarVisible
            ? "translate-y-0"
            : "-translate-y-full pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 py-5 flex justify-between items-center">
          <div className="text-gray-200 font-medium text-lg">RYANTRINH</div>
          <div className="flex items-center space-x-8 ml-6">
            <Link
              href="#projects"
              className="text-gray-200 hover:text-white transition-all duration-300 font-normal text-sm hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            >
              Works
            </Link>
            <Link
              href="/about"
              className="text-gray-200 hover:text-white transition-all duration-300 font-normal text-sm hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-200 hover:text-white transition-all duration-300 font-normal text-sm hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            >
              Contact
            </Link>
          </div>
          <Link
            href="https://github.com/NguyenAnh28/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white transition-all duration-300 font-normal text-sm hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] group flex items-center space-x-1"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
              Get Template
            </span>
            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative pt-48 pb-20 px-6 overflow-hidden"
        style={{ minHeight: "120vh" }}
      >
        {/* Video Background */}
        <div
          className="absolute left-0 right-0 bottom-0 z-0"
          style={{ top: "10%" }}
        >
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <source src="/looped5.mp4" type="video/mp4" />
          </motion.video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Smooth black blur blend at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          {/* Smooth black blur blend at top */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-transparent border border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-[brightPulse_2s_ease-in-out_infinite]"></div>
                <span className="text-white font-medium text-sm">
                  Crafting my next idea...
                </span>
              </div>
            </motion.div>

            <div className="text-center">
              <WordsPullUp text="Building my" lineIndex={0} />
              <WordsPullUp text="future with tech" lineIndex={1} />
            </div>

            <div className="max-w-2xl mx-auto">
              <SubheaderWordsPullUp
                text="I build apps that hopefully people enjoy using."
                lineIndex={0}
              />
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3, // Slight delay after header starts
                duration: 1.16, // Shorter duration so it ends at same time as header (1.46s total)
              }}
            >
              <Button
                size="lg"
                className="bg-transparent border border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-shadow duration-300 hover:bg-transparent"
                asChild
              >
                <a
                  href="https://github.com/try-leetguard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Work
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-transparent border border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-shadow duration-300 hover:bg-transparent"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/nguyenanhtrinh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get In Touch
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-4">
              Featured Works
            </h2>
            <p className="text-xl text-silver-300 max-w-2xl mx-auto">
              What I&apos;ve been working on or planning to work on next.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-[1200px] h-[350px] overflow-hidden">
              <Image
                src="/leetguard.png"
                alt="LeetGuard"
                width={800}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex justify-start max-w-6xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="text-white"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              <div className="flex items-center space-x-1 group">
                <Link
                  href="#"
                  className="text-2xl font-medium hover:text-white transition-colors duration-300"
                >
                  LeetGuard
                </Link>
                <ArrowRight className="h-3 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
              </div>
              <p className="text-lg font-light text-silver-300">EXTENSION</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="pt-8 pb-20 px-6 bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Top Carousel - Right to Left */}
          <div className="relative mb-8">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-left">
                {[
                  "TypeScript",
                  "FastAPI",
                  "Spring Boot",
                  "Python",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Docker",
                  "Vercel",
                  "Postman",
                  "DBeaver",
                  "Java",
                  "Cursor",
                ].map((name, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-3 px-6 py-3 bg-[rgba(24,24,27,0.5)] rounded-full text-silver-300 font-normal flex items-center gap-2"
                  >
                    <TechIcon name={name} />
                    {name}
                  </div>
                ))}
                {/* Duplicate items for seamless loop */}
                {[
                  "TypeScript",
                  "FastAPI",
                  "Spring Boot",
                  "Python",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Docker",
                  "Vercel",
                  "Postman",
                  "DBeaver",
                  "Java",
                  "Cursor",
                ].map((name, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 mx-3 px-6 py-3 bg-[rgba(24,24,27,0.5)] rounded-full text-silver-300 font-normal flex items-center gap-2"
                  >
                    <TechIcon name={name} />
                    {name}
                  </div>
                ))}
              </div>
            </div>
            {/* Blur overlay on left end */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-950 to-transparent pointer-events-none"></div>
            {/* Blur overlay on right end */}
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-950 to-transparent pointer-events-none"></div>
          </div>

          {/* Bottom Carousel - Left to Right */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-right">
                {[
                  { name: "Design with intent", icon: Palette },
                  { name: "Readable > clever", icon: BookOpen },
                  { name: "Push to deploy", icon: UploadCloud },
                  { name: "Less but better", icon: MinusCircle },
                  { name: "Dark mode always", icon: Moon },
                  { name: "Code is craft", icon: Hammer },
                  { name: "Minimal, not boring", icon: Sparkles },
                  { name: "Move fast", icon: Zap },
                  { name: "Refactor later", icon: Repeat },
                  { name: "Prototype everything", icon: Beaker },
                  { name: "Pixels matter", icon: Dot },
                  {
                    name: "Founder at Stealth",
                    icon: () => (
                      <Image
                        src="/stealth.jpeg"
                        alt="Founder at Stealth"
                        width={16}
                        height={16}
                        className="rounded-full"
                      />
                    ),
                  },
                  { name: "Professional matcha drinker", icon: Coffee },
                  { name: "Backend > Frontend", icon: Terminal },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-3 px-6 py-3 bg-[rgba(24,24,27,0.5)] rounded-full text-silver-300 font-normal flex items-center gap-2"
                  >
                    <item.icon className="h-4 w-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    {item.name}
                  </div>
                ))}
                {/* Duplicate items for seamless loop */}
                {[
                  { name: "Design with intent", icon: Palette },
                  { name: "Readable > clever", icon: BookOpen },
                  { name: "Push to deploy", icon: UploadCloud },
                  { name: "Less but better", icon: MinusCircle },
                  { name: "Dark mode always", icon: Moon },
                  { name: "Code is craft", icon: Hammer },
                  { name: "Minimal, not boring", icon: Sparkles },
                  { name: "Move fast", icon: Zap },
                  { name: "Refactor later", icon: Repeat },
                  { name: "Prototype everything", icon: Beaker },
                  { name: "Pixels matter", icon: Dot },
                  {
                    name: "Founder at Stealth",
                    icon: () => (
                      <Image
                        src="/stealth.jpeg"
                        alt="Founder at Stealth"
                        width={16}
                        height={16}
                        className="rounded-full"
                      />
                    ),
                  },
                  { name: "Professional matcha drinker", icon: Coffee },
                  { name: "Backend > Frontend", icon: Terminal },
                ].map((item, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 mx-3 px-6 py-3 bg-[rgba(24,24,27,0.5)] rounded-full text-silver-300 font-normal flex items-center gap-2"
                  >
                    <item.icon className="h-4 w-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            {/* Blur overlay on left end */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-950 to-transparent pointer-events-none"></div>
            {/* Blur overlay on right end */}
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-950 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Filler Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-white leading-relaxed">
              Every line of code tells a story. Every project is a journey.
              Here&apos;s where I share mine. I believe that quality and
              presentation is ever more important than the idea itself. Idea
              isn&apos;t the thing that matters, execution is, and that&apos;s
              what I&apos;m putting my focus on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-black relative overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <source src="/looped5.mp4" type="video/mp4" />
          </motion.video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Smooth black blur blend at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          {/* Smooth black blur blend at top */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-transparent border border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-[brightPulse_2s_ease-in-out_infinite]"></div>
                <span className="text-white font-medium text-sm">
                  Available for work
                </span>
              </div>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-xl text-silver-300 mb-8 max-w-2xl mx-auto">
              I&apos;m always down to listen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-transparent border border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-shadow duration-300 hover:bg-transparent"
                asChild
              >
                <a href="mailto:anhtrinh.swe@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <motion.a
                href="https://github.com/NguyenAnh28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <span className="text-zinc-600 text-3xl font-light">|</span>
              <motion.a
                href="https://www.linkedin.com/in/nguyenanhtrinh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <span className="text-zinc-600 text-3xl font-light">|</span>
              <motion.a
                href="https://x.com/MasterShifu457"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300"
              >
                <Image
                  src="/x.svg"
                  alt="X"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <span className="sr-only">X</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white text-sm">Built in Austin, TX</p>
          <p className="text-white text-sm">Anh (Ryan) Trinh © 2025</p>
        </div>
      </footer>
    </div>
  );
}
