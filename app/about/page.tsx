"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, GraduationCap, Heart, Sparkles, MapPin, Code, Camera, Music, BookOpen, Plane, Brain } from "lucide-react"

export default function About() {
  const interests = [
    { 
      title: "Web Development", 
      description: "Building responsive and interactive web applications with modern frameworks",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Machine Learning", 
      description: "Exploring algorithms, data analysis, and AI-powered solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "Reading", 
      description: "Books on technology, science fiction, and personal development",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500"
    },
    { 
      title: "Photography", 
      description: "Capturing moments, landscapes, and the beauty in everyday life",
      icon: Camera,
      color: "from-orange-500 to-red-500"
    },
    { 
      title: "Music", 
      description: "Listening to various genres and exploring musical instruments",
      icon: Music,
      color: "from-violet-500 to-purple-500"
    },
    { 
      title: "Traveling", 
      description: "Exploring new places, cultures, and expanding worldview",
      icon: Plane,
      color: "from-teal-500 to-blue-500"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
            <Heart className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 dark:text-purple-300 font-medium">Get to Know Me</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover my journey, passions, and the experiences that shape who I am as a developer and individual
          </p>
        </motion.div>

        {/* Main Content Section (full-width now) */}
<motion.div
  initial={{ opacity: 0, x: 0 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="max-w-3xl mx-auto mb-6"
>
  <div className="space-y-6">
    <div className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Himali <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Sharma</span>
      </h2>
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
        <GraduationCap className="h-5 w-5 text-purple-600" />
        <span className="font-medium">Computer Science Student at VIT Vellore</span>
      </div>
    </div>

    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
      <p className="text-lg">
        I am a passionate Computer Science student at VIT Vellore, driven by an insatiable curiosity about technology and its potential to solve real-world problems. My journey began with a simple question: <em>"How can we use code to make life better?"</em>
      </p>
      <p>
        Throughout my academic journey, I've immersed myself in various programming languages and cutting-edge technologies. Each project I undertake is an opportunity to push boundaries, learn something new, and contribute to the ever-evolving world of software development.
      </p>
      <p>
        I believe in the power of continuous learning and collaboration. Whether it's building responsive web applications, exploring machine learning algorithms, or contributing to open-source projects, I approach each challenge with enthusiasm and dedication.
      </p>
    </div>

    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button 
      asChild 
      size="lg"
      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link href="/resume.pdf" download className="flex items-center gap-2">
        <Download className="h-5 w-5" /> 
        Download Resume
        <Sparkles className="h-4 w-4 ml-1" />
      </Link>
    </Button>
    </motion.div>
  </div>
</motion.div>

        
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Education Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="relative pl-8 border-l-4 border-gradient-to-b from-purple-600 to-blue-600"
                  style={{ borderImage: 'linear-gradient(to bottom, rgb(147, 51, 234), rgb(37, 99, 235)) 1' }}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-lg"></div>
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">B.Tech in Computer Science</h3>
                    <p className="text-lg font-semibold text-purple-600 mb-1">VIT Vellore</p>
                    <p className="text-gray-500 dark:text-gray-400 mb-3 font-medium">2020 - 2024</p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Pursuing comprehensive education in core computer science subjects including Data Structures & Algorithms, 
                      Database Management Systems, Software Engineering, Machine Learning, and Web Technologies. Actively 
                      participating in coding competitions and technical projects.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="relative pl-8 border-l-4 border-gradient-to-b from-purple-600 to-blue-600"
                  style={{ borderImage: 'linear-gradient(to bottom, rgb(147, 51, 234), rgb(37, 99, 235)) 1' }}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-lg"></div>
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Higher Secondary Education</h3>
                    <p className="text-lg font-semibold text-purple-600 mb-1">Senior Secondary School</p>
                    <p className="text-gray-500 dark:text-gray-400 mb-3 font-medium">2018 - 2020</p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Completed higher secondary education with exceptional performance in Mathematics, Physics, and Computer Science. 
                      Developed foundational programming skills and logical thinking abilities that paved the way for my 
                      computer science journey.
                    </p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Interests & Hobbies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Interests & Passions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Beyond coding, I'm passionate about various activities that keep me inspired and motivated
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {interests.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="group"
                >
                  <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:shadow-purple-100 dark:group-hover:shadow-purple-900/30">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}