// app/components/ThemeSwitcher.tsx
"use client";

import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeToggle = (isSelected: any) => {
    if (setTheme) {
      const newTheme = isSelected ? "dark" : "light";
      setTheme(newTheme);
    }
  };

  return (
    <Switch
      size="lg"
      color="secondary"
      defaultChecked={theme === "dark" ? true: false}
      startContent={theme === "dark" ? <SunIcon /> : <MoonIcon />}
      endContent={theme === "light" ? <MoonIcon /> : <SunIcon />}
      onValueChange={handleThemeToggle}
    />
  );
}
