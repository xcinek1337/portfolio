import { useLayoutEffect } from "react";

import gsap from "gsap";

export default function ProjectsSection() {
  useLayoutEffect(() => {
    //
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".head2-trigger",
        {
          y: 110,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,

          scrollTrigger: {
            trigger: ".head2-trigger",
            start: "top 100%",
          },
        },
      );

      gsap.fromTo(
        ".project-trigger",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".project-trigger",
            start: "top 60%",
          },
        },
      );
      gsap.fromTo(
        ".other-trigger",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".other-trigger",
            start: "top 85%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="projects"
      className="mx-auto mt-32 flex w-full max-w-7xl flex-col bg-transparent px-4 font-chivo sm:mt-60"
    >
      <div className="flex h-full w-full items-center justify-around">
        <h3 className="head2-trigger text-4xl md:text-6xl min-[1440px]:text-8xl">
          Projects
        </h3>
        <span className="head2-trigger text-sm sm:text-xl md:text-2xl">
          {"// "}02
        </span>
      </div>

      <div className="project-trigger mt-10 flex flex-col justify-around pt-20 max-md:items-center max-md:gap-16 md:flex-row">
        <div className="flex w-fit flex-col gap-4 px-4 sm:w-80">
          <h4 className="text-center text-3xl lg:text-4xl">#1 CookMate</h4>

          <p className="text-justify max-sm:text-sm">
            Cookmate is a recipe website that leverages a free recipes API and
            showcases Server-Side Rendering (SSR) for recipe components using
            Next.js. The application features custom authentication, including
            JWT token generation upon login, which is required to access the
            Favourites section, exclusive to logged-in users. Prisma is used for
            seamless database integration, and TailwindCSS is employed for
            styling the user interface.
          </p>

          <p className="max-sm:text-sm">
            Technologies: Next.JS, Typescript, React, Prisma, PostgreSQL,
            TailwindCSS
          </p>

          <div className="flex flex-col max-sm:text-sm">
            <a href="https://github.com/xcinek1337/CookMate">
              🡭 Link to the project
            </a>
            <a href="https://cook-mate-nu.vercel.app/">🡭 live preview</a>
          </div>
        </div>

        <div className="flex w-fit flex-col gap-4 px-4 sm:w-80">
          <h4 className="text-center text-3xl lg:text-4xl">#2 GadgetGuru</h4>

          <p className="text-justify max-sm:text-sm">
            GadgetGuru is a simple blog with authentication using the Kindle
            (3rd package). It features form validation and an action that
            executes a server-side function. The application has a single CRUD
            operation—creating posts. Posts are published on the forum and can
            be viewed by anyone, even users who are not logged in. The post list
            includes pagination
          </p>

          <p className="max-sm:text-sm">
            Technologies: Next.JS, Typescript, React, Prisma, PostgreSQL,
            TailwindCSS, Vercel Storage
          </p>

          <div className="flex flex-col max-sm:text-sm">
            <a href="https://github.com/xcinek1337/gadget-guru">
              🡭 Link to the project
            </a>
            <a href="https://gadget-guru-rho.vercel.app/">🡭 live preview</a>
          </div>
        </div>
      </div>

      <div className="mt-40 px-4 text-sm max-xl:ml-0 max-md:mt-20 lg:ml-20">
        <h5 className="other-trigger text-3xl lg:text-4xl"># Other projects</h5>
        <div className="mt-2 flex flex-col gap-8 text-lg max-sm:text-sm md:gap-1">
          <a
            className="other-trigger group relative w-fit"
            href="https://promptopia-neon-three.vercel.app/"
          >
            Pomptopia - a simple project based on CRUD operations
            <span className="hover__b"></span>
          </a>
          <a
            className="other-trigger group relative w-fit"
            href="https://github.com/xcinek1337/task-react-redux-portfolio"
          >
            ProfitCurrency.io - an app for calculating profit from currency exchange
            <span className="hover__b"></span>
          </a>
          <a
            className="other-trigger group relative w-fit"
            href="https://github.com/xcinek1337/task-react-kanban"
          >
            Kanban Board - a simple kanban board built with React
            <span className="hover__b"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
