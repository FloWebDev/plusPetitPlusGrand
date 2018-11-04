<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/reset.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
    <title>Plus petit ou plus grand</title>
</head>
<body>
<div id="container">
    
    <h1>Le jeu du Plus ou Moins</h1>
    <div id="accroche">Trouverez vous le chiffre magique ?</div>

    <p id="ennonce">Vous disposez de 10 essais pour trouver le Chiffre Magique.<br>
        Réfléchissez bien aux chiffres proposés, faites en sorte de cibler l'intervalle le plus large possible.</p>
    
    <div id="gameMessages">
    </div>
    
    <form action="" id="mainForm">
    <label for="propositon">Entrez un chiffre : </label>
    <input type="text" id="proposition" name="proposition">
    <button type="submit">Proposer</button>
    </form>
    
    <div id="newGameFormContainer">
        <form action="" id="newGameForm" style="display: none">
            <label for="newGame">Une nouvelle partie ?</label>
            <select id="newGame">
            <option value="1" selected>Oui</option> 
            <option value="2">Non</option>
            </select>
            <button type="submit" id="ok">OK</button>
        </form>
    </div>
    
    <table id="displayScore">
    	<thead>
    		<tr>
    			<th>Partie N°</th>
    			<th>Résultat</th>
    			<th>Tentatives</th>
                <th>Nombre à trouver</th>
                <th>Score<br>(cumulé)</th>
    		</tr>
    	</thead>
    	<tbody>
    <!-- Rempli par le DOM -->
    	</tbody>
    </table>

</div>

<script src="assets/js/app.js"></script>
</body>
</html>



