import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";


const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1000,
        startDelay: 1000,
        backSpeed:100,
        typeSpeed:200,
        strings: [ "Designer","Developer"],
      });
    });
    return (
        <div className="intro" id="intro">
          <div className="left">
            <div className="imgContainer">
              <img src="assets/man1.png" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>Izhar Iqbal</h1>
              <h3>
              Freelance <span ref={textRef}></span>
              </h3>
            </div>
            <a href="#portfolio">
              <img src="assets/down.png" alt="" />
            </a>
          </div>
        </div>
      );
    }

export default Intro
