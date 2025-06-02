import { useContext } from "react";
import { ThemeContext } from "./App";

export default function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <section style={{ color: theme === "dark" ? "white" : "black" }}>
      <p>The current theme is: {theme}</p>
    </section>
  );
}
