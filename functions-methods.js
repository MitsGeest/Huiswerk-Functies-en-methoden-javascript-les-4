// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een e-mailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

//GEEN STAPPENPLAN WANT MET NOVA IN HET WERKCOLLEGE GEDAAN

function getEmailDomain(email) {
    const placeOfChar = email.indexOf("@");
    return email.substring(placeOfChar + 1)
 }

const answerOne = getEmailDomain("n.eeken@novi-ecducation.nl");
const answerTwo = getEmailDomain("t.mellink@novi.nl");
const answerThree = getEmailDomain("a.wiersma@outlook.com");
console.log(answerOne, answerTwo, answerThree);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

// STAPPENPLAN
// [X] 1    => Schrijf een functie genaamd typeOfEmail met parameter [email]
// [X] 2    => Laat de functie checken wat het domein van het e-mailadres is
// [X]  2.1 => Zoek op waar het apenstaartje staat.
// [X]  2.2 => Pak het stuk string na het apenstaartje om het domain te bepalen.
// [X]  2.3 => Sla het domein op.
// [X]  2.4 => controleer met console log of het domein opgeslagen wordt
// [X] 3    => Laat de functie de juiste uitput geven als het domein bekend is (novi = medewerker, novi-education = student, al het andere = extern)
// [X]  3.1 => als het domein @novi.nl is dan moet de terminal 'medewerker' teruggeven
// [X]  3.2 => als het domein @novi-education.nl is dan moet de terminal 'student' teruggeven
// [X]  3.3 => als het domein anders dan de bovenstaande opties is dan moet de terminal 'extern' teruggeven


// //Deze functie checkt het domein van het e-mailadres en geeft terug of het om een medewerker (@novi.nl), student (@novi-education) of externe gaat (overige domeinen).
function typeOfEmail (emailAddress) {

    //zoekt het indexnummer van het apenstaartje
    const placeOfChar = emailAddress.indexOf("@");

    //vergelijkt de string na het apenstaartje met het domain en geeft afhankelijk daarvan de juiste string terug
    if (emailAddress.substring(placeOfChar + 1) === "novi.nl"){

        console.log("Medewerker");

    } else if (emailAddress.substring(placeOfChar + 1) === "novi-education.nl") {

        console.log("Student");

    } else {

        console.log("Extern");
    }
}

// Aanroepen van de functie met verschillende argumenten om te checken of hij werkt.
typeOfEmail("n.eeken@novi-education.nl")

typeOfEmail("t.mellink@novi.nl")

typeOfEmail("novi.nlaapjesk@outlook.com")

typeOfEmail("a.wiersma@outlook.com")


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

//STAPPENPLAN
// [X] 1     => Maak een functie genaamd checkEmailValidity met parameter [emailAddress]
// [X] 2     => Laat de functie checken of het e-mailadres valide is
// [X]  2.1  => Laat de functie controleren of '@' in het e-mailadres voorkomt (string methode includes())
// [X]  2.2  => Laat de functie controleren of er géén ',' in het e-mailadres voorkomt (!= string methode includes()?)
// [X]  2.3  => Laat de functie controleren of het laatste karakter niet een '.' is (!= string methode endsWith
// [X] 3     => Console log uitkomst true of false afhankelijk van de criteria.
// [X] 4     => Roep de functie meerdere malen aan met verschillende argumenten om hem te testen.

//Deze functie checkt of een e-mailadres aan bepaalde voorwaarden voldoet (er komst een '@' in het adres voor, er komt geen ',' in voor en het adres eindigt niet met '.')
function checkEmailValidity (emailAddress) {
   if( (emailAddress.includes("@")) && (!(emailAddress.includes(","))) && (!(emailAddress.endsWith(".")))) {
       return true
    } else {
       return false
    }
}
// Aanroepen van de functie met verschillende argumenten om te checken of hij werkt.
const domainOne = checkEmailValidity("n.eeken@novi.nl")
const domainTwo = checkEmailValidity("tessmellink@novi.nl")
const domainThree = checkEmailValidity("n.eekenanovi.nl")
const domainFour = checkEmailValidity("n.eeken@novinl.")
const domainFive = checkEmailValidity("tessmellink@novi,nl")

console.log(domainOne, domainTwo, domainThree, domainFour, domainFive);
