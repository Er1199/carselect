const body = document.body

$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		speed: 300,
		infinite: true,
		autoplaySpeed: 5000,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: false,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					dots: false,
				},
			},
		],
	})
})
const popup = document.getElementById('popup')
const popupContainer = document.querySelector('.pop-up__container')

function openPopupInTime(delay) {
	setTimeout(() => {
		const storedPopupState = sessionStorage.getItem('popupState')
		if (storedPopupState !== 'open') {
			body.classList.add('lock')
			popupContainer.classList.add('active')
			popup.classList.add('open-popup')
			sessionStorage.setItem('popupState', 'open')
		}
	}, delay)
}

function closePopup() {
	body.classList.remove('lock')
	popup.classList.remove('open-popup')
	popupContainer.classList.remove('active')
}

const iconX = popup.querySelector('.pop-up__close')
iconX.addEventListener('click', closePopup)

openPopupInTime(10000)

function toggleBurgerMenu() {
	const headerBurger = document.querySelector('.header__burger')
	const headerNav = document.querySelector('.nav')
	const headerLinks = document.querySelectorAll('.header__list__item a')

	headerBurger.addEventListener('click', function () {
		headerBurger.classList.toggle('active')
		headerNav.classList.toggle('active')
		body.classList.toggle('lock')
	})

	headerLinks.forEach(item => {
		item.addEventListener('click', function () {
			headerBurger.classList.remove('active')
			headerNav.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

toggleBurgerMenu()
