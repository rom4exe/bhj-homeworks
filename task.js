let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
getHole = (index) => document.getElementById(`hole${index}`);
for (holeIndex = 1; holeIndex < 10; holeIndex++) {
  let hole = getHole(holeIndex);
  hole.onclick = () => {
    if (hole.className === "hole hole_has-mole") {
      dead.textContent = Number(dead.textContent) + 1;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }
    setTimeout(() => {
      if (dead.textContent == 10) {
        alert("Вы победили!");
        dead.textContent = 0;
        lost.textContent = 0;
      } else if (lost.textContent == 5) {
        alert("Вы проиграли");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    }, 500);
  };
}
