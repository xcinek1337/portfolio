import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function Background() {
  useLayoutEffect(() => {
    const startPositions = Array.from({ length: 12 }, (_, i) => 30 * (i + 1));
    gsap.from(".grid__column", {
      y: (index) => `-${startPositions[index]}%`,
      opacity: 1,
      duration: 1.4,
      borderTop: "2px solid black",
      borderLeft: "2px solid black",
      borderRight: "2px solid black",
      ease: "power2.out",
      onComplete: () => {
        gsap.set(".grid__column", { clearProps: "all" }); // Usuwa wszystkie style inline
      },
    });

    gsap.to(".grid__column", {
      y: 0,
      opacity: 1,
      duration: 0.12 * 12,
    });

    return () => {};
  }, []);

  return (
    <div className="gridColumns absolute left-[5%] mx-auto grid min-h-full w-[90%] grid-cols-12 gap-5 bg-transparent">
      {Array.from({ length: 12 }).map((v, i) => {
        return <div className="grid__column" key={i}></div>;
      })}
    </div>
  );
}
