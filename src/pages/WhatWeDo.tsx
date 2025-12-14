import { useNavigate } from "react-router-dom";
import { ArrowLeft, Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from "@/i18n";
import SuperAppPublishingSection from "@/components/SuperAppPublishingSection";

const WhatWeDo = () => {
  const navigate = useNavigate();
  const { lang, setLang } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-gray-800/20">
        <div className="md:h-20 h-12 px-6 md:px-12 flex items-center relative">
          {/* Back button */}
          <button
            onClick={() => navigate("/#what-we-do")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors z-10"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:inline font-rift text-sm">Back</span>
          </button>

          {/* Title - Centered absolutely */}
          <h1 className="absolute left-1/2 -translate-x-1/2 font-rift text-xl md:text-2xl font-bold text-foreground">
            WHAT WE DO
          </h1>

          {/* Language dropdown */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger className="ml-auto text-foreground hover:text-primary transition-colors">
              <Globe className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background border-border">
              <DropdownMenuItem
                className="cursor-pointer flex items-center justify-between"
                onClick={() => setLang("en")}
              >
                English {lang === "en" && <Check className="h-4 w-4 ml-2" />}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer flex items-center justify-between"
                onClick={() => setLang("ko")}
              >
                한국어 {lang === "ko" && <Check className="h-4 w-4 ml-2" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </header>

      {/* Main content */}
      <main className="md:pt-20 pt-12">
        <SuperAppPublishingSection />
      </main>
    </div>
  );
};

export default WhatWeDo;
