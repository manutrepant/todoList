# Exercice apprentissage Javascript 

## Objectif : Créer une ToDo List


<img src="https://github.com/manutrepant/todoList/blob/main/img/projet.jpg"
     alt="ToDoList"
     style="float: left; margin-right: 20px;" />
     
     
### Version v0.1

- Création d'une toDo LIST.

- Ajouter des tâches avec Majuscule comme première lettre

- Valider une tâche, changement d'état, d'icone

- Supprimer une tâche

- Sauver les tâches dans un localStorage

- Recréer ma liste à partir du storage

### Logique (si vous avez des remarques n'hésitez pas à me les communiquer).

Check de localStorage, si vide on initialise un array vide. Si localStorage existant on crée nos élements HTML à partie de mon cookie que je reconverti en array JS. La création de mes tâches se fait par incrémentation key pour permettre la création de mes nouvelles tâches à partie d'un nombre croissant et continu de départ. 0,1,2 ... (pour éviter lors d'une suppression q'une position dans mon array ne correspond plus).  Quand on supprime une tâche ou quand je valide une tâche, je mets à jour mon cookie. Objet contient 3 key values. id (pour la création et pointage), tache : Texte de ma tâche, etat : true ou false qui m'indique si ma tâche est validée ou pas. A l'ouverture de ma page, à la recréation de mes élements je réinitialise id par le nombre de key contenu dans mon cookie.


### Utilisation et matière :
Création d'éléments HTML - SetAttribute - Création array, push, recherche par Key, Value - Set & Get LocalStorage - LocalStorage Clear- Reload page. Parse JSon Js



Source du projet : <https://github.com/manutrepant/todoList>

Démo HTML : <https://manutrepant.github.io/todoList/>

### MAJ 1.0
Mise à jour localStorage pour iOs





