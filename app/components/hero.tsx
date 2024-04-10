"use client";
import { useState, useEffect } from "react";

function HeroSection() {
  const [style, setStyle] = useState(1);

  function changeStyles() {
    if ([1, 2].includes(style)) {
      setStyle((prevStyle) => prevStyle + 1);
    } else {
      setStyle(1);
    }
  }

  useEffect(() => {
    const interval = setInterval(changeStyles, 2000);

    return () => clearInterval(interval);
  }, [style]);

  return (
    <>
      <div className="w-full h-full bg-black absolute"></div>
      <main className="flex min-h-screen items-center justify-start ml-32">
        <div className="my-auto text-8xl text-white">
          <h1
            className={
              style == 1
                ? "font-monospace"
                : style == 2
                ? "font-serif"
                : "font-custom"
            }
          >
            Just {style > 2 ? "an" : "a"}
          </h1>
          <h1
            className={
              style == 1
                ? "font-monospace font-bold"
                : style == 2
                ? "font-serif font-bold"
                : "font-custom font-bold"
            }
          >
            {style == 1 ? "developer" : style == 2 ? "designer" : "editor"}
          </h1>
          <h1
            className={
              style == 1
                ? "font-monospace"
                : style == 2
                ? "font-serif"
                : "font-custom"
            }
          >
            for everything.
          </h1>
        </div>
      </main>
    </>
  );
}

export default HeroSection;
