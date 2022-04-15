'use strict';

document.addEventListener('DOMContentLoaded', function () {


  const body = document.querySelector('body')

  const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.createEl = () => {
      let newElem = document.createElement('div');
      if (this.selector[0] == '.') {
        newElem.classList.add(this.selector.substring(1));
      }
      if (this.selector[0] == '#') {
        newElem = document.createElement('p');
        newElem.setAttribute('id', this.selector.substring(1));
      }

      newElem.style.width = this.width + 'px';
      newElem.style.height = this.height + 'px';
      newElem.style.background = this.bg;
      newElem.style.fontSize = this.fontSize + 'px';
      newElem.style.position = "absolute";
      newElem.style.left = 100 + 'px';
      newElem.style.top = 100 + 'px';
      newElem.style.position = "absolute";
      body.append(newElem);
    };
  };

  const newSquare = new DomElement('.squre', '100', '100', 'red', '24');

  newSquare.createEl();

  let bottomPosition = 100;
  let leftPosition = 100;
  const squre = document.querySelector(newSquare.selector);


  document.addEventListener('keydown', ((e) => {
    if ("ArrowDown" === e.key) {
      bottomPosition += 10
      squre.style.top = bottomPosition + 'px'
    } else if ("ArrowLeft" === e.key) {
      leftPosition -= 10
      squre.style.left = leftPosition + 'px'
    } else if ("ArrowRight" === e.key) {
      leftPosition += 10
      squre.style.left = leftPosition + 'px'
    } else if ("ArrowUp" === e.key) {
      bottomPosition -= 10
      squre.style.top = bottomPosition + 'px'
    }
    // switch (e.key) {
    //   // e.keyCode - число, а не строка.
    //   case "ArrowDown": {
    //     squre.style.top = +10 + 'px';
    //     break;
    //   }
    //   case 38: {
    //     box5Move.style.top = `${lastTopCoords - 5}px`;
    //     break;
    //   }
    //   case 37: {
    //     box5Move.style.left = `${lastLeftCoords - 5}px`;
    //     break;
    //   }
    //   case 39: {
    //     box5Move.style.left = `${lastLeftCoords + 5}px`;
    //     break;
    //   }
    //   default:
    //     break;
    // }
  }));

});