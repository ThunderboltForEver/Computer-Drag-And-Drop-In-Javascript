let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let boxs = document.querySelectorAll(".box");
let drag = null;
btn.onclick = (e) => {
    if( inp.value != "" && inp.value != " " && (inp.value).startsWith(' ') === false) {
        boxs[0].innerHTML += `
        <p class="item" draggable="true">${inp.value} </p>
        `;
        inp.value = "";
    } else {
        e.preventDefault();
    }

    dragItem();
}
function dragItem() {
    let items = document.querySelectorAll(".item");

    items.forEach((item) => {
        item.addEventListener("dragstart",() => {
            drag = item;
            item.style.opacity = "0.5";
        })
        item.addEventListener("dragend",() => {
            drag = null;
            item.style.opacity = "1";
        })

    boxs.forEach( box => {
        box.addEventListener('dragover',function (e) {
            e.preventDefault();
            box.style.background = "rgb(122, 124, 12)";
            box.style.color = "white";  
        })

        box.addEventListener('dragleave',function () {
            box.style.background = "rgb(81, 152, 173)";
            box.style.color = "black";  
        })

        box.addEventListener("drop",() => {
            box.append(drag);
        })
    })

})
}