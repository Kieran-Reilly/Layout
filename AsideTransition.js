function leftAsideOpenTransition(){
    console.log("leftOpen");
    document.getElementById("leftAside").style.transform = "translateX(0%)";
}

function rightAsideOpenTransition(){
    console.log("rightOpen");
    document.getElementById("rightAside").style.transform = "translateX(0%)";
}

function leftAsideCloseTransition(){
    console.log("leftClose");
    document.getElementById("leftAside").style.transform = "translateX(-99%)";
}

function rightAsideCloseTransition(){
    console.log("RightClose");
    document.getElementById("rightAside").style.transform = "translateX(99%)";
}