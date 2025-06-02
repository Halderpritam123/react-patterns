import { createContext, useState } from "react";
import Header from "./Header";
import Content from "./Content";

//A central provider component holds shared data or functionality and makes it accessible to child components (the consumers) without passing props down manually at every level.

//oops used: encapsulation , bastraction

export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  return (
     <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <Content />
    </ThemeContext.Provider>
  );
}
