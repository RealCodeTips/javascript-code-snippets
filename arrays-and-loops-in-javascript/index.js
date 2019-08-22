const name = "Simon"
const age = 29
const profession = "Developer"
const favouriteAnimal = "dog"

const hobbies = ["Coding", "Walking", "Watching TV", "example4", "example5", "example6", "example7", "example8", "example9", "example10"]

console.log(`
Welcome to my first JavaScript programme. 
My name is ${name}. 
I am ${age} years old. 
I work as a ${profession}.
My favourite animal is a ${favouriteAnimal}
`)

console.log(`I have ${hobbies.length} hobbies, and they are as follows...`)

for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i])
}

