// *********** ------- Initialisation --------

let idValider="";  
let idClear="";
let monClic ="";

// selection DOM du parent (div)
let x =""

// Initialisation maListeDesTaches
let maListeDesTaches=[]

// compteur pour déterminer quelle position dans le Json à importer et l'objet à commencer ou continuer 
let compteur=0; 

// ***
function iOsCookie() {


        // *********** Check du localStorage
        // Si existe :

        if(localStorage.donnesSauvegardees != null){

            // si il y a mon storage donnesSauvegardees dans le cache
            // let DonnesDuCacheStorage = localStorage.getItem("donnesSauvegardees") // équivalent
            // iOs
                    const DonnesDuCacheStorage = localStorage.donnesSauvegardees;
                    console.log("Cookie existant !");
                  
        // *********** Création du tableau à partir du cookies
        // *********** Réinitialisation des keys 0,1,2 ... (lisibilité & continuité ajout)

                    function creationTableau(){

                        // class du picto valider
                        let monPictoClassTrue = "";

                        // Class fond valider
                        tacheClassTrue="cssTache";

                        // Initialisation de key de départ : 0
                        // let maKey = 0;

                            // Mise en variable et conversion Json en Objet Js
                            let resultat = JSON.parse(DonnesDuCacheStorage);


                            // maj IOS **************************
                            


                            // fin IOS **************************

                            // Longueur de l'array
                            // console.log(resultat.length + " longueur de array");

                            // Loop sur le tableau
                                for (let i=0; i< resultat.length; i++) {

                            maTacheAInserer =  resultat[i].tache;
                            // console.log(maTacheAInserer + " A insérer")


        // ***********  Création des DIV *****************

                                        // cible
                                        let PointageCible=document.getElementById("monContainer");

                                        // Création DIV
                                        let divMaTache= document.createElement("div");

                                        // ajout id + maKey (ex:tache 0, tache 1...))
                                        divMaTache.setAttribute("id", "tache"+ i);
                                        
                                        // ajout title (Sert de vérification au survol)
                                        // divMaTache.setAttribute("title","tache " + i);

                                        // ajout de class pour le design css
                                        divMaTache.setAttribute("class","cssTache");

                                                    // Si tache validée
                                                    if (resultat[i].etat==true) {
                                                        
                                                        monPictoClassTrue = "far fa-check-circle";
                                                        divMaTache.setAttribute("class","cssTache valide");
                                                    } 

                                                    else {

                                                        monPictoClassTrue = "far fa-calendar";
                                                        divMaTache.setAttribute("class","cssTache");
                                                    }


        // ***********  div HTML : texte / A valider / A effacer
        
                                        divMaTache.innerHTML=
                                            `                       
                                            <div class="monTexte">${maTacheAInserer}</div>
                                                <div class="valider" id="${'e'+i}" onClick="return retourDeMonClic(this.id)"><a href="#"><i id="ico${i}" class="${monPictoClassTrue}"></i></a></div>
                                                <div class="effacer" id="${'c'+i}" onClick="return retourDeMonClic(this.id)"><a href="#"><i class="far fa-calendar-times"></i></a></div> 
                                            `;
                        
                                        // Attacher l'ensemble des div à mon conteneur ciblé
                                        PointageCible.appendChild(divMaTache);
                                        document.body.appendChild(PointageCible);


        // ***********  Mise à jour et réinitialisation les key values de maListeDesTaches
                                    
                                        // Ajout de chaque donnée par loop
                                        y = {id: i, tache:resultat[i].tache, etat:resultat[i].etat}
                                        maListeDesTaches.push(y)

                                    } // fin boucle for


        // *********** Storage à sauver (mis à jour)

                localStorage.setItem("donnesSauvegardees", JSON.stringify(maListeDesTaches));

                    }
                    // Appel fonction
                    creationTableau()
        } 



                    else {
                        console.log("Cookie non existant !");
                    } // Fin de condition if et else


// fin iOsCookie ****
} 


// *********** Fonction Storage SET met dans cookie donnesSauvegardees la liste maListeDesTaches

            function exportListe(){
                    localStorage.setItem("donnesSauvegardees", JSON.stringify(maListeDesTaches));
                      }

// ***********  ENTER touche clavier
let inputC = document.getElementById("todo"); // selection de l'input texte

        inputC.addEventListener('keyup', function (event) {
            if (event.defaultPrevented) {
                return;
            }
        
            // keyCode déprécié ajout de event.key
            let key = event.key || event.keyCode;
        
                if (key === 'Enter' || key === 13) {  
                    // actionne le bouton
                    document.getElementById("myBtn").click();
                }
        })

