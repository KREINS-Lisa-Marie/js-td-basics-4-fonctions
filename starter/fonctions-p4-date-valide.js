    /*
    FONCTIONS - PRÉPA 4 : Date valide - version 2
    Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
    - Déclarez deux fonctions :
      - isBissextile retourne true ou false selon que l'année est bissextile ou pas
      - isValid retourne true ou false selon que la date est valide ou pas
    - Utilisez isBissextile dans isValid pour gérer le cas du mois de février
    - Utilisez isValid pour décider si votre date est valide
      avant d'afficher votre message dans la console
    */

    // Fonction pour vérifier si une année est bissextile

    const day = parseInt(prompt("Entrez une date sous forme de jour"));
    const month= parseInt(prompt("Entrez une date sous forme de mois"));
    const year= parseInt(prompt("Entrez une date sous forme d'année"));
    console.log(`${day} ${month} ${year}`);

    let maxDays = 31; // cas par défaut

    function isBissextile(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            maxDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            maxDays = 30;
            break;
        case 2:
            if (year%4 === 0 && year %100 !== 0){
                maxDays =  29;
                return true;        // année bissextile
            }

            if ( year % 400 === 0){
                maxDays =  29;
                return true;        // année bissextile
            }
            return false;
    }
    }
    function isValid (day, month, year) {
        if (day && month && year) {         // if (day) si day vaut un nombre alors = true si NaN alors c'est false
            if (day > 0 && month > 0 && year > 0) {
                if (month >= 1 && month <= 12) {
                    if (day <= maxDays) {
                        console.log(`La date ${day}--${month}--${year} est valide`);
                        if (isBissextile() === true) {
                            return true;
                        }
                        return false;
                    } else {
                        console.log(`Le nombre de jours du mois (${month}) doit être <= (${maxDays})`);
                    }
                } else {
                    console.log(" Le mois doit être compris entre 1 et 12.");
                }
            } else {     // quand on a entré un nombre négatif
                console.log(" Le jour, le mois et l'année doivent être positifs.");
            }
        } else {         // quand le parseInt n'a pas fonctionné
            console.log(" Le jour, le mois et l'année doivent être des nombres positifs.");
        }
    }
    console.log(isValid(29,2,2024));


    // Fonction pour vérifier si une date est valide
    /*
    function isValid(day, month, year) {
        if (year>0){
            if (month>0 && <=12){
                switch (month){
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        maxDay= 31;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        maxDay= 30;
                        break;
                    case 2:
                        function
                        maxDay = 28
                }
                if (day>0 && day <=31){

                }
            }
            return "Le mois n'est pas juste";
        }
        return "L'année n'est pas juste";

    }
        return "La date saisie n'existe pas.";
    */
    // Demander à l'utilisateur de saisir une date


    // Utilisation de la fonction isValid pour vérifier la date


















    /*
    TESTS - PRÉPA 6 : Date valide
    /* Avant de commencer
    1. vérifier si on a des nombres pour le jour, le mois et l'année. (parseInt)
    2.  vérifier que les nombres sont positifs
    3. Tester si les mois sont compris entre 1 et 12
    4. Tester si les jours sont dans le bon intervalle (nb Maximum)
    5.

    */

    /*
    const day = parseInt(prompt("Entrez une date sous forme de jour"));
    const month= parseInt(prompt("Entrez une date sous forme de mois"));
    const year= parseInt(prompt("Entrez une date sous forme d'année"));
    console.log(`${day} ${month} ${year}`);

    let maxDays = 0;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            maxDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            maxDays = 30;
            break;
        case 2: maxDays = 28;   // cas par défaut
            if (year%4 === 0 && year %100 !== 0){
                maxDays =  29;          // année bissextile
            }

            if ( year % 400 === 0){
                maxDays =  29;      // année bissextile
            }
            break;
    }


    if (day && month && year){         // if (day) si day vaut un nombre alors = true si NaN alors c'est false
        if (day> 0 && month > 0 && year > 0){
            if (month>= 1 && month<= 12){
                if (day <= maxDays){
                    console.log(`La date ${day}--${month}--${year} est valide`);
                }else{
                    console.log(`Le nombre de jours du mois (${month}) doit être <= (${maxDays})`);
                }
            }else {
                console.log(" Le mois doit être compris entre 1 et 12.");
            }
        }else {     // quand on a entré un nombre négatif
            console.log(" Le jour, le mois et l'année doivent être positifs.");
        }
    } else{         // quand le parseInt n'a pas fonctionné
        console.log(" Le jour, le mois et l'année doivent être des nombres positifs.");
    }


    */












    //const date= day month year = prompt("Entrez une date en format: jour mois année (p. ex. 21 octobre 2019)");
    //maxDays= 31;






























    /*
    const date= day month year = prompt("Entrez une date en format: jour mois année (p. ex. 21 octobre 2019)");
    let day;
    let month;
    let year;
    maxDays= 31;
    */




    /*
    let day = Number(prompt("Entrez un jour (en chiffres)."));
    let month= String(prompt("Entrez un mois (en lettres minuscules)."));
    let year= Number(prompt("Entrez une année (en chiffres)."));
    let maxDays= 31;

    let ismonthPossible= ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
    const month31= ["janvier","mars","mai","juillet","août","octobre","décembre"];

    let annee4 = year%4 === 0 ;
    const annee400 = ((year%400) === 0);
    const annee100 = ((year%100) === 0);

    //if (ismonthPossible === "janvier" )

    if (annee4 === true || annee400 === true){
        //console.log(`${year} est une année bissextile.`);
        estBissextile = true;
    } else if (annee100 === true){
        //console.log(`${year} est une année non bissextile.`);
        estBissextile = false;
    } else {
        //console.log(`${year} est une année non bissextile.`);
        estBissextile = false;
    }

    if(day <= 31 && ismonthPossible === month && year > 0){
        if (month === month31 ){
            maxDays = 31;
        } else if (month === "février"){
            if (estBissextile === true){
                maxDays = 29;
            } else {
                maxDays = 28;
            }
        } else {
            maxDays = 30;
        }
        console.log(`La date ${day} ${month} ${year} est valide`);
    } else {
        console.log(`La date ${day} ${month} ${year} n'est PAS valide`);
    }



    /*

    /*
    if (day ===true && month === true && year === true){
        console.log(`La date ${day} ${month} ${year} est valide`);
    } else {
        console.log(`La date ${day} ${month} ${year} n'est PAS valide`);
    }
    */

