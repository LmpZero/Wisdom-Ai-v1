import { Send, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <div className="relative">
        <div className="flex items-center bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-2 hover:border-accent/50 transition-all duration-300 focus-within:border-accent focus-within:shadow-divine">
          <div className="flex items-center gap-3 px-4">
            <Box className="w-5 h-5 text-accent" />
          </div>
          <Input
            placeholder="Ask God-GPT"
            className="flex-1 bg-transparent border-0 text-lg placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button 
            size="icon" 
            className="ml-2 bg-gradient-divine hover:opacity-90 transition-opacity duration-200 shadow-lg"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;