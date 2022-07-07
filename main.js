const menu = document.querySelector('.nav-bar');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const navArrow = document.querySelector('.nav-button');
const modeBtn = document.querySelector('.dark-mode');
const links = document.querySelectorAll('.main');


menu.addEventListener('click', () => {
  if (menu.classList.contains('fa-bars')) {
    menu.classList.replace('fa-bars', 'fa-x');
    menu.style.transform = `rotate(180deg)`;
    nav.style.left = `0`;
  } else {
    menu.classList.replace('fa-x', 'fa-bars');
    menu.style.transform = `rotate(-180deg)`;
    nav.style.left = `-100%`;
  }
});

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20|| document.documentElement.scrollTop > 20) {
    header.classList.add('active');
    navArrow.style.display = `block`;
  } else {
    header.classList.remove('active');
    navArrow.style.display = `none`;
  }
});

modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  if (modeBtn.classList.contains('fa-moon')) {
    modeBtn.classList.replace('fa-moon', 'fa-sun');
  } else {
    modeBtn.classList.replace('fa-sun', 'fa-moon');
  }
});

for (const link of links) {
  link.addEventListener('click', () => {
    if (window.matchMedia("(min-width: 900px)").matches) {
      nav.style.left = `0`;
    } else {
      nav.style.left = `-100%`;
      menu.classList.replace('fa-x', 'fa-bars');
      menu.style.transform = `rotate(-180deg)`;
    }
  })
}
