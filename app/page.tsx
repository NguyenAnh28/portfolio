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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";

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

export function WordsPullUp({
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

export function SubheaderWordsPullUp({
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
      setScrollY(currentScrollY);

      // Hide navbar when scrolling past hero section (approximately 120vh)
      const heroHeight = window.innerHeight * 1.2; // 120vh
      setIsNavbarVisible(currentScrollY < heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarOpacity = 0;
  const navbarBlur = 0;

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isNavbarVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${navbarOpacity})`,
          backdropFilter: `blur(${navbarBlur}px)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-end items-center">
          <div className="flex items-center space-x-6">
            <Link
              href="#projects"
              className="text-white transition-colors hover:underline hover:underline-offset-4 transition-all duration-300 font-medium text-sm"
            >
              PROJECTS
            </Link>
            <Link
              href="#about"
              className="text-white transition-colors hover:underline hover:underline-offset-4 transition-all duration-300 font-medium text-sm"
            >
              ABOUT
            </Link>
            <Link
              href="#contact"
              className="text-white transition-colors hover:underline hover:underline-offset-4 transition-all duration-300 font-medium text-sm"
            >
              CONTACT
            </Link>
          </div>
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
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <source src="/background.mp4" type="video/mp4" />
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
              >
                View My Work
              </Button>
              <Button
                size="lg"
                className="bg-transparent border border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-shadow duration-300 hover:bg-transparent"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of projects that showcase my expertise in modern web
              development
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "SaaS Dashboard",
                description:
                  "A comprehensive analytics dashboard built with Next.js, featuring real-time data visualization and user management.",
                tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "E-commerce Platform",
                description:
                  "Full-stack e-commerce solution with payment integration, inventory management, and admin panel.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "AI Chat Application",
                description:
                  "Real-time chat application powered by AI, featuring smart responses and conversation management.",
                tech: ["React", "Socket.io", "OpenAI", "Redis"],
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-gray-800 text-gray-300 border-gray-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white p-0"
                        >
                          View Project
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white p-0"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                The Operator Behind the Screen
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with 5+ years of
                  experience building scalable web applications. I specialize in
                  React, Next.js, and modern JavaScript frameworks, with a keen
                  eye for design and user experience.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community through blog posts and
                  talks.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Code,
                    label: "Frontend",
                    skills: "React, Next.js, TypeScript",
                  },
                  {
                    icon: Zap,
                    label: "Backend",
                    skills: "Node.js, Python, PostgreSQL",
                  },
                  {
                    icon: Palette,
                    label: "Design",
                    skills: "Figma, Tailwind CSS, Framer Motion",
                  },
                  {
                    icon: Github,
                    label: "Tools",
                    skills: "Git, Docker, AWS, Vercel",
                  },
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg bg-gray-900 border border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <category.icon className="h-6 w-6 text-white mb-2" />
                    <h4 className="font-semibold text-white mb-1">
                      {category.label}
                    </h4>
                    <p className="text-sm text-gray-400">{category.skills}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Ready to bring your next project to life? I'm always excited to
              work on innovative projects with forward-thinking teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-900 bg-transparent"
              >
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}
