document.querySelector("#tall").addEventListener("submit",function(event){

    var foot = document.querySelector("#foot").value;
    var result = document.querySelector("#result");

    
    event.preventDefault();
    result.setAttribute("class","alert alert-danger text-center mt-3");



    if(foot==""){

        result.innerHTML = "Please enter a number";
        document.querySelector("#foot").value = "";
        return;
    }else if(isNaN(foot)){
        result.innerHTML = "Not number";
        document.querySelector("#foot").value = "";
        return;
    }else if(foot==0){
        result.innerHTML = "Enter a number rather than 0";
        document.querySelector("#foot").value = "";
        return;
    }else if(foot<0){
        result.innerHTML = "Please enter a positive number";
        document.querySelector("#foot").value = "";
        return;
    }else{
        result.innerHTML = foot*30.48 + "-" + "cm";
        result.setAttribute("class","alert alert-success text-center mt-3");
        document.querySelector("#foot").value = "";
        return;
    }
})



document.querySelector("#tall22").addEventListener("submit",function(event){

    var foot22 = document.querySelector("#foot22").value;
    var result22 = document.querySelector("#result22");

    event.preventDefault();
    result22.setAttribute("class", "alert alert-danger text-center mt-3");

    if(foot22==""){
        result22.innerHTML =  "Please enter a number";
        document.querySelector("#foot22").value = "";
        return;
    }else if(isNaN(foot22)){

        result22.innerHTML = "Not a number";
        document.querySelector("#foot22").value = "";
        return;
    }else if(foot22==0){

        result22.innerHTML = "Enter a number rather than 0";
        document.querySelector("#foot22").value = "";
        return;

    }else if(foot22<0){

        result22.innerHTML = "Enter a positive number";
        document.querySelector("#foot22").value = "";
        return;
    }else{

        result22.innerHTML = foot22*0.032808  + "-" + "foot";
        result22.setAttribute("class","alert alert-success text-center mt-3");
        document.querySelector("#foot22").value = "";
        return;
    }
})