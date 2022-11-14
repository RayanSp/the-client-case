const list = document.getElementById("list");

console.log(list);

function returnText(){
    let input = document.getElementById("userInput").value;
    document.getElementById('list').innerHTML += `<li id="knop">${input} </li><br>`;
        userInput.value = '';
}


function startchat() {
    document.getElementById("container").style.zIndex = "2";
}

function closechat() {
    document.getElementById("container").style.zIndex = "-1";
}

// preventDefault