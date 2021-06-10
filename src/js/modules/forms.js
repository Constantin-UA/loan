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

	checkMailInputs() {
		const mailInputs = document.querySelectorAll('[type="email"]');

		mailInputs.forEach((input) => {
			input.addEventListener('keypress', function (e) {
				if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
					e.preventDefault();
				}
			});
		});
	}

	initMask() {
		let setCursorPosition = (pos, elem) => {
			elem.focus();

			if (elem.setSelectionRange) {
				elem.setSelectionRange(pos, pos);
			} else if (elem.createTextRange) {
				let range = elem.createTextRange();

				range.collapse(true);
				range.moveEnd('character', pos);
				range.moveStart('character', pos);
				range.select();
			}
		};

		function createMask(event) {
			let matrix = '+1(___) ___-____;',
				i = 0,
				def = matrix.replace(/\D/g, ''),
				val = this.value.replace(/\D/g, '');
			if (def.length >= val.length) {
				val = def;
			}
			this.value = matrix.replace(/./g, function (a) {
				return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
			});

			if (event.type === 'blur') {
				if (this.value.langth === 2) {
					this.value = '';
				}
			} else {
				setCursorPosition(this.value.length, this);
			}
		}

		let inputs = document.querySelectorAll('[name="phone"]');

		inputs.forEach((input) => {
			input.addEventListener('input', createMask);
			input.addEventListener('focus', createMask);
			input.addEventListener('blur', createMask);
		});
	}

	async postData(url, data) {
		let res = await fetch(url, {
			method: 'POST',
			body: data,
		});
		return await res.text();
	}

	submitForm(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.style.cssText = `
      text-align: center;
      font-size: 18px;
      color: grey;
      `;

			form.parentNode.appendChild(statusMessage);
			form.classList.add('animated', 'fadeIn');
			form.style.display = 'none';

			let statusImg = document.createElement('img');
			statusImg.setAttribute('src', this.message.spinner);
			statusImg.classList.add('animated', 'fadeIn');
			statusMessage.appendChild(statusImg);

			let textMessage = document.createElement('div');
			textMessage.textContent = this.message.loading;
			statusMessage.appendChild(textMessage);

			this.formData = new FormData(form);

			this.postData(this.path, this.formData)
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
					}, 3000);
				});
		});
	}

	init() {
		this.checkMailInputs();
		this.initMask();
		this.submitForm(this.form);
	}
}
