const inputs = document.querySelectorAll('.input');

function focusFunc() {
	let parent = this.parentNode;
	parent.classList.add('focus');
}

function blurFunc() {
	let parent = this.parentNode;
	if (this.value == '') {
		parent.classList.remove('focus');
	}
}

inputs.forEach((input) => {
	input.addEventListener('focus', focusFunc);
	input.addEventListener('blur', blurFunc);
});

document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('form');
	const successMessage = document.createElement('p');
	successMessage.style.color = '#1BD9C5';
	successMessage.style.marginTop = '10px';
	successMessage.style.textAlign = 'center';
	successMessage.style.fontWeight = 'bold';
	successMessage.style.display = 'none';

	form.appendChild(successMessage);

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		const name = form.querySelector('input[name="name"]').value;
		const email = form.querySelector('input[name="email"]').value;
		const phone = form.querySelector('input[name="phone"]').value;
		const message = form.querySelector('textarea[name="message"]').value;

		if (name.trim() === '') {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please enter your name!',
			});
			return;
		}

		if (email.trim() === '') {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please enter your email!',
			});
			return;
		}

		if (phone.trim() === '') {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please enter a phone number!',
			});
			return;
		}

		if (message.trim() === '') {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please enter a message!',
			});
			return;
		}

		successMessage.style.display = 'block';
		form.reset();
		setTimeout(function () {
			successMessage.style.display = 'none';
		}, 3000);

		Swal.fire({
			icon: 'success',
			title: 'Success!',
			text: 'Message sent successfully! Thank you!!!',
		});
	});
});
