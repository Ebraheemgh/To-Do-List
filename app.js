var close = document.querySelectorAll("li .close:first-child");
var list = document.querySelectorAll("li .close:nth-child(2)");
var list1 = document.querySelectorAll("li");

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    li.textContent = inputValue;
    if (inputValue === '') {
        alert("You must write Your Task!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    var span2 = document.createElement("SPAN");
    var txt2 = document.createTextNode("✓");

    span.className = "close";
    span2.className = "close";

    span.appendChild(txt);
    span2.appendChild(txt2);
    li.appendChild(span);
    li.appendChild(span2);

    close = document.querySelectorAll(".close:first-child");
    list = document.querySelectorAll("li .close:nth-child(2)");

    list1 = document.querySelectorAll("li");
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function(e) {
            list1[i].classList.toggle('checked');
        });
    }


    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.remove();
        }
    }
}