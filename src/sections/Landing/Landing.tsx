// Landing.tsx
import React, { useEffect, useRef } from "react";
import "./Landing.css";
import { gsap } from "gsap";
import Nav from "../nav/Nav";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const Landing: React.FC = () => {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const customEase = CustomEase.create("custom", ".87,0,.13,.1");

    gsap.set(".vid-container", {
      scale: 0,
      rotation: -20,
    });

    // Initial horizontal reveal
    gsap.to(".hero", {
      clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
      duration: 1.5,
      ease: customEase,
      delay: 1,
    });

    // Expand clipPath horizontally
    gsap.to(".hero", {
      clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
      duration: 2,
      ease: customEase,
      delay: 3,
      onStart: () => {
        // Progress bar fill
        gsap.to(".progress-bar", {
          width: "100vw",
          duration: 2,
          ease: customEase,
        });

        // Number counter animation
        if (counterRef.current) {
          gsap.to(counterRef.current, {
            innerHTML: 100,
            duration: 2,
            ease: customEase,
            snap: { innerHTML: 1 },
            onUpdate: function () {
              if (counterRef.current) {
                counterRef.current.innerText = `${Math.round(
                  parseFloat(counterRef.current.innerHTML)
                )}`;
              }
            },
          });
        }
      },
    });

    // Full reveal
    gsap.to(".hero", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: customEase,
      delay: 5,
      onStart: () => {
        gsap.to(".vid-container", {
          scale: 1,
          rotation: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: customEase,
        });

        gsap.to(".progress-bar", {
          opacity: 0,
          duration: 0.3,
        });
      },
    });

    // Animate text in
    gsap.to([".header span", ".coordinates span"], {
      y: "0%",
      duration: 1,
      stagger: 0.125,
      ease: "power3.out",
      delay: 5.75,
    });
  }, []);

  return (
    <div className="hero">
      <Nav />
      <div className="progress-bar">
        <p>Loading</p>
        <p>
          <span id="counter" ref={counterRef}>
            0
          </span>
        </p>
      </div>
      <div className="vid-container">
        <img src="./src/assets/img/pic.jpg" alt="Display image" />
      </div>
      <div className="header">
        <h1>
          <span>S2S</span>
        </h1>
        <h1>
          <span>CREATIONS</span>
        </h1>
      </div>
    </div>
  );
};

export default Landing;
