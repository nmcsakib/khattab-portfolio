import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { About } from "../about";
import { ContactUs } from "../contact";
import Footer from "../../components/Footer";
import { HideUntilLoaded } from 'react-animation'
import { FiLoader } from 'react-icons/fi'
 import { dataportfolio, meta } from "../../content_option";
import Skills from '../../components/Skills';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
  return (
          <HelmetProvider>
  
      <Helmet>
        <meta charSet="utf-8" />
        <title> Portfolio </title>{" "}
        <meta name="description" content={meta.description} />
      </Helmet>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background-color: #494949;
          background-image:
            repeating-linear-gradient(
              to right, transparent 0 100px,
              #25283b22 100px 101px
            ),
            repeating-linear-gradient(
              to bottom, transparent 0 100px,
              #25283b22 100px 101px
            );
        }
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
      `}</style>

      <section className=''>
        <div className="banner container mx-auto">
          <div className="slider" style={{ '--quantity': 10 }}>
            {dataportfolio.map((data, i) => (
              <div
                className="item"
                style={{ '--position': i + 1 }}
                key={i}
              >
                               <Zoom>
                  <HideUntilLoaded
                    imageToLoad={data.img}


                    Spinner={() => <div className=""><FiLoader className="text-[2.8rem] animate-spin text-[#3B9DF8]" /></div>}
                  >
                    <img src={data.img} alt="" style={{ cursor: 'pointer', position: 'relative', zIndex: '10' }} />
                  </HideUntilLoaded>
                </Zoom>
              </div>
            ))}
          </div>
          <div className="content">
            <h1 className='text-lg' data-content="‎  GRAPHICS">KHATTAB <br /> GRAPHICS</h1>

            <div className="model"></div>
          </div>
        </div>
          <div className='flex w-full justify-center items-center'>
            <Link to="/all-graphics" className="border px-5 py-2 active:text-[#494949] active:bg-white transition-all" type="submit">
        See All
                  </Link>
          </div>
         <Skills />
        <About />
        <ContactUs />
        <Footer />
      </section>
    
</HelmetProvider>
  );
};






