import { useLayoutEffect, useState } from "react";
import gsap from "gsap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  useLayoutEffect(() => {
    gsap.fromTo(
      ".header",
      {
        y: -100,
      },
      {
        y: 0,
        delay: 1.5,
      },
    );
    return () => {};
  }, []);
  return (
    <header className="header fixed z-10 w-full bg-transparent font-chivo text-xl">
      {/* navi desktop */}
      <nav className="mx-auto hidden max-w-7xl items-center justify-around py-4 backdrop-blur-[10px] sm:flex">
        <span>2024:v3</span>
        <span>
          Available now, <br /> can move to any city
        </span>
        <span>Based in Wroclaw, Poland</span>
        <span>
          <a className="group relative w-max" href="#about">
            About, <span className="hover__b"></span>
          </a>
          <a className="group relative mx-2 w-max" href="#projects">
            Projects, <span className="hover__b"></span>
          </a>
          <a className="group relative w-max" href="#contact">
            Contact<span className="hover__b"></span>
          </a>
        </span>
      </nav>

      {/* mobile navi */}
      <div className="w-full backdrop-blur-[10px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="z-10 focus:ring-1 rounded-lg  focus:ring-black sm:hidden"
        >
          <img className="m-4 w-10" src="/burger-icon.svg" alt="Toggle menu" />
        </button>
      </div>

      <nav
        className={`absolute top-0 -z-10 h-screen w-full -translate-x-[100%] border-r-2 border-r-black text-2xl sm:hidden ${
          isOpen ? "translate-x-2" : ""
        } bg-primaryGray flex flex-col justify-center gap-5 pl-2 transition duration-300`}
        aria-label="Mobile navigation menu"
      >
        <a
          onClick={() => setIsOpen(!isOpen)}
          className="w-fit p-2"
          href="#about"
        >
          About
        </a>
        <a
          onClick={() => setIsOpen(!isOpen)}
          className="w-fit p-2"
          href="#projects"
        >
          Projects
        </a>
        <a
          onClick={() => setIsOpen(!isOpen)}
          className="w-fit p-2"
          href="#contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
