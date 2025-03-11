function chealseFc(){
    var fname = document.getElementById("first").value;
    var lname = document.getElementById("last").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    var result = document.getElementById("result");

    result.setAttribute("class" , "alert alert-danger text-center");

    if(fname=="" && lname=="" && email=="" && password=="" && confirm==""){
        result.innerHTML = "Enter data in form";
        return false;
    }else if(fname.length<5 || fname.length>15){
        result.innerHTML = "Enter 5-15 character";
        return false;
    }else if(lname.length<5 || lname.length>15){
        result.innerHTML = "Enter 5-15 character";
        return false;
    }else if(email.indexOf("@",3)==-1 || email.indexOf(".com")==-1){
        result.innerHTML = "Enter valid email";
        return false;
    }else if(password.length<5){
        result.innerHTML = "Weak password";
        return false;
    }else if(password != confirm){
        result.innerHTML = "Matched password";
        return false;
    }
        
    
    

}
