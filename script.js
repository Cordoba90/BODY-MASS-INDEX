let massMark = 80;
let heightMark = 1.89;
let massJohn = 69;
let heightJohn = 1.70;
let BMIJohn; 
let BMIMark;
let higherBMI;
let higherBMI1;

BMIJohn = massJohn/ (heightJohn*heightJohn);
BMIMark = massMark / (heightMark*heightMark);
console.log("John'un Kitle Indeksi:",Math.floor(BMIJohn));
console.log("Mark'in Kitle Indeksi:",Math.round(BMIMark));
console.log("Mark'in Kitle Indeksi:",(BMIMark).toFixed(2));

higherBMI = BMIJohn > BMIMark;
higherBMI1 = BMIJohn < BMIMark;

console.log(higherBMI)
console.log(higherBMI1)

console.log (`Is Mark's BMI is higher than John's? Answer is “true". Because Mark's BMI is BMIMARK and John's BMI is BMIJOHN`)