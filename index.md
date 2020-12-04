<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Exercice Javascript - ToDoList</title>

<meta name="description" content="Exercice apprenant en javascript - ToDoList">
<meta name="keywords" content="Javascript, js, tutoriel">
<meta name="robots" content="ALL">
<meta name="distribution" content="Global">
<meta name="copyright" content="Emmanuel Trépant">
<meta name="author" content="Emmanuel Trépant">
<meta name="language" content="Fr">
<meta name="doc-type" content="Public">
<meta name="doc-class" content="Complet">
<meta name="doc-rights" content="Domaine public">
<meta name="DateCreated" content="03/12/2020">
<meta property="og:title" content="ToDoList" />
<meta property="og:description" content="Exercice apprenant en javascript - ToDoList" />
<meta property="og:url" content="https://www.trepant.be/labo/" />		
<meta name="viewport" content="width=device-width, initial-scale=1" />		
<link rel="apple-touch-icon" href="apple-touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-iphone-retina-display.png" />
<link rel="icon" href="favicon.ico" />
<link type="text/css" rel="stylesheet" href="css/style.css">  
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
<script src="https://use.fontawesome.com/3a702bce7b.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"rel="stylesheet"/>

</head>
<body onload="iOsCookie()">

    <div id="divReset"><a href="#" onclick="reset()" id="reset">Effacer toutes les tâches (cookie)</a></div>
    <div id="maCarte"></div>
    <h1>Ma liste de tâches</h1>
    <div id="monContainer">
    <input type="text" id="todo" value="" placeholder="Ecrire ma tâche" autofocus maxlength="200">
    <input type="submit" id="myBtn" onclick="fonctionValeurInput()" >
    </div>
    <script type="text/javascript" src="js/todo.js"></script>
</body>
</html>