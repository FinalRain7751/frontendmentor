# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Desktop Preview](./images/ScreenshotDesktop.png)
![Mobile Preview](./images/ScreenshotMobile.png)

### Links

- Solution URL: [Github](https://github.com/FinalRain7751/frontendmentor/tree/product-preview-card-component)
- Live Site URL: [Netlify](https://tranquil-kitten-1a55b8.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Just practising whatever CSS I have learned so far.

To see how you can add code snippets, see below:

```css
/* Media Queries */

@media (min-width: 600px) {
  main {
    align-items: center;
  }

  .card {
    flex-direction: row;
    max-width: 550px;
  }

  .desktop {
    display: block;
  }

  .mobile {
    display: none;
  }

  .hero_content,
  .hero_img {
    width: 50%;
  }

  .hero_content {
    padding: 1.4em 1.9em;
  }
}
```

### Continued development

Need to learn CSS Grid and other advanced CSS concepts.

## Author

- Souransu Sen
- Frontend Mentor - [@FinalRain7751](https://www.frontendmentor.io/profile/FinalRain7751)

## Acknowledgments

Kevin Powell for his videos and courses.
