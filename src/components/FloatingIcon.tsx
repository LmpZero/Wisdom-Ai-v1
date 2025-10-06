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
      className={`absolute flex items-center justify-center p-4 w-20 h-20 rounded-full bg-transparent border-none cursor-pointer transition-all duration-700 ease-out z-20 group ${
        isSelected ? 'selected' : ''
      }`}
      style={{ 
        transform: transforms[position] || transforms[0],
        ...(isSelected && {
          boxShadow: '0 0 40px hsl(45 100% 60% / 0.9), 0 0 80px hsl(45 100% 60% / 0.5), 0 0 120px hsl(45 100% 60% / 0.3)',
          animation: 'divine-pulse 2s ease-in-out infinite'
        })
      }}
      onClick={onClick}
      title={label}
    >
      {isImage ? (
        <img 
          src={Icon as string}
          alt={label}
          className={`w-10 h-10 transition-all duration-700 ease-out ${
            isSelected 
              ? 'scale-125 animate-glow' 
              : 'opacity-60 scale-90 group-hover:opacity-100 group-hover:scale-110'
          }`}
          style={isSelected ? {
            filter: 'brightness(0) saturate(100%) sepia(100%) hue-rotate(45deg) contrast(200%) drop-shadow(0 0 25px hsl(45 100% 60%)) drop-shadow(0 0 50px hsl(45 100% 60% / 0.5))'
          } : {
            filter: 'brightness(0) saturate(100%) invert(0.5)',
            transition: 'all 0.7s ease-out'
          }}
        />
      ) : (
        <Icon 
          className={`w-10 h-10 transition-all duration-700 ease-out ${
            isSelected 
              ? 'text-divine-gold scale-125 animate-glow' 
              : 'text-muted-foreground scale-90 group-hover:text-foreground group-hover:scale-110'
          }`}
          style={isSelected ? {
            filter: 'drop-shadow(0 0 25px hsl(45 100% 60%)) drop-shadow(0 0 50px hsl(45 100% 60% / 0.5))'
          } : undefined}
        />
      )}
    </button>
  );
};

export default FloatingIcon;