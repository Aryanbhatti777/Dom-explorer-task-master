const nav_btn = document.querySelector(".nav-btn");
const form_div = document.querySelector(".form");
const form = document.querySelector("form");
const nav_btn_cancel = document.querySelector(".cancel")
const tasks_div = document.querySelector(".tasks")
const text = document.querySelector(".no-tasks")

nav_btn.addEventListener("click", () => {
    form_div.style.display = "flex";
    nav_btn_cancel.style.display = "inline"
})

nav_btn_cancel.addEventListener("click", () => {
    form_div.style.display = "none",
        nav_btn_cancel.style.display = "none"
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let task = e.target[0].value.trim()
    let description = e.target[1].value.trim()
    let category = e.target[2].value;

    if (task === "" || description === "") {
        alert("All fields are mandatory")
        return
    }

    const newTask = {
        id: Date.now(),
        task,
        description,
        category,
        isCompleted: false
    }

    const arr = JSON.parse(localStorage.getItem("tasks")) || [];

    arr.push(newTask)

    localStorage.setItem("tasks", JSON.stringify(arr));

    e.target[0].value = ""

    e.target[1].value = ""

    showTasks()

})

const showTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // console.log(tasks)

    tasks.forEach(item => {

        const element = document.createElement("div")

        element.classList.add("task");

        element.innerHTML += `<div class="task">
                <div class="task-top">
                    <h1>${item.task}</h1>
                    <p>${item.category}</p>
                    
                </div>
                <p>${item.description}</p>
                <div>
                    <button class="complete">Complete</button>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>`




        tasks_div.append(element)



    });


}

showTasks()