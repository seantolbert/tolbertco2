import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext({
  color: "",
  setColor: () => {},
});

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const storedColor = localStorage.getItem("color");
    if (storedColor) {
      setColor(storedColor);
    } else {
      const userColor = prompt("Please Enter a color");
      if (userColor) {
        setColor(userColor);
        localStorage.setItem("color", userColor);
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
