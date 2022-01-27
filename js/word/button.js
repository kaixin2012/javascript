class Button {
    id = "";
    className = "";

    onclick = function (event) {
        // 用户button.onclick事件代码
        down(event);
    }
}


<canvas id="canvas" width="400px" height="400" onclick="down(event);"></canvas>


let b = document.getElementById("");
b.onclick = function (e) {
    //....
}