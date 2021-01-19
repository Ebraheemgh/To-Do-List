test("Writing a task", t => {
    const input = document.getElementById("myInput");
    input.value = "GYM";
    const button = document.getElementById("addButton");
    button.click();
    const expected = 1;
    const result = document.querySelectorAll("li").length;
    t.equal(expected, result);
    document.querySelector("ul").innerHTML = "";
});

test("Writing a task with correct input", t => {
    const input = document.getElementById("myInput");
    input.value = "eat";
    const button = document.getElementById("addButton");
    button.click();
    const expected = "eat×✓";
    const result = document.querySelector("ul li:first-child").textContent;
    console.log(result);
    t.equal(expected, result);
    document.querySelector("ul").innerHTML = "";
});

// test("Writing a task with empty input", t => {
//     const input = document.getElementById("myInput");
//     input.value = "";
//     const button = document.getElementById("addButton");
//     button.click();
//     const expected = 0;
//     const result = document.querySelectorAll("li").length;
//     t.equal(expected, result);
//     document.querySelector("ul").innerHTML = "";
// });

test("check the task true", t => {
    const input = document.getElementById("myInput");
    input.value = "GYM";
    const button = document.getElementById("addButton");
    button.click();
    const trueB = document.querySelector("ul li:first-child span:nth-child(2)");
    trueB.click();
    const expected = "checked";
    const li = document.querySelector("ul li:first-child");
    const result = li.className;
    t.equal(result, expected);
    document.querySelector("ul").innerHTML = "";
});

test("uncheck the task true", t => {
    const input = document.getElementById("myInput");
    input.value = "GYM";
    const button = document.getElementById("addButton");
    button.click();
    const trueB = document.querySelector("ul li:first-child span:nth-child(2)");
    trueB.click();
    trueB.click();
    const expected = "";
    const li = document.querySelector("ul li:first-child");
    const result = li.className;
    t.equal(result, expected);
    document.querySelector("ul").innerHTML = "";
});

test("remove a task", t => {
    const input = document.getElementById("myInput");
    input.value = "GYM";
    const button = document.getElementById("addButton");
    button.click();
    const remove = document.querySelector("ul li:first-child span:nth-child(1)");
    remove.click();
    const expected = 0;
    const result = document.querySelectorAll("li").length;
    t.equal(expected, result);
    document.querySelector("ul").innerHTML = "";

});