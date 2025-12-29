import { useEffect, useRef, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import teamRobert from "@/assets/team-robert.png";
import teamHan from "@/assets/team-han.png";
import teamMaurizio from "@/assets/team-maurizio.png";
import teamStavros from "@/assets/team-stavros.png";
import teamMark from "@/assets/team-mark.png";
import teamSanghyun from "@/assets/team-sanghyun-new.png";
import teamCharles from "@/assets/team-charles.png";
import teamRyan from "@/assets/ryan-jang.png";
import { useI18n } from "@/i18n";

type TranslateFn = (t: { en: string; ko: string }) => string;

const getTeamMembers = (t: TranslateFn) => [
   // {
  //   name: t({ en: "Shin Sanghyun", ko: "신상현" }),
  //   role: t({
  //     en: "Founder (Undertheline)\nCo-Founder (Urbanlink Group)",
  //     ko: "Founder (Undertheline)\nCo-Founder (Urbanlink Group)",
  //   }),
  //   title: t({
  //     en: "DOCE Architect.",
  //     ko: "DOCE Architect.",
  //   }),
  //   description: t({
  //     en: "Shin Sanghyun is the architect of DOCE, a settlement-first operating system for entertainment and cultural platforms.\nHe designs artist-, brand-, and IP-led platforms across music, sports, and culture—aligning rights, data flows, and settlement so each ecosystem can scale without losing rights or control.",
  //     ko: "신상현은 엔터테인먼트와 문화 플랫폼을 위한 정산 우선 운영 체제인 DOCE의 설계자입니다.\n음악, 스포츠, 문화 전반에 걸쳐 아티스트, 브랜드, IP 주도 플랫폼을 설계하고 운영하며, 권리·데이터 흐름·정산을 정렬하여 각 생태계가 권리나 통제권을 잃지 않고 확장할 수 있도록 합니다.",
  //   }),
  //   image: teamSanghyun,
  // },
  {
    name: "Robert W. Lewis III",
    role: t({
      en: "Director, Artist & Platform Strategy (Undertheline)\nFounder & CEO (Urbanlink Group)",
      ko: "Director, Artist & Platform Strategy (Undertheline)\nFounder & CEO (Urbanlink Group)",
    }),
    title: t({
      en: "Producer-operator bridging artist development and super app strategy.",
      ko: "Producer-operator bridging artist development and super app strategy.",
    }),
    description: t({
      en: "Robert Lewis is a veteran of the U.S. music industry with over 30 years of experience. He has collaborated with world-renowned artists including Brandy & Monica, Whitney Houston, Destiny's Child, Jennifer Lopez, Beyoncé, Akon, Snoop Dogg, Michael Jackson, Justin Bieber, Lady Gaga, Ariana Grande, The Weeknd, Cardi B, Doja Cat, and many more. He contributes to the expansion of super-app strategies and supports the production and development of artists across all labels under Undertheline.",
      ko: "30년 이상의 미국 음악 산업 베테랑. Whitney Houston, Beyoncé, Michael Jackson, Ariana Grande, The Weeknd 등 세계적 아티스트들과 협업해온 프로듀서. Undertheline 산하 전체 레이블의 슈퍼앱 전략 및 아티스트 개발을 지원합니다.",
    }),
    image: teamRobert,
  },
  {
    name: t({ en: "Han Kim", ko: "김한" }),
    role: t({
      en: "COO (Undertheline)\nFounder (Panorama)",
      ko: "COO (Undertheline)\nFounder (Panorama)",
    }),
    title: t({
      en: "Cross-border operator for rights, deals, and platform execution.",
      ko: "Cross-border operator for rights, deals, and platform execution.",
    }),
    description: t({
      en: "Han Kim is an international expert with over 15 years in the K-pop and global music industries. A U.S.-licensed attorney recognized among Billboard's Top Music Lawyers, he has worked with SM Entertainment, JYP Entertainment, Kakao, and THEBLACKLABEL. With a Master's degree in Music Business from NYU, he now leads Panorama, connecting K-pop with the global music market through platforms and infrastructure.",
      ko: "빌보드 선정 미국 톱 음악 변호사. SM, JYP, Kakao, THEBLACKLABEL과 협업 경험. NYU 음악비즈니스 석사. K-POP과 글로벌 시장을 잇는 인프라를 구축합니다.",
    }),
    image: teamHan,
  },
  {
    name: "Wonjoon Jang",
    role: t({
      en: "CFO, Co-founder (Undertheline)",
      ko: "CFO, Co-founder (Undertheline)",
    }),
    title: t({
      en: "Cross-border capital executive — finance, structuring, and investor strategy.",
      ko: "Cross-border capital executive — finance, structuring, and investor strategy.",
    }),
    description: t({
      en: "Wonjoon Jang is a finance executive focused on cross-border structuring and capital execution across entertainment and technology. A Georgetown McDonough finance graduate and former Deloitte Tomatsu FAS professional, he has led investments and finance operations in the U.S., with additional experience in GCC-related transactions.\nAs CFO of Undertheline, he leads financial strategy, capital planning, and growth readiness.",
      ko: "Wonjoon Jang is a finance executive focused on cross-border structuring and capital execution across entertainment and technology. A Georgetown McDonough finance graduate and former Deloitte Tomatsu FAS professional, he has led investments and finance operations in the U.S., with additional experience in GCC-related transactions.\nAs CFO of Undertheline, he leads financial strategy, capital planning, and growth readiness.",
    }),
    image: teamRyan,
  },
  {
    name: 'Charles "Big Chuck" Stanton',
    role: t({
      en: "Strategic Advisor (Undertheline)",
      ko: "Strategic Advisor (Undertheline)",
    }),
    title: t({
      en: "U.S. hip-hop and urban culture connector — A&R, artist development, and go-to-market.",
      ko: "U.S. hip-hop and urban culture connector — A&R, artist development, and go-to-market.",
    }),
    description: t({
      en: 'Michael Jackson collaborator & culture connector. Charles "Big Chuck" Stanton is a veteran executive and producer in U.S. hip-hop and R&B, who spent much of Michael Jackson\'s final decade working closely with producer Theron "Neff-U" Feemster on MJ\'s transition toward a more urban sound. Over his career, he has been involved in projects with artists such as Michael Jackson, New Edition, Boyz II Men, Luther Vandross, Anita Baker, Dr. Dre, Eminem, 50 Cent, Jay-Z, The Game and others, connecting street culture with mainstream audiences. At Undertheline, he helps build the DOCE pipeline in U.S. hip-hop and urban markets, advising on A&R, artist development, and culture-driven go-to-market strategies.',
      ko: 'Michael Jackson collaborator & culture connector. Charles "Big Chuck" Stanton is a veteran executive and producer in U.S. hip-hop and R&B, who spent much of Michael Jackson\'s final decade working closely with producer Theron "Neff-U" Feemster on MJ\'s transition toward a more urban sound. Over his career, he has been involved in projects with artists such as Michael Jackson, New Edition, Boyz II Men, Luther Vandross, Anita Baker, Dr. Dre, Eminem, 50 Cent, Jay-Z, The Game and others, connecting street culture with mainstream audiences. At Undertheline, he helps build the DOCE pipeline in U.S. hip-hop and urban markets, advising on A&R, artist development, and culture-driven go-to-market strategies.',
    }),
    image: teamCharles,
  },
  {
    name: "Mark Friedman",
    role: t({
      en: "Capital & Investment Advisor (Undertheline)",
      ko: "Capital & Investment Advisor (Undertheline)",
    }),
    title: t({
      en: "Institutional fundraising advisor — deal execution, capital strategy, and investor relations.",
      ko: "Institutional fundraising advisor — deal execution, capital strategy, and investor relations.",
    }),
    description: t({
      en: "Mark Friedman is a veteran operator and investor with deep experience in consumer brands, e-commerce, and capital markets. He co-founded and led Perfect Fitness to rank #1 in Consumer Products on the INC 500 list, and later founded MF Consulting to advise founders and funds. He previously served on the International Board of YPO, chairing more than 45 global programs, and holds a High-Tech Venture MBA from USC. At Undertheline, he supports U.S. IR, capital structure, and valuation strategy, translating the DOCE ecosystem into a language that institutional investors can underwrite.",
      ko: "Mark Friedman is a veteran operator and investor with deep experience in consumer brands, e-commerce, and capital markets. He co-founded and led Perfect Fitness to rank #1 in Consumer Products on the INC 500 list, and later founded MF Consulting to advise founders and funds. He previously served on the International Board of YPO, chairing more than 45 global programs, and holds a High-Tech Venture MBA from USC. At Undertheline, he supports U.S. IR, capital structure, and valuation strategy, translating the DOCE ecosystem into a language that institutional investors can underwrite.",
    }),
    image: teamMark,
  },
  // {
  //   name: "Maurizio Romiti",
  //   role: t({ en: "Strategic Partner – Europe", ko: "Strategic Partner – Europe" }),
  //   title: t({ en: "Pioneer in Korea's entertainment management industry", ko: "이탈리아 최고 영향력 가문" }),
  //   description: t({
  //     en: "Maurizio Romiti is the son of Cesare Romiti, former Chairman of FIAT Group for over 20 years, and part of one of Italy's most influential families. As former Chairman of HDP Group, he oversaw luxury brands including Armani, Fila, Kenzo, Valentino, and Calvin Klein, along with major newspapers, magazines, and media channels. He remains a key figure with wide influence across Italy's finance, media, and fashion industries.",
  //     ko: "FIAT 회장 체사레 로미티의 가문. Armani, Fila, Kenzo, Calvin Klein 등 럭셔리 브랜드를 총괄했던 이탈리아 최고 영향력 가문 출신의 인물.",
  //   }),
  //   image: teamMaurizio,
  // },
  {
    name: "Stavros Pirounis",
    role: t({
      en: "Director, Luxury Partnerships & Brand Strategy (Undertheline)",
      ko: "Director, Luxury Partnerships & Brand Strategy (Undertheline)",
    }),
    title: t({
      en: "Luxury brand strategist shaping partnerships, collaborations, and cultural positioning.",
      ko: "Luxury brand strategist shaping partnerships, collaborations, and cultural positioning.",
    }),
    description: t({
      en: "Stavros Pirounis is a veteran executive in the global fashion industry. He served as Executive Director for Asia and President of Korea at ST Dupont (2010–2023), and earlier as CEO of Gruppo G.F.T. Asia-Pacific (1996–2009), managing brands like Armani, Valentino, and Calvin Klein. He also held senior roles at Loro Piana and Ermenegildo Zegna, contributing to their growth as leading luxury houses.",
      ko: "ST Dupont 아시아 총괄 및 한국 대표, Gruppo GFT 아시아 CEO(Armani·Valentino·Calvin Klein 관리) 등을 역임. Loro Piana, Zegna 등 럭셔리 하우스 성장에 기여.",
    }),
    image: teamStavros,
  },
];

const OurTeamSection = () => {
  const { t } = useI18n();
  const teamMembers = useMemo(() => getTeamMembers(t), [t]);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const targetScroll = container.clientWidth * index;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < teamMembers.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!scrollContainerRef.current) return;

  //     const container = scrollContainerRef.current;
  //     const maxScrollLeft = container.scrollWidth - container.clientWidth;
  //     const progress =
  //       maxScrollLeft > 0 ? (container.scrollLeft / maxScrollLeft) * 100 : 0;
  //     setScrollProgress(progress);

  //     // Update currentIndex based on scroll position
  //     const newIndex = Math.round(container.scrollLeft / container.clientWidth);
  //     setCurrentIndex(newIndex);
  //   };

  //   let isScrolling = false;
  //   let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
  //   const handleWheel = (e: WheelEvent) => {
  //     if (!scrollContainerRef.current || isScrolling) return;

  //     // Ignore small scroll movements
  //     if (Math.abs(e.deltaY) < 30) return;

  //     const container = scrollContainerRef.current;
  //     const maxScrollLeft = container.scrollWidth - container.clientWidth;

  //     // Check if we're at the boundaries
  //     const atStart = container.scrollLeft <= 1;
  //     const atEnd = container.scrollLeft >= maxScrollLeft - 1;

  //     // Only hijack vertical scroll if not at boundaries
  //     if (e.deltaY !== 0) {
  //       const currentIdx = Math.round(
  //         container.scrollLeft / container.clientWidth
  //       );

  //       // If scrolling down and not at end, snap to next
  //       if (e.deltaY > 0 && !atEnd) {
  //         e.preventDefault();
  //         isScrolling = true;
  //         const newIndex = Math.min(currentIdx + 1, teamMembers.length - 1);
  //         scrollToIndex(newIndex);
  //         if (scrollTimeout) clearTimeout(scrollTimeout);
  //         scrollTimeout = setTimeout(() => {
  //           isScrolling = false;
  //         }, 800);
  //       }
  //       // If scrolling up and not at start, snap to previous
  //       else if (e.deltaY < 0 && !atStart) {
  //         e.preventDefault();
  //         isScrolling = true;
  //         const newIndex = Math.max(currentIdx - 1, 0);
  //         scrollToIndex(newIndex);
  //         if (scrollTimeout) clearTimeout(scrollTimeout);
  //         scrollTimeout = setTimeout(() => {
  //           isScrolling = false;
  //         }, 800);
  //       }
  //     }
  //   };

  //   const container = scrollContainerRef.current;
  //   if (container) {
  //     container.addEventListener("scroll", handleScroll);
  //     container.addEventListener("wheel", handleWheel, { passive: false });
  //     handleScroll(); // Initial calculation
  //   }

  //   return () => {
  //     if (container) {
  //       container.removeEventListener("scroll", handleScroll);
  //       container.removeEventListener("wheel", handleWheel);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const callback = () => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const progress =
          maxScrollLeft > 0 ? (container.scrollLeft / maxScrollLeft) * 100 : 0;
        setScrollProgress(progress);
      };

      container.addEventListener("scroll", callback);

      return () => {
        container.removeEventListener("scroll", callback);
      };
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let lastNavigationTime = 0;
    const THRESHOLD = 30;
    const DEBOUNCE_MS = 500;

    const handleWheel = (e: WheelEvent) => {
      // Check debounce - ignore if within 500ms of last navigation
      const now = Date.now();
      if (now - lastNavigationTime < DEBOUNCE_MS) return;

      // Abstract 2D to 1D: combine X and Y deltas
      // Left/Top (negative) = prev, Right/Bottom (positive) = next
      const combinedDelta = e.deltaX + e.deltaY;

      // Check threshold - ignore if scroll strength is too weak
      if (Math.abs(combinedDelta) < THRESHOLD) return;

      // Get current index from scroll position
      const currentIdx = Math.round(
        container.scrollLeft / container.clientWidth
      );

      // Determine direction and navigate
      if (combinedDelta > 0 && currentIdx < teamMembers.length - 1) {
        // Next: right/bottom scroll
        e.preventDefault();
        scrollToIndex(currentIdx + 1);
        lastNavigationTime = now;
      } else if (combinedDelta < 0 && currentIdx > 0) {
        // Prev: left/top scroll
        e.preventDefault();
        scrollToIndex(currentIdx - 1);
        lastNavigationTime = now;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [teamMembers.length]);

  return (
    <section
      id="our-team"
      ref={sectionRef}
      className="pt-[20px] md:pt-[100px] pb-8 bg-background flex flex-col"
    // style={{ minHeight: "calc(100vh - 80px)" }}
    >
      {/* Title - Hidden on mobile */}
      <div className="hidden md:block px-6 md:px-12 mb-8 text-center">
        <h2
          className={`text-[31px] lg:text-[50px] leading-[100%] font-bold text-foreground font-rift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {t({ en: "OUR TEAM", ko: "팀 소개" })}
        </h2>
      </div>

      {/* Horizontal Scrollable Team Members */}
      <div className="relative">
        {/* Navigation Buttons - Mobile Only */}
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="absolute left-4 top-[140px] z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-background transition-all"
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === teamMembers.length - 1}
          className="absolute right-4 top-[140px] z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-background transition-all"
          aria-label="Next team member"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide w-full snap-x snap-mandatory"
        >
          <div className="flex gap-0 min-w-max">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`flex-shrink-0 w-screen min-h-[400px] flex items-start justify-center transition-all duration-700 delay-${index * 100
                  } snap-center`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(50px)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-start">
                  {/* Image Section - Smaller Rectangle */}
                  <div className="w-full h-[280px] mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info Section - Two Columns */}
                  <div className="w-full flex flex-col md:flex-row justify-between gap-6 md:gap-[100px]">
                    {/* Left Column - Name and Role */}
                    <div className="flex-shrink-0">
                      <h3
                        className={`leading-[100%] font-bold text-foreground mb-1 font-sans ${member.name.includes("Big Chuck")
                          ? "text-[20px] lg:text-[24px]"
                          : "text-[24px] lg:text-[28px]"
                          }`}
                      >
                        {member.name}
                      </h3>
                      <p className="text-[14px] text-foreground/70 whitespace-pre-line">
                        {member.role}
                      </p>
                    </div>

                    {/* Right Column - Title and Description */}
                    <div className="flex-1 text-left">
                      <h4 className="text-[18px] font-semibold text-foreground mb-2">
                        {member.title}
                      </h4>
                      <p className="text-[15px] text-foreground/80 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mt-8 w-full">
        <div className="relative w-full h-[2px] bg-border/30">
          <div
            className="absolute left-0 top-0 h-full bg-foreground transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
