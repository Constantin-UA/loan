import Requests from '../services/requests';

export default class Forms {
	constructor(forms, idx = 0) {
		this.form = document.querySelectorAll(forms)[idx];
		this.inputs = this.form.querySelectorAll('input');
		this.message = {
			loading: 'Загрузка...',
			success: 'Спасибо! Скоро мы с вами свяжемся',
			failure: 'Что-то пошло не так...',
			spinner: 'assets/img/spinner.gif',
			ok: 'assets/img/ok.png',
			fail: 'assets/img/fail.png',
		};
		this.path = 'assets/question.php';
	}

	clearInputs() {
		this.form.querySelectorAll('input').forEach((item) => {
			item.value = '';
		});
	}

	myFunc(form) {
		console.log('My func start');
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.style.textAlign = 'center';

			form.parentNode.appendChild(statusMessage);
			form.classList.add('animated', 'rotateOutUpRight');
			setTimeout(() => {
				form.style.display = 'none';
			}, 400);

			let statusImg = document.createElement('img');
			statusImg.setAttribute('src', this.message.spinner);
			statusImg.classList.add('animated', 'fadeInUpBig');
			statusMessage.appendChild(statusImg);

			let textMessage = document.createElement('div');
			textMessage.textContent = this.message.loading;
			statusMessage.appendChild(textMessage);

			this.formData = new FormData(form);

			const req = new Requests(this.path, this.formData);
			req
				.postData()
				.then((res) => {
					console.log(res);
					statusImg.setAttribute('src', this.message.ok);
					textMessage.textContent = this.message.success;
				})
				.catch(() => {
					statusImg.setAttribute('src', this.message.fail);
					statusMessage.textContent = this.message.failure;
				})
				.finally(() => {
					this.clearInputs();
					setTimeout(() => {
						statusMessage.remove();
						form.style.display = 'block';
						form.classList.remove('rotateOutUpRight');
						form.classList.add('rotateInDownLeft');
					}, 5000);
				});

			this.clearInputs();
		});
		console.log('My func end');
	}

	init() {
		console.log('Start', this.form);
		this.myFunc(this.form);
		console.log('End');
	}
}
