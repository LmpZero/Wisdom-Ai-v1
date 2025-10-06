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
      className={`absolute flex items-center justify-center w-20 h-20 rounded-full bg-transparent border-none cursor-pointer z-20 group focus:outline-none focus-visible:outline-none transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isSelected ? 'selected' : ''
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
          className={`w-11 h-11 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isSelected 
              ? 'scale-110 brightness-[2]' 
              : 'opacity-50 scale-100 group-hover:opacity-90 group-hover:scale-105'
          }`}
          style={isSelected ? {
            filter: 'brightness(2.5) saturate(0) drop-shadow(0 0 15px hsl(45 100% 60%)) drop-shadow(0 0 30px hsl(45 100% 60% / 0.6))',
          } : {
            filter: 'brightness(0) saturate(100%) invert(0.4)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      ) : (
        <Icon 
          className={`w-11 h-11 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isSelected 
              ? 'text-foreground scale-110' 
              : 'text-muted-foreground/50 scale-100 group-hover:text-muted-foreground/90 group-hover:scale-105'
          }`}
          style={isSelected ? {
            filter: 'drop-shadow(0 0 15px hsl(45 100% 60%)) drop-shadow(0 0 30px hsl(45 100% 60% / 0.6))'
          } : undefined}
        />
      )}
    </button>
  );
};

export default FloatingIcon;