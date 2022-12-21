const container = document.querySelector("#container");
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "pencil"

let currentSize = DEFAULT_SIZE
let currentMode = DEFAULT_MODE

function etchSketch() {
    let size = currentSize * currentSize;
    for (let i = 0; i < size; i++) {
        const blocks = document.createElement("div");
        blocks.classList.add("blocks");
        container.appendChild(blocks);

const divs = document.querySelectorAll(".blocks");
divs.forEach(div => div.addEventListener("mouseover", changeColor));
divs.forEach(div => div.addEventListener("mousedown", changeColor));

}};

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return
    else if (currentMode === "eraser") e.target.style.backgroundColor = "#fefefe"
    else if (currentMode === "pencil") e.target.style.backgroundColor = "#000"
}
//() => div.style.cssText = "background: black;"

const btn = document.querySelector("#btn");

function sizeOfBoxes() {
    let boxSize = prompt("Which size this should be?(default is 16)")

    if (boxSize > 100) alert("too big 😳(maximum of 100)")

    else if (boxSize.length <= 0 || isNaN(boxSize)) alert("that's not a valid number 🤨")

    else if (boxSize <= 0) alert("too small 😏")

    else {
        currentSize = boxSize
    }
    clearBoxes()
    container.style.cssText = `grid-template-columns: repeat(${currentSize}, 1fr); grid-template-rows: repeat(${currentSize}, 1fr);`
    etchSketch(currentSize)

}

btn.addEventListener("click", sizeOfBoxes)

function clearBoxes() {
    const divs = document.querySelectorAll(".blocks");
    divs.forEach(div => container.removeChild(div))
}

const eraserbtn = document.querySelector("#eraserbtn");
eraserbtn.addEventListener("click", () => currentMode = "eraser");

const pencilbtn = document.querySelector("#pencilbtn");
pencilbtn.addEventListener("click", () => currentMode = "pencil");

etchSketch(DEFAULT_SIZE)