/* Dollar */

document.querySelector("#getDollar").addEventListener("submit",function(event){

    var dollar =  document.querySelector("#dollar").value;
    var result = document.querySelector("#result");

    

    event.preventDefault();
    result.setAttribute("class","alert alert-danger text-center mt-3");

    if(dollar==""){
        result.innerHTML = "Please enter a number";
        document.querySelector("#dollar").value = "";
        return;
    }else if(isNaN(dollar)){
        result.innerHTML = "Not number";
        document.querySelector("#dollar").value = "";
        return;
    }else if(dollar==0){
        result.innerHTML = "Enter a number rather than 0";
        document.querySelector("#dollar").value = "";
        return;
    }else if(dollar<0){
        result.innerHTML = "Enter a positive number";
        document.querySelector("#dollar").value = "";
        return;
    }else{
        result.innerHTML = dollar*50.60 + "-" + "L.E";
        result.setAttribute("class","alert alert-success text-center mt-3");
        document.querySelector("#dollar").value = "";
        return;
    }


});

document.querySelector(".remove").addEventListener("click",function(){

    result.innerHTML = "";
    result.setAttribute("class","text-center mt-3");
});

/* Dollar */






// Euro//

document.querySelector("#getEuro").addEventListener("submit",function(event){

    var euro = document.querySelector("#euro").value;
    var final = document.querySelector("#final");

    event.preventDefault();
    final.setAttribute("class","alert alert-danger text-center mt-3");

    if(euro==""){
        final.innerHTML = "Please enter a number";
        document.querySelector("#euro").value = "";
        return;
    }else if(isNaN(euro)){
        final.innerHTML = "Not number";
        document.querySelector("#euro").value = "";
        return;
    }else if(euro==0){
        final.innerHTML = "Enter a number rather than 0";
        document.querySelector("#euro").value = "";
        return;
        
    }else if(euro<0){
        final.innerHTML = "Enter a positive number";
        document.querySelector("#euro").value = "";
        return;
    }else{
        final.innerHTML = euro*55.23 + "-" + "L.E";
        final.setAttribute("class","alert alert-success text-center mt-3");
        document.querySelector("#euro").value = "";
        return;
    }
});

var deletee = document.querySelector(".delete").addEventListener("click",function(){

    final.innerHTML = "";
    final.setAttribute("class","text-center mt-3");

})

// Euro//





// Stirling//

document.querySelector("#getStirling").addEventListener("submit",function(event){

    var stirling = document.querySelector("#stirling").value;
    var finish = document.querySelector("#finish");

    event.preventDefault();
    finish.setAttribute("class","alert alert-danger text-center mt-3");

    if(stirling==""){
        finish.innerHTML = "Please enter a number";
        document.querySelector("#stirling").value = "";
        return;
    }else if(isNaN(stirling)){
        finish.innerHTML = "Not a number";
        document.querySelector("#stirling").value = "";
        return;
    }else if(stirling==0){
        finish.innerHTML = "Enter a number rather than 0";
        document.querySelector("#stirling").value = "";
        return;
    }else if(stirling<0){
        finish.innerHTML = "Enter a positive number";
        document.querySelector("#stirling").value = "";
        return;
    }else{
        finish.innerHTML = stirling*65.55 + "-" + "L.E";
        document.querySelector("#stirling").value = "";
        finish.setAttribute("class","alert alert-success text-center mt-3");
        return;
    }

});

document.querySelector(".deletee").addEventListener("click",function(){

    finish.innerHTML = "";
    finish.setAttribute("class","text-center mt-3");
});

// Stirling//





// Yuan//

document.querySelector("#getYuan").addEventListener("submit",function(event){

    var Yuan = document.querySelector("#Yuan").value;
    var end = document.querySelector("#end");

    event.preventDefault();
    end.setAttribute("class","alert alert-danger text-center mt-3");

    if(Yuan==""){
        end.innerHTML = "Enter a number";
        document.querySelector("#Yuan").value = "";
        return;
    }else if(isNaN(Yuan)){
        end.innerHTML = "Not a number";
        document.querySelector("#Yuan").value = "";
        return;
    }else if(Yuan==0){
        end.innerHTML = "Enter a number rather than 0";
        document.querySelector("#Yuan").value = "";
        return;
    }else if(Yuan<0){
        end.innerHTML = "Enter a positive number";
        document.querySelector("#Yuan").value = "";
        return;
    }else{
        end.innerHTML = Yuan*6.97 + "-" + "L.E";
        end.setAttribute("class","alert alert-success text-center mt-3");
        document.querySelector("#Yuan").value = "";
        return;
    }

});

document.querySelector(".deleteee").addEventListener("click",function(){

    end.innerHTML = "";
    end.setAttribute("class","text-center mt-3");
});


// Yuan//
