let initSection;
document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState == "complete") {
		console.log("Ready to run app!");
		initApp();
		initSection = document.getElementById("mainSection");
		console.log(initSection);
	}
});

const initApp = () => {
	const repairBtn = document.getElementById("repair");
	const buyBtn = document.getElementById("buy");
	const sellBtn = document.getElementById("sell");
	const contactBtn = document.getElementById("contact");
	const aboutBtn = document.getElementById("about");

	repairBtn.addEventListener("click", () => {
		renderDisplay(0);
		setTimeout(closeSection, 1000);
	});
	buyBtn.addEventListener("click", () => {
		renderDisplay(1);
		setTimeout(closeSection, 1000);
	});
	sellBtn.addEventListener("click", () => {
		renderDisplay(2);
		setTimeout(closeSection, 1000);
	});
	contactBtn.addEventListener("click", () => {
		renderDisplay(3);
		setTimeout(closeSection, 1000);
	});
	aboutBtn.addEventListener("click", () => {
		renderDisplay(4);
		setTimeout(closeSection, 1000);
	});
};

const refreshDisplay = () => {
	const section = document.getElementById("mainSection");
	section.style.visibility = "visible";
};

const renderDisplay = (n) => {
	const section = document.getElementById("mainSection");
	const articles = document.getElementsByClassName("main__article");
	refreshDisplay();
	let value = articles[n];
	section.innerHTML = `${value.innerHTML}`;
	section.style.display = "flex";
};

async function display() {
	let reader = new FileReader();
	let file = document.getElementById("file");

	reader.onload = function (e) {
		document.getElementById("image").src = e.target.result;
		console.log(reader);
		console.log(file);
		console.log(file.files);
	};
	reader.readAsDataURL(file.files[0]);
}

const closeSection = () => {
	const closeBtn = document.getElementById("close");
	closeBtn.addEventListener("click", async () => {
		const section = document.getElementById("mainSection");
		section.style.display = "none";
	});
};
