//array of colours to represent what colour the page can change to
const colours = [
  'green',
  'red',
  'rgba(133,122,200)',
  '#f15025',
  'orange',
  'grey',
]

//methods used to retrieve button and colour span
const btn = document.getElementById('btn')
const colour = document.querySelector('.colour')

btn.addEventListener('click', function () {
  //can use document.body to target the body
  //get random number between 0-5 (array's are 0 index based)
  const randomNum = getRandomNumber()
  document.body.style.backgroundColor = colours[randomNum]
  colour.textContent = colours[randomNum]
})

//set up a function that will generate number between 0-5

function getRandomNumber() {
  //.random() returns a number between 0-1
  //multiplying by the length of the colours array will lead to values between 0-5
  //.floor used to round number down to an integer
  return Math.floor(Math.random() * colours.length)
}
