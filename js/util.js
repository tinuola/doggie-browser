let selectTag = document.getElementById('select-breed');
let display = document.getElementById('display-results');
let resultNum = document.getElementById('result-num');
let errMsg = document.getElementById('breed-name'); 

window.sr = ScrollReveal({ duration: 1000 });

const createNode = (element) => {
  return document.createElement(element);
};

const append = (parent, child) => {
	return parent.appendChild(child);
};

const capitalize = (text) => {
  let capChar = text.charAt(0).toUpperCase();
  return text.replace(text[0], capChar);
}

export const createMenuBreed = (name) => {
  let optionTag = createNode('option');
  optionTag.setAttribute('value', name);
  let text = document.createTextNode(capitalize(name));
  optionTag.appendChild(text);
  append(selectTag, optionTag);
}

export const createMenuBreedGroup = (name, arr) => {
  let optGroupTag = createNode('optgroup');
  optGroupTag.setAttribute('value', name);
  optGroupTag.setAttribute('label', capitalize(name));
  append(selectTag, optGroupTag);
  
  return arr.map((ele) => {
    let optionTag = createNode('option');
    optionTag.setAttribute('value', ele);
    optionTag.setAttribute('data-breed', name);
    let text = document.createTextNode(capitalize(ele) + " " + capitalize(name));
    optionTag.appendChild(text);
    append(optGroupTag, optionTag);
  });
};

const createImageCardAttributes = (elem) => {
  let div = createNode('div');
  div.setAttribute('class', 'image-card');
  let img = createNode('img');
  img.src = elem;
  img.setAttribute('class', 'gds-image scroll');
  img.setAttribute('style', 'object-fit: cover');
  append(div, img);
  append(display, div);
  sr.reveal('.scroll');
};

export const createImageCard = (arr) => {
  display.innerHTML = '';
  arr.length > 300 ? resultNum.textContent = '300+' : resultNum.textContent = arr.length;
  return arr.map(image => {
    createImageCardAttributes(image);
  });
};

export const errorHandler = () => {
  resultNum.textContent = 0;
  return errMsg.textContent = 'Woof! Something went wrong. Try again. Woof!';
}