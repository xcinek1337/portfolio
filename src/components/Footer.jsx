import { useLayoutEffect } from "react";
import gsap from "gsap";
export default function Footer() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
          },
        },
      );
      return () => ctx.revert();
    });
  }, []);
  return (
    <footer className="footer mx-auto flex max-w-7xl px-4 pb-10 pt-20 font-chivo text-sm md:pb-20 md:pt-40 md:text-xl">
      <div className="flex h-24 w-full flex-col items-center justify-center border-2 border-black text-center sm:flex-row">
        <a
          className="other-trigger group relative w-max"
          href="https://www.linkedin.com/in/marcin-chodkowski-745129284/"
        >
          Linkedin,
          <span className="hover__b"></span>
        </a>
        <a
          className="other-trigger group relative w-max"
          href="https://github.com/xcinek1337"
        >
          GitHub
          <span className="hover__b"></span>
        </a>
      </div>
      <div className="flex h-24 w-full items-center justify-center border-2 border-black text-center">
        <p>Design & code by xcinek1337</p>
      </div>
      <div className="flex h-24 w-full items-center justify-center border-2 border-black text-center">
        <p>👋</p>
      </div>
    </footer>
  );
}
