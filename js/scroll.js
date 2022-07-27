window.addEventListener(
	'wheel',
	function (e) {
		e.preventDefault();
	},
	{ passive: false }
);

var $html = $('html');
var page = 1;
var lastPage = $('.content').length;
var navbar = $('.header__wrap');
let headerWrap = document.querySelector('.header__wrap');

window.addEventListener('scroll', () => {
	// 문제 발생
	// 메인 화면이 아닌채로 새로고침 하면 page가 1로 저장되서 메뉴가 나타나지 않음
	if (page != 1) headerWrap.style.display = 'block';
	else if (page == 1) headerWrap.style.display = 'none';
});

$html.animate({ scrollTop: 0 }, 10);
$(window).on('wheel', function (e) {
	if ($html.is(':animated')) return;

	if (e.originalEvent.deltaY > 0) {
		if (page == lastPage) return;
		page++;
	} else if (e.originalEvent.deltaY < 0) {
		if (page == 1) return;
		page--;
	}
	var posTop = (page - 1) * $(window).height();

	$html.animate({ scrollTop: posTop });
});
