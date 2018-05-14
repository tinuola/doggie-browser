import { createImageCard, errorHandler, createMenuBreed, createMenuBreedGroup } from './util.js';

const url = 'https://dog.ceo/api/breeds/list/all';

const dogAPI = async () => {
	try {
		let response = await fetch(url);
    let data = await response.json();
    
    let breedGrouping = Object.values(data.message);
    let breedListNames = Object.keys(data.message);

    return breedGrouping.map((subBreed) => {
      let breedIndexNumber = breedGrouping.indexOf(subBreed);
      let breedName = breedListNames[breedIndexNumber];
      if(subBreed.length > 0){
        return createMenuBreedGroup(breedName, subBreed);
      }
      return createMenuBreed(breedName);
    });
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
		console.log(error);
	}
}

export const subBreedResults = async (breed, subBreed) => {
	try {
		let response = await fetch(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`);
		let data = await response.json();
		if(data.message.length > 302){
			let reducedResults = data.message.slice(0, 301);
			return createImageCard(reducedResults);
		}
		return createImageCard(data.message);
	}
	catch(error){
		errorHandler();
		console.log(error);
	}
}
