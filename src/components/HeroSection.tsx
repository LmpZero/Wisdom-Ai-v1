import { useState } from "react";
import FloatingIcon from "./FloatingIcon";
import SearchBar from "./SearchBar";
import { useToast } from "@/hooks/use-toast";
import islamIcon from "@/assets/islam-icon.png";
import christianIcon from "@/assets/christian-icon.png";
import hinduismIcon from "@/assets/hinduism-icon.png";
import sikhismIcon from "@/assets/sikhism-icon.png";

const HeroSection = () => {
  const { toast } = useToast();
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

  // Icon click handlers
  const handleIconClick = (iconName: string, index: number) => {
    setSelectedIcon(selectedIcon === index ? null : index);
    toast({
      title: `${iconName} Selected`,
      description: `You clicked on the ${iconName} deity. This will open spiritual guidance soon!`,
    });
  };

  // Array of icons for easy replacement - see ICON_REPLACEMENT_GUIDE.md
  const deityIcons = [
    { Icon: christianIcon, label: "Christianity", name: "Christianity", isImage: true },
    { Icon: islamIcon, label: "Islam", name: "Islam", isImage: true },
    { Icon: hinduismIcon, label: "Hinduism", name: "Hinduism", isImage: true },
    { Icon: sikhismIcon, label: "Sikhism", name: "Sikhism", isImage: true },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-cosmic overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating cosmic orbs with glow */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-divine-gold/40 rounded-full animate-float blur-sm" 
          style={{ animationDelay: "0s", boxShadow: "0 0 40px 10px hsl(45 100% 60% / 0.2)" }} />
        <div className="absolute top-1/4 right-16 w-4 h-4 bg-accent/30 rounded-full animate-sparkle blur-sm" 
          style={{ animationDelay: "1s", boxShadow: "0 0 50px 15px hsl(263 85% 60% / 0.15)" }} />
        <div className="absolute bottom-1/3 left-20 w-5 h-5 bg-divine-gold/25 rounded-full animate-float blur-md" 
          style={{ animationDelay: "2s", boxShadow: "0 0 60px 20px hsl(45 100% 60% / 0.1)" }} />
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-accent/35 rounded-full animate-sparkle" 
          style={{ animationDelay: "0.5s", boxShadow: "0 0 30px 8px hsl(263 85% 60% / 0.2)" }} />
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-divine-gold/30 rounded-full animate-float blur-sm" 
          style={{ animationDelay: "1.5s", boxShadow: "0 0 45px 12px hsl(45 100% 60% / 0.15)" }} />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent/20 rounded-full animate-divine-pulse blur-lg" 
          style={{ animationDelay: "2.5s", boxShadow: "0 0 80px 25px hsl(263 85% 60% / 0.1)" }} />
        <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-divine-gold/35 rounded-full animate-sparkle blur-md" 
          style={{ animationDelay: "3s", boxShadow: "0 0 55px 18px hsl(45 100% 60% / 0.12)" }} />
        
        {/* Smaller twinkling stars */}
        <div className="absolute top-32 right-1/4 w-1 h-1 bg-foreground/60 rounded-full animate-sparkle" style={{ animationDelay: "0.3s" }} />
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-foreground/50 rounded-full animate-sparkle" style={{ animationDelay: "1.8s" }} />
        <div className="absolute top-2/3 right-20 w-1 h-1 bg-foreground/55 rounded-full animate-sparkle" style={{ animationDelay: "2.3s" }} />
      </div>

      {/* Floating Icons in Arc Formation */}
      <div className="relative w-full h-40 flex items-center justify-center mb-2 animate-scale-in">
        {deityIcons.map((deity, index) => (
          <FloatingIcon
            key={index}
            Icon={deity.Icon}
            position={index}
            isSelected={selectedIcon === index}
            onClick={() => handleIconClick(deity.name, index)}
            label={deity.label}
            isImage={deity.isImage}
          />
        ))}
        
        {/* Central Logo */}
        <div className="w-20 h-20 bg-gradient-divine rounded-2xl flex items-center justify-center shadow-divine animate-glow relative z-30">
          <span className="text-2xl font-bold text-primary-foreground">G</span>
          <div className="absolute inset-0 bg-gradient-divine rounded-2xl animate-rotate-slow opacity-20" />
        </div>
      </div>

      {/* Central Content */}
      <div className="text-center space-y-16 max-w-4xl mx-auto z-10">
        {/* Main Headline */}
        <div className="animate-slide-up" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            God is{" "}
            <span className="bg-gradient-divine bg-clip-text text-transparent italic font-serif animate-bounce-subtle">
              a text away!
            </span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="animate-slide-up" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
          <SearchBar />
        </div>
      </div>

      {/* Background illumination elements */}
      <div className="absolute inset-0 bg-gradient-sacred opacity-50 pointer-events-none animate-fade-in" />
      
      {/* Large cosmic glow orbs */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-divine-pulse" />
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-divine-gold/8 rounded-full blur-3xl animate-float" 
        style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 w-64 h-64 bg-accent/8 rounded-full blur-3xl animate-divine-pulse" 
        style={{ animationDelay: "1s" }} />
      <div className="absolute top-2/3 right-1/3 w-72 h-72 bg-divine-gold/6 rounded-full blur-3xl animate-float" 
        style={{ animationDelay: "1.5s" }} />
      
      {/* Radial light rays */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-40 bg-gradient-to-b from-divine-gold/20 to-transparent animate-fade-in" 
        style={{ animationDelay: "0.8s" }} />
      <div className="absolute bottom-0 right-1/3 w-px h-32 bg-gradient-to-t from-accent/15 to-transparent animate-fade-in" 
        style={{ animationDelay: "1.2s" }} />
    </section>
  );
};

export default HeroSection;