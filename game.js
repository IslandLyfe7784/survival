const lives = document.querySelector("#lives")
const loseLifeButton = document.querySelector("")
var livesArray =[]
var counter = 5

initializePage()

loseLifeButton.addEventListener("click", loseHeart)

if (livesArray.length != counter) {
  livesDiv.removeChild(list.childNode[0])
}

function initializePage(){
  for (var i = 0; i < 5; i++) {
    let img = createNode(img)

    img.src = ./Assets/pixel-heart.png

    append(lives, img)
  }
}

function createNode(element){
  return document.createElement(element)
}

function append(parent, element){
  return parent.appendChild(element)
}
function loseHeart(){
  counter -= 1
  return counter
}
