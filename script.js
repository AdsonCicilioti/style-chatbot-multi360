var chatBtns = document.getElementsByClassName("chatbtn")

console.log(chatBtns)

for (var i = 0; i < chatBtns.length; i++) {
  chatBtns[i].addEventListener("click", function (e) {
    e.preventDefault()
    WBOTopenChat()
    e.stopPropagation()
  })
}

setTimeout(() => {
  var headerHello = document.querySelector(
    "#wbot-header .wbot-info .wbot-client"
  )
  // console.log(headerHello)
  headerHello.innerHTML = "Olá! Eu sou a Flora!"
}, 1000)

setTimeout(() => {
  var chatBotBtn = document.getElementById("wbot-open-chat")
  // console.log(chatBotBtn)
  chatBotBtn.classList.add("start-msg")
}, 3000)
