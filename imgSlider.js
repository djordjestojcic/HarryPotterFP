var index=1;

showSlajd(index);

function plusSlajd(x){
    showSlajd(index += x);
}

function currentSlajd(x){
    showSlajd(index = x);
}

function showSlajd(x){
    var i;
    var slides=document.getElementsByClassName("slajd");
    var pics=document.getElementsByClassName("demo");
    
    if(x>slides.length){index=1}
    if(x<1){index=slides.length}
    for(i=0;i<slides.length;i++){
        slides[i].style.display=" none";
    }
    for(i=0;i<pics.length;i++){
        pics[i].className = pics[i].className.replace("active1","");
    }
    slides[index-1].style.display = " block";
    pics[index-1].className += " active1";
    console.log(slides[1]);
    console.log(slides[0]);
}

