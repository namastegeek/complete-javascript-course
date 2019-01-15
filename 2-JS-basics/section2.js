/* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

var MarkMass = 78;
var MarkHeight = 1.69;

var JohnMass = 92;
var JohnHeight = 1.95;

var BMImark = MarkMass / (MarkHeight * 2);
var BMIJohn = JohnMass / (JohnHeight * JohnHeight);

console.log(BMIJohn, BMImark);

var higherBMI = BMIJohn < BMImark;
console.log('John has a BMI of ' + BMIJohn + ' and Mark has a BMI of '  + BMImark);
console.log('Does Mark have a higher BMI than John?' + higherBMI);
