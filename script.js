let res = document.getElementsByClassName("resultbox")[0];
let err = document.getElementById("msg");

function print(n) {
    
    if(n=="cl" || (n==0 && res.innerText.length == 0)) {
        res.innerText = '';
        checkLength();
    }
    
    else if(n=="del") {
        res.innerText = res.innerText.substring(0,res.innerText.length-1);
        checkLength();
    }

    else {
        if(checkLength()) {res.innerText += n;}
        else return;
    }
}

function eq() {
    let r = res.innerText;
    if(r.length > 0) {
        r = r.replace('x','*');
        r = r.replace('÷','/');
        r = eval(r);
        res.innerText = r.toString().substring(0,10);
    }
    else {
        res.innerText = r
    }
}

function checkLength() {
    if(res.innerText.length === 10) {
        err.style.visibility = "visible";
        return false;
    }
    else {
        err.style.visibility = "hidden";
        return true;
    }
}