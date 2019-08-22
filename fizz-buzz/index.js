const fizzBuzz = n => {
  let result = ''
  for (let i = 1; i <= n; i++) {
    const multipleOfThree = i % 3 === 0
    const multipleOfFive = i % 5 === 0

    if (multipleOfThree && multipleOfFive) {
      result += 'fizzbuzz'
    } else if (multipleOfThree) {
      result += 'fizz'
    } else if (multipleOfFive) {
      result += 'buzz'
    } else {
      result += i
    }
  }
  return result
}

fizzBuzz(4)
fizzBuzz(15)
fizzBuzz(1)

module.exports = { fizzBuzz }