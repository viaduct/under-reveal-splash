const CopyrightSection = () => {
  return (
    <section className="py-8 bg-background border-t border-border/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <p className="text-sm text-foreground/60 text-center">
          © {new Date().getFullYear()} DOCE OS. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default CopyrightSection;
