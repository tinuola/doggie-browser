function createNode(element) {
  return document.createElement(element)
}

function append(parent, el) {
  return parent.appendChild(el)
}

const ul = document.getElementById('dogs')
const url = 'https://dog.ceo/api/breed/african/images'

fetch(url)
  .then((response) => response.json())
  .then((jsonResponse) => {
    let data = jsonResponse.message.slice(0, 10)
    return data
      .map((image) => {
        let li = createNode('li')
        let img = createNode('img')
        img.src = image
        append(li, img)
        append(ul, li)
      })
      .catch(function (error) {
        console.log('Oops')
      })
  })
