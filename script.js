const faqs = document.querySelectorAll(".each_faq");
faqs.forEach((eachFaq) => {
	eachFaq.addEventListener("click", (e) => {
		Toggle(e)
	})
})

function Toggle(e) {
	e.currentTarget.classList.toggle("active")
}