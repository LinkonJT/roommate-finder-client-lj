import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("lemonade");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "lemonade" ? "abyss" : "lemonade"));
  };

  return (
    <button onClick={toggleTheme} className="btn btn-ghost btn-xs text-xl">
      {theme === "lemonade" ? <FaMoon size={15} /> : <FaSun size={15} />}
    </button>
  );
};

export default ThemeToggle;
