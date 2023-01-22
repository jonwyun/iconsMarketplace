console.log('Javascript is running!');

const oneGraphic = document.querySelector("#icon_one");
const twoGraphic = document.querySelector("#icon_two");
const threeGraphic = document.querySelector("#icon_three");
const fourGraphic = document.querySelector("#icon_four");
const fiveGraphic = document.querySelector("#icon_five");

const nineGraphic = document.querySelector("#nineIconImage");
const tenGraphic = document.querySelector("#tenIconImage");

function logThisId() {
    console.log('clicked on this element:', this.id);
}

oneGraphic.addEventListener('click', logThisId);
twoGraphic.addEventListener('click', logThisId);
threeGraphic.addEventListener('click', logThisId);
fourGraphic.addEventListener('click', logThisId);
fiveGraphic.addEventListener('click', logThisId);

nineGraphic.addEventListener('click', logThisId);
tenGraphic.addEventListener('click', logThisId);