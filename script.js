// Source - https://stackoverflow.com/a/74246643
// Posted by Alber_Quintana, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-28, License - CC BY-SA 4.0

const container = document.getElementById('container');

function makeDivs(numDivs) {
  for (let d = 0; d < numDivs; d++) {
    let cells = document.createElement('div');
    cells.classList.add('boxes')
    container.appendChild(cells)
  }
}

makeDivs(10000);

const boxes = document.querySelectorAll('.boxes')

boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
  // console.log("clicked");
  box.style.backgroundColor = "#a9a9a9";
  });
});

const reset_btn = document.querySelector('.reset-button');

reset_btn.addEventListener('click', () => {
  window.location.reload(); 
});

const square_prompt = document.querySelector('.no-of-squares-btn');

square_prompt.addEventListener('click', () => {
  let squares = prompt("How many grids per side would you like?");
  console.log("User selected " + squares);
});