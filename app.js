const form = document.querySelector("form");
const input = document.getElementById("taskInput");
const ol = document.querySelector("ol");

form.addEventListener("submit", event => {
    event.preventDefault();
    if (input.value.length === 0)
        alert("you must write somthing");
    else {
        addTask(input.value);
        input.value = "";
    }
})

function addTask(theTask) {
    const li = document.createElement("li");
    const todoSpan = document.createElement("span");
    const removeSpan = document.createElement("span");
    const trashI = document.createElement("i");
    const checkSpan = document.createElement("span");
    const editSpan = document.createElement("span");
    const pencilI = document.createElement("i");
    const div = document.createElement("div");
    todoSpan.textContent = theTask;
    trashI.className = "fa fa-trash-o";
    pencilI.className = "fa fa-pencil";
    checkSpan.textContent = "✔";


    removeSpan.addEventListener("click", e => {
        li.remove();
    })

    checkSpan.addEventListener("click", e => {
        todoSpan.classList.toggle("checked");
    })

    editSpan.addEventListener("click", e => {
        todoSpan.remove();
        editSpan.style.visibility = "hidden";
        const TempInput = document.createElement("input");
        const TempBtn = document.createElement("button");
        TempInput.value = todoSpan.textContent;
        TempBtn.innerHTML = "OK";

        li.appendChild(TempInput);
        li.appendChild(TempBtn);
        TempBtn.addEventListener("click", ev => {
            if (TempInput.value != "") {
                todoSpan.textContent = TempInput.value;
                TempInput.remove();
                TempBtn.remove();
                li.appendChild(todoSpan);
                editSpan.style.visibility = "visible";
            } else {
                alert("you must write somthing");
            }
        })
    })

    removeSpan.appendChild(trashI);
    editSpan.appendChild(pencilI);
    div.appendChild(removeSpan);
    div.appendChild(checkSpan);
    div.appendChild(editSpan);
    li.appendChild(todoSpan);
    li.appendChild(div);
    ol.appendChild(li);
}