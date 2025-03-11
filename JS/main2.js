document.querySelector("#getDollar").addEventListener("submit",function(event){
    var dollar = document.querySelector("#dollar").value;
    var result = document.querySelector("#result");

    event.preventDefault();
    result.setAttribute("class", "alert alert-success text-center");


    if(dollar==""){
        result.textContent= "Enter a number in form";
        result.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#dollar").value = "";
        return;

    }else if(isNaN(dollar)){
        result.textContent = "Not Number";
        result.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#dollar").value = "";
        return;
    }else if(dollar==0){
        result.textContent = "Enter a number rather than 0";
        result.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#dollar").value = "";
        return;
    }else if(dollar<0){
        result.textContent = "Enter a positive number";
        result.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#dollar").value = "";
        return;
    }else{
        result.textContent = dollar*3.57 + "Shekel";
        document.querySelector("#dollar").value = "";
        return;
        
        
    }

    

})





document.querySelector("#getAustralian").addEventListener("submit", function(event){
    var australia = document.querySelector("#Australia").value;
    var final = document.querySelector("#final");

    event.preventDefault();
    final.setAttribute("class", "alert alert-success text-center");

    if(australia==""){
        final.textContent = "Enter a number";
        final.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#Australia").value = "";
        return;

    }else if(isNaN(australia)){
        final.textContent = "Not a number";
        final.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#Australia").value = "";
        return;
    }else if(australia==0){
        final.textContent = "Enter a number rather than 0";
        final.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#Australia").value = "";
        return;
    }else if(australia<0){
        final.textContent = "Enter a positive number";
        final.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#Australia").value = "";
        return;
    }else{
        final.textContent = australia*2.27 + "-" + "Shekel";
        document.querySelector("#Australia").value = "";
        return;
    
    }
})





document.querySelector("#getCanada").addEventListener("submit", function(event){
    var canada = document.querySelector("#canada").value;
    var gooo = document.querySelector("#gooo");

    event.preventDefault();
    gooo.setAttribute("class", "alert alert-success text-center");

    if(canada==""){
        gooo.textContent = "Enter a Number";
        gooo.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#canada").value = "";
        return;
    }else if(isNaN(canada)){
        gooo.textContent = "Not a number";
        gooo.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#canada").value = "";
        return;
    }else if(canada==0){
        gooo.textContent = "Enter a number rather than 0";
        gooo.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#canada").value = "";
        return;
    }else if(canada<0){
        gooo.textContent = "Enter a positive number";
        gooo.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#canada").value = "";
        return;
    }else{
        gooo.textContent = canada*2.51 + "-" + "Shekel";
        document.querySelector("#canada").value = "";
        return;
    }
      
      
})




document.querySelector("#getRussia").addEventListener("submit", function(event){
    var russia = document.querySelector("#russia").value;
    var finish = document.querySelector("#finish");

    event.preventDefault();
    finish.setAttribute("class", "alert alert-success text-center");

    if(russia==""){
        finish.textContent = "Enter a number";
        finish.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#russia").value = "";
        return;
        
    }else if(isNaN(russia)){
        finish.textContent = "Not a Number";
        finish.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#russia").value = "";
        return;
    }else if(russia==0){
        finish.textContent = "Enter a number rather than 0";
        finish.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#russia").value = "";
        return;
    }else if(russia<0){
        finish.textContent = "Enter a positive number";
        finish.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#russia").value = "";
        return;
    }else{

        finish.textContent = russia*0.040 + "-" + "Shekel";
        document.querySelector("#russia").value = "";
        return;
    }
})




document.querySelector("#getChina").addEventListener("submit", function(event){
    var china = document.querySelector("#china").value;
    var end = document.querySelector("#end");

    event.preventDefault();

    end.setAttribute("class", "alert alert-success text-center");

    if(china==""){
        end.textContent = "Enter a number";
        end.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#china").value = "";
        return;
    }else if(isNaN(china)){
        end.textContent = "Not a number";
        end.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#china").value = "";
        return;
    }else if(china==0){
        end.textContent = "Enter a number rather than 0";
        end.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#china").value = "";
        return;
    }else if(china<0){
        end.textContent = "Enter a positive number";
        end.setAttribute("class", "alert alert-danger text-center");
        document.querySelector("#china").value = "";
        return;
    }else{
        end.textContent = china*0.49 + "-" + "Shekel";
        document.querySelector("#china").value = "";
        return;
    }
})




