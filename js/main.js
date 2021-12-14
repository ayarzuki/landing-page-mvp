document.querySelector('.close-notif').addEventListener('click', function () {
	this.closest('.notification').style.display = 'none';
});

const newsletter = document.querySelector('.newsletter');

const hideNewsletter = () => {
	newsletter.style.display = 'none';
	sessionStorage.setItem('newsletter', 'hidden');
};
setTimeout(hideNewsletter, 600000);
