import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";


const projects = [
  {
    title: "TechVenture",
    description:"Developed using .NET Core, the backend utilizes CQRS, MediatR, AutoMapper, JWT authentication with refresh tokens, role-based authorization, and secure password hashing and salting. Email verification is implemented during registration, and Cloudinary is used for image management. The database is Microsoft SQL Server (MSSQL), with Entity Framework Core for ORM. Centralized error handling is implemented using custom middleware. On the frontend, the application uses Angular, Tailwind CSS and Angular Material, with Figma-based designs. Users apply to bootcamps, access bootcamp content once accepted and earn certificates after passing exams. The project emphasizes security, scalability, and user experience.",
    src1:"/techventure1.png",
    src2:"/techventure2.png",
    color: "#8f89ff",
    githubLink: "https://github.com/gulsum-oran-gunes/Tobeto3A-NArchitecture.BootcampProject",
    liveLink: "https://techventure-web.vercel.app",
  },
  {
    title: "Personal Portfolio Website ",
    description:"A fully responsive and modern portfolio site built with React and Tailwind CSS, designed to present my software projects, educational background, and technical experience. The application follows a serverless architecture on AWS. The project is deployed on an Amazon S3 static website and distributed globally via Amazon CloudFront CDN for low-latency access. A custom domain is configured and managed through Cloudflare to provide HTTPS support and improved DNS performance. A dynamic visitor counter is integrated in the welcome section using AWS Lambda, Amazon API Gateway, and Amazon DynamoDB, enabling real-time tracking without a traditional backend server. This setup ensures scalability, cost-efficiency, and high availability.",
    src1: "/portfolio1.png",
    src2: "/portfolio2.png",
    color: "#ed649e",
    githubLink: "https://github.com/gulsum-oran-gunes/portfolio",
    liveLink: "https://gulsumoran.com",
  },
  {
    title: "TIC-TAC-TOE",
    description: "This full-stack Tic-Tac-Toe project features a Python Flask backend with RESTful API endpoints to start new games, handle player moves, and fetch game history, using server-side validation, error handling, and an AI opponent powered by the Minimax algorithm. The game board is managed with Python lists, and the AI determines optimal moves recursively. The React frontend offers a clean, responsive UI where players can enter their name, play by clicking the grid, see real-time AI moves, and view past results. Game and player data are stored in a PostgreSQL database using three tables, with moves saved in JSON format. The project emphasizes modular code, clear status messages, API testing via Postman, and a smooth user experience.",
    src1: "/xox1.png",
    src2: "/xox2.png",
    color: "#5196fd",
    githubLink: "https://github.com/gulsum-oran-gunes/xox",
    liveLink: "https://github.com/gulsum-oran-gunes/xox",
  }
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                src1={project.src1}
                src2={project.src2}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  src1,
  src2,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-10  project-container  "
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 50}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[75%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-blue-950 border-2 ">
          {/* Image section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] h-[250px] md:h-[400px] lg:h-[500px] relative overflow-hidden p-6">
            <motion.picture>
                <source media="(min-width: 768px)" srcSet={src1} />
                  <motion.img
                    src={src2}
                    alt={title}
                    className="w-full h-full object-contain"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
            </motion.picture>


            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

  
            
          </div>

          {/* Content section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-between text-justify">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
                {/* Project number */}
                <div className="absolute right-4 bg-gray-700 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

