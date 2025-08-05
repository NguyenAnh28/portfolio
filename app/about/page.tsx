"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FileCode,
  Play,
  Settings,
  Code,
  Database,
  Palette,
  Zap,
  Globe,
  Monitor,
  Terminal,
} from "lucide-react";
import { useInView } from "framer-motion";
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
            "text-4xl lg:text-7xl font-normal text-white leading-tight",
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* About Section */}
      <section className="pt-32 pb-20 px-6 bg-black relative overflow-hidden">
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
          <div className="absolute inset-0 bg-black/70"></div>
          {/* Smooth black blur blend at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          {/* Smooth black blur blend at top */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="mb-8">
              <WordsPullUp text="The Operator" lineIndex={0} />
              <WordsPullUp text="Behind the Screen" lineIndex={1} />
            </div>

            <motion.div
              className="space-y-4 text-silver-300 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>
                I&apos;m a student who loves building fast, modern startups and
                applications. I&apos;m most comfortable with FastAPI for backend
                and I care deeply about having a pretty interface and clean
                UI/UX. Maybe that&apos;s why I take so long to ship my ideas.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-4 gap-4 justify-items-start">
              {[
                "TypeScript",
                "FastAPI",
                "Spring Boot",
                "Python",
                "PostgreSQL",
                "Tailwind CSS",
                "Framer Motion",
                "Vercel",
                "Postman",
                "DBeaver",
                "Java",
                "Cursor",
              ].map((name, index) => (
                <motion.div
                  key={index}
                  className="inline-flex items-center justify-start gap-2 px-6 py-3 rounded-lg bg-transparent border border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] h-12 w-40"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <TechIcon name={name} />
                  <span className="text-white font-medium text-sm whitespace-nowrap">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
