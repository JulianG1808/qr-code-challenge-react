import React from "react";
import '../styles/styles.scss'

const QrCode = () => {
  return (
    <div>
      <div className="home_container">
        <img src="./images/image-qr-code.png" alt="code qr not found" />

        <p className="titleCard">
          Improve your front-end skills by building projects
        </p>

        <p className="descriptionCard">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>

      <div className="home_attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://portfolio-julian.vercel.app/" target="_blank">
          Julian Gomez
        </a>
        .
      </div>
    </div>
  );
};

export default QrCode;
