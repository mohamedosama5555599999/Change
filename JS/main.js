document.querySelector("#getMessage").addEventListener("submit",function(event){

    var message = document.querySelector("#text").value;
    var result = document.querySelector("#result");

    event.preventDefault();
    result.setAttribute("class","alert alert-danger text-center mt-3");

   if(message==""){
    result.innerHTML = "Enter words in form";
    return;
}else if(message.length>150){

    result.innerHTML = "Enter character less than 150";
    return;
} else if (message.includes("fuck") || message.includes("shet")) {

    result.innerHTML = "don't send bad words";
    document.querySelector("#text").value = "";
    return;

}else{

    result.innerHTML = "Thank you for your message";
    result.setAttribute("class","alert alert-success text-center mt-3");
    document.querySelector("#text").value = "";



}



});

document.querySelector(".delete").addEventListener("click",function(){

    document.querySelector("#text").value = "";
   result.innerHTML = "";
   result.setAttribute("class","text-center mt-3");
    
});












