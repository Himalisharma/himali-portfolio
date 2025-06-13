"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"

export default function WorkExperience() {
  const workExperience = [
    {
      title: "Web Development Intern",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      duration: "May 2023 - Aug 2023",
      type: "Internship",
      description:
        "Worked on developing responsive web applications using React and Node.js. Collaborated with a team of developers to implement new features and fix bugs. Gained hands-on experience in full-stack development and agile methodologies.",
      skills: ["React", "Node.js", "MongoDB", "Git"],
      achievements: [
        "Improved application load time by 40% through code optimization",
        "Contributed to 3 major feature releases",
        "Mentored 2 junior interns"
      ]
    },
    {
      title: "Frontend Developer (Part-time)",
      company: "Creative Designs",
      location: "Remote",
      duration: "Jan 2023 - Apr 2023",
      type: "Part-time",
      description:
        "Designed and implemented user interfaces for client websites. Worked closely with designers to ensure pixel-perfect implementation of designs. Specialized in creating responsive and accessible web experiences.",
      skills: ["HTML/CSS", "JavaScript", "Figma", "Responsive Design"],
      achievements: [
        "Delivered 5+ client projects on time",
        "Achieved 98% design-to-code accuracy",
        "Implemented accessibility improvements"
      ]
    },
  ]

  const totalExperience = "8+ months"

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
              <Briefcase className="h-5 w-5 text-purple-600" />
              <span className="text-purple-700 dark:text-purple-300 font-medium">Professional Journey</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Work Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              My professional journey spanning <span className="font-semibold text-purple-600">{totalExperience}</span> of hands-on experience in web development and frontend technologies.
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    {/* Header with gradient background */}
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold">{job.title}</h3>
                            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                              {job.type}
                            </Badge>
                          </div>
                          <p className="text-xl font-medium text-purple-100">{job.company}</p>
                        </div>
                        <div className="text-right lg:text-left">
                          <div className="flex items-center gap-2 text-purple-100 mb-1">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{job.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-purple-100">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      {/* Description */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Role Overview</h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{job.description}</p>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:from-purple-100 hover:to-indigo-100 dark:hover:from-purple-900/30 dark:hover:to-indigo-900/30 transition-all duration-200 px-3 py-1"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ExternalLink className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Ready for New Challenges</h2>
                  <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                    I'm passionate about creating innovative web solutions and always eager to take on new challenges. 
                    Let's discuss how I can contribute to your next project.
                  </p>
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium text-lg">himalisharma@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}