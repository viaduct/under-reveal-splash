import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Small delay before starting animation
            setTimeout(() => setStartAnimation(true), 100);
          } else {
            setStartAnimation(false);
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
    <div ref={sectionRef} className="h-full flex items-center justify-center px-6">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left side - Logo with line */}
          <div className="flex flex-col items-end">
            {/* Horizontal line */}
            <div className="w-full max-w-[470px] overflow-hidden mb-[7px] md:mb-[6px]">
              <div
                className={`h-[3px] bg-foreground origin-left ${
                  startAnimation ? "animate-draw-line" : "w-0"
                }`}
              />
            </div>

            {/* Logo text */}
            <div
              className={`opacity-0 ${
                startAnimation ? "animate-fade-slide-up" : ""
              }`}
              style={{ animationDelay: "var(--delay-logo)" }}
            >
              <h1 className="text-[42px] lg:text-[44px] leading-[100%] font-bold text-foreground font-rift text-right">
                UNDERTHELINE HOLDINGS
              </h1>
            </div>
          </div>

          {/* Right side - Description text */}
          <div
            className={`opacity-0 ${
              startAnimation ? "animate-fade-slide-up-delayed" : ""
            }`}
          >
            <p className="text-sm md:text-base leading-[1.4] text-foreground font-bold mb-4">
              A single settlement rail for distribution, community, and commerce.
              Defined upfront. Replayable by design.
            </p>
            <p className="text-sm md:text-base leading-[1.4] text-foreground">
              Undertheline comes from a simple promise: we stand under every
              artist's line, not above it.
              <br />
              We don't pull rights and data upward. We design and operate the
              structures beneath — so artists and labels keep sovereignty over
              their catalogs, communities, and economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
