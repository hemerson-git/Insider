import React, { createContext, ReactNode, useContext, useState } from "react";

import { themes } from "../themes/default.js";

const ThemeContext = createContext({});

type themeProviderProps = {
  children: ReactNode;
};

function ThemeProvider({ children }: themeProviderProps) {
  const [selectedTheme, setSelectedTheme] = useState(themes.dark);

  function toggleTheme() {
    selectedTheme === themes.dark
      ? setSelectedTheme(themes.light)
      : setSelectedTheme(themes.dark);
  }

  return (
    <ThemeContext.Provider value={{ selectedTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}

export default ThemeProvider;
