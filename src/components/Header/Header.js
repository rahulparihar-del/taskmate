import React, { useEffect, useState } from "react";
import logo from "../../assets/logo4.png";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";

const Header = () => {
  const [theme, setTheme] = useState(()=> getLocalStorage("theme", "light"));

  const themes = [
    "light",
    "medium",
    "dark",
    "gOne",
    "gTwo",
    "gThree",
    "gFour",
    "gFive",
    "gSix",
    "gSeven",
    "gEight",
    "gNine",
  ];

 

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    setLocalStorage("theme", theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="TaskMate Logo" />
        <span>TaskMate</span>
      </div>

      <div className="themeSelector">
        {themes.map((themeName) => (
          <span
            key={themeName}
            className={theme === themeName ? `${themeName} activeTheme` : themeName}
            onClick={() => setTheme(themeName)}
            aria-label={`Select ${themeName} theme`}
          ></span>
        ))}
      </div>
    </header>
  );
};

export default Header;
