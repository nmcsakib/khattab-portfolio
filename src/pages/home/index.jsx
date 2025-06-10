import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
  <style>
    {`
     body::before {
          position: absolute;
          width: min(1400px, 90vw);
          top: 10%;
          left: 50%;
          height: 90%;
          transform: translateX(-50%);
          content: '';
          background-image: url(images/bg.png);
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: top center;
          pointer-events: none;
        }
    `}
  </style>
    
    
    <HelmetProvider>
      <section id="home" className="home container mx-auto">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center pt-20">
          <div className="animated-text mt-52 md:mt-0"></div>
          
    <img className='w-44 md:w-54 absolute md:right-5 rounded-xl' src={introdata.your_img_url} alt="" />



          <div className="">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="flex gap-3 md:flex-row flex-col">
                  <Link to="/portfolio" className="bg-white hover:bg-black mb-5">
                    <div id="button_p" className="border px-3 py-2 text-black transition-all mt-[10px] md:mt-0">
                      My Portfolio
                   
                    </div>
                  </Link>
                  <Link to="/contact" className="">
                    <div id="button_h" className="border px-3 py-2 active:text-black transition-all mt-[10px] md:mt-0">
                      Contact Me
                     
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
    </>
  );
};
