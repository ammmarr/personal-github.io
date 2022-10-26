import React, { useState } from "react";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <h2></h2>
      <ul className="nav-ul">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#findme">Find Me!</a>
        </li>
      </ul>
    </div>
  );
}
