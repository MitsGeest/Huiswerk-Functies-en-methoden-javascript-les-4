// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

// STAPPENPLAN
// [X] 1 => schrijf een loop die iedere indexwaarde in de array checkt, ongeacht de lengte (.length gebruiken)
// [X] 2 => schrijf in de loop een if-statement die alle indexwaarde vergelijkt met een 8 of hoger (X >= 8)
// [X] 3 =>  Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?

// ** IK HEB IN MIJN OPLOSSING EEN INGEBOUWDE OBJECTMETHODE GEBRUIKT. IK WILDE DIE NOG OMSCHRIJVEN ZODAT IK DIE NIET NODIG HEB, MAAR HAD TE WEINIG TIJD **

// Een variabel met een lege array die gevuld wordt met de uitkomst uit de loop
const cumLaudeGrade = [];

// Een loop die alle indexwaardes van de array checkt, ongeacht de lengte
for (let i = 0; i < grades.length; i++) {

    //If-statement die controleert of het cijfer van de indexwaarde die gecheckt wordt gelijk of hoger dan een 8 is, en als dat zo is dat cijfer pusht naar de lege variabel cumLaudeGrade
    if (grades[i] >= 8) {
        cumLaudeGrade.push(grades[i]);
    }
}

// Loggen de lengte van de array cumLaudeGrade
console.log(cumLaudeGrade.length);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

// Functie genaamd 'cumLaude' die hetzelfde doet als mijn antwoord bij 1a. Hierbij vervang ik de array 'grades' voor de parameter 'array', die als placeholder fungeert tot ik de functie aanroep met de juiste argumenten
function cumLaude(array) {

    const cumLaudeGrade = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 8) {
            cumLaudeGrade.push(array[i]);
        }

    }

    // Een return-statement in plaats van een console.log omdat ik de uitkomst van mijn functie niet wil loggen, maar wil gebruiken als ik hem aanroep.
    return cumLaudeGrade.length;
}

// Aanroepen van de functie met de juiste argumenten.
const amountOfCumLaudeDiplomasOne = cumLaude(grades);
const amountOfCumLaudeDiplomasTwo = cumLaude([6, 4, 5]);
const amountOfCumLaudeDiplomasThree = cumLaude([8, 9, 4, 6, 10]);

// Loggen van de functie-returns in de terminal om te controleren of de functie werkt
console.log(amountOfCumLaudeDiplomasOne, amountOfCumLaudeDiplomasTwo, amountOfCumLaudeDiplomasThree);

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

// STAPPENPLAN
// [X] 1    => schrijf een loop die iedere indexwaarde in de array checkt, ongeacht de lengte (.length gebruiken)
// [X] 2    => Schrijft een 'actie' die het gemiddelde cijfer van de array (grades) uitrekent (de som van alle cijfers deelt door het totaal aantal cijfers in de array)
// [X]  2.1 => bepaal de waarde van de som van alle cijfers in de array
// [X]  2.2 => bepaal het aantal cijfers in de array (array.length)
// [X]  2.3 => deel de totale waarde van de cijfers door het aantal cijfers in de array
// [X]  2.4 => sla de uitkomst van 2.3 op
// [X] 3    => Log het gemiddelde (oftewel: leg de returnwaarde vast in een variabel en log de variabel)

// Declaratie van een overschrijfbare variabele waar de totale waarde van de cijfers in geschreven gaat worden. Ik declareer de beginwaarde (0).
let output = 0;

// Een loop die alle indexwaardes van de array checkt, ongeacht de lengte
for (let i = 0; i < grades.length; i++) {

   // Variabel output schrijf ik over zodat hij de voorgaande waarde + de nieuwe waarde is (waarbij de nieuwe waarde het cijfer is van de indexwaarde die op dat moment door de loop gecheckt wordt.)
   output = output + grades[i];
}

// Variabel die het gemiddelde berekent (namelijk de totale waarde van de cijfers die in output is opgeslagen gedeeld door het aantal cijfers van de array).
const average = output / grades.length;

// Loggen van de uitkomst (variabel 'average') in de terminal om te zien of mijn script werkt
console.log(average);



/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

// [X] 1     => schrijf een functie genaamd averageGrade
// [] 2     => plaats in de parameters niet de array 'grades' maar wat de functie kan verwachten (een array)
// [] 3     => vervang in de loop op de juiste plaatsen 'grades' voor de placeholder 'array'
// [] 4     => return in plaats van console.log de uitkomst
// []  2.3  => maak een variabel die gelijkstaat aan het aanroepen van de functie met de specifieke argumenten die je wilt.
// []  2.4  => console.log de variabels van de drie arrays die je wilt als argumenten wilt gebruiken van bij het aanroepen van de functie 'averageGrade'
// [] 3     =>

// Functie genaamd 'averageGrade' die hetzelfde doet als mijn antwoord bij 2a. Hierbij vervang ik de array 'grades' voor de parameter 'array', die als placeholder fungeert tot ik de functie aanroep met de juiste argumenten
function averageGrade(array) {

    let output = 0;

    for (let i = 0; i < array.length; i++) {
        output = output + array[i];
    }

    const average = output / array.length;

    // Een return-statement in plaats van een console.log omdat ik de uitkomst van mijn functie niet wil loggen, maar wil gebruiken als ik hem aanroep.
    return average;
}
// Aanroepen van de functie met de juiste argumenten.
const answerAverageGradeOne = averageGrade(grades);
const answerAverageGradeTwo = averageGrade([6, 4, 5]);
const answerAverageGradeThree = averageGrade([8, 9, 4, 6, 10]);

// Loggen van de functie-returns in de terminal om te controleren of de functie werkt
console.log(answerAverageGradeOne, answerAverageGradeTwo, answerAverageGradeThree);


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

// Als het alleen over de antwoorden op 2b gaat dan zou ik het zo oplossen:
console.log(answerAverageGradeOne.toFixed(2), answerAverageGradeTwo.toFixed(2), answerAverageGradeThree.toFixed(2));

// Als het voor alle huidige en toekomstige resultaten uit de functie moet gelden dna zou ik de return statement aanpassen

//Functie is hetzelfde als bij 2b.
function averageGradeTwoDigits (array) {

    let output = 0;

    for (let i = 0; i < array.length; i++) {
        output = output + array[i];
    }

    const average = output / array.length;

    // Aanpassing in de return-statement: .toFixed(2) na de variabele.
    return average.toFixed(2)
}

//Aangepaste variabele die gelijkt staat aan de functie en het juiste argument.
const answerAverageGradeOneTwoDigits = averageGradeTwoDigits(grades);

//Resultaat in terminal loggen om te zien of het werkt. Antwoord is 6.64 in plaats van 6.642857142857143
console.log(answerAverageGradeOneTwoDigits);





/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
