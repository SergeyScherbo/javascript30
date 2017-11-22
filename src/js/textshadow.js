const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 50;

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;

  let x = e.offsetX;
  let y = e.offsetY;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  console.log(xWalk, yWalk);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 #259F6C,
    ${xWalk * -1}px ${yWalk}px 0 #EF7E56,
    ${xWalk}px ${yWalk * -1}px 0 #3F6699
  `;
}

hero.addEventListener('mousemove', shadow);
