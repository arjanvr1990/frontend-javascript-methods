/* Opdracht 0: voorbeeld */
// Maak een nieuw date-object aan voor dit huidige moment en log dit in de terminal
// ---- Verwachte uitkomst: 2021-04-06T14:54:34.062Z (afhankelijk van het moment)

const currentDay1 = new Date();
console.log(currentDay1);


/* Opdracht 1 */
// 1a. Maak een nieuw date-object aan voor dit huidige moment en log het aantal uren in de terminal
// 1b. Log daarna het aantal minuten in de terminal
// ---- Verwachte uitkomsten:
// Uren: 16 (als er een vier in de klok zit op het moment van aanroepen)
// Minuten: 36 (als het 16:36 is op het moment van aanroepen)

const currentTimaAndDate = new Date();
console.log(currentTimaAndDate.getHours());
console.log( currentTimaAndDate.getMinutes());

/* Opdracht 2 */
// Format het date-object dat je bij de vorige vraag hebt gemaakt naar een leesbare datum
// ---- Verwachte uitkomst: Tue Apr 06 2021 (afhankelijk van het moment)

const dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const currentHour = currentTimaAndDate.getHours();
const currentMinut = currentTimaAndDate.getMinutes();
const currentYear = currentTimaAndDate.getFullYear();

const currentMonthNumber = currentTimaAndDate.getMonth();
const currentMonth = monthsOfTheYear[currentMonthNumber];

const currentDayNumber = currentTimaAndDate.getDay();
const currentDay = dayOfTheWeek[currentDayNumber];


console.log(currentHour + " : " + currentMinut + " " + currentYear + " " + currentMonth + " " + currentDay);

console.log("Het is vandaag " + currentDay + " van de maand " + currentMonth + " en het jaar " + currentYear + " de tijd is " + currentHour + " : " + currentMinut);