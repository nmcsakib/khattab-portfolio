import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor  from "../hooks/AnimatedCursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="">
        {/* <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        /> */}
      </div>
      <ScrollToTop>
        <Headermain />
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
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
