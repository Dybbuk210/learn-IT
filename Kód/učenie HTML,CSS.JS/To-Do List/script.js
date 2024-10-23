var inputBox = document.getElementById("inputbox");
var ulBox = document.getElementById("ulbox");

function addTask(){
    if(inputBox.value === ''){
        alert("Nezadali ste žiadnu úlohu");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ulBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

ulBox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("skontrolovane");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
