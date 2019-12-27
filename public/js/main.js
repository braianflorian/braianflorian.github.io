'use strict'

document.addEventListener('DOMContentLoaded', function () {
	// Vamos a indicar al usuario que tiene la orientación horizontal, rotar su celular para una mejor experiencia de usuario
	if (window.height < 500) alert('Recomendación: Rota tu smartphone para una mejor experiencia.')

	// Settings
	let btnMenu = document.querySelector('.myself__menu__action')
	let ControlBtnMenu = document.querySelector('.control-actions__menu')
	// Blanket Body
	let blanketBody = document.querySelector('.blanketBody')
	// Container Menu
	let containerMenu = document.querySelector('.myself__container__menu')

	

	btnMenu.addEventListener('click', function () {
		blanketBody.style.display = "block"

		containerMenu.style.left = 0
		containerMenu.style.transition = "left .5s ease"
	})
	ControlBtnMenu.addEventListener('click', function () {
		blanketBody.style.display = "block"

		containerMenu.style.left = 0
		containerMenu.style.transition = "left .5s ease"
	})
})

// Agregamos el evento de carga de window para esconder el loader una vez se cargue toda la página
window.addEventListener('load', e => {
	let loader = document.querySelector('.loader')
	let message = document.querySelector('.loader__message')

	setTimeout(function () {
		message.textContent = '¡Portafolio Listo!'
		clearTimeout(this)
	}, 100)

	setTimeout(function () {
		loader.style.transition = 'opacity .8s ease-out'
		loader.style.opacity = '0'
		clearTimeout(this)
	}, 200)

	setTimeout(function () {
		loader.style.display = 'none'
		clearTimeout(this)
	}, 300)
})
