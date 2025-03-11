document.querySelector("#aaa").addEventListener("click", function() {
    document.querySelector("#text-aaa").textContent = "Wrong answer";
    document.querySelector("#text-aaa").setAttribute("class","alert alert-danger text-center w-50 m-auto")
    document.querySelector("#text-bbb").textContent = ""; 
    document.querySelector("#text-ccc").textContent = ""; 
    document.querySelector("#text-ddd").textContent = "";
});

document.querySelector("#bbb").addEventListener("click", function() {
    document.querySelector("#text-bbb").textContent = "Wrong answer";
    document.querySelector("#text-bbb").setAttribute("class","alert alert-danger text-center w-50 m-auto")
    document.querySelector("#text-aaa").textContent = "";  
    document.querySelector("#text-ccc").textContent = ""; 
    document.querySelector("#text-ddd").textContent = "";
    
});

document.querySelector("#ccc").addEventListener("click",function(){
    document.querySelector("#text-ccc").textContent = "Correct answar";
    document.querySelector("#text-ccc").setAttribute("class","alert alert-success text-center w-50 m-auto")
    document.querySelector("#text-aaa").textContent = "";
    document.querySelector("#text-bbb").textContent = "";
    document.querySelector("#text-ddd").textContent = "";
})

document.querySelector("#ddd").addEventListener("click",function(){
    document.querySelector("#text-ddd").textContent = "wrong answar";
    document.querySelector("#text-ddd").setAttribute("class","alert alert-danger text-center w-50 m-auto")
    document.querySelector("#text-aaa").textContent = "";
    document.querySelector("#text-bbb").textContent = "";
    document.querySelector("#text-ccc").textContent = "";
})