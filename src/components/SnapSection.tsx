import { ReactNode } from "react";

interface SnapSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SnapSection = ({ children, className = "", id }: SnapSectionProps) => {
  return (
    <section
      id={id}
      className={`h-[calc(100dvh-48px)] md:h-[calc(100dvh-80px)] snap-start snap-always flex flex-col ${className}`}
    >
      {children}
    </section>
  );
};

export default SnapSection;
