"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code2, Sparkles, Star, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product listings, shopping cart, and payment integration. Features include user authentication, order management, and real-time inventory tracking.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      status: "Completed",
      featured: true,
      duration: "3 months",
      highlights: ["Payment Gateway Integration", "Real-time Updates", "Admin Dashboard"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with features like task creation, assignment, progress tracking, and team collaboration tools.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["JavaScript", "HTML/CSS", "LocalStorage API"],
      liveLink: "#",
      githubLink: "#",
      status: "Completed",
      featured: false,
      duration: "2 months",
      highlights: ["Drag & Drop Interface", "Team Collaboration", "Progress Analytics"]
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A modern weather forecast application that displays current weather conditions and 5-day forecast for any location with beautiful visualizations.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Weather API", "Responsive Design"],
      liveLink: "#",
      githubLink: "#",
      status: "Completed",
      featured: true,
      duration: "1.5 months",
      highlights: ["Interactive Maps", "Location Detection", "Weather Alerts"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and experience with modern animations and responsive design.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
      status: "Live",
      featured: false,
      duration: "1 month",
      highlights: ["Modern Animations", "SEO Optimized", "Dark Mode Support"]
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A full-featured blog platform with rich text editing, comments system, user authentication, and content management capabilities.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      status: "In Progress",
      featured: true,
      duration: "4 months",
      highlights: ["Rich Text Editor", "Comment System", "Content Analytics"]
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "An intelligent recipe finder application that suggests recipes based on available ingredients with nutritional information and cooking instructions.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["JavaScript", "Recipe API", "Responsive Design"],
      liveLink: "#",
      githubLink: "#",
      status: "Completed",
      featured: false,
      duration: "2 months",
      highlights: ["Smart Search", "Nutrition Facts", "Cooking Timer"]
    },
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveLink: string;
    githubLink: string;
    status: string;
    featured: boolean;
    duration: string;
    highlights: string[];
  }

  type StatusColors = {
    Live: string;
    "In Progress": string;
    [key: string]: string;
  }

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
      case "In Progress": return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
      default: return "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800"
    }
  }

  const ProjectCard = ({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full"
    >
      <Card className={`h-full flex flex-col overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ${featured ? 'ring-2 ring-purple-200 dark:ring-purple-800' : ''}`}>
        {/* Project Image */}
        <div className="h-48 relative overflow-hidden">
          {featured && (
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="outline" className={getStatusColor(project.status)}>
              {project.status}
            </Badge>
          </div>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6 flex-1 flex flex-col">
          {/* Project Header */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
            <div className="flex flex-wrap gap-1">
              {project.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:from-purple-100 hover:to-indigo-100 dark:hover:from-purple-900/30 dark:hover:to-indigo-900/30 transition-all duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <Button asChild variant="outline" size="sm" className="flex-1 group/btn">
              <Link href={project.githubLink} className="flex items-center justify-center gap-2">
                <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                Code
              </Link>
            </Button>
            <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 group/btn">
              <Link href={project.liveLink} className="flex items-center justify-center gap-2">
                <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                Live Demo
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
              A curated collection of my work, personal projects, and innovative solutions that showcase my passion for creating impactful digital experiences.
            </p>
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
                <div className="h-px bg-gradient-to-r from-purple-200 to-transparent flex-1 dark:from-purple-800"></div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} featured={true} />
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-3 mb-8"
              >
                <Code2 className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Other Projects</h2>
                <div className="h-px bg-gradient-to-r from-purple-200 to-transparent flex-1 dark:from-purple-800"></div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
                    Discover additional projects, open-source contributions, and code repositories on my GitHub profile. 
                    Let's build something amazing together!
                  </p>
                  <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    <Link href="#" className="flex items-center gap-3 font-semibold">
                      <Github className="h-5 w-5" />
                      Visit My GitHub
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}