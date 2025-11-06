import { useState, useEffect } from "react";
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
  const [isScrolling, setIsScrolling] = useState(false);

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
        setIsScrolling(true);
        
        const headerOffset = 80;
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const targetPosition = elementTop - headerOffset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
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
      
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
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
      </div>
    </div>
  );
}
