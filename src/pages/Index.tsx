import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with logo */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8">
        <Logo />
      </header>

      {/* Main content */}
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
