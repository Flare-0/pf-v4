import React, { useState, useEffect, useRef } from 'react';
import Loader from './c/loader';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef(null);
  const heroTextRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => Math.min(prev + 1, 100));
    }, 10);
    console.log(loadingPercentage);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    if (isLoaded) {
      tl.from(heroTextRef.current.children, {
        delay: 0,
        x: -110,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.2,
      }, 0).play();
    }
  }, [isLoaded]);
  return (

    <div className="screen overflow-x-hidden">
      {!isLoaded && (
        <Loader setIsLoaded={setIsLoaded} loadingPercentage={loadingPercentage} />
      )}
      {/* <div ref={cursorRef} className="cursor pointer-events-none w-[4rem] h-[4rem]  mix-blend-difference border-[3px] border-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-full"></div> */}
      {isLoaded && <>

        <div className="main w-screen">
          <div className="nav z-10 w-screen flex justify-between items-center h-max p-16 px-28">
            <p className='text-[3.5rem] font-pixi'><span className='text-primary'>S</span>pace</p>
            <div className="flex flex-row gap-4 ">

              <div id='hoverEffectOne' className="contactmebtn p-4 px-5 hover:bg-secondary transition-[100ms] bg-primary rounded-full">
                <p className='text-[20px] text-white'>Contact me</p>
              </div>

            </div>
          </div>

          <div className="flex items-center w-full  h-max  px-28">
            <p ref={heroTextRef} className='text-6xl font-outfit'>
              <span>Crafting websites that <span className='text-primary underline'>captivate</span> audiences and <br /></span>
              <span>maximize <span className='text-secondary underline'>conversions</span>.</span>
            </p>
          </div>

          <div id='canvascontainer' className="flex justify-center items-center w-full  h-max p-16 px-28">
            <canvas ref={canvasRef} className='canvas bg-gradient-to-br from-primary to-white  w-full h-[80vh] rounded-3xl'>
            </canvas>
          </div>

        </div>
      </>}
    </div>
  );
};

export default App;

