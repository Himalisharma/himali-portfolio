"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Phone, MessageCircle, MapPin, Clock, Star } from "lucide-react"

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "himalisharma@gmail.com",
      href: "mailto:himalisharma@gmail.com",
      description: "Send me an email anytime",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-8272843293",
      href: "tel:+918272843293",
      description: "Available Mon-Fri 9AM-6PM",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/himalisharma",
      description: "Let's connect professionally",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Indore, India",
      href: "#",
      description: "Available for remote work",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const quickFacts = [
    { icon: Clock, text: "Usually responds within 24 hours" },
    { icon: Star, text: "Open to new opportunities" },
    { icon: MessageCircle, text: "Always happy to chat about projects" }
  ];

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
              <MessageCircle className="h-5 w-5 text-purple-600" />
              <span className="text-purple-700 dark:text-purple-300 font-medium">Let's Connect</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Contact Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have a question, want to collaborate, or just say hello? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            {quickFacts.map((fact, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <fact.icon className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{fact.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Get In Touch Section (Full Width Now) */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12 max-w-5xl mx-auto"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent text-center lg:text-left">
                Get In Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 text-center lg:text-left">
                Choose your preferred way to reach out. I'm always excited to discuss new projects, 
                opportunities, or just have a friendly conversation about technology and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group cursor-pointer">
                    <CardContent className="p-6">
                      <a href={method.href} className="block">
                        <div className="flex items-start gap-4">
                          <div className={`bg-gradient-to-br ${method.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <method.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {method.title}
                            </h3>
                            <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                              {method.value}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold">Currently Available</h3>
                  </div>
                  <p className="text-purple-100 leading-relaxed">
                    I'm actively looking for new opportunities and exciting projects. 
                    Whether it's a full-time role, freelance work, or collaboration, I'm ready to contribute!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
