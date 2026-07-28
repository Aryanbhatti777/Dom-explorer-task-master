const nav_btn = document.querySelector(".nav-btn");
const form_div = document.querySelector(".form");
const form = document.querySelector("form");
const nav_btn_cancel = document.querySelector(".cancel")
const tasks_div = document.querySelector(".tasks")
const text = document.querySelector(".no-tasks")
const clearAll = document.querySelector(".clear-all")


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

    if(tasks.length === 0){
        tasks_div.innerHTML = `<h3>No Tasks Added Yet.</h3>`
    }else{

        tasks_div.innerHTML = ""

        tasks.forEach(item => {

        const element = document.createElement("div")

        element.classList.add("task");

        element.innerHTML = `
    <div class="task">
        <div class="task-top">
            <h1>${item.task}</h1>
            <p>${item.category}</p>
        </div>
        <p>${item.description}</p>
        <div>
            <button class="complete">
                ${item.isCompleted ? "Completed" : "Complete"}
            </button>
            <button class="edit" style="display:${item.isCompleted ? "none" : "inline-block"}">
                Edit
            </button>
            <button class="delete">Delete</button>
        </div>
    </div>
`;

            const edit = element.querySelector(".edit")

            element.querySelector(".complete").addEventListener("click", () => {
                markComplete(item,edit)
            })

            element.querySelector(".delete").addEventListener("click", () => {
                deleteTask(item)
            })

            

        tasks_div.append(element)



    });
    }


}

const markComplete = (item, edit) => {
    const arr = JSON.parse(localStorage.getItem("tasks")) || [];
    

    const task = arr.find((taskItem) => taskItem.id === item.id)
    
    task.isCompleted = true;
    
    
    localStorage.setItem("tasks", JSON.stringify(arr))

    if(task.isCompleted){
        edit.style.display = "none"
    }
    showTasks()
    
}

clearAll.addEventListener("click", () => {
    localStorage.removeItem("tasks")
    showTasks()
})

const deleteTask = (item) => {

    const arr = JSON.parse(localStorage.getItem("tasks")) || [];

    const newArr = arr.filter(task => task.id !== item.id)

    localStorage.setItem("tasks", JSON.stringify(newArr))

    showTasks()
}

showTasks()