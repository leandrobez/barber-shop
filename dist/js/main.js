var btnMobile = document.getElementById('il-btn-mobile');
var painelMenu = document.querySelector('.il-nav--painel');
var navTop = document.querySelector('.il-nav--top');
var watchVideo = document.querySelector('.il-btn--video i');
var ilModal = document.querySelector('.il-video--modal');
var ilVideoModal = document.querySelector('.il-video--modal video');
var ilModalClose = document.querySelector('.il-modal--btn-close');
var showPainel = false;
var showVideo = false;

/**Watch Video */
watchVideo.addEventListener('click', () => {
  if (!showVideo) {
    ilModal.innerHTML = `<video width="1280" height="640" controls>
    <source src="video/video.mp4" type="video/mp4">
  Your browser does not support the video tag.
  </video>`;
    ilModal.classList.add('il-show--modal');
    showVideo = true;
  } else {
    ilModal.classList.remove('il-show--modal');
    showVideo = false;
  }
});
ilModalClose.addEventListener('click', () => {
  if (showVideo) {
    ilModal.classList.remove('il-show--modal');
    showVideo = false;
  }
});

/**Navegation for styles */
const navLeft = document.getElementById('nav-left');
const navRight = document.getElementById('nav-right');
const styles = document.querySelectorAll('.il-styles--item');

let classActive = 'il-item--active';

/**Left Navigation */

navLeft.addEventListener('click', () => {
  const nextEl = index => {
    if (index < count - 1) {
      styles[index + 1].classList.add(classActive);
    } else {
      styles[0].classList.add(classActive);
    }
  };

  for (let i = 0; i < count; i++) {
    let el = styles[i];
    if (el.hasAttribute('class') && el.classList.contains(classActive)) {
      el.classList.remove(classActive);
      nextEl(i);
      break;
    }
  }
});

/**Right Navigation */

navRight.addEventListener('click', () => {
  let count = styles.length;
  const nextEl = index => {
    if (index < count - 1) {
      styles[index + 1].classList.add(classActive);
    } else {
      styles[0].classList.add(classActive);
    }
  };

  for (let i = 0; i < count; i++) {
    let el = styles[i];
    if (el.hasAttribute('class') && el.classList.contains(classActive)) {
      el.classList.remove(classActive);
      nextEl(i);
      break;
    }
  }
});

/**Events for btnMobile */
btnMobile.addEventListener('mouseenter', () => {
  painelMenu.classList.add('showPrepare');
});

btnMobile.addEventListener('mouseleave', () => {
  painelMenu.classList.remove('showPrepare');
});

btnMobile.addEventListener('click', () => {
  const btnMobileDeform = document.getElementById('il-btn-mobile');
  if (!showPainel) {
    btnMobileDeform.classList.add('deform');
    navTop.classList.add('nav-up');
    painelMenu.classList.add('showPainel');
    showPainel = true;
  } else {
    navTop.classList.remove('nav-up');
    painelMenu.classList.remove('showPainel');
    showPainel = false;
  }
});

var init = 0;
var time = 5000;

function stylesRun() {
  let count = styles.length;
  styles[0].classList.add(classActive);
  const nextEl = index => {
    if (index < count) {
      console.log('aqui');
      styles[index].classList.add(classActive);
      for (let i = 0; i < count; i++) {
        if (i !== index) {
          let el = styles[i];
          if (el.hasAttribute('class') && el.classList.contains(classActive)) {
            el.classList.remove(classActive);
          }
        }
      }
    } else {
      init = 0;
      styles[init].classList.add(classActive);
      styles[count - 1].classList.remove(classActive);
    }
  };
  /**temporizador */
  setInterval(() => {
    nextEl(init);
    init++;
  }, time);
}

stylesRun();
