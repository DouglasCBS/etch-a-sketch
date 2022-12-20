let numberOfDivs = 16
let realNumberOfDivs = numberOfDivs * numberOfDivs

const container = document.querySelector("#container");

for (let i = 0; i < realNumberOfDivs; i++) {
    const div = document.createElement("div");
    div.classList.add("blocks")
    container.appendChild(div);
}