var chatBtns = document.querySelectorAll(".chatbtn a")
console.log(chatBtns)
var searchText = "iniciar atendimento"
var fixChatBtn = []

for (var i = 0; i < chatBtns.length; i++) {
  if (chatBtns[i].lastElementChild.textContent.toLowerCase() === searchText) {
    fixChatBtn[i] = chatBtns[i]
  }
}

console.log(fixChatBtn)

for (var i = 0; i < fixChatBtn.length; i++) {
  fixChatBtn[i].addEventListener("click", function (e) {
    e.preventDefault()
    WBOTopenChat()
    e.stopPropagation()
  })
}

setTimeout(() => {
  var headerHello = document.querySelector(
    "#wbot-header .wbot-info .wbot-client"
  )

  headerHello.innerHTML = "Olá! Eu sou a Flora!"
}, 1000)

setTimeout(() => {
  var chatBotBtn = document.getElementById("wbot-open-chat")
  chatBotBtn.classList.add("start-msg")
}, 3000)
