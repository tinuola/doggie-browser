
import { displayBreedList, createImageCard } from './util.js';

const url = 'https://dog.ceo/api/breeds/list/all';
let select = document.getElementById('select-breed');

//update using async/await
const dogAPI = fetch(url)
	.then(response => response.json())
	.then(jsonResponse => {
		let data = Object.keys(jsonResponse.message);

		return displayBreedList(data);
	})
	.catch(function(error) {
		console.log('Oops', error);
	})

export const breedResults = async (breed) => {
	try {
		let response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
		let data = await response.json();
		return createImageCard(data.message);
	}
	catch(error){
		console.log('Error', error);
	}
}
