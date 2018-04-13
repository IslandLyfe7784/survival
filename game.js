const livesArea = document.querySelector(".lives")
// const loseLifeButton = document.querySelector("")
var livesArray =[]
var counter = 5

initializePage()

if (livesArray.length != counter) {
  livesArea.removeChild(list.childNode[0])
}

// loseLifeButton.addEventListener("click", loseHeart)

function initializePage(){
  for (var i = 0; i < 5; i++) {
    let img = createNode("img")

    img.innerHTML = "<img src=../Assets/pixel-heart.png alt=heart>"
    livesArray.push(img)
    append(livesArea, img)
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
