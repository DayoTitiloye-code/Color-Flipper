//array used to form hex colours
// hex colour format - starts with a # and can contain numbers 0-9 and letters a-f
const hexColours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

//methods to get button and colour
const btn = document.getElementById('btn')
const colour = document.querySelector('.colour')

btn.addEventListener('click', function () {
  let hexColour = '#'
  //ensures loop runs 5 times as hex colours are 5 figures long
  for (let i = 0; i < 6; i++) {
    //+= to concatenate string
    hexColour += hexColours[getRandomNumber()]
  }

  colour.textContent = hexColour
  document.body.style.backgroundColor = hexColour
})

//function used to generate random hex numbers
function getRandomNumber() {
  return Math.floor(Math.random() * hexColours.length)
}
