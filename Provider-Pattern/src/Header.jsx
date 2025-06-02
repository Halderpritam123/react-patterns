import { useContext } from "react";
import { ThemeContext } from "./App";


export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);;

  return (
    <header style={{ background: theme === "dark" ? "#333" : "#eee" }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
