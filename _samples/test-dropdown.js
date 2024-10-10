function createNode(element) {
  return document.createElement(element)
}

function append(parent, el) {
  return parent.appendChild(el)
}

const select = document.getElementById('dogs')
const url = 'https://dog.ceo/api/breeds/list/all'

fetch(url)
  .then((response) => response.json())
  .then((jsonResponse) => {
    let data = Object.keys(jsonResponse.message)
    console.log(data)
    return data
      .map((name) => {
        let option = createNode('option')
        let text = document.createTextNode(name)
        option.appendChild(text)
        append(select, option)
      })
      .catch(function (error) {
        console.log('Oops', error)
      })
  })
