const form = document.querySelector("form");
const input = document.getElementById("taskInput");
const ol = document.querySelector("ol");

form.addEventListener("submit", event => {
    event.preventDefault();
    if(input.value.length === 0)
        alert("you must write somthing");
    else
    {
    addTask(input.value);
    input.value = "";
    }
})

function addTask(theTask) {
    const li = document.createElement("li");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const i1 = document.createElement("i");
    const span3 = document.createElement("span");
    const span4 = document.createElement("span");
    const i2 = document.createElement("i");
    const div = document.createElement("div");
    span1.textContent = theTask;
    i1.className = "fa fa-trash-o";
    i2.className = "fa fa-pencil";
    span3.textContent = "✔";


    span2.addEventListener("click", e => {
        li.remove();
    })

    span3.addEventListener("click", e => {
        span1.classList.toggle("checked");
    })

    span4.addEventListener("click", e => {
        span1.remove();
        span4.style.visibility = "hidden";
        const TempInput = document.createElement("input");
        const TempBtn = document.createElement("button");
        TempInput.value = span1.textContent;
        TempBtn.innerHTML = "OK";

        li.appendChild(TempInput);
        li.appendChild(TempBtn);
        TempBtn.addEventListener("click", ev => {
            span1.textContent = TempInput.value;
            TempInput.remove();
            TempBtn.remove();
            li.appendChild(span1);
            span4.style.visibility = "visible";
        })
    })

    span2.appendChild(i1);
    span4.appendChild(i2);
    div.appendChild(span2);
    div.appendChild(span3);
    div.appendChild(span4);
    li.appendChild(span1);
    li.appendChild(div);
    ol.appendChild(li);


}