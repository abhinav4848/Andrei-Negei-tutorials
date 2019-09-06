/** Add New items to the list */
var enterButton = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

enterButton.addEventListener("click", function () {
    if (input.value.length > 0) {
        newListAdd();
    }
})

input.addEventListener("keypress", function (event) {
    if (input.value.length > 0 && event.which === 13) {
        newListAdd();
    }
})

function newListAdd() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML = li.innerHTML + " ";

    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.classList.add("delete");
    btn.onclick = removeParent;
    li.appendChild(btn);

    ul.appendChild(li);
    input.value = "";
}

/** Add event listener to all delete btns in the html file*/
var deleteBtns = document.getElementsByClassName("delete");

for (var i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", removeParent, false);
}

function removeParent(evt) {
    evt.target.removeEventListener("click", removeParent, false);
    evt.target.parentNode.remove();
}

/** Add Strikethrough feature */
ul.onclick = function (event) {
    event.target.classList.toggle("done");
}