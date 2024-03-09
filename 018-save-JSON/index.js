'use strict';

const users = [
	{name: 'Dan', age: 21}
];

const submitForm = () => {
	const name = document.querySelector('.input-name').value;
	const age = Number(document.querySelector('.input-age').value);

	if (!name || !age) {
		return;
	}

	document.querySelector('.input-name').value = '';
	document.querySelector('.input-age').value = '';

	users.push({name: name, age: age})
	users.forEach((user) => {
		const setText = JSON.stringify(user);
		localStorage.setItem(`user${localStorage.length}`, setText);
	})


	console.log(localStorage);
}