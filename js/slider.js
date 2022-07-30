// const workView = document.querySelector('.work__view');
// const workList = document.querySelector('.work__view ul');
// const workListItem = document.querySelectorAll('.work__view ul li');
// const prevBtn = document.querySelector('.prev__btn');
// const nextBtn = document.querySelector('.next__btn');
// let viewWidth = workView.offsetWidth;
// let itemCount = workListItem.length;
// let slideCount = 0;
// let pageItemNum = 3;

// console.log(workList);

// makeClone();
// // 새로운 요소 추가
// function makeClone() {
// 	let cloneSlideFirst = workListItem[0].cloneNode(true);
// 	cloneSlideFirst.classList.add('clone');
// 	workList.appendChild(cloneSlideFirst);

// 	let cloneSlideLast = workListItem[itemCount - 1].cloneNode(true);
// 	cloneSlideLast.classList.add('clone');
// 	workList.prepend(cloneSlideLast);

// 	updateWidthSlide();
// 	updatePositionSlide();
// 	setTimeout(function () {
// 		workList.classList.add('animated');
// 	}, 100);
// }
// // 추가된 요소 업데이트
// function updateWidthSlide() {
// 	let currentSlides = document.querySelectorAll('.work__view ul li');
// 	let newSlideCount = currentSlides.length;

// 	let newWidth = (viewWidth / pageItemNum) * newSlideCount + 'px';
// 	workList.style.width = newWidth;
// }
// // 추가된 요소 위치 잡기
// function updatePositionSlide() {
// 	workList.style.left = -(viewWidth / pageItemNum) + 'px';
// }

// prevBtn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log('prevBtn');
// 	// workList.style.left = '0';
// 	slideCount--;
// 	// if (slideCount == -1) slideCount = 2;
// 	// workList.style.left = (-viewWidth / pageItemNum) * slideCount + 'px';
// 	moveList();
// });
// nextBtn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log('nextBtn');
// 	slideCount++;
// 	// if (slideCount == pageItemNum) slideCount = 0;
// 	// workList.style.left = (-viewWidth / pageItemNum) * slideCount + 'px';
// 	moveList();
// });

// function moveList() {
// 	workList.style.left = (-viewWidth / pageItemNum) * slideCount + 'px';
// }
