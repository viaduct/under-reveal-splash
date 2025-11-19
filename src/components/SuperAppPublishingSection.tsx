import { useEffect, useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import tab1Image from "@/assets/tab1.png";
import tab2Image from "@/assets/tab2.png";

const SuperAppPublishingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #E6E6E6 100%)'
      }}
    >
      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          {/* Left curves */}
          {[...Array(8)].map((_, i) => (
            <path
              key={`left-${i}`}
              d={`M 0,${400 + i * 20} Q 360,${400 + i * 20 + 50} 720,${600 + i * 10}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className={`text-gray-300 transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ 
                transitionDelay: isVisible ? `${i * 100}ms` : "0ms",
                strokeDasharray: "2000",
                strokeDashoffset: isVisible ? "0" : "2000",
              }}
            />
          ))}
          {/* Right curves */}
          {[...Array(8)].map((_, i) => (
            <path
              key={`right-${i}`}
              d={`M 1440,${400 + i * 20} Q 1080,${400 + i * 20 + 50} 720,${600 + i * 10}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className={`text-gray-300 transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ 
                transitionDelay: isVisible ? `${i * 100}ms` : "0ms",
                strokeDasharray: "2000",
                strokeDashoffset: isVisible ? "0" : "2000",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <Tabs defaultValue="tab1" className="w-full">
          {/* Tab Title Images */}
          <div
            className={`transition-all duration-1000 mb-12 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <TabsList className="bg-transparent p-0 h-auto gap-8 mb-16 justify-center border-none">
              <TabsTrigger 
                value="tab1" 
                className="bg-transparent p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-none"
              >
                <img src={tab1Image} alt="Tab 1" className="h-12 md:h-16" />
              </TabsTrigger>
              <TabsTrigger 
                value="tab2"
                className="bg-transparent p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-none"
              >
                <img src={tab2Image} alt="Tab 2" className="h-12 md:h-16" />
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content */}
          <TabsContent value="tab1" className="mt-0">
            <div
              className={`text-center space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              <p className="text-base md:text-lg leading-relaxed text-foreground max-w-3xl mx-auto">
                UNDERTHELINE holds the exclusive DOCE OS licensing rights for the U.S. region,
                enabling artists and creators to own, design, and operate their own
                independent platforms through DOCE-powered publishing.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground max-w-3xl mx-auto">
                Each app becomes a personal community and ecosystem where the artist is the true owner
                -operating fandom, commerce, and content directly under their own control.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground max-w-3xl mx-auto flex items-center justify-center gap-2">
                <span>→</span>
                <span>An "Entertainment OS" that bridges real-world entertainment infrastructure with digital platforms.</span>
              </p>
            </div>
          </TabsContent>

          <TabsContent value="tab2" className="mt-0">
            <div
              className={`text-center space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              <p className="text-base md:text-lg leading-relaxed text-foreground max-w-3xl mx-auto">
                UNDERTHELINE holds the exclusive DOCE OS licensing rights for the U.S. region,
                enabling artists and creators to own, design, and operate their own
                independent platforms through DOCE-powered publishing.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground max-w-3xl mx-auto">
                Each app becomes a personal community and ecosystem where the artist is the true owner
                -operating fandom, commerce, and content directly under their own control.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground max-w-3xl mx-auto flex items-center justify-center gap-2">
                <span>→</span>
                <span>An "Entertainment OS" that bridges real-world entertainment infrastructure with digital platforms.</span>
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* DOCE OS Badge */}
        <div
          className={`mt-16 flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isVisible ? "900ms" : "0ms" }}
        >
          <div className="bg-black text-white px-8 py-4 font-bold text-lg md:text-xl">
            DOCE OS
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAppPublishingSection;
