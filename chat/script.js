let btn = document.querySelector(".btnOne");
let chat = document.getElementById("chatOne");
let not = 0;
btn.addEventListener("click", function () {
    let msg = document.getElementById("msgOne").value;
    let newMsg = document.createElement("div");
    let newMsge = document.createElement("div");
    let not = 0;
    newMsge.className = "blue";
    newMsg.className = "green";
    var time = new Date();
    newMsg.innerHTML = msg+ " "+ time.getHours()+":"+time.getMinutes();
    newMsge.innerHTML = msg+ " "+ time.getHours()+":"+time.getMinutes();
    chat.appendChild(newMsg);
    chatTwo.appendChild(newMsge);
});

let btnTwo = document.querySelector(".btnTwo");
let chatTwo = document.querySelector(".chatTwo");


btnTwo.addEventListener("click", function () {
    not++
    let msgg = document.getElementById("msgTwo").value;
    let newMsg = document.createElement("div");
    let newMsge = document.createElement("div");
    newMsge.className = "blue";
    newMsg.className = "green";
    var time = new Date()
    newMsg.innerHTML = msgg+ " "+ time.getHours()+":"+time.getMinutes();
    newMsge.innerHTML = msgg+ " "+ time.getHours()+":"+time.getMinutes();
    chat.appendChild(newMsge);
    chatTwo.appendChild(newMsg);
});

  