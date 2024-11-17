const cates = document.querySelectorAll("[data-tab-target]");
const thumbnails = document.querySelectorAll("[data-tab-content]");

cates.forEach((cate) => {
	cate.addEventListener("click", () => {
		const target = document.querySelector(cate.dataset.tabTarget);
		thumbnails.forEach((thumbs) => {
			thumbs.classList.remove("active");
		});
		cates.forEach((cate) => {
			cate.classList.remove("active");
		});
		cate.classList.add("active");
		target.classList.add("active");
	});
});