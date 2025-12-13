import { ReactNode } from "react";

interface SnapSectionProps {
  children: ReactNode;
  className?: string;
}

const SnapSection = ({ children, className = "" }: SnapSectionProps) => {
  return (
    <section
      className={`h-[calc(100dvh-48px)] md:h-[calc(100dvh-80px)] snap-start snap-always flex flex-col ${className}`}
    >
      {children}
    </section>
  );
};

export default SnapSection;
