import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";
import {SiAsana, SiCodecademy}from "react-icons/si";

const ExperienceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experienceData = [
    {
      position: "Founder and Attorney at Law",
      company: "Oran Law Firm",
     
      year: "11.2019-12.2023",
      
      skills: ["Team Management", "Process Tracking", "Client Communication", "Risk Management", "Documentation"],
      description: "I founded my own law office to provide legal consultancy to clients in various fields, managing a small yet effective team. I prioritized client satisfaction by focusing on risk management and time management."
       
    },
    {
      position: "Attorney at Law",
      company: "Koca & Ersöz Law Firm",
      
      year: "07.2017-10.2019",
     
      skills: ["Problem Solving", "Detail-Oriented Approach", "Analytical Thinking", "Adaptability", "Time management"],
      description:"I started at the firm as a trainee lawyer and continued as an attorney after my internship due to my performance and dedication. During this time, I gained experience in teamwork and corporate communication."
     },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Professional Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Demonstrated commitment to analytical thinking and problem-solving while transitioning from law to software development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experienceData.map((ex, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    
                    <h3 className="text-2xl font-bold text-white">
                      {ex.position}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-teal-500" />
                    {ex.company}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {ex.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3 text-justify">
                  {ex.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Skills Acquired
                  </h4>
                  
                </div>

                <div className="flex flex-wrap gap-2">
                  {ex.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
