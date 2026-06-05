import { useEffect, useState } from "react";

import darkLogo from "../assets/logo-dark.png";
import clairLogo from "../assets/logo.png";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem("mode"));

    if (!mode) {
      return;
    }

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (mode === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  function toggleDark() {
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("mode", JSON.stringify("light"));
      document.documentElement.classList.add("dark");
      setIsDark(false);
    } else {
      localStorage.setItem("mode", JSON.stringify("dark"));
      document.documentElement.classList.remove("dark");
      setIsDark(true);
    }
  }

  return (
    <header>
      <div className="flex justify-center items-center">
        <img
          className="w-1/3 h-auto m-4 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-[12%] 2xl:w-1/12"
          src={isDark ? darkLogo : clairLogo}
          alt="simple habit tracker logo"
        />
      </div>
      <button
        onClick={toggleDark}
        className="fixed top-2 right-2 size-12 cursor-pointer bg-zinc-600/80 text-2xl rounded-full p-2 text-zinc-50 dark:bg-zinc-50/80 dark:text-zinc-600 hover:text-yellow-200 hover:dark:text-yellow-400 hover:bg-zinc-500"
      >
        {isDark && <span className="p-1">&#9728;</span>}
        {!isDark && <span className="p-1">&#9789;</span>}
      </button>
    </header>
  );
}