// *********** Fonction identification du clic donc de l'id

        function retourDeMonClic(idClique)
        {
                
            // console.log(idClique)+" = clic";
                // ex: e1, c1 ...

                // Affiche et garde la première lettre (position 0)
                let premiereLettreDeId = idClique.charAt(0); // ex: e


// *********** Objectif retirer la première lettre pour avoir le numéro de l'id           
             
                // Remplacer c ou e par rien
                let numeroId = idClique.replace(premiereLettreDeId, "");


            // On / off 
            // (si = e + int et première lettre égal à e)

                    if(idClique== (premiereLettreDeId + numeroId) && (premiereLettreDeId == "e")){

                        x = document.getElementById(idClique).parentNode.nodeName;
                        // console.log(x +" lien parent") // DIV

                        let PointageCibleOn=document.getElementById("tache"+numeroId);
                        // console.log(numeroId + " : id cliqué !");

                        let cibleIcon=document.getElementById("ico"+numeroId);

                            // Ajout du fond vert "tache"+numeroId
                            PointageCibleOn.style.backgroundColor="rgba(232, 255, 117, 1)";


                        // ajout de class pour le design css

                            cibleIcon.setAttribute("class","far fa-check-circle");

// *********** Chercher le key de maListeDesTaches qui contient comme id: x le id cliqué          
                        
                                for (let a = 0; a < maListeDesTaches.length; a++) {
                                const element = maListeDesTaches[a];
                                // console.log(element);

// *********** Etat à true (pour mémoriser la couleur et ico validé)

                                if (maListeDesTaches[a].id==numeroId) {
                                    // alert("L'array "+a+" à la valeur"+maListeDesTaches[a].tache);
                                    maListeDesTaches[a].etat=true;
                                    console.log(maListeDesTaches)

                                    // ****** storage à sauver (mis à jour)
                                    localStorage.setItem("donnesSauvegardees", JSON.stringify(maListeDesTaches));

                                    // break fonctionne également
                                    return;
                                }
                            }

                    }

// *********** Supprimer le Div cliqué

            if(idClique== (premiereLettreDeId + numeroId) && (premiereLettreDeId == "c")){

                        function supprimerDiv() {
                        
                            // pointer le div tache et son numéro
                            let myobj = document.getElementById("tache"+numeroId);
                            console.log(numeroId + " Numéro Id cliqué")

                            // supprime la cible
                            myobj.remove();


// *********** supprimer la clef de id cliqué de l'objet  ******************************************************************************
                    
                                // Supprimer de mon tableau id correspondant 1 = le nombre entrée(s) à supprimer
                                maListeDesTaches.splice(numeroId, 1);

                                // ****** storage à sauver (mis à jour)
                                localStorage.setItem("donnesSauvegardees", JSON.stringify(maListeDesTaches));
                            }

                            // Appel fonction
                            supprimerDiv();


                    } // fin condition if
        } // fin retourDeMonClic


// *********** Ajout de tâche(s)

        function fonctionValeurInput()
        {

            // importer et convertir Json Cookies
            // console.log(maListeDesTaches);

            let input = document.getElementById("todo").value;

                // Si le post est différent de vide
                if(input !==""){


                // Longeur de mon Objet maListeDesTaches permet de continuer l'incrémentation du cookie
                let maLongueur = Object.keys(maListeDesTaches).length;


                            if(compteur==-1){
                            compteur=0;
                            }
                            else {
                                // continue à l'id suivant de mon cookie
                                compteur=maLongueur;
                            }

                      
                    // Valeur de ma tache (texte  dynamique)
                    let monTexteTache = input;

                    // Mettre première lettre en Majuscule      
                    monTexteTacheCapital = monTexteTache[0].toUpperCase() + monTexteTache.substring(1);

                    let key = compteur; // 0 ou key de départ de mon cookie

                    let monObjetaPousser = {id: key, tache:monTexteTacheCapital, etat:false}
                    // console.log(monObjetaPousser)

                    // Ajout à maListeDesTaches le nouvel objet
                    maListeDesTaches.push(monObjetaPousser)

                    let monNum=compteur;

                    // cible
                    let PointageCible=document.getElementById("monContainer");

                        // Création DIV
                        let divMaTache= document.createElement("div");

                        // ajout id + incrementation (e1,e2 ...)
                        divMaTache.setAttribute("id","tache" + compteur);
                    
                        // ajout de class pour le design css
                        divMaTache.setAttribute("class","cssTache");
               
                        // div HTML : texte / A valider / A effacer
                        divMaTache.innerHTML=
                            `                       
                                <div class="monTexte">${monTexteTacheCapital}</div>
                                <div class="valider"  id="${'e'+compteur}" onClick="return retourDeMonClic(this.id)"><a href="#"><i id="ico${compteur}" class="far fa-calendar"></i></a></div>
                                <div class="effacer"  id="${'c'+compteur}" onClick="return retourDeMonClic(this.id)"><a href="#"><i class="far fa-calendar-times"></i></a></div>
                            `;

                        // Attacher l'ensemble des div à mon conteneur ciblé
                        PointageCible.appendChild(divMaTache);
                        document.body.appendChild(PointageCible);

                        // Incrémenter
                        compteur=compteur+1; // OK 0, 1, 2
                }

// *********** réinitialiser value de l'input (après poste)
                    
                    function annulerInput() 
                            {
                                let monObjet=document.getElementById("todo");
                                
                                // vider l'input après validation
                                monObjet.value="";

                                // repointer le cursor dans l'input
                                monObjet=document.getElementById("todo").focus();
                            }
                            annulerInput()

// ***********  localStorage à sauver (input)
                    exportListe()               
            }


// *********** effacer localStorage via un lien

        function reset(){
        localStorage.clear();

        // Recharger la page
        location.reload();
            }