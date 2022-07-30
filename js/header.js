const logo = document.querySelector('.header__wrap h1');
const hamBtnbox = document.querySelector('.ham__btnbox');
const mainNav = document.querySelector('.main__nav');
hamBtnbox.addEventListener('click', () => {
	toggleEv();
});

function toggleEv() {
	hamBtnbox.classList.toggle('active');
	if (hamBtnbox.classList.contains('active')) {
		mainNav.style.top = '0px';
		logo.style.display = 'none';
	} else {
		mainNav.style.top = '-100vh';
		logo.style.display = 'block';
	}
}
