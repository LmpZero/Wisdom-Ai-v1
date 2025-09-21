import { LucideIcon } from "lucide-react";

interface FloatingIconProps {
  Icon: LucideIcon;
  position: number; // 0-3 for arc positions
  isSelected?: boolean;
  onClick?: () => void;
  label?: string;
}

const FloatingIcon = ({ Icon, position, isSelected = false, onClick, label }: FloatingIconProps) => {
  // Define the transform styles for each position to match the exact design
  const transforms = [
    "rotate(-50deg) translateY(-110px) rotate(50deg)", // Position 0
    "rotate(-18deg) translateY(-110px) rotate(18deg)", // Position 1
    "rotate(18deg) translateY(-110px) rotate(-18deg)",  // Position 2
    "rotate(50deg) translateY(-110px) rotate(-50deg)",  // Position 3
  ];

  return (
    <button
      className={`absolute flex items-center justify-center p-4 w-20 h-20 rounded-full bg-transparent border-none cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 z-20 ${
        isSelected ? 'selected' : ''
      }`}
      style={{ 
        transform: transforms[position] || transforms[0]
      }}
      onClick={onClick}
      title={label}
    >
      <Icon 
        className={`w-8 h-8 transition-all duration-300 ease-in-out ${
          isSelected 
            ? 'text-divine-gold scale-120 filter drop-shadow-glow' 
            : 'text-muted-foreground hover:text-foreground hover:scale-110'
        }`} 
      />
    </button>
  );
};

export default FloatingIcon;