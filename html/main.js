const toggleBtn = document.querySelector('.hambergerBtn');
const menu = document.querySelector('.navbar');

toggleBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
	toggleBtn.classList.toggle('active');
});

// top 버튼 스크롤
const topBtn = document.getElementById('topBtn');
let docElem = document.documentElement; // 전체 문서 길이

// 클릭 이벤트 추가
topBtn.addEventListener('click', (e) => {
	e.preventDefault(); // 링크의 본연의 기능을 막는다.
	scrollToTop();
});
const scrollToTop = () => {
	// 일정시간 마다 할일
	// setInterval(할일, 시간);
	// 0.0015s = 15
	var scrollInterval = setInterval(() => {
		if (docElem.scrollTop !== 0) {
			window.scrollBy(0, -55);
		} else {
			clearInterval(scrollInterval);
		}
	}, 15);
};
