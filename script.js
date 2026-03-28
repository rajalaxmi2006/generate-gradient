const box = document.getElementById("gradientBox");
const btn = document.getElementById("btn");
const code = document.getElementById("code");

function getRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

btn.addEventListener("click", () => {
  let color1 = getRGB();
  let color2 = getRGB();
  // let color3 = getRGB();

  let newRandomColor = `linear-gradient(${color1},${color2})`

  code.innerText = newRandomColor
  box.style.background = newRandomColor
})
