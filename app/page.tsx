"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Skill icons component
const SkillIcon = ({ skill }: { skill: string }) => {
  const getSkillIcon = (skillName: string) => {
    switch (skillName) {
      case "HTML/CSS":
        return (
          <div className="flex gap-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 17.56L16.07 16.43L16.62 10.33H9.38L9.2 8.3H16.8L17 6H7L8.24 18.43L12 19.69V17.56Z" fill="#E34F26"/>
              <path d="M12 8.3V6H7L8.24 18.43L12 19.69V17.56L7.93 16.43L7.38 10.33H12V8.3Z" fill="#EF652A"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 17.56L16.07 16.43L16.62 10.33H9.38L9.2 8.3H16.8L17 6H7L8.24 18.43L12 19.69V17.56Z" fill="#1572B6"/>
              <path d="M12 8.3V6H7L8.24 18.43L12 19.69V17.56L7.93 16.43L7.38 10.33H12V8.3Z" fill="#33A9DC"/>
            </svg>
          </div>
        );
      case "JavaScript":
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" fill="#F7DF1E"/>
            <path d="M18.814 26.188C19.7 26.188 20.4 25.875 20.9 25.25C21.4 24.625 21.65 23.813 21.65 22.813V13.5H19.45V22.75C19.45 23.313 19.325 23.75 19.075 24.063C18.825 24.375 18.45 24.531 17.95 24.531C17.45 24.531 17.075 24.375 16.825 24.063C16.575 23.75 16.45 23.313 16.45 22.75V13.5H14.25V22.813C14.25 23.813 14.5 24.625 15 25.25C15.5 25.875 16.2 26.188 17.086 26.188H18.814Z" fill="#000"/>
            <path d="M25.95 26.188C27.2 26.188 28.15 25.75 28.8 24.875C29.45 24 29.775 22.813 29.775 21.313C29.775 19.813 29.45 18.625 28.8 17.75C28.15 16.875 27.2 16.438 25.95 16.438C24.7 16.438 23.75 16.875 23.1 17.75C22.45 18.625 22.125 19.813 22.125 21.313C22.125 22.813 22.45 24 23.1 24.875C23.75 25.75 24.7 26.188 25.95 26.188Z" fill="#000"/>
          </svg>
        );
      case "React":
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="#61DAFB">
            <path d="M16 13.146C14.374 13.146 13.054 14.467 13.054 16.094C13.054 17.72 14.374 19.04 16 19.04C17.626 19.04 18.946 17.72 18.946 16.094C18.946 14.467 17.626 13.146 16 13.146Z"/>
            <path d="M16 10.946C20.8 10.946 24.8 11.574 27.52 12.48C29.92 13.28 31.2 14.387 31.2 15.547V16.64C31.2 17.8 29.92 18.907 27.52 19.707C24.8 20.614 20.8 21.241 16 21.241C11.2 21.241 7.2 20.614 4.48 19.707C2.08 18.907 0.8 17.8 0.8 16.64V15.547C0.8 14.387 2.08 13.28 4.48 12.48C7.2 11.574 11.2 10.946 16 10.946Z" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
            <path d="M20.786 13.147C23.186 8.72 25.52 5.174 27.04 3.054C28.267 1.28 29.427 0.373 30.347 0.8V1.893C30.347 3.053 29.773 4.72 28.48 6.827C26.96 9.547 24.626 12.827 21.893 16.094C19.493 20.52 17.16 24.067 15.64 26.187C14.413 27.96 13.253 28.867 12.333 28.44V27.347C12.333 26.187 12.907 24.52 14.2 22.413C15.72 19.693 18.053 16.413 20.786 13.147Z" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
            <path d="M11.214 13.147C8.814 8.72 6.48 5.174 4.96 3.054C3.733 1.28 2.573 0.373 1.653 0.8V1.893C1.653 3.053 2.227 4.72 3.52 6.827C5.04 9.547 7.374 12.827 10.107 16.094C12.507 20.52 14.84 24.067 16.36 26.187C17.587 27.96 18.747 28.867 19.667 28.44V27.347C19.667 26.187 19.093 24.52 17.8 22.413C16.28 19.693 13.947 16.413 11.214 13.147Z" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
          </svg>
        );
      case "Node.js":
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="#339933">
            <path d="M16 0C15.6 0 15.2 0.1 14.8 0.3L2.4 7.1C1.6 7.5 1 8.4 1 9.3V22.7C1 23.6 1.6 24.5 2.4 24.9L14.8 31.7C15.2 31.9 15.6 32 16 32C16.4 32 16.8 31.9 17.2 31.7L29.6 24.9C30.4 24.5 31 23.6 31 22.7V9.3C31 8.4 30.4 7.5 29.6 7.1L17.2 0.3C16.8 0.1 16.4 0 16 0Z"/>
            <path d="M20.1 21.4C20.1 22.2 19.5 22.8 18.7 22.8H17.3C16.5 22.8 15.9 22.2 15.9 21.4V16.6H12.8V21.4C12.8 23.9 14.8 25.9 17.3 25.9H18.7C21.2 25.9 23.2 23.9 23.2 21.4V10.6H20.1V21.4Z" fill="#fff"/>
            <path d="M8.9 13.7H12V19.4H15.1V16.3H12V13.7H8.9V19.4H12V22.5H8.9C7.1 22.5 5.8 21.2 5.8 19.4V16.6C5.8 14.8 7.1 13.5 8.9 13.5V13.7Z" fill="#fff"/>
          </svg>
        );
      case "Python":
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16.1 2C13.3 2 11.9 3.4 11.9 5.4V7.6H16.1V8.2H8.7C6.7 8.2 5 9.6 5 12.4V19.6C5 22.4 6.7 23.8 8.7 23.8H10.5V20.8C10.5 18.8 12.1 17.2 14.1 17.2H19.9C21.7 17.2 22.9 16 22.9 14.2V5.4C22.9 3.4 21.5 2 19.9 2H16.1Z" fill="#3776AB"/>
            <path d="M27 8.2H25.2V11.2C25.2 13.2 23.6 14.8 21.6 14.8H15.8C14 14.8 12.8 16 12.8 17.8V26.6C12.8 28.6 14.2 30 15.8 30H19.6C22.4 30 23.8 28.6 23.8 26.6V24.4H19.6V23.8H27C29 23.8 30.7 22.4 30.7 19.6V12.4C30.7 9.6 29 8.2 27 8.2Z" fill="#FFD43B"/>
            <circle cx="14.5" cy="5.5" r="1.5" fill="#fff"/>
            <circle cx="19.5" cy="26.5" r="1.5" fill="#3776AB"/>
          </svg>
        );
      default:
        return (
          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded flex items-center justify-center">
            <span className="text-purple-600 font-bold text-sm">{skillName.charAt(0)}</span>
          </div>
        );
    }
  };

  return getSkillIcon(skill);
};

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hello, I'm <span className="text-purple-600">Himali Sharma</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Computer Science Student at VIT Vellore</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/projects">View My Work</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 transition-colors dark:bg-gray-800 dark:hover:bg-purple-900/30"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-purple-600" />
                </a>
                <a
                  href="mailto:himalisharma@gmail.com"
                  className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 transition-colors dark:bg-gray-800 dark:hover:bg-purple-900/30"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-purple-600" />
                </a>
                <a
                  href="tel:+918272843293"
                  className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 transition-colors dark:bg-gray-800 dark:hover:bg-purple-900/30"
                  aria-label="Phone"
                >
                  <Phone className="h-5 w-5 text-purple-600" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-200 shadow-xl">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Himali Sharma"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {["HTML/CSS", "JavaScript", "React", "Node.js", "Python"].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-3">
                  <SkillIcon skill={skill} />
                </div>
                <p className="font-medium text-sm">{skill}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Check out some of my recent work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <Image
                    src={`/placeholder.svg?height=192&width=384`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Short description of the project and the technologies used.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/projects/project-${project}`}>View Details</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="ghost" className="text-purple-600">
              <Link href="/projects" className="flex items-center gap-2">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-purple-50 dark:bg-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}