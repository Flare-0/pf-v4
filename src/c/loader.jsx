// Loader.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ setIsLoaded, loadingPercentage }) => {
  const loaderTextRef = useRef(null);

  useEffect(() => {
    if (loadingPercentage === 0) {
      gsap.set("#top", { y: -600 });
      gsap.set("#bottom", { y: 600 });
    }
  }, [loadingPercentage]);

  useEffect(() => {
    gsap.to("#top", { y: -600 - (loadingPercentage * -6), duration: 1, ease: "power3.out" });
    gsap.to("#bottom", { y: 600 - (loadingPercentage * 6), duration: 1, ease: "power3.out" });

    const timeline = gsap.timeline({ paused: true });
    timeline
      .to("#loaderlogo", {
        delay: 1,
        rotate: 90,
        scale: 100,
        duration: 1,
        ease: "power4.inOut",
      })
      .to("body", {
        backgroundColor: "white",
        duration: 1,
        ease: "none",
      })
      .to("#loaderoverlay", {
        opacity: 0,
        duration: 0.5,
        ease: "none",
        onComplete: () => {
          setIsLoaded(true);
        },
      });

    if (loadingPercentage === 100) {
      timeline.play();
    }
  }, [loadingPercentage, setIsLoaded]);

  useEffect(() => {
    gsap.set("#loaderlogo", { opacity: 0 });
    gsap.to("#loaderlogo", { opacity: 1, duration: 1, ease: "power4.inOut" });
  }, []);

  return (
    <div id="loaderoverlay" className="loaderoverlay relative w-screen h-screen flex justify-center items-center overflow-hidden">
      <div>
        <svg id="loaderlogo" className="opacity-[1] w-[40vw] logo" width="1388" height="1388" viewBox="0 0 1388 1388" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="bottom" d="M644 694H844V894H544V794H644V694Z" fill="white" />
          <g id="top">
            <path d="M644 494H844V594H644V494Z" fill="white" />
            <path d="M644 594V694H544V594H644Z" fill="white" />
          </g>
        </svg>
      </div>
      <p ref={loaderTextRef} className="mix-blend-difference absolute bottom-5 left-5 text-7xl text-white font-montserrat">
        ...{loadingPercentage}
      </p>
    </div>
  );
};

export default Loader;
