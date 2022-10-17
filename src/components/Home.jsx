import React from "react";

export default function Home(props) {
  console.log()
  let homePara = {
   opacity: Math.abs(1- (props.offsetY/(document.body.offsetHeight-window.innerHeight)*5)),
   transform: `translateY(-${props.offsetY * 0.8}px)`,
   size: `${(props.offsetY/(document.body.offsetHeight-window.innerHeight)*100)}%`
   
  }
  return (
    <div className="home" id="home" 
    style={homePara}>
      <div className="left-section">
        <h1>
          Hi,I am <span>Ammar Omar</span>
        </h1>
        <p>
          A passionate entry level Front-end developer that you can count on.
        </p>
        <button className="button">
          CV
          <div className="button__horizontal"></div>
          <div className="button__vertical"></div>
        </button>
      </div>
      <div className="right-section">
        <img src="src\assets\cvphoto.JPG"></img>
      </div>
    </div>
  );
}
