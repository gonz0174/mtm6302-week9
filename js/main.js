console.log("JS file included")

const title = document.querySelector("h1")

title.addEventListener("click", function(){
    title.style.color = "hotpink"
})

const like = document.getElementById("like")
// You can also can use event inside the function() or the e, but both means the same
like.addEventListener ("click", function(e){
    console.log(e)
    e.target.classList.toggle("liked")
})

//Imprent in the console if you are typping
document.addEventListener("keypress", function(e){
    console.log(e.key)
})

//Adding event listener to multiple elements (ALWAYS USE FOR WHEN I HAVE A LIST OF WHATEVER)
const tasks = document.getElementById("todolist").children

for (const task of tasks) {
    task.addEventListener("click", completeTask)
}

function completeTask (e) {
    const task = e.target
    task.classList.toggle("done")
}

// Event Delegation
const groceriesList = document.getElementById("grocerieslist")

groceriesList.addEventListener("click", addToCart)

function addToCart(e) {
    // const item = e.target
    // if(item.classList.contains("item")) {
    //     item.insertAdjacentHTML("beforeend", `<span>🛒</span>`)
    // }
    const item = e.target.closest(".item")
    if (item.classList.contains("item")) {
    item.insertAdjacentHTML("beforeend", `<span>🛒</span>`)
}
}

const groceryForm = document.getElementById("groceryForm")
groceryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const elements = groceryForm.elements
    for (const element of elements) {
        console.log(element.name)
        if (element.name == "groceryItem" && element.value !== ""){
            groceriesList.insertAdjacentHTML("beforeend", `<li class="item">${element.value}</li>`)
            groceryForm.reset()
        }
    }
})
