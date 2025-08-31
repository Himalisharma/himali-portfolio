"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Linkedin,
  Mail,
  Phone,
  Briefcase,
  Code,
  Database,
  Globe,
  Cpu,
  Coffee,
  Leaf,
  Zap,
  HardDrive,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// --- UPDATED SKILL TILE COMPONENT ---
const SkillTile = ({ skill }: { skill: string }) => {
  const skillsData: { [key: string]: { icon: React.ReactNode; color: string } } = {
    python: { icon: <Code size={26} className="text-[#3776AB]" />, color: "#3776AB" },
    django: { icon: <Leaf size={26} className="text-[#092E20]" />, color: "#092E20" },
    react: { icon: <Zap size={26} className="text-[#61DAFB]" />, color: "#61DAFB" },
    javascript: { icon: <Code size={26} className="text-[#F7DF1E]" />, color: "#F7DF1E" },
    "node.js": { icon: <Rocket size={26} className="text-[#339933]" />, color: "#339933" },
    html: { icon: <Globe size={26} className="text-[#E34F26]" />, color: "#E34F26" },
    css: { icon: <Globe size={26} className="text-[#1572B6]" />, color: "#1572B6" },
    sql: { icon: <Database size={26} className="text-[#4479A1]" />, color: "#4479A1" },
    postgresql: { icon: <HardDrive size={26} className="text-[#336791]" />, color: "#336791" },
    c: { icon: <Cpu size={26} className="text-[#A8B9CC]" />, color: "#A8B9CC" },
    java: { icon: <Coffee size={26} className="text-[#007396]" />, color: "#007396" },
  }

  const skillInfo = skillsData[skill.toLowerCase()]
  if (!skillInfo) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <div
        className={`w-full h-28 sm:h-32 p-4 rounded-xl flex flex-col items-center justify-center 
        bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/20 border`}
        style={{ borderColor: skillInfo.color }}
      >
        <div className="mb-2">{skillInfo.icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-center text-gray-800 dark:text-gray-200">
          {skill}
        </h3>
      </div>
    </motion.div>
  )
}

// --- MAIN HOME COMPONENT ---
export default function Home() {
  const skills = ["Python", "Django", "React", "JavaScript", "Node.js", "PostgreSQL", "HTML", "CSS", "SQL", "C", "Java"]

  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "Sudofire Technology",
      description: "Architected and developed a web application from scratch using Django, focusing on database design and RESTful APIs.",
    },
    {
      title: "Volunteer, Publicity & Marketing",
      company: "VIT Vellore College Fest",
      description: "Collaborated with a large team to promote the annual college fest, managing social media and coordinating outreach.",
    },
  ]

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
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Computer Science Student at VIT Vellore
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/experience">View My Experience</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/himali-sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 transition-colors dark:bg-gray-800 dark:hover:bg-purple-900/30"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-purple-600" />
                </a>
                <a
                  href="mailto:himaliisharma@gmail.com"
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
                  src="/himali_pic.jpg"
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

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-white dark:from-gray-900 dark:via-purple-950/20 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-purple-700 dark:text-purple-400">Technical Skills</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of technologies I use to build modern, efficient, and scalable applications.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {skills.map((skill) => (
              <SkillTile key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Recent Experience</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A glimpse into my professional journey so far.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all">
                  <Briefcase className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-3 font-medium">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="ghost" className="text-purple-600">
              <Link href="/experience" className="flex items-center gap-2">
                View All Experiences <ArrowRight className="h-4 w-4" />
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
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
