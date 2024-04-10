function goto(id){
    window.scrollTo(0,scrollY+document.querySelector("#"+id).getBoundingClientRect().top-200);
}


window.scrollTo(0, 0);

document.getElementById("gotoproj").addEventListener("click",(e)=>{
    goto("proj");

})





document.querySelector(".education").scrollTop=28.79;
;

$(".ed").css('opacity', 1- $("education").scrollTop()/90);
