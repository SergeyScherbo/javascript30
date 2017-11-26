const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    x: linkCoords.x + window.scrooX,
    y: linkCoords.y + window.scrollY
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.x}px, ${coords.y}px)`;
}

triggers.forEach(link => link.addEventListener('mouseenter', highlightLink));
