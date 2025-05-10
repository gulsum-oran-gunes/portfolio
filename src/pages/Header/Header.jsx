import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaBlogger,
  FaArrowUp,
  FaLongArrowAltRight,
  FaExternalLinkAlt,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { SquareArrowUpRight } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const menuRef = useRef(null); // Menü dışına tıklamayı kontrol etmek için ref

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Menü dışına tıklanırsa menüyü kapat
    const handleClickOutside = (event) => {
      // Menü dışına tıklanıp tıklanmadığını kontrol et
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // 'mousedown' yerine 'click' kullanarak daha yaygın bir yöntem
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/education",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/experience",
    },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
    { id: "blog", icon: FaExternalLinkSquareAlt, text: "Blog", path: "https://medium.com/@gulsumorangunes" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav ref={menuRef} className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <Link to="/" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} className="text-white font-bold">
                Home
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    target={id === "blog" ? "_blank" : undefined} // only for blog target="_blank"
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2
                      hover:bg-white/10 
                      ${
                        activeLink === id
                          ? "bg-white/15 text-white"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base ${
                        activeLink === id ? "scale-110" : ""
                      }`}
                    />
                    <span className="inline">{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
