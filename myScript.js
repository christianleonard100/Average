let SCI = 79;
let SCIA = "Science: "
let SCIB = SCIA.bold();
let PE = 74;
let PEA = "Physical Education: "
let PEB = PEA.bold();
let ENG = 72;
let ENGA = "English: "
let ENGB = ENGA.bold();
let FIL = 86;
let FILA = "Filipino: "
let FILB = FILA.bold();
let MAT = 75;
let MATA = "Math: "
let MATB = MATA.bold();

let Ave = (SCI + PE + ENG + FIL + MAT) / 5;

document.getElementById("demo").innerHTML = SCIA + "<b>" + SCI + "</b>" +  "<br><br>"  + PEA + "<b>" + PE + "</b>" + "<br><br>" + ENGA + "<b>" + ENG + "</b>" + "<br><br>" + FILA + "<b>" + FIL + "</b>" + "<br><br>" + MATA + "<b>" + MAT + "</b>" + "<br><br>" + "Average: " + "<b>" + Ave + "</b>";
document.getElementById("demo").style.fontFamily = "Arial, Helvetica, sans-serif";
