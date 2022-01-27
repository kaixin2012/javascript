let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d");
let canvasRect = canvas.getBoundingClientRect();

ctx.translate(0.5, 0.5);

let size = 20;
let countDraw = 25;
let offsetX = 30;
let offsetY = 30;
let length = size * countDraw;

// Record all the pieces
let piceces = [];
let blorwh = false;
let isGameOver = false;

let mousePoint = { x: 0, y: 0 };
canvas.onmousemove = function (event) {

    mousePoint = { x: event.offsetX, y: event.offsetY };

}

canvas.onmouseup = function (event) {

    if (event.offsetX < offsetX ||
        event.offsetY < offsetY ||
        event.offsetX > offsetX + length ||
        event.offsetY > offsetY + length) {

        return;

    }

    if (isGameOver) {
        return;
    }

    let cloumnIndex = Math.round((event.offsetX - offsetX) / size);
    let x = cloumnIndex * size + offsetX;

    let rowIndex = Math.round((event.offsetY - offsetY) / size);
    let y = rowIndex * size + offsetY;

    let selectors = piceces.filter(p => { return p.x == x && p.y == y; });
    if (selectors.length > 0) {
        return;
    }

    blorwh = !blorwh;
    let picece = { x: x, y: y, row: rowIndex, cloumn: cloumnIndex, blorwh: blorwh };
    piceces.push(picece);

    isWiner(picece);

}

function isWiner(picece) {

    //One left and right direction, cloumn same row continuous.
    let count = 1;

    selectors = piceces.filter(p => { return p.blorwh == picece.blorwh && p.row == picece.row; })

    // Look left
    for (let i = 1; ; i++) {
        let hint = selectors.filter(p => { return p.cloumn == picece.cloumn - i }).length > 0;
        if (hint) {
            count++;
        } else {
            break;
        }
    }

    // Look right
    for (let i = 1; ; i++) {
        let hint = selectors.filter(p => { return p.cloumn == picece.cloumn + i }).length > 0;
        if (hint) {
            count++;
        } else {
            break;
        }
    } if (count >= 5) {
        showWiner(picece);
        return;
    }

    //Two up and down direction,cloumn same row continuous.

    count = 1;

    selectors = piceces.filter(p => { return p.blorwh == picece.blorwh && p.cloumn == picece.cloumn; })

    // Look up
    for (let i = 1; ; i++) {
        let hint = selectors.filter(p => { return p.row == picece.row - i }).length > 0;
        if (hint) {
            count++;
        } else {
            break;
        }
    }

    // Look down
    for (let i = 1; ; i++) {
        let hint = selectors.filter(p => { return p.row == picece.row + i }).length > 0;
        if (hint) {
            count++;
        } else {
            break;
        }
    } if (count >= 5) {
        showWiner(picece);
        return;
    }

    // three X direction

    count = 1;
    selectors = piceces.filter(p => { return p.blorwh == picece.blorwh; });

    // Look down to the right
    for (let i = 1; ; i++) {
        let hint = selectors.filter(p => { return p.row == picece.row + i && p.cloumn == picece.cloumn + i }).length > 0;
        if (hint) {
            count++;
        } else {
            break;
        }
    }

    // Look up to the left

    for (let i = 1; ; i++) {
        let hint = selectors.filter(p => { return p.row == picece.row - i && p.cloumn == picece.cloumn - i }).length > 0;
        if (hint) {
            count++;
        } else {
            break;
        }
    } if (count >= 5) {
        showWiner(picece);
        return;
    }

    count = 1;
    selectors = piceces.filter(p => { return p.blorwh == picece.blorwh; });

    // Look up to the right
    for (let i = 1; ; i++) {
        let hint = selectors.filter(p => { return p.row == picece.row + i && p.cloumn == picece.cloumn - i }).length > 0;
        if (hint) {
            count++;
        } else {
            break;
        }
    }

    // Look down to the left

    for (let i = 1; ; i++) {
        let hint = selectors.filter(p => { return p.row == picece.row - i && p.cloumn == picece.cloumn + i }).length > 0;
        if (hint) {
            count++;
        } else {
            break;
        }
    } if (count >= 5) {
        showWiner(picece);
        return;
    }
}

function showWiner(picece) {
    isGameOver = true;
    window.alert(picece.blorwh ? "black win" : "white win");
}

function drawChessPieces() {

    for (let picece of piceces) {

        ctx.fillStyle = picece.blorwh ? "black" : "white";
        ctx.strokeStyle = "black"
        ctx.beginPath();
        ctx.arc(picece.x, picece.y, size / 2.3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

    }
}

function draw() {

    ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);

    // Draw coordinates
    drawCordinates();

    // Draw reference lines
    drawReferenceLines();

    // Draw chess pieces
    drawChessPieces();
}

function drawReferenceLines() {

    ctx.strokeStyle = "red";
    ctx.beginPath();

    if (mousePoint.x > offsetX && mousePoint.y > offsetY && mousePoint.x < offsetX + length && mousePoint.y < offsetY + length) {
        ctx.moveTo(offsetX, mousePoint.y);
        ctx.lineTo(offsetX + length, mousePoint.y);

        ctx.moveTo(mousePoint.x, offsetY);
        ctx.lineTo(mousePoint.x, offsetY + length);
    }

    ctx.stroke();
    ctx.closePath();
}

function drawCordinates() {

    ctx.strokeStyle = "silver";
    ctx.beginPath();

    for (let i = 0; i <= countDraw; i++) {
        let start = { x: offsetX, y: offsetY + size * i };
        let end = { x: offsetX + length, y: offsetY + size * i };

        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
    }

    for (let i = 0; i <= countDraw; i++) {
        let start = { x: offsetX + size * i, y: offsetY };
        let end = { x: offsetX + size * i, y: offsetY + length };
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
    }
    ctx.stroke();
    ctx.closePath();
}

setInterval(draw, 1000 / 60);
