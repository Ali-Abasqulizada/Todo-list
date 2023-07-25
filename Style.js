const form = document.querySelector("form");
const input = document.getElementById("input");
const ul = document.getElementById("list");
form.addEventListener("submit", (x) => {
    x.preventDefault();
    console.log("clicked")
    if(input.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");        
        ul.appendChild(li);
        let p = document.createElement("p");
        p.innerHTML = input.value;        
        li.appendChild(p);
        let deleta = document.createElement("i");
        deleta.classList.add("fa-regular", "fa-trash-can");
        li.appendChild(deleta);            

    }
    input.value = '';
    saveData();
})
ul.addEventListener("click", (x) => {
    if(x.target.tagName === "LI"){
        x.target.classList.toggle("checked");
        saveData();
    }
    else if(x.target.tagName === "I"){
        x.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}
function showList(){
    ul.innerHTML = localStorage.getItem("data");
}
showList();