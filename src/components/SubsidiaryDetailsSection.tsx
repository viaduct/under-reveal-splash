import { useEffect, useState, useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Helper components for body content
const P = ({
  children,
  first,
}: {
  children: React.ReactNode;
  first?: boolean;
}) => (
  <p
    className={`text-muted-foreground text-sm md:text-base leading-relaxed${
      first ? "" : " mt-4"
    }`}
  >
    {children}
  </p>
);

const Bold = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold">{children}</span>
);

interface Business {
  id: string;
  title: string;
  webpageUrl: string | null;
  body: React.ReactNode;
}

const businesses: Business[] = [
  {
    id: "urbanlink",
    title: "URBANLINK",
    webpageUrl: null,
    body: (
      <>
        <P first>
          URBANLINK is an operating group of dedicated entities—launching and
          running partner-specific Super App ecosystems across fandom, IP, and
          culture.
        </P>
        <P>
          <Bold>ARTIST SUPER APP ECOSYSTEMS</Bold>
          <br />
          Operating partner-led platforms that unify fandom, content, and
          commerce.
        </P>
        <P>
          <Bold>FRANCHISE IP COMMUNITY HUBS</Bold>
          <br />
          The community home for stories across film, series, animation, and
          beyond—built for membership and monetization.
        </P>
        <P>
          <Bold>CULTURE COMMERCE</Bold>
          <br />
          Scaling talent-adopted culture brands through community momentum and
          drop-based commerce.
        </P>
      </>
    ),
  },
  {
    id: "panorama",
    title: "PANORAMA",
    webpageUrl: "https://www.panoramamgmt.com",
    body: (
      <>
        <P first>
          Panorama provides an operating framework through which artists and IP
          expand across platforms, communities, and commerce
        </P>
        <P>
          <Bold>RECORD DISTRIBUTION</Bold>
          <br />
          Partnering with leading labels and platforms to support global release
          strategy, distribution, and promotion for artists.
        </P>
        <P>
          <Bold>PUBLISHING & RIGHTS</Bold>
          <br />
          Managing publishing across key territories to maximize royalty income
          and enable collaboration with world-class songwriters and producers.
        </P>
        <P>
          <Bold>TOURING & LIVE</Bold>
          <br />
          Working with top agencies, promoters, and venues to build world
          tours—optimizing routing, ticketing, and live revenue.
        </P>
        <P>
          <Bold>CATALOGUE IP DEALS</Bold>
          <br />
          Structuring catalogue transactions across master and publishing
          rights—including acquisitions, partnerships, and administration
          models—to unlock long-term royalty value.
        </P>
      </>
    ),
  },
  {
    id: "aradnas",
    title: "ARADNAS",
    webpageUrl: null,
    body: (
      <>
        <P first>
          ARADNAS is a creative label that develops individual IP into
          sustainable projects and brands, grounded in artists' creative
          practice.
        </P>
        <P>
          <Bold>ARTIST MANAGEMENT & CREATIVE LABEL</Bold>
          <br />
          {`Plans and operates career and project strategies aligned with each artist's stage of growth.
  Leads creative production across music, content, and visual direction.
  Conceives, produces, and manages the growth of both live artists and original virtual artist IP.
  Designs the narrative, world-building, and structural pathways through which artist IP evolves and expands.`}
        </P>
        <P>
          Drives market expansion of projects and IP through global
          collaborations and partnerships.
        </P>
      </>
    ),
  },
  {
    id: "mars",
    title: "MAR/S",
    webpageUrl: null,
    body: (
      <>
        <P first>
          MAR/S provides an open platform ecosystem centered on virtual artists
          and music, integrating content, commerce, and fandom.
        </P>
        <P>
          <Bold>VIRTUAL ARTIST SUPER PLATFORM</Bold>
          <br />
          {`Builds and operates a super platform environment where diverse virtual artists can actively perform and create.
Enables direct connections between virtual artists and fans through content and music.
Provides an open participation framework where anyone can explore and experiment with becoming a virtual artist.
Creates a stage for expanding activities across live performances, content, and community engagement.
Operates an ecosystem in which individual artist IP can grow independently while coexisting within the platform.`}
        </P>
      </>
    ),
  },
];

const SubsidiaryDetailsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("urbanlink");
  const sectionRef = useRef<HTMLDivElement>(null);

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
            {businesses.map((business) => (
              <TabsTrigger
                key={business.id}
                value={business.id}
                className="relative bg-transparent text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-bold data-[state=active]:bg-transparent rounded-none h-[44px] px-2 md:px-4 text-sm md:text-lg font-rift transition-colors data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300 whitespace-nowrap flex items-center justify-center"
              >
                {business.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content Wrapper */}
          <div className="flex-1 flex items-center">
            {businesses.map((business) => (
              <TabsContent
                key={business.id}
                value={business.id}
                className="mt-0 w-full"
              >
                <div className="flex-1 flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-20 items-start md:items-center animate-fade-slide-up">
                  <div className="transition-all duration-1000 opacity-100 translate-x-0 text-left w-full md:w-auto">
                    <div className="w-full md:w-[300px]">
                      <div className="flex items-center justify-between md:block">
                        <h2 className="text-[26px] md:text-[50px] leading-[100%] font-bold text-foreground mb-[4px] font-rift text-left">
                          {business.title}
                        </h2>
                        {/* Mobile button - next to title */}
                        <Button
                          variant="link"
                          className="group text-xs h-8 px-3 md:hidden"
                          disabled={!business.webpageUrl}
                          onClick={() =>
                            business.webpageUrl &&
                            window.open(business.webpageUrl, "_blank")
                          }
                        >
                          WEBSITE
                          <ExternalLink
                            className={`ml-1.5 h-3 w-3${
                              business.webpageUrl
                                ? " transition-transform group-hover:translate-x-1"
                                : ""
                            }`}
                          />
                        </Button>
                      </div>
                      <div className="h-0.5 w-full bg-foreground mb-3 md:mb-6"></div>
                      {/* Desktop button - below divider */}
                      <Button
                        variant="outline"
                        className="group hidden md:inline-flex text-sm h-10 px-4"
                        disabled={!business.webpageUrl}
                        onClick={() =>
                          business.webpageUrl &&
                          window.open(business.webpageUrl, "_blank")
                        }
                      >
                        WEBSITE
                        <ExternalLink
                          className={`ml-2 h-4 w-4${
                            business.webpageUrl
                              ? " transition-transform group-hover:translate-x-1"
                              : ""
                          }`}
                        />
                      </Button>
                    </div>
                  </div>

                  <div
                    className={`whitespace-pre-wrap transition-all duration-1000 delay-200 ${
                      isVisible && activeTab === business.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                  >
                    {business.body}
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default SubsidiaryDetailsSection;
