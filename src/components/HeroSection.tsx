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
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent/30 rounded-full animate-sparkle" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-divine-gold/40 rounded-full animate-sparkle" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-accent/20 rounded-full animate-sparkle" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-divine-gold/30 rounded-full animate-sparkle" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-accent/40 rounded-full animate-sparkle" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Floating Icons in Arc Formation */}
      <div className="relative w-full h-40 flex items-center justify-center mb-2 animate-scale-in">
        {deityIcons.map((deity, index) => (
          <div
            key={index}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1 + 0.3}s`, animationFillMode: "both" }}
          >
            <FloatingIcon
              Icon={deity.Icon}
              position={index}
              isSelected={selectedIcon === index}
              onClick={() => handleIconClick(deity.name, index)}
              label={deity.label}
              isImage={deity.isImage}
            />
          </div>
        ))}
        
        {/* Central Logo */}
        <div className="w-20 h-20 bg-gradient-divine rounded-2xl flex items-center justify-center shadow-divine animate-glow relative">
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

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-sacred opacity-50 pointer-events-none animate-fade-in" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-divine-pulse" />
      <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-divine-gold/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 w-48 h-48 bg-accent/5 rounded-full blur-xl animate-divine-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default HeroSection;