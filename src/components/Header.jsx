import { useState } from "react";

import darkLogo from "../assets/logo-dark.png";
import clairLogo from "../assets/logo.png";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  function toggleDark() {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <header>
      <div className="flex justify-center items-center">
        <img
          className="w-1/3 h-auto m-4"
          src={isDark ? darkLogo : clairLogo}
          alt="simple habit tracker logo"
        />
      </div>
      <button
        onClick={toggleDark}
        className="fixed top-2 right-2 size-12 cursor-pointer bg-gray-600 text-2xl rounded-full p-2 text-gray-50 dark:bg-gray-50 dark:text-gray-600 hover:text-yellow-200 hover:dark:text-yellow-400 hover:bg-gray-500"
      >
        {isDark && <span className="p-1">&#9728;</span>}
        {!isDark && <span className="p-1">&#9789;</span>}
      </button>
    </header>
  );
}
