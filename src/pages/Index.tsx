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

  return (
    <div className="w-full h-dvh flex flex-col bg-background">
      {/* Header with logo and language selector */}
      <header className="shrink-0 w-full md:h-20 h-12 px-6 md:px-12 flex justify-between items-center border-b border-gray-800/20 bg-background">
        <Logo />

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
        <SnapSection>
          <HeroSection />
        </SnapSection>
        <SnapSection>
          <AboutSection />
        </SnapSection>
        <SnapSection>
          <WhoWeAreSection />
        </SnapSection>
        <SnapSection>
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
        <SnapSection>
          <Footer />
        </SnapSection>
      </main>
    </div>
  );
};

export default Index;
