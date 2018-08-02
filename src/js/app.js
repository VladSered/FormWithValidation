window.onload = function () {


	document.getElementById('name').addEventListener('blur', validateName);
	document.getElementById('email').addEventListener('blur', validateEmail);
	document.getElementById('phone').addEventListener('blur', validatePhone);
	document.getElementById('street').addEventListener('blur', validateStreet);
	document.getElementById('suite').addEventListener('blur', validateSuite);
	document.getElementById('city').addEventListener('blur', validateCity);
	document.getElementById('company').addEventListener('blur', validateCompany);

	function validateName() {
		const name = document.getElementById('name');
		const re = /^[a-zA-Z ]{5,20}$/;
		if (!re.test(name.value)) {
			name.classList.add('invalid');
		} else {
			name.classList.remove('invalid');
		}
	}

	function validateEmail() {
		const email = document.getElementById('email');
		const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
		if (!re.test(email.value)) {
			email.classList.add('invalid');
		} else {
			email.classList.remove('invalid');
		}
	}

	function validatePhone() {
		const phone = document.getElementById('phone');
		const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
		if (!re.test(phone.value)) {
			phone.classList.add('invalid');
		} else {
			phone.classList.remove('invalid');
		}
	}

	function validateStreet() {
		const street = document.getElementById('street');
		const re = /^[a-zA-Z0-9 .-]/;
		if (!re.test(street.value)) {
			street.classList.add('invalid');
		} else {
			street.classList.remove('invalid');
		}
	}

	function validateSuite() {
		const suite = document.getElementById('suite');
		const re = /^[a-zA-Z0-9 .-]/;
		if (!re.test(suite.value)) {
			suite.classList.add('invalid');
		} else {
			suite.classList.remove('invalid');
		}
	}

	function validateCity() {
		const city = document.getElementById('city');
		const re = /^[a-zA-Z0-9 .-]/;
		if (!re.test(city.value)) {
			city.classList.add('invalid');
		} else {
			city.classList.remove('invalid');
		}
	}

	function validateCompany() {
		const company = document.getElementById('company');
		const re = /^[a-z ]/i;
		if (!re.test(company.value)) {
			company.classList.add('invalid');
		} else {
			company.classList.remove('invalid');
		}
	}
}