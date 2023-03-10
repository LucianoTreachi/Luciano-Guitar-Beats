////////// HOME BTN ////////// 
const homeBtn = document.getElementById("home-btn");
const secctionAbout = document.getElementById("about");

homeBtn.addEventListener("click", () => {
  location.href = "#about"
})

////////// RESPONSIVE MENU ////////// 
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

openMenu.addEventListener('click', () => {
  navbar.classList.add("active");
});

closeMenu.addEventListener('click', () => {
  navbar.classList.remove("active");

});

navLinks.forEach((e) => {
  e.addEventListener('click', () => {
    navbar.classList.remove("active");
  })
});

////////// SCROLL HEADER ////////// 
window.onscroll = () => {
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('header').classList.add('active');
  } else {
    document.querySelector('header').classList.remove('active');
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('header').classList.add('active');
  } else {
    document.querySelector('header').classList.remove('active');
  }
};

////////// ACTIVE LINK WITH SCROLL //////////
const links = document.querySelectorAll('.navbar a')
const sections = document.querySelectorAll('section')

function activeLinks() {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) { }
  links.forEach(link => link.classList.remove("active"));
  links[len].classList.add("active");
}

activeLinks();
window.addEventListener("scroll", activeLinks);

////////// MODAL ////////// 
const modalBg = document.querySelectorAll(".modal-bg");
const iconModal = document.querySelectorAll(".fa-youtube");
const imgModal = document.querySelectorAll(".img-video");
const closeModal = document.querySelectorAll(".close-modal");
const iframe = document.querySelectorAll("iframe");

let modals = function (modalClick) {
  modalBg[modalClick].classList.add("active");
};

iconModal.forEach((play, e) => {
  play.addEventListener("click", () => {
    modals(e);
  });
});

imgModal.forEach((video, e) => {
  video.addEventListener("click", () => {
    modals(e);
  });
});

closeModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalBg.forEach((modal) => {
      modal.classList.remove("active");
      iframe.forEach((video) => {
        video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      })
    });
  });
});

modalBg.forEach((modal) => {
  modal.addEventListener("click", () => {
    modalBg.forEach((modal) => {
      modal.classList.remove("active");
      iframe.forEach((video) => {
        video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      })
    });
  });
});

////////// BLOGS SWIPER ////////// 
const blogs = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

////////// REVIEWS SWIPER ////////// 
const reviews = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

////////// SCROLL UP ////////// 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  // When the scroll is higher than 350 viewport height, add the active class to the a tag with the scrollup class
  this.scrollY >= 350 ? scrollUp.classList.add('active')
    : scrollUp.classList.remove('active')
}
window.addEventListener('scroll', scrollUp)

////////// CONTACT //////////
const contactSection = document.getElementById('contact')
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const textarea = document.getElementById('textarea');

const alertName = document.getElementById('alert-name');
const alertEmail = document.getElementById("alert-email");
const alertMessage = document.getElementById("alert-message");

const modalSuccess = document.getElementById("modal-success");
const closeModalSuccess = document.getElementById("close-modal-success");

const success = document.getElementById('success');

/* Regular Expressions */
const expName = /^[\S][\D??-??\s]{1,30}$/ // minusculas (a-z), mayusculas (A-Z), acentos(??-??), espacios(\s). {2 a 10 digitos}.
const expEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{4,63}\.){1,125}[A-Z]{2,4}$/i
const expMessage = /^[\S][0-9a-zA-Z??-??\s\,.??!???]{3,1000}$/ // minusculas (a-z), mayusculas (A-Z), acentos(??-??), espacios(\s), caracteres especiales, {4 a 10 digitos}.

const campos = {
  nombre: false,
  correo: false,
  mensaje: false
}

/* Validate Regular Expressions */
function validateRegularExpressions(e) {
  switch (e.target.id) { // with e.target.name we get the name value of each input

    case "input-name":
      // test if the regular expression nombre is true in the input value (e.target.value)
      if (expName.test(e.target.value)) {
        alertName.classList.remove('active');
        campos.nombre = true;
      }
      else {
        alertName.classList.add('active');
        campos.nombre = false;
      }
      break;

    case "input-email":
      // test if the regular expression correo is true in the input value (e.target.value)
      if (expEmail.test(e.target.value)) {
        alertEmail.classList.remove('active');
        campos.correo = true;
      }
      else {
        alertEmail.classList.add('active');
        campos.correo = false;
      }
      break;

    case "textarea":
      // test if the regular expression mensaje is true in the input value (e.target.value)
      if (expMessage.test(e.target.value)) {
        alertMessage.classList.remove('active');
        campos.mensaje = true;
      }
      else {
        alertMessage.classList.add('active');
        campos.mensaje = false;
      }
      break;
  }
}

/* Replace white spaces on the input email */
inputEmail.addEventListener("input", () => {
  inputEmail.value = inputEmail.value.replace(/ /g, "");
})

/* Inputs focus, keyup and blur */
inputs.forEach((input) => {
  input.addEventListener('focus', validateRegularExpressions);
  input.addEventListener('keyup', validateRegularExpressions);
  input.addEventListener('blur', validateRegularExpressions);
});

/* Textarea focus, keyup and blur */
textarea.addEventListener('focus', validateRegularExpressions);
textarea.addEventListener('keyup', validateRegularExpressions);
textarea.addEventListener('blur', validateRegularExpressions);

/* Submit */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!campos.nombre) {
    alertName.classList.add('active');
    location.href = "#contact";
  }

  if (!campos.correo) {
    alertEmail.classList.add('active');
    location.href = "#contact";
  }

  if (!campos.mensaje) {
    alertMessage.classList.add('active');
    location.href = "#contact";
  }

  if (campos.nombre && campos.correo && campos.mensaje) {
    modalSuccess.classList.add("active");
    form.reset();
  }
});

////////// CLOSE MODAL SUCCESS //////////
closeModalSuccess.addEventListener("click", () => {
  modalSuccess.classList.remove("active");
  location.href = "index.html"
});