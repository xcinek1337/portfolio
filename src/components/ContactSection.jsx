import { useLayoutEffect, useState } from "react";
import gsap from "gsap";

export default function ContactSection() {
  const [tooltip, setTooltip] = useState("click to copy!");
  const handleCopy = () => {
    setTooltip("copied!");
    navigator.clipboard.writeText("marcinchodkowski004@wp.pl");
    setTimeout(() => {
      setTooltip(tooltip);
    }, 3000);
  };
  useLayoutEffect(() => {
    //
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".head3-trigger",
        {
          y: 110,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".head3-trigger",
            start: "top 80%",
          },
        },
      );
      gsap.fromTo(
        ".mail-trigger",
        {
          y: 110,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".mail-trigger",
            start: "top 80%",
          },
        },
      );
      return () => ctx.revert();
    });
  }, []);
  return (
    <section id="contact" className="mx-auto mt-32 flex w-full max-w-7xl flex-col items-start bg-transparent px-4 font-chivo sm:mt-60">
      <div className="flex h-full w-full items-center justify-around">
        <span className="head3-trigger text-sm sm:text-xl md:text-2xl">
          {"// "}03
        </span>
        <h3 className="head3-trigger text-4xl md:text-6xl min-[1440px]:text-8xl">
          Let&#39;s talk
        </h3>
      </div>

      <button
        onClick={handleCopy}
        className="mail-trigger group relative mt-20 inline-block w-fit text-start text-2xl md:text-4xl min-[1440px]:text-7xl"
      >
        marcinchodkowski004 <br /> @wp.pl
        <span className="invisible absolute z-10 mt-10 lg:mt-20 w-[100px] rounded-md border-2 border-primaryDark bg-gray-200 px-4 py-2 text-center text-base text-primaryDark group-hover:visible">
          {tooltip}
        </span>
        <span className="hover__b"></span>
      </button>
    </section>
  );
}
