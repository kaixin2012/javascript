selectors = piceces.filter(p => { return p.blorwh == picece.blorwh; })

isNext1 = selectors.filter(p => { return p.row == (picece.row + 1) && p.cloumn == (picece.cloumn + 1) }).length;
isNext2 = selectors.filter(p => { return p.row == (picece.row + 2) && p.cloumn == (picece.cloumn + 2) }).length;
isNext3 = selectors.filter(p => { return p.row == (picece.row + 3) && p.cloumn == (picece.cloumn + 3) }).length;
isNext4 = selectors.filter(p => { return p.row == (picece.row + 4) && p.cloumn == (picece.cloumn + 4) }).length;

if (isNext1 && isNext2 && isNext3 && isNext4) {
    if (picece.blorwh) {
        window.alert("black win");
    } else {
        window.alert("white win");
    }
}