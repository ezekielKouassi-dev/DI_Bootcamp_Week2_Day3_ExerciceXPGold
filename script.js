/**
 * @author : ezekiel kouassi
 */

/* ******************* Exercice 1 : Divisible By Three **************** */

/**
 * @description : dans cet exercice nous vérifions la divibilité par 3 des valeurs
 * du tableau, si une valeur est divisible alors nous affichons true sinon false
 * @param : numbers
 */

let numbers = [123, 8409, 100053, 333333333, 7];

// 1 - Loop through the array above and determine whether or not each number is divisible by three.

for(let value of numbers) {

    // 2 - Each time you loop console.log true or false.

    (value % 3 == 0) ? console.log(true) : console.log(false);
}

/* ******************* End of Exercice 1 ******************* */

/* ****************** Exercice 2 : Attendance ***************** */

/**
 * @description : dans cet exercice nous vérifions si le nom rentrer par l'utilisateur
 * existe dans la dans la liste guestList, et en fonction du resultat il y a quelque chose
 * à afficher.
 * @param : guestList
 * @param : studentName
 */

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

// 1 - Prompt the student for their name

let studentName = prompt("Give me your name : ");

// 2 - If the name is in the object, console.log the name of the student and the country they come from.

if(guestList[studentName] != undefined) {
    console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}`);
}
else {
    console.log("Hi! I'm a guest.");
}

/* ******************* End of Exercice 2 ***************** */

/* ****************** Exercice 3 **************** */

/**
 * @description : dans cet exercice, nous faisons la somme des differentes valeurs du tableau
 * et nous trouvons aussi la valeur la plus grande pour ensuite les afficher.
 * @param : age
 * @param : sum
 * @param : highestItems
 */

let age = [20, 5, 12, 43, 98, 55];

// 1 - console.log the sum of all the numbers in the age array

let sum = 0;
let hightestItems = 0;

for(let value of age) {
    sum+=value;
    
    // 2 - condition for found the highest item

    if(value > hightestItems) {
        hightestItems = value;
    }
}

console.log(`The sum is : ${sum}`);
console.log(`The highest age is : ${hightestItems}`);


/* ****************** End of Exercice 3 **************** */