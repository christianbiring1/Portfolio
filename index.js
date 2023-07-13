/* ********************* Display mode ******************* */
// const brightMode = document.querySelector('.bright-mode');
// const nightMode = document.querySelector('.night-mode');
// const body = document.querySelector('body');
const anchor = document.querySelectorAll('.list-item');
const header = document.querySelector('.header');
// const main = document.querySelector('main');
// const intro = document.querySelectorAll('h1, h2');
// const paragraphs = document.querySelectorAll('p');

const next = document.querySelectorAll('.next');
const downArrow = document.querySelectorAll('.down-arrow');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 100);
});

// const darkStyle = {
//   color: '#fff',
//   backgroundColor: '#333',
// };
// const brightStyle = {
//   color: '#333',
//   backgroundColor: '#fff',
// };
/* *********************** DARK MODE ************************************ */
// nightMode.addEventListener('click', () => {
//   brightMode.classList.toggle('active');
//   Object.assign(body.style, darkStyle);
//   nightMode.classList.toggle('active');
//   intro.forEach((element) => {
//     element.style.color = '#ffffffcc';
//   });
//   paragraphs.forEach((item) => {
//     item.style.color = '#ffffffcc';
//   });
//   next.forEach((arrow) => {
//     arrow.style.filter = 'invert(1)';
//   });
//   downArrow.forEach((arrow) => {
//     arrow.style.filter = 'invert(1)';
//   });
// });
/* *************************** LIGHT MODE *********************************** */
// brightMode.addEventListener('click', () => {
//   brightMode.classList.remove('active');
//   Object.assign(body.style, brightStyle);
//   nightMode.classList.remove('active');
//   intro.forEach((element) => {
//     element.style.color = '#172b4d';
//   });
//   paragraphs.forEach((item) => {
//     item.style.color = '#344563';
//   });
//   next.forEach((arrow) => {
//     arrow.style.filter = 'brightness(50%) grayscale(50%) opacity(50%)';
//   });
//   downArrow.forEach((arrow) => {
//     arrow.style.filter = 'brightness(50%) grayscale(50%) opacity(50%)';
//   });
// });

/* ************************* Mobile Hamburger menu *************************** */

const hamburger = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');
const brand = document.querySelector('.brand');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
  hamburger.classList.toggle('active');
  brand.classList.toggle('active');
  anchor.forEach((link) => link.classList.toggle('active'));
  header.classList.toggle('active');
  // main.classList.toggle('active');
});

anchor.forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    hamburger.classList.remove('active');
    brand.classList.remove('active');
    anchor.forEach((link) => link.classList.remove('active'));
    header.classList.remove('active');
    // main.classList.toggle("active");
  });
});

/* ******************* INTERACTION ON THE LANGUAGES, SKILLS AND FRAMEWORKS ****************** */
const stackIcons = document.querySelectorAll('.language img');

next.forEach((arrow) => {
  arrow.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    e.target.nextElementSibling.classList.toggle('active');
    const li = e.target.parentNode.parentNode;
    const stack = li.children[1];
    stack.classList.toggle('active');
    stackIcons.forEach((icon) => {
      icon.style.opacity = '1';
    });
  });
});

downArrow.forEach((arrrow) => {
  arrrow.addEventListener('click', (e) => {
    e.target.classList.remove('active');
    e.target.previousElementSibling.classList.remove('active');
    const li = e.target.parentNode.parentNode;
    const stack = li.children[1];
    stack.classList.remove('active');
    stackIcons.forEach((icon) => {
      icon.style.opacity = '0';
    });
  });
});
