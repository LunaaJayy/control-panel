//van https://codepen.io/shooft/pen/MYjbpry

const rangeLamp = document.querySelector('footer > label:nth-of-type(1) [type="range"]');

const updateLampRange = (range) => {
	const rangeName = range.name;
	const rangeValue = range.value + "vw";
	document.documentElement.style.setProperty("--" + rangeName, rangeValue);
};

updateLampRange(rangeLamp);

rangeLamp.oninput = () => {
	updateLampRange(rangeLamp);
};

const rangeLight = document.querySelector('footer > label:nth-of-type(2) [type="range"]');

const updateLightRange = (range) => {
	const rangeName = range.name;
	const rangeValue = range.value + "deg";
	document.documentElement.style.setProperty("--" + rangeName, rangeValue);
};

updateLightRange(rangeLight);

rangeLight.oninput = () => {
	updateLightRange(rangeLight);
};