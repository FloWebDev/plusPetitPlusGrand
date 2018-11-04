var app = {
    nbGame: 1,
    start: true,
    chiffreMagique: null,
    found: false,
    nbTryMax: 10,
    nbTry: 0,
    score: 0,

    init: function() {
        console.log('init');
        console.log('Partie n° ' + app.nbGame);

        app.found = false;
        app.nbTry = 0;

        if (app.start == true)
        {
            var gameMessages = document.querySelector('#gameMessages');
            gameMessages.innerHTML = '<p class="green">Here we go !<p>';
            app.startGame();
        }
    },

    startGame: function() {
        // On renvoie un entier aléatoire entre une valeur min (incluse)
        // et une valeur max (incluse).
        // Attention : si on utilisait Math.round(), on aurait une distribution
        // non uniforme !
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min +1)) + min;
        }
        app.chiffreMagique = getRandomIntInclusive(1, 1000);
        console.log('Chiffre Magique : ' + app.chiffreMagique);

        var form = document.querySelector('#mainForm');
        form.addEventListener('submit', app.tryHandle);

    },

    tryHandle: function(evt) {
        console.log('tryHandle');

        evt.preventDefault();
        var input = document.querySelector('#proposition');
        var numb = parseInt(input.value.trim(), 10);

        console.log('Proposition :' + numb);

        input.value = '';

        var gameMessages = document.querySelector('#gameMessages');
        gameMessages.innerHTML = '';

        // Avant tout, pour empêcher la saisie d'une proposition
        // si une nouvelle partie n'a pas été demandée
        if ((numb !== null) && (app.start == false))
        {   
            console.log('Le joueur n\'a pas encore décidé s\'il voulait jouer une nouvelle partie');
            gameMessages.innerHTML = '<p class="red">Souhaitez-vous jouer une nouvelle partie ?</p>';
            app.askNewGame();
            return; // Afin que le reste de la méthode ne soit pas excéuté
        }

        // Traitement des propositions
        if (!isNaN(numb)) // On vérifie qu'il s'agit bien d'un nombre entier
        {
            if ((numb >= 1) && (numb <= 1000)) 
            {
                if (numb < app.chiffreMagique) 
                {
                    gameMessages.innerHTML = '<p class="red">Le chiffre proposé est trop petit !</p>';
                    app.found = false;
                    app.nbTry++;
                    console.log('Nbr d\'essais :' + app.nbTry);
                }
                else if (numb > app.chiffreMagique)
                {
                    gameMessages.innerHTML = '<p class="red">Le chiffre proposé est trop grand !</p>';
                    app.found = false;
                    app.nbTry++;
                    console.log('Nbr d\'essais :' + app.nbTry);
                }
                else
                {   
                    app.found = true;
                    app.nbTry++;
                    gameMessages.innerHTML = '<p class="green">Bravo ! Bous avez trouvé le chiffre Magique !</p>';
                    console.log('Nbr d\'essais :' + app.nbTry);
                    app.displayScore();
                }
            }
            else
            {
                gameMessages.innerHTML = '<p class="red">Le chiffre proposé doit être compris entre 1 et 1000.</p>';
            }
        }
        else
        {
            gameMessages.innerHTML = '<p class="red">La donnée saisie n\'est pas un chiffre entier.</p>';
        }
        
        // Fin du jeu si nbr tentatives atteint
        if ((app.nbTry >= app.nbTryMax) && (app.found == false))
        {
            gameMessages.innerHTML = '<p class="red">Vous avez perdu !</p>';
            console.log('Nbr d\'essais :' + app.nbTry);
            app.displayScore();
        }
    },

    displayScore: function() {

        if (app.found == true)
        {
            app.found = 'Gagné';
            app.score += 100;
        } else
        {
            app.found = 'Perdu';
            app.score -= 100;
        }

        var displayScore = document.querySelector('tbody');
        displayScore.innerHTML = '<tr><td>' + app.nbGame + '</td><td>' + app.found + '</td><td>' + app.nbTry +'</td><td>' + app.chiffreMagique + '</td><td>' + app.score + '</td></tr>' + displayScore.innerHTML;
        
        app.askNewGame();
    },

    askNewGame: function() {
        console.log('askNewGame');
        var newGameForm = document.querySelector('#newGameForm');
        newGameForm.style.display = 'block';

        app.start = false; // fin du jeu (permet de bloquer la saisie du formulaire)

        newGameForm.addEventListener('submit', app.endGame);
    },

    endGame: function(evt) {
        console.log('endGame');
        
        evt.preventDefault();
        var newGame = document.querySelector('#newGame');
        var newG = newGame.value;
        console.log(newG);

        var newGameForm = document.querySelector('#newGameForm');
        newGameForm.style.display = 'none';
        console.log('hop hop hop');

        if (newG == 1)
        {
            app.nbGame++;
            app.start = true;
            app.init();
        }
        else
        {
            console.log('newG ne vaut pas 1')
            
            app.nbGame = 0; // On réinitialise le numéro de partie
            app.score = 0; // On réinitialise le score
            
            var gameMessages = document.querySelector('#gameMessages');
            gameMessages.innerHTML = '<p class="green">Merci d\'avoir joué. A bientôt !</p>';
        }
    }

};

document.addEventListener('DOMContentLoaded', app.init);