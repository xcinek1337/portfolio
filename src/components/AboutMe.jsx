import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function AboutMe() {
  useLayoutEffect(() => {
    //
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".head-trigger",
        {
          y: 110,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,

          scrollTrigger: {
            trigger: ".head-trigger",
            start: "top 80%",
            // markers:true
          },
        },
      );
    });

    [
      ".text-trigger",
      ".text-trigger-1",
      ".text-trigger-2",
      ".text-trigger-3",
    ].forEach((triggerClass) => {
      gsap.fromTo(
        triggerClass,
        {
          y: 110,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          scrollTrigger: {
            trigger: triggerClass,
            start: "top 80%",
            // markers: true,
          },
        },
      );
      gsap.fromTo(
        ".picture",
        {
          y: 110,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          scrollTrigger: {
            trigger: ".picture",
            start: "top 80%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="mx-auto mt-32 flex w-full max-w-7xl flex-col bg-transparent px-4 font-chivo sm:mt-60"
    >
      <div className="flex h-full w-full items-center justify-around">
        <span className="head-trigger text-sm sm:text-xl md:text-2xl">
          {"// "}01
        </span>
        <h3 className="head-trigger text-4xl md:text-6xl min-[1440px]:text-8xl">
          Who I am
        </h3>
      </div>

      <div className="mt-20 flex flex-col-reverse px-4 md:flex-row">
        <div className="flex flex-1 flex-col gap-10 text-sm sm:text-lg">
          <p className="text-trigger">
            I am an aspiring Frontend Developer specializing in React.
          </p>
          <p className="text-trigger-1">
            I began my programming journey in 2023 when I wrote my first famous
            Hello, World!. I started learning to code under the guidance of a
            mentor.
          </p>
          <p className="text-trigger-2">
            I am passionate about exploring new technologies and always eager to
            learn. I enjoy seeing my progress as I tackle new challenges.
            Currently, I m learning Node.js with the goal of becoming a Full
            Stack Developer in the future.
          </p>
          <p className="text-trigger-3">
            In my work, I focus on doing my tasks well and keeping good
            relationships with my team. I like to tackle tasks by analyzing them
            step by step, finding the root causes of problems, and looking at
            their strengths and weaknesses. I&#39;m good at solving problems, which
            is really useful in programming.
          </p>
        </div>

        <div className="picture flex flex-1 justify-center pb-8">
          <img className="max-h-[300px] max-w-[280px] grayscale md:w-80 rounded-3xl" src="/ja2.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
