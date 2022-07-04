//DOM
const touches = [...document.querySelectorAll('.bouton')];          //Récup des données de chaque bouton dans un tab "touches"
const ecran = document.querySelector('.ecran');                     //Récup de la div écran

const listeKeycode = touches.map(touche => touche.dataset.key);     //Tab qui récup l'attribut du data-key (=keycode) des éléments du tab "touches"

//Evenements
document.addEventListener('keydown', (e) => {                       //Touche enfoncée du clavier numérique                            
    const valeur = e.keyCode.toString();                            //Récup du Keycode (en string)
    calculer(valeur)                                                //Exécuter fonction avec la valeur du Keycode en argument
})

document.addEventListener('click', (e) => {                         //Touche cliquée                      
    const valeur = e.target.dataset.key;                            //Récup du Keycode (attribut data-key)
    calculer(valeur)                                                //Exécuter fonction avec la valeur du Keycode en argument
})

//Fonction 
const calculer = (valeur) => {                                      //Basée sur l'argument "valeur" (=le Keycode)
    if (listeKeycode.includes(valeur)){                             //Si la valeur fait partie de la liste des Keycodes qu'on a définis (pour ne pas exe les autres touches)
        
        switch(valeur){                                             //Selon valeur du Keycode                              
            case '67':                                               //=Touche "C"                                 
                ecran.textContent = "";                             //Vider texte de l'écran
                break;
            case '13':                                              //=Touche "="                                        
                const calcul = eval(ecran.textContent);             //Eval (=calculer) tout le texte contenu dans l'écran
                ecran.textContent = calcul;                         //Afficher résultat du calcul
                break; 
            default:                                                //=Les autres touches
            const indexKeycode = listeKeycode.indexOf(valeur);      //Récup l'index de la valeur dans le tab "listeKeycode" (même ordre que le tab "touches")
            const touche = touches[indexKeycode];                   //Récup la touche qui se trouve à cet index dans le tab "touches"
            ecran.textContent += touche.innerHTML;                  //Ajouter l'affichage de la touche à l'écran (en passant par les données HTML)
        }
    }
}

//Evenemts d'erreur
window.addEventListener('error', (e) => {                              //e = les données de l'erreur           
    alert("Une erreur est survenue dans votre calcul: " + e.message);   //Affiche msg dans une fenêtre d'alerte avec le type d'erreur spécifé dans l'attribut "message"
})