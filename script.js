const body = document.getElementsByClassName("body");

function returnText(){
    let input = document.getElementById("userInput").value;
    document.getElementsByClassName('body').innerHTML += `<p class="user_message">${input} </p>`;
        userInput.value = '';
}
