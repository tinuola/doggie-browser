let data = {
  message: {
    affenpinscher: [],
    brabancon: [],
    briard: [],
    bulldog: ['boston', 'french'],
    bullterrier: ['staffordshire'],
    cairn: [],
    chihuahua: [],
    chow: [],
    clumber: [],
    collie: ['border'],
  },
}

for (let breed of Object.values(data.message)) {
  if (breed.length > 0) {
    // console.log(breed);
  }
}

// console.log(data.message.bulldog.length)
