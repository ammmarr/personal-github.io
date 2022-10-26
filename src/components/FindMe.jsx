import React from "react";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function FindMe() {
  const form = useRef();
  const [offsetY, setOffsetY] = useState(0);

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollRatio = offsetY / scrollable;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wn85bz2",
        "template_fdhtlvm",
        form.current,
        "98swuifJkjfOEOBAG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="findme-section" id="findme">
      <h1>FIND ME IN</h1>
      <span className="thin-line" />
      <div className="work-links">
        <a>
          <button className="button-57 acc-btn" role="button">
            <span className="text">GITHUB</span>
            <span>github acc</span>
          </button>
        </a>
        <a>
          <button className="button-57 acc-btn" role="button">
            <span className="text">UPWORK</span>
            <span>upwork acc</span>
          </button>
        </a>
      </div>
      <span className="thin-line" />
      <h2>OR SEND ME AN EMAIL</h2>

      <div className="send-email">
        <form ref={form} onSubmit={sendEmail}>
          <div className="findme-dividor-container">
            <div className="findme-left-section">
              <input
                className="input"
                type="text"
                name="user_name"
                placeholder="NAME"
                required
              ></input>
              <input
                className="input"
                type="email"
                name="user_email"
                placeholder="EMAIL"
                required
              ></input>
              <input
                className="input"
                type="text"
                name="subject"
                placeholder="SUBJECT"
                required
              ></input>
            </div>
            <textarea
              className="message"
              type="text"
              name="message"
              placeholder="MESSAGE"
              required
            ></textarea>
          </div>
          <button type="submit" id="submit-button">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
