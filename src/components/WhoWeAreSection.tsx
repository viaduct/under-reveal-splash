import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/i18n";

const WhoWeAreSection = () => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
      id="who-we-are"
      ref={sectionRef}
      className="h-full flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left side - Logo with line */}
          <div className="flex flex-col items-end mt-0">
            {/* Horizontal line */}
            <div className="w-full max-w-[470px] overflow-hidden mb-[6px]">
              <div
                className={`h-[3px] bg-foreground origin-left transition-all duration-1000 ${
                  isVisible ? "animate-draw-line" : "w-0"
                }`}
              />
            </div>

            {/* WHO WE ARE text */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0 animate-fade-slide-up"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
            >
              <h2 className="text-[39px] lg:text-[44px] leading-[100%] font-bold text-foreground font-rift text-right">
                WHO WE ARE
              </h2>
            </div>
          </div>

          {/* Right side - Description text */}
          <div
            className={`transition-all duration-1000 mt-[-10px] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
          >
            <p className="text-sm md:text-base leading-[1.4] text-foreground mb-4">
              {t({
                en: "UNDERTHELINE is shaping the future of entertainment by breaking down the boundaries between reality and the virtual world, building a next-generation infrastructure for the global entertainment industry.",
                ko: "UNDERTHELINE은 현실과 가상의 경계를 허물고 글로벌 엔터테인먼트 산업을 위한 차세대 인프라를 구축하며 엔터테인먼트의 미래를 만들어가고 있습니다.",
              })}
            </p>
            <p className="text-sm md:text-base leading-[1.4] text-foreground mb-12">
              {t({
                en: "UNDERTHELINE is a DOCE-powered full-stack entertainment operator, combining day-to-day operations with infrastructure. The same team that works on artists' music, content, branding, and touring also designs the rails, data flows, and rights/settlement structures that sustain their ecosystems.",
                ko: "UNDERTHELINE은 DOCE 기술을 기반으로 실제 운영과 인프라를 결합한 풀스택 엔터테인먼트 운영사입니다. 음악, 콘텐츠, 브랜딩, 투어·공연 운영을 담당하는 동일한 팀이 아티스트 생태계를 지속시키는 데이터 흐름, 권리 구조, 정산 시스템까지 함께 설계합니다.",
              })}
            </p>

            <div className="flex gap-5">
              <button
                className="px-6 py-3 md:px-8 md:py-3 border border-foreground bg-transparent text-foreground font-bold font-rift text-base md:text-lg hover:bg-foreground hover:text-background transition-all duration-300"
                onClick={() => navigate("/more?from=who-we-are")}
              >
                {t({ en: "MORE", ko: "더보기" })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
