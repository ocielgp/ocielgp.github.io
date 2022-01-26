(function () {
  'use strict';
  const aboutTextList = [
    'PROGRAMADOR',
    'DESARROLLADOR WEB',
    'ARMADO DE COMPUTADORAS'
  ]
  let letterCount = 0;
  let currentText = 0;
  const aboutText = document.getElementById('about-text');

  function incrementAboutText() {
    if (letterCount < aboutTextList[currentText].length) {
      aboutText.innerHTML += aboutTextList[currentText].charAt(letterCount);
      letterCount++;
      setTimeout(incrementAboutText, 100);
    } else {
      setTimeout(decrementAboutText, 1000);
    }
  }

  function decrementAboutText() {
    if (letterCount > 0) {
      aboutText.innerHTML = aboutText.innerHTML.slice(0, -1);
      letterCount--;
      setTimeout(decrementAboutText, 50);
    } else {
      if (currentText === aboutTextList.length - 1) {
        currentText = 0;
      } else {
        currentText++;
      }
      incrementAboutText();
    }
  }
  window.onload = () => {
    incrementAboutText();
  }

  const year = document.getElementById('year');
  year.innerHTML = new Date().getFullYear();


})();