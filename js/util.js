
let select = document.getElementById('select-breed');
let display = document.getElementById('display-results');
let resultNum = document.getElementById('result-num');
let errMsg = document.getElementById('breed-name'); 

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

export const displayBreedList = (arr) => {
  return arr.map(name => {
    let option = createNode('option');
    let text = document.createTextNode(capitalize(name));
    option.appendChild(text);
    append(select, option);
  })
};

export const createImageCard = (arr) => {
  display.innerHTML = '';
  arr.length > 300 ? resultNum.textContent = '300+' : resultNum.textContent = arr.length;
  
  return arr.map(image => {
    let div = createNode('div');
    div.setAttribute('class', 'image-card');
    let img = createNode('img');
    img.src = image;
    img.setAttribute('class', 'gds-image');
    img.setAttribute('style', 'object-fit: cover');
    append(div, img);
    append(display, div);
  });
};

export const errorHandler = () => {
  return errMsg.textContent = 'Woof! Something went wrong. Try again. Woof!';
}