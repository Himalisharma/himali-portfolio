"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Skill icons component
// Fixed Skill icons component
const SkillIcon = ({ skill }: { skill: string }) => {
  const getSkillIcon = (skillName: string) => {
    switch (skillName) {
      case "C":
        return (
          <svg width="32" height="32" viewBox="0 0 32 32">
            <rect width="32" height="32" fill="#659AD2" rx="6"/>
            <text x="16" y="22" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">C</text>
          </svg>
        );
      case "C++":
        return (
          <svg width="32" height="32" viewBox="0 0 32 32">
            <rect width="32" height="32" fill="#00599C" rx="6"/>
            <text x="16" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">C++</text>
          </svg>
        );
      case "Java":
        return (
          <svg width="32" height="32" viewBox="0 0 128 128">
            <path fill="#0074BD" d="M47.6 98.2s-4.9 2.9 3.5 3.8c10.2 1.1 15.4.9 26.7-1 0 0 2.9 1.8 7 3.4-24.9 10.7-56.5-.6-37.2-6.2"/>
            <path fill="#0074BD" d="M44.3 85.3s-5.5 4.1 2.9 4.9c10.8 1.1 19.4 1.2 34.2-1.7 0 0 2 2.1 5.2 3.2-29.7 8.7-62.8.7-42.3-6.4"/>
            <path fill="#EA2D2E" d="M69.4 61.6c6.2 7.1-1.6 13.5-1.6 13.5s15.7-8.1 8.5-18.2c-6.7-9.4-11.8-14.1 15.9-30.2 0 0-43.5 10.9-22.8 34.9"/>
            <path fill="#0074BD" d="M102.7 104.4s3.6 3-4 5.3c-14.4 4.3-60 5.6-72.7.2-4.5-1.9 4-4.5 6.7-5.1 2.8-.6 4.4-.5 4.4-.5-5.1-3.6-33 7.1-14.2 10.1 51.1 8.1 93.1-3.6 79.8-10"/>
            <path fill="#0074BD" d="M49.8 72.5s-23.4 5.6-8.3 7.6c6.4.8 19.1.6 31-.3 9.7-.7 19.4-2.3 19.4-2.3s-3.4 1.5-5.9 3.2c-23.8 6.3-69.7 3.4-56.5-3.1 11.2-5.5 20.3-4.9 20.3-4.9v-.2"/>
            <path fill="#0074BD" d="M90.1 91.2c24.2-12.6 13-24.7 5.2-23.1-1.9.4-2.7.7-2.7.7s.7-1.1 2-1.6c14.9-5.2 26.4 16.1-5 24.6 0-.1.4-.3.5-.6"/>
            <path fill="#EA2D2E" d="M76.5 1.5s13.4 13.4-12.7 34c-21 16.5-4.8 25.9-.1 36.6-12.2-11-21.1-20.6-15.1-29.7 8.8-13.4 33.2-19.9 27.9-40.9"/>
            <path fill="#0074BD" d="M52.6 126.8c23.2 1.5 58.8-0.8 59.6-11.7 0 0-1.6 4.2-19.1 7.5-19.8 3.7-44.3 3.3-58.8.9 0-.1 3-2.5 18.3-3.7"/>
          </svg>
        );
      case "Python":
        return (
          <svg width="32" height="32" viewBox="0 0 128 128">
            <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="19.075" y1="18.782" x2="50.969" y2="50.676">
              <stop offset="0" stopColor="#387eb8"/>
              <stop offset="1" stopColor="#366994"/>
            </linearGradient>
            <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="77.031" y1="77.218" x2="108.925" y2="109.112">
              <stop offset="0" stopColor="#ffe052"/>
              <stop offset="1" stopColor="#ffc331"/>
            </linearGradient>
            <path fill="url(#python-original-a)" d="M49.543 8.011c-8.803 0-11.629 4.051-11.629 10.881v7.937h23.259v2.781H27.085c-7.162 0-13.428 4.302-15.4 12.486-2.264 9.405-2.366 15.244 0 25.096 1.753 7.311 5.947 12.486 13.109 12.486h8.477V71.85c0-8.136 7.031-15.317 15.4-15.317h23.259c6.865 0 12.365-5.681 12.365-12.486V18.892c0-6.683-5.642-11.7-12.365-10.881-4.063.496-7.896.544-11.629 0z"/>
            <circle cx="39.347" cy="23.391" r="4.569" fill="#fff"/>
            <path fill="url(#python-original-b)" d="M91.682 35.203c-1.753-7.311-5.947-12.486-13.109-12.486h-8.477v7.849c0 8.136-7.031 15.317-15.4 15.317H31.437c-6.865 0-12.365 5.681-12.365 12.486v28.154c0 6.683 5.642 11.7 12.365 10.881 4.063-.496 7.896-.544 11.629 0 8.803 0 11.629-4.051 11.629-10.881v-7.937H31.437v-2.781h35.173c7.162 0 13.428-4.302 15.4-12.486 2.264-9.405 2.366-15.244 0-25.096z"/>
            <circle cx="88.652" cy="104.609" r="4.569" fill="#fff"/>
          </svg>
        );
      case "HTML":
        return (
          <svg width="32" height="32" viewBox="0 0 128 128">
            <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
            <path fill="#F16529" d="M64 116.8L95.691 106.152l10.003-112.133H64z"/>
            <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64z"/>
            <path fill="#fff" d="M64 52.455v13.763h16.947l-1.597 17.849L64 88.637v-14.304l-15.365-4.148-.964-10.809H35.896l1.906 21.359 28.198 7.825V88.637z"/>
            <path fill="#EBEBEB" d="M63.952 88.637L48.587 84.489l-.964-10.809H35.848l1.906 21.359 28.198 7.825z"/>
            <path fill="#fff" d="M63.952 52.455H29.489l.33 3.692 3.382 37.927h30.751z"/>
          </svg>
        );
      case "CSS":
        return (
          <svg width="32" height="32" viewBox="0 0 32 32">
            <rect width="32" height="32" fill="#1572B6" rx="6"/>
            <path d="M8 4l2 20 6 2 6-2 2-20H8zm12 8H12l.5 4h7l-.5 6-3 1-3-1-.2-2h-2l.4 4 5.3 1.5 5.3-1.5 1-8H12.5l-.5-4z" fill="white"/>
          </svg>
        );
      case "JavaScript":
        return (
          <svg width="32" height="32" viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
            <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
          </svg>
        );
      case "React":
        return (
          <svg width="32" height="32" viewBox="0 0 32 32">
            <rect width="32" height="32" fill="#000" rx="6"/>
            <g fill="#61DAFB">
              <circle cx="16" cy="16" r="2"/>
              <path d="M16 10c6 0 10 2 10 6s-4 6-10 6-10-2-10-6 4-6 10-6z" fill="none" stroke="#61DAFB" strokeWidth="1"/>
              <path d="M11 13c3-5 7-8 9-6s0 7-3 12-7 8-9 6 0-7 3-12z" fill="none" stroke="#61DAFB" strokeWidth="1"/>
              <path d="M11 19c-3-5-5-11-3-12s6 1 9 6 5 11 3 12-6-1-9-6z" fill="none" stroke="#61DAFB" strokeWidth="1"/>
            </g>
          </svg>
        );
      case "Node.js":
        return (
          <svg width="32" height="32" viewBox="0 0 32 32">
            <rect width="32" height="32" fill="#339933" rx="6"/>
            <path d="M16 6l-8 4v12l8 4 8-4V10l-8-4zm0 2l6 3v10l-6 3-6-3V11l6-3z" fill="white"/>
            <path d="M16 8l-4 2v8l4 2 4-2v-8l-4-2zm0 2l2 1v6l-2 1-2-1v-6l2-1z" fill="#339933"/>
          </svg>
        );
      case "Git":
        return (
          <svg width="32" height="32" viewBox="0 0 128 128">
            <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/>
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

export const Skills = () => {
  const skills = [
    "C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript", "React", "Node.js", "Git"
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center space-x-2"
        >
          <SkillIcon skill={skill} />
          <span className="text-sm md:text-base">{skill}</span>
        </motion.div>
      ))}
    </div>
  );
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
           {[
                "C",
                "C++",
                "Java",
                "Python",
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Git"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <SkillIcon skill={skill} />
                  <span className="text-sm md:text-base">{skill}</span>
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