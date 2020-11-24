
let maListeDesTaches = {}; // objet vide


// Storage SET
function exportListe(){

            
            console.log(maListeDesTaches)
                // localStorage.setItem("message","coucou");
                localStorage.setItem("maListeDesTaches", JSON.stringify(maListeDesTaches));
                

                // let monMessage = localStorage.getItem("message");
                let jsonString = localStorage.getItem("maListeDesTaches");
}

// ----------------

        let idValider="";  
        let idClear="";
        let compteurDeTache=1;
        let monClic ="";
        let valeurOnOff="" // vert quand tache validee


        // selection du parent (div)
        let x =""

        // tableau à pousser dans mon objet maListeDesTaches        
        let myArray=[]; 


// ******************************************************************************************
        
        // compteur pour déterminer quelle position dans l'objet
        let compteur=-1;


// ***** fin ********************************************************************************


// enter clavier

        let inputC = document.getElementById("todo"); // input texte

        // Execute une fonction quand on presse ENTER
        inputC.addEventListener("keyup", function(event) {
        
        // Numéro 13 est l'unicode "Enter" du Keyboard

                if (event.keyCode === 13) {

                    // Fait cancel si nécéssaire
                    event.preventDefault();

                    // Déclenche comme click le input bouton
                    document.getElementById("myBtn").click();
                }
        });



function retourDeMonClic(idClique)

    {
                // console.log(idClique)+" = clic";
                // ex: e1, c1 ...


                // Affiche et garde la première lettre (position 0)
                let premiereLettreDeId = idClique.charAt(0); // ex: e
                // console.log(premiereLettreDeId +" = Première lettre" );

                
        // ----------------------------- Objectif retirer la première lettre pour avoir le numéro de l'id

                
                // Remplacer c ou e par rien
                let numeroId = idClique.replace(premiereLettreDeId, "");
                // console.log(numeroId+" = numéro")


            // On / off 
            // (si = e + int et première lettre égal à e)

                    if(idClique== (premiereLettreDeId + numeroId) && (premiereLettreDeId == "e")){

                        x = document.getElementById(idClique).parentNode.nodeName;
                        // console.log(x +" lien parent") // DIV

                        let PointageCibleOn=document.getElementById("tache"+numeroId);
                        // console.log(PointageCibleOn)
                        PointageCibleOn.style.backgroundColor="rgba(232, 255, 117, 1)"; 
                    }

            // A faire
            // si reclic remettre fond par défaut
            
            // Supprimer la div quand clic sur supprimer
            // si clic est égal à c


            if(idClique== (premiereLettreDeId + numeroId) && (premiereLettreDeId == "c")){

                        function supprimerDiv() {
                        
                            // pointer le div tache et son numéro
                            let myobj = document.getElementById("tache"+numeroId);
                            console.log(numeroId + " numeroId")

                            // supprime la cible
                            myobj.remove();
                            }

                            // Appel fonction
                            supprimerDiv();
                            // checker la nouvelle valeur du tableau


// ******************* supprimer entrée objet ******************************************************************************
                    
                    // Supprimer clef Objet
                    let key = "tache"+(numeroId-1);
                    console.log(key+ " key à supprimer");
                    delete maListeDesTaches[key];

                    // ****** storage à sauver (mis à jour)
                    exportListe()


// ******************* fin ******************************************************************************
                    }
    }



// fonction taper sa tâche et création des div
    
    function fonctionValeurInput()
        {
            let input = document.getElementById("todo").value;

                // Si le post est différent de vide
                if(input !==""){

                    // ***** objet *******************************************************************

                            if(compteur==-1){
                            compteur=0;
                            }

                            
                    // Valeur de ma tache (texte  dynamique)
                    let monTexteTache = input;

                    // Array
                    // maListeDesTaches.tache[compteur] = monTexteTache; // texte 'Mon texte input' en position [0]
                    // maListeDesTaches.etat[compteur] = false; // false [0]

                    let key = "tache"+compteur; // tache0

                    // maListeDesTaches[tache0] = monTexteTache;
                    maListeDesTaches[key] = monTexteTache;

                    // Pousse myArray dans mon objet
                    myArray.push(maListeDesTaches);

                    // console.log(maListeDesTaches)

                    compteur=compteur+1; // OK 0, 1, 2


// ***** fin *******************************************************************

                    // cible
                    let PointageCible=document.getElementById("monContainer");

                        // Création DIV
                        let divMaTache= document.createElement("div");

                        // ajout id + incrementation (e1,e2 ...)
                        divMaTache.setAttribute("id","tache" + compteurDeTache);

                        // ajout de class pour le design css
                        divMaTache.setAttribute("class","cssTache");

                   
                        // div HTML : texte / A valider / A effacer
                        divMaTache.innerHTML=
                            `                       
                                <div class="monTexte">${input}</div>
                                <div class="valider" id="${'e'+compteurDeTache}" onClick="return retourDeMonClic(this.id)"><a href="${'index.html#tache'+compteurDeTache}"><i class="far fa-calendar"></i></a></div>
                                <div class="effacer" id="${'c'+compteurDeTache}" onClick="return retourDeMonClic(this.id)"><a href="#"><i class="far fa-calendar-times"></i></a></div>
                            `;

                        // attacher monContenu au Div créé
                        // divMaTache.appendChild(monContenu);

                        // Attacher l'ensemble des div à mon conteneur ciblé
                        PointageCible.appendChild(divMaTache);
                        document.body.appendChild(PointageCible);

                    // Incrémenter
                    compteurDeTache=compteurDeTache+1;
                }

                    // réinitialiser value de l'input (après poste)
                    // Cible l'input, puis on change à vide le champs
                    
                    function annulerInput() 
                            {
                                let monObjet=document.getElementById("todo");
                                
                                // vide l'input
                                monObjet.value="";

                                // repointer le cursor dans l'input
                                monObjet=document.getElementById("todo").focus();
                            }
                            annulerInput()
                            // ajouter autofocus input


                    // ****** storage à sauver (input)
                    exportListe()
                    
             }



// effacer storage

function reset(){
        localStorage.clear()
            }