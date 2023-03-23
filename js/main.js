const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;
const links = Array.from(menu.children);
const anchors = document.querySelectorAll('a[href*="#"]');
const openPopUp = document.getElementById('pop_up_open');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
	e.preventDefault();
	popup.classList.toggle("open");
	hamb.classList.toggle("active");
	body.classList.toggle("noscroll");
	renderPopup();
}
function renderPopup() {
	popup.appendChild(menu);
}

links.forEach((link) => {
	link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
	popup.classList.remove("open");
	hamb.classList.remove("active");
	body.classList.remove("noscroll");
}

for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"

		})
	})
}

openPopUp.addEventListener('click', (e) => {
	e.preventDefault();
	popUp.classList.add('active');
	body.classList.toggle("noscroll");
});

closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
	body.classList.remove("noscroll");

});


