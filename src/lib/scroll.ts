const content = document.getElementById("scroll")!;
const tip = document.getElementById("tip")!;

let TEXT = "";
export const setup = (text: string) => {
	TEXT = text;
};

let index = 0;

document.onwheel = e => {
	let random = Math.floor(Math.random() * 7) + 1;

	if (e.deltaY < 0 && index > 0) index -= random;
	if (e.deltaY > 0 && index < TEXT.length) index += random;

	content.innerHTML = TEXT.substring(0, index);

	tip.hidden = index > 0;
};

document.onclick = () => {
	let random = Math.floor(Math.random() * 15) + 17;

	if (index < TEXT.length) index += random;

	content.innerHTML = TEXT.substring(0, index);

	tip.hidden = index > 0;
};
