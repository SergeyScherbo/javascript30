const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  for (let i = 0; i < panels.length; i++) {
    if (panels[i].classList.contains('open')) {
      panels[i].classList.remove('open');
    }
  }

  this.classList.toggle('open');
}

function toggleActive(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
