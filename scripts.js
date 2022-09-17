function darkmode(){
    darkmode_general(".page-ryan");
    darkmode_general(".personality-block");
    darkmode_general(".likings-block");
    darkmode_general(".project-block");
    darkmode_general(".text-italic");
}

function darkmode_general(classNameElement){//ici le parametre permet de passer une donnée, une info à la fonction qui peut etre nommée de n'importe quelle façon
    let elements = document.querySelectorAll(classNameElement);//ne pas oublier; lorsque l'on utilise un query selector afin de récuperer quelque chose il faut mettre: # pour un id, . pour une class
    for(let i=0; i<elements.length; i++){
         if (elements[i].classList.contains("dark-mode")==false){//la fonction contains retourne la valeur false si la classe mise en parametre se trouve dans la liste de class de l'élément 
            elements[i].classList.add("dark-mode");
            localStorage.setItem("darkmode", "yes")//j'enregistre dans le localStorage le fait d'etre dans le mode dark
        }
        else {
            elements[i].classList.remove("dark-mode");
            localStorage.setItem("darkmode", "no")//j'enregistre dans le localStorage le fait de ne pas etre dans le mode dark
        } 
    }   
}

function load_page(){
    let var_darkmode = localStorage.getItem("darkmode");//lecture de la valeur de la clé darkmode dans le local storage
    if (var_darkmode=="yes"){
        darkmode();
    }
}