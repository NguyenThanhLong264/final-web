const selects = document.querySelectorAll("[data-tab-target]");
const contents = document.querySelectorAll("[data-tab-content]");

selects.forEach((select) => {
	select.addEventListener("click", () => {
		const target = document.querySelector(select.dataset.tabTarget);
		contents.forEach((thumbs) => {
			thumbs.classList.remove("active");
		});
		selects.forEach((select) => {
			select.classList.remove("active");
		});
		select.classList.add("active");
		target.classList.add("active");
	});
});