import { LucideIcon } from "lucide-react";

interface FloatingIconProps {
  Icon: LucideIcon | string;
  position: number; // 0-3 for arc positions
  isSelected?: boolean;
  onClick?: () => void;
  label?: string;
  isImage?: boolean;
}

const FloatingIcon = ({ Icon, position, isSelected = false, onClick, label, isImage = false }: FloatingIconProps) => {
  // Define the transform styles for each position to match the exact design
  const transforms = [
    "rotate(-50deg) translateY(-110px) rotate(50deg)", // Position 0
    "rotate(-18deg) translateY(-110px) rotate(18deg)", // Position 1
    "rotate(18deg) translateY(-110px) rotate(-18deg)",  // Position 2
    "rotate(50deg) translateY(-110px) rotate(-50deg)",  // Position 3
  ];

  return (
    <button
      className={`absolute flex items-center justify-center p-4 w-20 h-20 rounded-full bg-transparent border-none cursor-pointer transition-all duration-500 ease-in-out hover:scale-125 hover:rotate-12 z-20 group ${
        isSelected ? 'selected animate-bounce-subtle' : ''
      }`}
      style={{ 
        transform: transforms[position] || transforms[0]
      }}
      onClick={onClick}
      title={label}
    >
      {isImage ? (
        <img 
          src={Icon as string}
          alt={label}
          className={`w-8 h-8 transition-all duration-500 ease-in-out group-hover:animate-float ${
            isSelected 
              ? 'scale-120 filter drop-shadow-glow brightness-0 saturate-100 sepia-100 hue-rotate-[45deg] contrast-200 animate-glow' 
              : 'opacity-70 hover:opacity-100 hover:scale-125 filter brightness-0 saturate-100 invert-[0.5] hover:invert-[0.7] group-hover:drop-shadow-lg'
          }`} 
        />
      ) : (
        <Icon 
          className={`w-8 h-8 transition-all duration-500 ease-in-out group-hover:animate-float ${
            isSelected 
              ? 'text-divine-gold scale-120 filter drop-shadow-glow animate-glow' 
              : 'text-muted-foreground hover:text-foreground hover:scale-125 group-hover:text-accent'
          }`} 
        />
      )}
    </button>
  );
};

export default FloatingIcon;