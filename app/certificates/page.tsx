"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Award, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "June 2023",
      description: "Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
      category: "Web Development",
      featured: true,
    },
    {
      id: 2,
      title: "Python for Data Science",
      issuer: "Coursera",
      date: "March 2023",
      description: "Course on Python programming for data analysis, visualization, and machine learning.",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
      category: "Data Science",
      featured: false,
    },
    {
      id: 3,
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "December 2022",
      description: "In-depth course on React.js, including hooks, Redux, and Next.js.",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
      category: "Frontend",
      featured: true,
    },
    {
      id: 4,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "October 2022",
      description: "Certification covering JavaScript fundamentals, algorithms, and data structures.",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
      category: "Programming",
      featured: false,
    },
    {
      id: 5,
      title: "UI/UX Design Fundamentals",
      issuer: "Coursera",
      date: "August 2022",
      description: "Course on user interface and user experience design principles and best practices.",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
      category: "Design",
      featured: false,
    },
    {
      id: 6,
      title: "Git and GitHub Masterclass",
      issuer: "Udemy",
      date: "May 2022",
      description: "Comprehensive course on version control using Git and collaboration with GitHub.",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
      category: "DevOps",
      featured: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      }
    },
  }

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
            <Award className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 dark:text-purple-300 font-medium">Professional Certifications</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent mb-6">
            My Certificates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my continuous learning journey and professional development through various certifications and courses
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                <span>Featured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <span>Standard</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group"
            >
              <Card className={`h-full flex flex-col overflow-hidden backdrop-blur-sm transition-all duration-500 ${
                certificate.featured 
                  ? 'bg-gradient-to-br from-white via-purple-50/50 to-blue-50/50 dark:from-gray-800 dark:via-purple-900/20 dark:to-blue-900/20 border-2 border-purple-200 dark:border-purple-700/50 shadow-lg shadow-purple-100 dark:shadow-purple-900/20' 
                  : 'bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 hover:shadow-xl'
              } group-hover:shadow-2xl group-hover:shadow-purple-100 dark:group-hover:shadow-purple-900/30`}>
                
                {/* Featured Badge */}
                {certificate.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-medium rounded-full shadow-lg">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Image Section */}
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10"></div>
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 z-20"></div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col relative">
                  {/* Category Badge */}
                  <div className="flex justify-between items-start mb-3">
                    <Badge
                      variant="outline"
                      className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700/50 font-medium"
                    >
                      {certificate.category}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {certificate.issuer}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {certificate.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{certificate.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
                    {certificate.description}
                  </p>

                  {/* View Certificate Link */}
                  <Link
                    href={certificate.link}
                    className="group/link inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:hover:text-purple-400 font-semibold transition-all duration-300 mt-auto"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg">
            <Award className="h-5 w-5" />
            <span className="font-medium">{certificates.length} Certificates Completed</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}