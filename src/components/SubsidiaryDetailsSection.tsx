import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/i18n";

const SubsidiaryDetailsSection = () => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("urbanlink");
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail.tab);
    };

    window.addEventListener("changeSubsidiaryTab", handleTabChange);

    return () => {
      window.removeEventListener("changeSubsidiaryTab", handleTabChange);
    };
  }, []);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    // Scroll to ensure this section is visible
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="subsidiary-details"
      ref={sectionRef}
      className="h-full flex flex-col items-center justify-center px-6 md:px-[160px] bg-background"
    >
      <div className="w-full max-w-7xl mx-auto flex-1">
        <Tabs
          value={activeTab}
          onValueChange={handleTabClick}
          className="w-full h-full flex flex-col"
        >
          {/* Tab Navigation */}
          <TabsList className="w-full bg-transparent border-b border-border rounded-none h-auto p-0 flex items-end justify-center md:gap-8 gap-4 overflow-x-auto scrollbar-hide">
            <TabsTrigger
              value="urbanlink"
              className="relative bg-transparent text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-bold data-[state=active]:bg-transparent rounded-none h-[44px] px-2 md:px-4 text-sm md:text-lg font-rift transition-colors data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap flex items-center justify-center"
            >
              URBANLINK
            </TabsTrigger>
            <TabsTrigger
              value="panorama"
              className="relative bg-transparent text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-bold data-[state=active]:bg-transparent rounded-none h-[44px] px-2 md:px-4 text-sm md:text-lg font-rift transition-colors data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap flex items-center justify-center"
            >
              PANORAMA
            </TabsTrigger>
            <TabsTrigger
              value="aradnas"
              className="relative bg-transparent text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-bold data-[state=active]:bg-transparent rounded-none h-[44px] px-2 md:px-4 text-sm md:text-lg font-rift transition-colors data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap flex items-center justify-center"
            >
              ARADNAS
            </TabsTrigger>
            <TabsTrigger
              value="mars"
              className="relative bg-transparent text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-bold data-[state=active]:bg-transparent rounded-none h-[44px] px-2 md:px-4 text-sm md:text-lg font-rift transition-colors data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap flex items-center justify-center"
            >
              MAR/S
            </TabsTrigger>
          </TabsList>

          {/* Tab Content Wrapper */}
          <div className="flex-1 flex items-center">
            {/* PANORAMA Tab */}
            <TabsContent value="panorama" className="mt-0 w-full">
              <div className="flex-1 flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-20 items-start md:items-center animate-fade-slide-up">
                <div className="transition-all duration-1000 opacity-100 translate-x-0 text-left w-full md:w-auto">
                  <div className="w-full md:w-[300px]">
                    <div className="flex items-center justify-between md:block">
                      <h2 className="text-[31px] lg:text-[50px] leading-[100%] font-bold text-foreground mb-[4px] font-rift text-left">
                        PANORAMA
                      </h2>
                      {/* Mobile button - next to title */}
                      <Button
                        variant="link"
                        className="group text-xs h-8 px-3 md:hidden"
                        onClick={() =>
                          window.open("https://www.panoramamgmt.com", "_blank")
                        }
                      >
                        WEBSITE
                        <ExternalLink className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                    <div className="h-0.5 w-full bg-foreground mb-3 md:mb-6"></div>
                    {/* Desktop button - below divider */}
                    <Button
                      variant="outline"
                      className="group hidden md:inline-flex text-sm h-10 px-4"
                      onClick={() =>
                        window.open("https://www.panoramamgmt.com", "_blank")
                      }
                    >
                      WEBSITE
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

                <div
                  className={`md:space-y-[30px] space-y-[16px] transition-all duration-1000 delay-200 ${
                    isVisible && activeTab === "panorama"
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                >
                  <div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {t({
                        en: "Panorama provides an operating framework through which artists and IP expand across platforms, communities, and commerce",
                      })}
                    </p>
                  </div>

                  <div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      <b className="font-bold">
                        {t({
                          en: "RECORD DISTRIBUTION",
                        })}
                      </b>

                      <br />

                      {t({
                        en: "Partnering with leading labels and platforms to support global release strategy, distribution, and promotion for artists.",
                      })}
                    </p>
                  </div>

                  <div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      <b className="font-bold">
                        {t({
                          en: "PUBLISHING & RIGHTS",
                        })}
                      </b>

                      <br />

                      {t({
                        en: "Managing publishing across key territories to maximize royalty income and enable collaboration with world-class songwriters and producers.",
                      })}
                    </p>
                  </div>

                  <div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      <b className="font-bold">
                        {t({
                          en: "TOURING & LIVE",
                        })}
                      </b>

                      <br />

                      {t({
                        en: "Working with top agencies, promoters, and venues to build world tours—optimizing routing, ticketing, and live revenue.",
                      })}
                    </p>
                  </div>

                  <div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      <b className="font-bold">
                        {t({
                          en: "CATALOGUE IP DEALS",
                        })}
                      </b>

                      <br />

                      {t({
                        en: "Structuring catalogue transactions across master and publishing rights—including acquisitions, partnerships, and administration models—to unlock long-term royalty value.",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* URBANLINK Tab */}
            <TabsContent value="urbanlink" className="mt-0 w-full">
              <div className="flex-1 flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-20 items-start md:items-center animate-fade-slide-up">
                <div className="transition-all duration-1000 opacity-100 translate-x-0 text-left w-full md:w-auto">
                  <div className="w-full md:w-[300px]">
                    <div className="flex items-center justify-between md:block">
                      <h2 className="text-[31px] lg:text-[50px] leading-[100%] font-bold text-foreground mb-[4px] font-rift text-left">
                        URBANLINK
                      </h2>
                      {/* Mobile button - next to title */}
                      <Button
                        variant="link"
                        className="group text-xs h-8 px-3 md:hidden"
                        disabled
                      >
                        WEBSITE
                        <ExternalLink className="ml-1.5 h-3 w-3" />
                      </Button>
                    </div>
                    <div className="h-0.5 w-full bg-foreground mb-3 md:mb-6"></div>
                    {/* Desktop button - below divider */}
                    <Button
                      variant="outline"
                      className="group hidden md:inline-flex text-sm h-10 px-4"
                      disabled
                    >
                      WEBSITE
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div
                  className={`md:space-y-[30px] space-y-[16px] transition-all duration-1000 delay-200 ${
                    isVisible && activeTab === "urbanlink"
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                >
                  <div>
                    {/* <h3 className="text-xl md:text-2xl font-bold text-foreground md:mb-3 mb-1 font-rift">
                      URBANLINK
                    </h3> */}
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:mb-3 mb-1">
                      URBANLINK is an operating group of dedicated
                      entities—launching and running partner-specific Super App
                      ecosystems across fandom, IP, and culture.
                    </p>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:mb-3 mb-1">
                      <b className="font-bold">ARTIST SUPER APP ECOSYSTEMS</b>
                      <br />
                      Operating partner-led platforms that unify fandom,
                      content, and commerce.
                    </p>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:mb-3 mb-1">
                      <b className="font-bold">FRANCHISE IP COMMUNITY HUBS</b>
                      <br />
                      The community home for stories across film, series,
                      animation, and beyond—built for membership and
                      monetization.
                    </p>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:mb-3 mb-1">
                      <b className="font-bold">CULTURE COMMERCE</b>
                      <br />
                      Scaling talent-adopted culture brands through community
                      momentum and drop-based commerce.
                    </p>
                  </div>

                  {/* <div className="h-px bg-border"></div> */}

                  {/* <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground md:mb-3 mb-1 font-rift">
                      URBANLINK 360
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:mb-4 mb-1">
                      {t({
                        en: "Operating Super App platforms for global icons NBA YoungBoy and Nora Fatehi, URBANLINK 360 focuses on building artist-owned ecosystems that merge music, content, and community.",
                        ko: "NBA YoungBoy, Nora Fatehi 등 글로벌 아이콘의 슈퍼앱 플랫폼을 운영하며, 음악·콘텐츠·커뮤니티를 통합한 아티스트 소유 생태계를 구축합니다.",
                      })}
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {t({
                        en: "As part of the URBANLINK network, the company specializes in developing and operating fandom-based platforms that embody each artist's brand identity and creative vision.",
                        ko: "URBANLINK 네트워크의 일원으로서, 각 아티스트의 브랜드 아이덴티티와 창의적 비전을 담아낸 팬덤 기반 플랫폼을 개발·운영하는 데 특화되어 있습니다.",
                      })}
                    </p>
                  </div> */}
                </div>
              </div>
            </TabsContent>

            {/* ARADNAS Tab */}
            <TabsContent value="aradnas" className="mt-0 w-full">
              <div className="flex-1 flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-20 items-start md:items-center animate-fade-slide-up">
                <div className="transition-all duration-1000 opacity-100 translate-x-0 text-left w-full md:w-auto">
                  <div className="w-full md:w-[300px]">
                    <div className="flex items-center justify-between md:block">
                      <h2 className="text-[31px] lg:text-[50px] leading-[100%] font-bold text-foreground mb-[4px] font-rift text-left">
                        ARADNAS
                      </h2>
                      {/* Mobile button - next to title */}
                      <Button
                        variant="link"
                        className="group text-xs h-8 px-3 md:hidden"
                        disabled
                      >
                        WEBSITE
                        <ExternalLink className="ml-1.5 h-3 w-3" />
                      </Button>
                    </div>
                    <div className="h-0.5 w-full bg-foreground mb-3 md:mb-6"></div>
                    {/* Desktop button - below divider */}
                    <Button
                      variant="outline"
                      className="group hidden md:inline-flex text-sm h-10 px-4"
                      disabled
                    >
                      WEBSITE
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div
                  className={`transition-all duration-1000 delay-200 ${
                    isVisible && activeTab === "aradnas"
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                >
                  <div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:mb-4 mb-1">
                      {t({
                        en: "ARADNAS is a creative label that develops individual IP into sustainable projects and brands, grounded in artists’ creative practice.",
                      })}
                    </p>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:mb-4 mb-1">
                      <b className="font-bold">
                        {t({
                          en: "ARTIST MANAGEMENT & CREATIVE LABEL",
                        })}
                      </b>

                      <br />

                      <span className="whitespace-pre-wrap">
                        {`Plans and operates career and project strategies aligned with each artist’s stage of growth.
Leads creative production across music, content, and visual direction.
Conceives, produces, and manages the growth of both live artists and original virtual artist IP.
Designs the narrative, world-building, and structural pathways through which artist IP evolves and expands.`}
                      </span>
                    </p>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:mb-4 mb-1">
                      {t({
                        en: "Drives market expansion of projects and IP through global collaborations and partnerships.",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* MAR/S Tab */}
            <TabsContent value="mars" className="mt-0 w-full">
              <div className="flex-1 flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-20 items-start md:items-center animate-fade-slide-up">
                <div className="transition-all duration-1000 opacity-100 translate-x-0 text-left w-full md:w-auto">
                  <div className="w-full md:w-[300px]">
                    <div className="flex items-center justify-between md:block">
                      <h2 className="text-[31px] lg:text-[50px] leading-[100%] font-bold text-foreground mb-[4px] font-rift text-left">
                        MAR/S
                      </h2>
                      {/* Mobile button - next to title */}
                      <Button
                        variant="link"
                        className="group text-xs h-8 px-3 md:hidden"
                        disabled
                      >
                        WEBSITE
                        <ExternalLink className="ml-1.5 h-3 w-3" />
                      </Button>
                    </div>
                    <div className="h-0.5 w-full bg-foreground mb-3 md:mb-6"></div>
                    {/* Desktop button - below divider */}
                    <Button
                      variant="outline"
                      className="group hidden md:inline-flex text-sm h-10 px-4"
                      disabled
                    >
                      WEBSITE
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div
                  className={`transition-all duration-1000 delay-200 ${
                    isVisible && activeTab === "mars"
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                >
                  <div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:mb-3 mb-1">
                      {t({
                        en: `MAR/S provides an open platform ecosystem centered on virtual artists and music, integrating content, commerce, and fandom.`,
                      })}
                    </p>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:mb-4 mb-1">
                      <b className="font-bold">
                        {t({
                          en: "VIRTUAL ARTIST SUPER PLATFORM",
                        })}
                      </b>

                      <br />

                      <span className="whitespace-pre-wrap">
                        {`Builds and operates a super platform environment where diverse virtual artists can actively perform and create.
Enables direct connections between virtual artists and fans through content and music.
Provides an open participation framework where anyone can explore and experiment with becoming a virtual artist.
Creates a stage for expanding activities across live performances, content, and community engagement.
Operates an ecosystem in which individual artist IP can grow independently while coexisting within the platform.`}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default SubsidiaryDetailsSection;
