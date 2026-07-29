// Source - https://stackoverflow.com/a/74246643
// Posted by Alber_Quintana, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-28, License - CC BY-SA 4.0

const container = document.getElementById('container');

function makeDivs(numDivs) {
  for (let d = 0; d < numDivs; d++) {
    let cells = document.createElement('div');
    container.appendChild(cells)
  }
}

makeDivs(256);