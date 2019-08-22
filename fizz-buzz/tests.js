const { expect } = require('chai')
const { fizzBuzz } = require('./index')

describe('fizzBuzz tests', () => {
  it('fizzBuzz should be a function', () => {
    expect(fizzBuzz).to.be.a('function')
  })
  it('An input of 0 should return an empty string', () => {
    expect(fizzBuzz(0)).to.equal('')
  })
  it('An input of 1 should return "1"', () => {
    expect(fizzBuzz(1)).to.equal('1')
  })
  it('An input of 15 should return "12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz"', () => {
    expect(fizzBuzz(15)).to.equal('12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz')
  })
})