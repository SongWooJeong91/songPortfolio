let page = 1;
let lastPage = document.querySelectorAll('.content').length;

window.addEventListener('wheel', (e) => {
	console.log('휠', e.deltaY);
	wheelEV(e);
});

// 휠 이벤트 함수
function wheelEV(e) {
	// scroll 위치가 0이면 함수 종료
	if (window.scrollY <= 100) return;
	// 만약에 스크롤 값이 양수이면
	if (e.deltaY > 0) {
		// 만약 마지막 페이지면 함수 종료
		if (page == lastPage) return;
		// 페이지 +1
		page++;
	} else if (e.deltaY < 0) {
		// 첫 페이지면 함수 종료
		if (page == 1) return;
		// 페이지 -1
		page--;
	}
	// 페이지 -1 * 뷰 높이 곱한 값 저장
	var scrTo = (page - 1) * $(window).height();
	// 스크롤을 scrTo 값으로 이동
	window.scrollTo({ top: scrTo, behavior: 'smooth' });
}
