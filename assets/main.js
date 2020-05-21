let rollButton = document.querySelector("#rollButton")
let totalrolls = document.querySelector("#total-rolls")
let numOfDice = document.querySelector("#number-of-dice")
let showall = document.querySelector('#show-all-button')
let allrolls = document.querySelector('#all-Rolls')
let listItems = document.querySelector("#all-rolls")

const dieRolls = [1, 2, 3, 4, 5, 6]
let counter = 0


rollButton.addEventListener("click", function () {



  while (counter < numOfDice.value) {
    let newNumofDice = Math.random(7)
    console.log(counter)
    counter += 1
    dieRolls.push()



  }
  console.log(dieRolls)
  totalrolls.innerHTML = " Total : " + counter






})

showall.addEventListener("click", function () {


  while (counter < dieRolls.length) {
    let list = document.createElement("li")
  }
})