import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function HeroSection() {
  const name = useRef(null);
  const lastName = useRef(null);
  const comp2 = useRef(null);
  const bottomBar = useRef(null);

  useLayoutEffect(() => {
    new SplitType(name.current, { types: "chars", tagName: "span" });
    new SplitType(lastName.current, { types: "chars", tagName: "span" });
    new SplitType(comp2.current, { types: "words", tagName: "span" });
    //   })
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".char",
        { y: 110, opacity: 0, ease: "elastic" },
        {
          y: 0,
          delay: 1.5,
          stagger: 0.03,
          duration: 0.4,
          opacity: 1,
          ease: "power1",
          rotateX: 0,
        },
      );
      gsap.fromTo(
        ".word",
        { y: 110, opacity: 0, ease: "elastic" },
        {
          y: 0,
          delay: 2,
          stagger: 0.03,
          duration: 0.4,
          opacity: 1,
          ease: "power1",
          rotateX: 0,
        },
      );
      gsap.fromTo(
        bottomBar.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 2.5,
        },
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="z-10 mx-auto flex h-screen w-full max-w-7xl flex-col justify-center bg-transparent px-4">
      <h2
        className="pt-40 text-end font-Urbanist text-5xl tracking-tight sm:mr-10 sm:text-8xl md:pt-60 lg:mr-20 lg:text-9xl min-[1440px]:text-[180px] min-[1440px]:leading-[180px]"
        ref={name}
      >
        Marcin
      </h2>
      <h2
        className="ml-5 pt-5 font-Urbanist text-5xl tracking-tight sm:text-8xl lg:ml-20 lg:text-9xl min-[1440px]:pt-20 min-[1440px]:text-[180px] min-[1440px]:leading-[180px]"
        ref={lastName}
      >
        Chodkowski
      </h2>
      <p
        className="pt-40 text-center font-chivo sm:text-xl lg:text-2xl min-[1440px]:pl-32 min-[1440px]:pt-20 min-[1440px]:text-3xl"
        ref={comp2}
      >
        Aspiring frontend developer, driven by a passion for innovation, <br />
        tech, and design, always aiming to bring creative ideas to life through
        code.
      </p>
      <div
        ref={bottomBar}
        className="mt-auto flex items-end justify-between font-chivo text-sm md:text-xl"
      >
        <p>
          scr <br />
          olld <br /> own
        </p>
        <div className="mb-2 flex gap-2">
          <a
            className="group relative w-max"
            href="https://github.com/xcinek1337"
          >
            GitHub, <span className="hover__b"></span>
          </a>
          <a
            className="group relative w-max"
            href="https://www.linkedin.com/in/marcin-chodkowski-745129284/"
          >
            LinkedIn<span className="hover__b"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
