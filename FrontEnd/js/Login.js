$(document).ready(function(){

        var done=0; 
        var usuario=document.login.usuario.value; 
        var password=document.login.password.value;

    function Login(){ 

        if (usuario=="USUARIO1" && password=="CONTRASEÑA1") { 
        window.location="TU_PAGINA_WEB.HTML"; 
        } 
        if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
        window.location="TU_PAGINA_WEB.HTML"; 
        } 
        if (usuario=="" && password=="") { 
        window.location="errorpopup.html"; 
        } 

        } 








})