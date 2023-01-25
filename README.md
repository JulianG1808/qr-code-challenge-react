# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

Desktop View

![](./public/Screenshots/Screenshot%20Desktop%20QR.png)

Mobile View

![](./public/Screenshots/Screenshot%20Mobile%20QR.png)

### Links

- Solution URL: [View solution here](https://github.com/JulianG1808/qr-code-challenge-react)
- Live Site URL: [View live site here](https://qr-code-challenge-react.vercel.app/)

## My process

### Built with

- HTML5
- React.JS
- SASS

### What I learned

I learned a new method to center an element horizontally and vertically, this is the **transforms methods** and I used the _translate()_ property

#### Code:

```html
<div className="home_container">
  <img src="./images/image-qr-code.png" alt="code qr not found" />

  <p className="titleCard">
    Improve your front-end skills by building projects
  </p>

  <p className="descriptionCard">
    Scan the QR code to visit Frontend Mentor and take your coding skills to the
    next level
  </p>
</div>
```

```scss
.home_container {
  background-color: hsl(0, 0%, 100%);
  width: 250px;
  padding: 0.8rem;
  border-radius: 1rem;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); //this is what i learned

  img {
    width: 250px;
    border-radius: 0.5rem;
    margin-bottom: 0;
  }

  p {
    margin-top: 10px;
    margin-bottom: 12px;
    text-align: center;
  }

  .titleCard {
    font-weight: bold;
    font-size: 20px;
  }

  .subTitleCard {
    font-weight: lighter;
    font-size: 15px;
  }
}
```

### Useful resources

- [Transforms Methods in CSS](https://www.w3schools.com/css/css3_2dtransforms.asp) - This helped me to center an element on the page and also make it responsive to any resolution. I really liked this method and will use it in the future.

## Author

- [Frontend Mentor](https://www.frontendmentor.io/profile/JulianG1808)
- [Portfolio](https://portfolio-julian.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/leandrojuliangomez/)
- [GitHub](https://github.com/JulianG1808)
