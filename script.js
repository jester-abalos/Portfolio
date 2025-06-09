const nameText = "Jester Abalos"; 
const typingElement = document.getElementById("typing-name");
let index = 0;

function typeLoop() {
  typingElement.textContent = nameText.substring(0, index);
  index++;
  if (index > nameText.length) {
    index = 0;
    setTimeout(typeLoop, 1000); 
  } else {
    setTimeout(typeLoop, 150);
  }
}

typeLoop();
