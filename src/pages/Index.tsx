import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import SubsidiariesSection from "@/components/SubsidiariesSection";
import AboutSection from "@/components/AboutSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import SubsidiaryDetailsSection from "@/components/SubsidiaryDetailsSection";
import BrandMessageSection from "@/components/BrandMessageSection";
import GlobalNetworkSection from "@/components/GlobalNetworkSection";
import Footer from "@/components/Footer";
import SnapSection from "@/components/SnapSection";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";
import { useI18n } from "@/i18n";

const navItems = [
  { label: "Home", id: "home" },
  { label: "What", id: "what" },
  { label: "Who", id: "who" },
  { label: "Companies", id: "companies" },
  { label: "Contact", id: "contact" },
];

const Index = () => {
  const location = useLocation();
  const { lang, setLang } = useI18n();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-dvh flex flex-col bg-background">
      {/* Header with logo and language selector */}
      <header className="shrink-0 w-full md:h-20 h-12 px-6 md:px-12 flex justify-between items-center border-b border-gray-800/20 bg-background">
        <Logo />

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* <DropdownMenu>
          <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
            <Globe className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-background border-border"
          >
            <DropdownMenuItem
              className="cursor-pointer flex items-center justify-between"
              onClick={() => setLang("en")}
            >
              English
              {lang === "en" && <Check className="h-4 w-4 ml-2" />}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer flex items-center justify-between"
              onClick={() => setLang("ko")}
            >
              한국어
              {lang === "ko" && <Check className="h-4 w-4 ml-2" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </header>

      {/* Main content - scrollable area */}
      <main className="flex-1 overflow-y-auto snap-container">
        <SnapSection id="home">
          <HeroSection />
        </SnapSection>
        <SnapSection id="what">
          <AboutSection />
        </SnapSection>
        <SnapSection id="who">
          <WhoWeAreSection />
        </SnapSection>
        <SnapSection id="companies">
          <SubsidiariesSection />
        </SnapSection>
        <SnapSection>
          <SubsidiaryDetailsSection />
        </SnapSection>
        <SnapSection>
          <GlobalNetworkSection />
        </SnapSection>
        <SnapSection>
          <BrandMessageSection />
        </SnapSection>
        <SnapSection id="contact">
          <Footer />
        </SnapSection>
      </main>
    </div>
  );
};

export default Index;
