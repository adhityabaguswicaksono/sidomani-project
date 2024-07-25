window.addEventListener('load', function () {
	const preloader = document.querySelector('.preloader');

	setTimeout(function () {
		setInterval(function () {
			if (!preloader.style.opacity) {
				preloader.style.opacity = 1;
			}
			if (preloader.style.opacity > 0) {
				preloader.style.opacity -= 0.01;
			} else {
				clearInterval(this);
				preloader.remove();
			}
		}, 1);
	}, 1000);
});

function showMenu(x) {
	x.classList.toggle('klik');

	let detailMenu = document.getElementsByClassName('detail-menu')[0];

	if (detailMenu.className === 'detail-menu') {
		detailMenu.className += ' hidden-menu';
	} else {
		detailMenu.className = 'detail-menu';
	}
}

window.addEventListener('click', function (e) {
	if (
		!document.getElementById('navigation-menu').contains(e.target) &&
		!document.getElementsByClassName('detail-menu')[0].contains(e.target)
	) {
		document.getElementById('navigation-menu').className = 'navigation-list';
		document.getElementById('bar-menu').className = 'toggle-menu';
		document.getElementsByClassName('detail-menu')[0].className =
			'detail-menu hidden-menu';
	}
});

function printResult() {
	// var divContents = document.getElementsByClassName('wrapper')[0].innerHTML;
	// // var a = window.open('', '', 'height=500, width=500');
	// a.document.write('<html>');
	// a.document.write('<body > <h1>Div contents are <br>');
	// a.document.write(divContents);
	// a.document.write('</body></html>');
	// // a.document.close();
	// a.print();

	var printContents = document.getElementsByClassName('wrapper')[0].innerHTML;
	var originalContents = document.body.innerHTML;

	document.body.innerHTML = printContents;

	window.print();

	document.body.innerHTML = originalContents;
}
