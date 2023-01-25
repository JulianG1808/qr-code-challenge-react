import React from "react";
import './index.css'

const QrCode = () => {
  return (
    <div>
      <div class="cardQr">
        <img src="./images/image-qr-code.png" alt="code qr not found" />

        <p class="titleCard">
          Improve your front-end skills by building projects
        </p>

        <p class="subTitleCard">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>

      <div class="attribution">
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
