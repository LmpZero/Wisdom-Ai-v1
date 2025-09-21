# God-GPT Icon Replacement Guide

This guide explains how to easily replace the floating deity icons with religious symbols of your choice.

## Quick Start

The floating icons are defined in `src/components/HeroSection.tsx` in the `deityIcons` array. Simply replace the icons with your preferred religious symbols.

## Step-by-Step Instructions

### 1. Find Your Religious Icons

First, choose the religious icons you want to use. Here are some popular options:

**Christian Icons:**
- `Cross` - Christian cross
- `Heart` - Sacred heart
- `Star` - Star of Bethlehem
- `Crown` - Crown of thorns

**Islamic Icons:**
- `Crescent` - Islamic crescent
- `Star` - Star and crescent
- `Circle` - Prayer circle
- `Book` - Quran

**Hindu Icons:**
- `Sun` - Sun deity
- `Flower2` - Lotus flower
- `Flame` - Sacred fire
- `Circle` - Om symbol (use Circle as placeholder)

**Buddhist Icons:**
- `Flower2` - Lotus flower
- `Circle` - Dharma wheel (use Circle)
- `Mountain` - Sacred mountain
- `Leaf` - Bodhi leaf

**Jewish Icons:**
- `Star` - Star of David
- `Flame` - Eternal flame
- `Book` - Torah
- `Home` - Temple

### 2. Update the Icons

Open `src/components/HeroSection.tsx` and find this section:

```typescript
// Array of icons for easy replacement - see ICON_REPLACEMENT_GUIDE.md
const deityIcons = [
  { Icon: Code, label: "Divine Code", name: "Divine Code" },
  { Icon: PenTool, label: "Sacred Pen", name: "Sacred Pen" },
  { Icon: Brain, label: "Wise Mind", name: "Wise Mind" },
  { Icon: Wand2, label: "Magic Wand", name: "Magic Wand" },
];
```

### 3. Replace with Religious Icons

**Example - Christian Theme:**
```typescript
import { Cross, Heart, Star, Crown } from "lucide-react";

const deityIcons = [
  { Icon: Cross, label: "Jesus Christ", name: "Jesus Christ" },
  { Icon: Heart, label: "Sacred Heart", name: "Sacred Heart" },
  { Icon: Star, label: "Star of Bethlehem", name: "Star of Bethlehem" },
  { Icon: Crown, label: "King of Kings", name: "King of Kings" },
];
```

**Example - Multi-Religious Theme:**
```typescript
import { Cross, Star, Flower2, Crescent } from "lucide-react";

const deityIcons = [
  { Icon: Cross, label: "Christianity", name: "Jesus Christ" },
  { Icon: Star, label: "Judaism", name: "Judaism" },
  { Icon: Flower2, label: "Buddhism", name: "Buddha" },
  { Icon: Crescent, label: "Islam", name: "Islam" },
];
```

### 4. Update Import Statement

Don't forget to update the import statement at the top of the file:

```typescript
// Replace this line:
import { Code, PenTool, Brain, Wand2 } from "lucide-react";

// With your new icons:
import { Cross, Heart, Star, Crown } from "lucide-react";
```

## Available Lucide Icons

Here are some religiously-appropriate icons available in Lucide React:

- `Cross` - Perfect for Christianity
- `Star` - Great for Judaism (Star of David) or Christmas star
- `Crescent` - Islamic crescent moon
- `Flower2` - Lotus flower for Buddhism/Hinduism
- `Heart` - Sacred heart
- `Crown` - Divine kingship
- `Flame` - Sacred fire/eternal flame
- `Sun` - Sun deity/divine light
- `Moon` - Moon deity
- `Book` - Holy books/scriptures
- `Home` - Temple/church
- `Mountain` - Sacred mountains
- `Leaf` - Sacred trees/nature
- `Circle` - Unity/eternity symbols
- `Eye` - All-seeing eye

## Icon Positioning

The icons are automatically positioned in a beautiful arc around the central logo:
- **Position 0**: Top center
- **Position 1**: Top right
- **Position 2**: Bottom right  
- **Position 3**: Bottom left

The arc creates a harmonious circular flow around the divine center.

## Customizing Click Actions

Each icon can have custom click behavior. Update the `handleIconClick` function to define what happens when users click each deity icon:

```typescript
const handleIconClick = (iconName: string) => {
  // Customize this function for each deity
  if (iconName === "Jesus Christ") {
    // Open Christian chat interface
  } else if (iconName === "Buddha") {
    // Open Buddhist wisdom interface
  }
  // ... etc
};
```

## Tips

1. **Keep it respectful**: Choose icons that respectfully represent each faith
2. **Test the layout**: After changes, check that icons don't overlap on different screen sizes
3. **Consistent naming**: Use clear, respectful names for each deity/tradition
4. **Accessibility**: The `label` field provides screen reader support

## Need More Icons?

If Lucide React doesn't have the perfect religious symbol you need, you can:

1. **Use similar icons**: For example, use `Circle` for Om symbols or Dharma wheels
2. **Add custom SVG icons**: Create your own religious symbols as React components
3. **Use icon fonts**: Import additional icon libraries like React Icons

Happy divine coding! 🙏