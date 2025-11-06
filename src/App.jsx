import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dock, DockIcon } from "@/components/ui/dock";
import { House, FolderKanban, Star, Rocket, MessageCircleCode, Github, BriefcaseBusiness } from "lucide-react";
import HeroSection from "@/sections/HeroSection";
import ServicesSections from "@/sections/ServicesSections";
import ProjectsSections from "@/sections/ProjectsSections";
import FeedbacksSections from "@/sections/FeedbacksSections";
import SkillsSections from "@/sections/SkillsSections";
import ContactSections from "@/sections/ContactSections";
import Header from "@/components/Header";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [dockPosition, setDockPosition] = useState("bottom");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowHeight(window.innerHeight);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Em mobile, não aplica animação de scroll na dock
    if (isMobile) {
      setDockPosition("bottom");
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - lastScrollY;
          
          const heroSection = document.getElementById("home");
          const heroSectionHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
          
          if (scrollDifference > 0 && currentScrollY > 20) {
            setDockPosition("header");
          } 
          else if (scrollDifference < 0 && currentScrollY <= heroSectionHeight - 50) {
            setDockPosition("bottom");
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobile]);

  const dockItems = [
    { id: "home", icon: House, label: "Início" },
    { id: "services", icon: BriefcaseBusiness, label: "Serviços" }, 
    { id: "projects", icon: FolderKanban, label: "Projetos" },
    { id: "feedbacks", icon: Star, label: "Feedbacks" },
    { id: "skills", icon: Rocket, label: "Habilidades" },
    { id: "contact", icon: MessageCircleCode, label: "Contato" },
    { id: "github", icon: Github, label: "Github", isExternal: true, url: "https://github.com/icaroCodes" },
  ];

  

  const handleDockClick = (item) => {
    if (item.isExternal && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        setActiveSection(item.id);
        
        const headerOffset = 80;
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const targetPosition = elementTop - headerOffset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <ServicesSections />
      <ProjectsSections />
      <FeedbacksSections />
      <SkillsSections />
      <ContactSections />
      
      <motion.div
        className="fixed left-1/2 -translate-x-1/2 z-50"
        initial={{ y: 0 }}
        animate={{
          y: isMobile || dockPosition === "bottom" 
            ? 0 
            : windowHeight > 0 ? -(windowHeight - 100) : 0
        }}
        transition={
          isMobile 
            ? {
                type: "tween",
                duration: 0.2,
                ease: "easeOut"
              }
            : {
                type: "spring",
                stiffness: 120,
                damping: 25,
                mass: 0.8
              }
        }
        style={{
          bottom: 16
        }}
      >
        <Dock 
          direction="middle"
          className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl"
        >
          {dockItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id && !item.isExternal;
            
            return (
              <DockIcon
                key={item.id}
                onClick={() => handleDockClick(item)}
                className={`relative group transition-colors duration-300 ${
                  isActive ? "bg-[#f2f4f8]" : "hover:bg-white/20"
                }`}
              >
                <Icon className="w-6 h-6 text-slate-900" />
                
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-100">
                  <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                    {item.label}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                  </div>
                </div>
              </DockIcon>
            );
          })}
        </Dock>
      </motion.div>
    </div>
  );
}