document.querySelector("#getEuro").addEventListener("submit", function(event){

    var euro = document.querySelector("#euro").value;
    var result22 = document.querySelector("#result22");

    event.preventDefault();
    result22.setAttribute("class", "alert alert-success text-center");

   if(euro==""){
    result22.textContent = "Enter a number";
    result22.setAttribute("class", "alert alert-danger text-center");
    document.querySelector("#euro").value = "";
    return;
   }else if(isNaN(euro)){
    result22.textContent = "Not a number";
    result22.setAttribute("class", "alert alert-danger text-center");
    document.querySelector("#euro").value = "";
    return;
   }else if(euro==0){
    result22.textContent = "Enter a number rather than 0";
    result22.setAttribute("class", "alert alert-danger text-center");
    document.querySelector("#euro").value = "";
    return;
   }else if(euro<0){
    result22.textContent = "Enter a positive number";
    result22.setAttribute("class", "alert alert-danger text-center");
    document.querySelector("#euro").value = "";
    return;
   }else{
    result22.textContent = euro*3.73 + "-" + "Shekel";
    document.querySelector("#euro").value = "";
    return;
   }

})


document.querySelector("#getStirling").addEventListener("submit", function(event){
    var stirling = document.querySelector("#stirling").value;
    var final22 = document.querySelector("#final22");

    event.preventDefault();
    final22.setAttribute("class","alert alert-success text-center");

    if(stirling==""){
        final22.textContent = "Enter number in form";
        final22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#stirling").value = "";
        return;
    }else if(isNaN(stirling)){
        final22.textContent = "Not a number";
        final22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#stirling").value = "";
        return;
    }else if(stirling==0){
        final22.textContent = "Enter a number rather than 0";
        final22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#stirling").value = "";
        return;
    }else if(stirling<0){
        final22.textContent = "Enter a positive number";
        final22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#stirling").value = "";
        return;
    }else{
        final22.textContent = stirling*4.50 + "-" + "Shekel";
        document.querySelector("#stirling").value = "";
        return;
    }
})


document.querySelector("#getSaudi").addEventListener("submit",function(event){

    var saudi = document.querySelector("#riyal").value;
    var finish22 = document.querySelector("#finish22");

    event.preventDefault();
    finish22.setAttribute("class","alert alert-success text-center");

    if(saudi==""){
        finish22.textContent = "Enter number in form";
        finish22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#riyal").value = "";
        return;

    }else if(isNaN(saudi)){
        finish22.textContent = "Not a number";
        finish22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#riyal").value = "";
        return;
    }else if(saudi==0){
        finish22.textContent = "Enter a number rather than 0";
        finish22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#riyal").value = "";
        return;
    }else if(saudi<0){
        finish22.textContent = "Enter a positive number";
        finish22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#riyal").value = "";
        return;
    }else{
        finish22.textContent = saudi*0.95 + "-" + "Shekel";
        document.querySelector("#riyal").value = "";
        return;
    }
})






document.querySelector("#getdinar").addEventListener("submit",function(event){

    var dinar = document.querySelector("#dinar").value;
    var end22 = document.querySelector("#end22");

    event.preventDefault();
    end22.setAttribute("class","alert alert-success text-center");

    if(dinar==""){
        end22.textContent = "Enter number in form";
        end22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#dinar").value = "";
        return;

    }else if(isNaN(dinar)){
        end22.textContent = "Not a number";
        end22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#dinar").value = "";
        return;
    }else if(dinar==0){
        end22.textContent = "Enter a number rather than 0";
        end22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#dinar").value = "";
        return;
    }else if(dinar<0){
        end22.textContent = "Enter a positive number";
        end22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#dinar").value = "";
        return;
    }else{
        end22.textContent = dinar*11.55 + "-" + "Shekel";
        document.querySelector("#dinar").value = "";
        return;
    }
})


document.querySelector("#getDir").addEventListener("submit",function(event){

    var dir = document.querySelector("#dir").value;
    var gooo22 = document.querySelector("#gooo22");

    event.preventDefault();
    gooo22.setAttribute("class","alert alert-success text-center");

    if(dir==""){
        gooo22.textContent = "Enter a number in form";
        gooo22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#dir").value = "";
        return

    }else if(isNaN(dir)){
        gooo22.textContent = "Not a number";
        gooo22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#dir").value = "";
        return

    }else if(dir==0){
        gooo22.textContent = "Enter a number rather than 0";
        gooo22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#dir").value = "";
        return

    }else if(dir<0){
        gooo22.textContent = "Enter a positive number";
        gooo22.setAttribute("class","alert alert-danger text-center");
        document.querySelector("#dir").value = "";
        return

    }else{
        gooo22.textContent = dir*0.97 + "-" + "Shekel";
        document.querySelector("#dir").value = "";
        return
    }
})