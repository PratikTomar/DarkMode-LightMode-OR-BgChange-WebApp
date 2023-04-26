'use strict';

// Getting the Colors first
const black = document.getElementById('color1');
const white = document.getElementById('color2');
const lightBlue = document.getElementById('color3');
const darkBlue = document.getElementById('color4');

// Getting Body
const body = document.body;

// Getting Text container to change the color of the text as per the color/swatch we click
const title = document.querySelector('h1');
const dummyText = document.querySelectorAll('.dummy-text');

// Adding  click listener on swatch/colors 
black.addEventListener('click', () => {
  changeBG('#000000');
});

white.addEventListener('click', () => {
  changeBG('#ffffff');
});

lightBlue.addEventListener('click', () => {
  changeBG('#a4b7f0');
});

darkBlue.addEventListener('click', () => {
  changeBG('#4169e1');
});

// Function to achieve  light/Dark mode or BackGround change functionality
const changeBG = (color) => {
  body.style.backgroundColor = color;
  for (let element of dummyText) {
    if (color == '#000000') {
      element.classList.add('white-text');
      title.classList.add('white-text');
      element.classList.remove('black-text');
      title.classList.remove('black-text');
    } else {
      element.classList.add('black-text');
      title.classList.add('black-text');
      element.classList.remove('white-text');
      title.classList.remove('white-text');
    }
  }
};
