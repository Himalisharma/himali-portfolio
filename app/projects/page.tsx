"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "My personal portfolio, designed and built to showcase my skills, projects, and professional journey. This project demonstrates my abilities in front-end development, responsive design, and creating a clean, user-friendly interface.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 2,
      title: "Wrong Parking System",
      description:
        "An innovative solution to address the issue of improper vehicle parking. This system is designed to identify and report vehicles parked incorrectly, aiming to improve traffic flow and safety. It showcases my problem-solving skills and my ability to work with backend logic and data management.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "CineScope – Movie Review Website",
      description:
        "A full-featured movie review platform where users can explore movies, read reviews, and share their own opinions. CineScope integrates with a movie database API for real-time data, featuring a clean UI and dynamic search functionality.",
      technologies: ["React", "Next.js", "Tailwind CSS", "OMDb API"],
    },
  ];

  interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
  }

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-6">
              <Code2 className="h-5 w-5 text-purple-600" />
              <span className="text-purple-700 dark:text-purple-300 font-medium">Portfolio Showcase</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A curated collection of my work and personal projects showcasing my passion for creating impactful digital experiences.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Github className="h-10 w-10" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Explore More on GitHub</h2>
                  <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Discover more projects, open-source contributions, and code repositories on my GitHub profile. Let's build something amazing together!
                  </p>
                  {/* Correct External Link */}
                  <a
                    href="https://github.com/himalisharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="h-5 w-5" />
                    Visit My GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
