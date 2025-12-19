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
            <p className="text-sm md:text-base leading-[1.4] text-foreground font-bold mb-4">
              {t({
                en: "UNDERTHELINE is a DOCE-powered full-stack entertainment operator — combining day-to-day execution with infrastructure.",
                ko: "UNDERTHELINE은 DOCE 기반의 풀스택 엔터테인먼트 운영사로, 일상적인 실행과 인프라를 결합합니다.",
              })}
            </p>
            <p className="text-sm md:text-base leading-[1.4] text-foreground mb-12">
              {t({
                en: "We work across music, content, branding, touring, and commerce on a single reporting and settlement standard — aligning data flows, rights, and payouts so each ecosystem stays rights-preserving, operator-led, and defensible.",
                ko: "음악, 콘텐츠, 브랜딩, 투어, 커머스를 하나의 리포팅 및 정산 표준으로 운영합니다 — 데이터 흐름, 권리, 정산을 정렬하여 각 생태계가 권리를 보존하고, 운영자 주도적이며, 방어 가능하도록 합니다.",
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
