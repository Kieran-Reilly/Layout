function leftAsideOpenTransition(){
    console.log("leftOpen");
    document.getElementById("leftAside").style.transition = "0.5s";
    document.getElementById("leftAside").style.transform = "translateX(0%)";
}

function rightAsideOpenTransition(){
    console.log("rightOpen");
    document.getElementById("rightAside").style.transition = "0.5s";
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

function resizelistener() {
    if(window.outerWidth > 768){
        document.getElementById("leftAside").style.transition = "0s";
        document.getElementById("rightAside").style.transition = "0s";
        document.getElementById("leftAside").style.transform = "translateX(0%)";
        document.getElementById("rightAside").style.transform = "translateX(0%)";
    }else{
        document.getElementById("leftAside").style.transition = "0s";
        document.getElementById("rightAside").style.transition = "0s";
        document.getElementById("leftAside").style.transform = "translateX(-99%)";
        document.getElementById("rightAside").style.transform = "translateX(99%)";
    }
}