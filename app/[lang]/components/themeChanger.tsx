"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { CircleDashed } from "lucide-react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button>
        <CircleDashed className="h4 w-4" />
      </button>
    );
  }

  return theme === "dark" ? (
    <button onClick={() => setTheme("light")}>
      <Sun className="h4 w-4" />
    </button>
  ) : (
    <button onClick={() => setTheme("dark")}>
      <Moon className="h-4 w-4" />
    </button>
  );
};

export default ThemeSwitch;
