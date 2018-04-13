const livesArea = document.querySelector(".lives")
const loseLifeButton = document.querySelector(".dead")
var livesArray =[]
var counter = 5
initializePage()

loseLifeButton.addEventListener("click", loseHeart)

function initializePage(){
  for (let i = 0; i < 5; i++) {
    let div = createNode("div")

    div.innerHTML = "<img src=../Assets/pixel-heart.png alt=heart>"
    livesArray.push(div)
    div.className = "hearts"
    append(livesArea, div)
  }
}

function createNode(element){
  return document.createElement(element)
}

function append(parent, element){
  return parent.appendChild(element)
}

function loseHeart(){
  livesArray.pop()
  counter -= 1
  livesArea.removeChild(livesArea.childNodes[livesArray.length - 1])
  return counter
}
