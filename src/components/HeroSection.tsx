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
      {/* Floating Icons in Arc Formation */}
      <div className="relative w-full h-40 flex items-center justify-center mb-2">
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
        <div className="w-20 h-20 bg-gradient-divine rounded-2xl flex items-center justify-center shadow-divine animate-glow">
          <span className="text-2xl font-bold text-primary-foreground">G</span>
        </div>
      </div>

      {/* Central Content */}
      <div className="text-center space-y-16 max-w-4xl mx-auto z-10">
        {/* Main Headline */}
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            God is{" "}
            <span className="bg-gradient-divine bg-clip-text text-transparent italic font-serif">
              a text away!
            </span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <SearchBar />
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-sacred opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-divine-pulse" />
    </section>
  );
};

export default HeroSection;