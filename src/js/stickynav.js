const nav = document.querySelector('#main');
const navPos = nav.offsetTop;

function fixNav(e) {
  if (window.scrollY >= navPos) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }

}


window.addEventListener('scroll', fixNav);
