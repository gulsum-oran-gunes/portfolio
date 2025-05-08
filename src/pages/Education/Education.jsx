import React from "react";
import { Code2, Activity, Cpu, FileDown, Download, Scale } from "lucide-react";
import { SiAngular, SiDotnet, SiGoogle, SiPython, SiReact, SiScrumalliance } from "react-icons/si";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import { TbAdCircle, TbCubeUnfolded } from "react-icons/tb";
import certificate from "@/assets/images/certificate.pdf";

const EducationCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  file
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6 flex justify-between">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-800" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
        <a href={file} target="_blank">
            <FileDown className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:animate-bounce   " />
        </a>

      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed text-justify">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const EducationSection = () => {
  const educations = [
    {
      icon: SiPython,
      title: "Python Web Apps with Flask",
      company: "Codecademy",
      period: "March 2025",
      description:
        "Learned Python and developed web applications using Flask, including SQL integration, views, authentication and more to create dynamic, interactive websites.",
      file: "https://skillsoft.digitalbadges-eu.skillsoft.com/ec4c26df-e39f-45ab-bd09-0e4bf872090d#acc.IXoL6yFA"
    },
    {
      icon: SiReact,
      title: "Web Apps: React & Redux",
      company: "Skillsoft",
      period: "July 2024",
      description: "Learned to build scalable front-end applications with React and Redux, mastering state management, routing, and advanced techniques.",
      file: "https://skillsoft.digitalbadges-eu.skillsoft.com/e29d6650-2f05-4cc8-8412-9bf832b4150d#acc.eupzPbsQ"
       
    },
    {
      icon: FaMicrosoft,
      title: "Web Apps with ASP.NET",
      company: "Skillsoft",
      period: "June 2024",
      description: "Learned to build fast, secure, and maintainable web apps using C# and ASP.NET, mastering fundamentals and framework-specific skills.",
      file: "https://skillsoft.digitalbadges-eu.skillsoft.com/ab5da8f0-565c-479d-b420-86d842b40bd1#acc.JiwCm0yk"  
    },
    
    {
      icon: SiAngular,
      title: ".NET & Angular Developer",
      company: "Tobeto",
      period: "June 2024",
      description:"This certification program, consisting of 450 hours of training, covers key topics such as OOP, Entity Framework, .NET 6+ & ASP.NET Core, Clean Architecture, CQRS, JWT Authentication, Redis Cache, and Docker, with hands-on projects including real-life system applications",
      file: certificate
    },
    {
      icon: Activity,
      title: "Professional Scrum Master",
      company: "Scrum.org",
      period: "September 2023",
      description:"The PSM I certification demonstrates a fundamental understanding of Scrum principles and the ability to apply them effectively. It reflects consistent use of Scrum terms and alignment with the Scrum Guide.",
      file:"https://www.credly.com/badges/e446a7e1-52c8-44e4-b447-d6047a9bdd38/public_url"
    },
    
    {
      icon: FaGoogle,
      title: "Google Project Management",
      company: "Coursera",
      period: "July 2023",
      description: "I earned this certificate after completing six courses developed by Google, featuring hands-on, practice-based assessments. Through this program, I gained the skills to initiate, plan, and manage projects using both traditional and agile methodologies.",
      file:"https://www.credly.com/badges/01952d4e-7132-4914-a364-fe5c33f202bf/public_url"
    
    },
    {
      icon: Scale,
      title: "Bachelor of Laws (LLB) ",
      company: "Istanbul Unıversity",
      period: "June 2017",
      description: "I graduated with a GPA of 3.28/4.00, completing the program in 4 years. This education honed my analytical, problem-solving, and structured thinking skills, all of which have greatly contributed to my success as a software developer.",
      file:"https://hukuk.istanbul.edu.tr/en/_"
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Educational Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "From legal logic to software structure — a unique blend of disciplines. Discover how I made the transition"
            </p>
          </div>

          {/* Education grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {educations.map((exp, index) => (
              <EducationCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default EducationSection;
