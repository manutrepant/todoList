<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<link type="text/css" rel="stylesheet" href="css/style.css">  
<!-- Font -->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
<script src="https://use.fontawesome.com/3a702bce7b.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"rel="stylesheet"/>


</head>
<body>

    <div id="divReset"><a href="#" onclick="reset()" id="reset">Vider le cache</a></div>
    <div id="maCarte"></div>
    <h1>Ma liste de tâches</h1>
    <div id="monContainer">
    <input type="text" id="todo" value="" placeholder="Ecrire ma tâche" autofocus>
    <input type="submit" id="myBtn" onclick="fonctionValeurInput()" >
    </div>

<script type="text/javascript" src="js/todo.js"></script>

</body>
</html>