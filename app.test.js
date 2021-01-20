test("check if the task added to the list", t => {
    let taskIn = document.getElementById("taskInput");
    taskIn.value = "GYM";

    const click = document.querySelector("#add");
    click.click();

    const expected = 1;
    const result = document.querySelectorAll("li").length;
    t.equal(expected, result, " the task is added to the list");
    document.getElementById("myList").innerHTML = "";
})


test("check if the task added to the list with a correct input", t => {
    let taskIn = document.getElementById("taskInput");
    taskIn.value = "GYM";

    const click = document.querySelector("#add");
    click.click();

    const expected = "GYM✔";
    const result = document.querySelector("li").textContent;
    t.equal(expected, result, "the task added with the correct input");
    document.getElementById("myList").innerHTML = "";
})


// test("check empty input" , t=>{

//     let taskIn = document.getElementById("taskInput");
//     taskIn.value= "";

//     const click = document.querySelector("#add");
//     click.click();

//     const expected = 0;
//     const result = document.querySelectorAll("ol li").length;
//     console.log(result);
//     t.equal(expected, result);
//     document.getElementById("myList").innerHTML="";

// })


test("check deleting the task", t => {
    let taskIn = document.getElementById("taskInput");
    taskIn.value = "GYM";

    const click = document.querySelector("#add");
    click.click();

    const trash = document.querySelector("li div span:first-child");

    trash.click();

    const expected = 0;
    const result = document.querySelectorAll("ol li").length;
    t.equal(expected, result, "the task was deleted");
    document.getElementById("myList").innerHTML = "";
})



test("check the task", t => {
    let taskIn = document.getElementById("taskInput");
    taskIn.value = "GYM";

    const click = document.querySelector("#add");
    click.click();

    const check = document.querySelector("li div span:nth-child(2)");
    check.click();

    const expected = "checked";
    const result = document.querySelector("ol li span").className;
    t.equal(expected, result, "the task was checked successfully");
    document.getElementById("myList").innerHTML = "";
})


test("check edit the Task", t => {

    let taskIn = document.getElementById("taskInput");
    taskIn.value = "GYM";

    const click = document.querySelector("#add");
    click.click();

    const pencil = document.querySelector("li div span:nth-child(3)");
    pencil.click();

    document.querySelector("li input").value = "hello";
    document.querySelector("li button").click();


    const expected = "✔hello";
    const result = document.querySelector("ol li").textContent;
    t.equal(expected, result, " the task was edited ");
    document.getElementById("myList").innerHTML = "";
})