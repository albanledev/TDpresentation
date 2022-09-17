function darkmode(){
    darkmode_general(".page-project");
    darkmode_general(".personality-block");
    darkmode_general(".likings-block");
    darkmode_general(".project-block");   
}
function darkmode_general(classNameElement){//ici le parametre permet de passer une donnée, une info à la fonction qui peut etre nommée de n'importe quelle façon
    let element = document.querySelector(classNameElement);//ne pas oublier; lorsque l'on utilise un query selector afin de récuperer quelque chose il faut mettre: # pour un id, . pour une class
    if (element.classList.contains("dark-mode")==false){//la fonction contains retourne la valeur false si la classe mise en parametre se trouve dans la liste de class de l'élément 
        element.classList.add("dark-mode");
    }
    else {
        element.classList.remove("dark-mode");
    }
    
}
