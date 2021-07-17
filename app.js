//array of colours to represent what colour the page can change to
const colours = ['green', 'red', 'rgba(133,122,200)', '#f15025']

//methods used to retrieve button and colour span
const btn = document.getElementById('btn')
const colour = document.querySelector('.colour')

btn.addEventListener('click', function () {
  //can use document.body to target the body
  //get random number between 0-3 (array's are 0 index based)
  const randomNum = 2
  document.body.style.backgroundColor = colours[randomNum]
  colour.textContent = colours[randomNum]
})

//set up a function that will generate number between 0-3
