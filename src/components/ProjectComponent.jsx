import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ProjectComponent(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="project-component"
      key={props.id}
      data-aos="fade-right"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <h2>{props.name}</h2>
      <div
        className="card"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      >
        <div className="blur"></div>
      </div>
      <div className="links">
        <a href={props.gh} target="_blank">
          <button className="button-57" role="button">
            <span className="text">GITHUB</span>
            <span>SOURCE CODE</span>
          </button>
        </a>
        <a href={props.live} target="_blank">
          <button className="button-57" role="button">
            <span className="text">LIVE</span>
            <span>OPEN LIVE</span>
          </button>
        </a>
      </div>
    </div>
  );
}
