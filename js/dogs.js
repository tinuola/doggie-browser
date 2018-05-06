console.log('dogs.js is loaded');

import { displayBreedList, createImageCard } from './util.js';

const url = 'https://dog.ceo/api/breeds/list/all';
let select = document.getElementById('select-breed');

//update using async/await
const dogAPI = fetch(url)
	.then(response => response.json())
	.then(jsonResponse => {

		// Test FILTERS OUT SUB-BREEDS
		// for(let breed of Object.values(jsonResponse.message)){ 
		// 	if(breed.length > 0){
		// 		console.log(breed);
		// 	} 
		// }
		// let testData = Object.values(jsonResponse.message);
		// console.log(testData);

		let data = Object.keys(jsonResponse.message);
		// console.log(data);

		return displayBreedList(data);
	})
	.catch(function(error) {
		console.log('Oops', error);
	})

export const breedResults = async (breed) => {
	try {
		let response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
		let data = await response.json();
		// console.log(data.message);
		return createImageCard(data.message);
	}
	catch(error){
		console.log('Error', error);
	}
}