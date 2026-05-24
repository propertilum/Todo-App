var getInp = document.querySelector("#inp")
var getBtn = document.querySelector("#addItem")
var getList = document.querySelector("#list")
var getDel = document.getElementById("deleteAll")
var getUpt = document.getElementById("updateBtn")

getBtn.addEventListener("click", function(){
    getList.innerHTML += `<li> ${getInp.value} <button class="styleBtn" onclick = "delItem(this)">Delete</button>   <button class="styleBtn" onclick = "editItem(this)">Edit</button> </li> `
    getInp.value = ''
})



getDel.addEventListener("click", function(){
    getList.innerHTML = ""
})

function delItem(e){
    e.parentNode.remove()
}

function editItem(e){
    currentItem = e.parentNode.firstChild
    getInp.value = e.parentNode.firstChild.textContent.trim()
    getUpt.style.display = "inline-block"
    getBtn.style.display = "none"
}

var currentItem;

getUpt.addEventListener("click", function(){
    currentItem.textContent = getInp.value
    getUpt.style.display = "none"
    getBtn.style.display = "inline-block"
})

