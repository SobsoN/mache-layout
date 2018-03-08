const hamburger = document.getElementById('hamburger'),
	menu = document.getElementById('menu');

hamburger.addEventListener('click', function(){

	menu.classList.toggle('menu--active');
});

