document.querySelectorAll(".mod").forEach(function(element){
    element.onclick = function(){
        document.querySelector("#demo").style.color = element.dataset.colorrr;
        document.querySelector("#demo").style.textAlign = element.dataset.align;
    }
})