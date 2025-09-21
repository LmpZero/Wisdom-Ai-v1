import { Box, Moon, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navLinks = [
    { text: "Philosophy", url: "#" },
    { text: "History", url: "#" },
    { text: "Ethics", url: "#" },
    { text: "Texts", url: "#" },
  ];

  return (
    <header className="flex items-center justify-between p-6 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-gradient-divine">
          <Box className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold text-foreground">God-GPT</h1>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.text}
            href={link.url}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {link.text}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Moon className="w-5 h-5" />
        </Button>
        <Button variant="outline" className="text-foreground border-border hover:bg-secondary">
          <LogIn className="w-4 h-4 mr-2" />
          Log in
        </Button>
      </div>
    </header>
  );
};

export default Header;