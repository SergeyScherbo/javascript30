const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation();
  // console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: true,
  once: true
}));
