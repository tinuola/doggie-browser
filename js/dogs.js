import { displayBreedList, createImageCard, errorHandler } from './util.js';

const url = 'https://dog.ceo/api/breeds/list/all';

const dogAPI = async () => {
	try {
		let response = await fetch(url);
    let data = await response.json();
    let breedList = Object.keys(data.message);
		return displayBreedList(breedList);
	}
	catch(error){
		errorHandler();
		console.log('Error', error);
	}
}
dogAPI();

export const breedResults = async (breed) => {
	try {
		let response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
		let data = await response.json();
		if(data.message.length > 302){
			let reducedResults = data.message.slice(0, 301);
			return createImageCard(reducedResults);
		}
		return createImageCard(data.message);
	}
	catch(error){
		errorHandler();
		console.log('Error', error);
	}
}
