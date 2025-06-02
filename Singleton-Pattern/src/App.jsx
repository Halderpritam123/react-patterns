import React from "react";
import { getConfig } from "./configSingleton";

function Header() {
  const config = getConfig();
  return <h1>{config.appName} - {config.theme}</h1>;
}

function Footer() {
  const config = getConfig();
  return <p>Footer for {config.appName}</p>;
}

//Singleton ensures that a class or object has only one instance, and provides a global access point to it.

//“Only one instance” means only one object is ever created, and every time you try to create or use that object, you get the same existing one, not a new copy.



export default function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
