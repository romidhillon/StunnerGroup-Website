// ------------------------------------------------------------------------------------------------------------------------- 
//      Stunner Group Fitness Newsletter Website

//      Assignment Title: Web Development Coursework 2
//      Submission Date: March 22, 2020
//      Filename: myscripts.js
// ------------------------------------------------------------------------------------------------------------------------- 

// This document encompasses the Javascript code corresponding to the macro.html file and the calorie and macro calculators.

// ------------------------------------------------------------------------------------------------------------------------- 
// Calorie Calculator Male
// -------------------------------------------------------------------------------------------------------------------------


// Document.getelementByID' has been used to grab input.
// Event listener added to listen for an input event and function executed . 

document.getElementById('lbsminput').addEventListener('input', function (e) {

// I then created a variable named pounds and passed through an event parameter (e.target.value).
// Outputs were then displayed by using the technique of document.getElementByID().innerHTML
// Mathematical calculation of outputs for each by lbs multiplied by 15, 17.5 or 13

    let lbs = e.target.value;
    document.getElementById ('maintenancecaloriesoutput').innerHTML= lbs*15;
});

document.getElementById('lbsminput').addEventListener('input', function (e) {

    let lbs = e.target.value;
    document.getElementById ('bulkingcaloriesoutput').innerHTML= lbs*17.5;
});

document.getElementById('lbsminput').addEventListener('input', function (e) {

    let lbs = e.target.value;
    document.getElementById ('cuttingcaloriesoutput').innerHTML= lbs*13; 

});


// ------------------------------------------------------------------------------------------------------------------------- 
// Calorie Calculator Female
// -------------------------------------------------------------------------------------------------------------------------

// A similar method was used to generate the female macro calculator. 
// The only difference between the male and female calorie calculators is the mathematical calculation for the outputs (i.e. lbs * (input))

document.getElementById('lbsfinput').addEventListener('input', function (e) {


    let lbs = e.target.value;
    document.getElementById ('maintenancecaloriesoutputf').innerHTML= lbs*12;
});

document.getElementById('lbsfinput').addEventListener('input', function (e) {

    let lbs = e.target.value;
    document.getElementById ('bulkingcaloriesoutputf').innerHTML= lbs*15;
});

document.getElementById('lbsfinput').addEventListener('input', function (e) {

    let lbs = e.target.value;
    document.getElementById ('cuttingcaloriesoutputf').innerHTML= lbs*10; 
});




// ------------------------------------------------------------------------------------------------------------------------- 
// Macro Calculator Female
// -------------------------------------------------------------------------------------------------------------------------

// A similar method was used to generate the calorie calculator. 
// The user inputs the amount of calories they want to eat per day, and the amount of grams they need to eat are given as an output in terms of grams of proteins, carbs, or fats. 
// Once again, the mathematical calculation for the outputs is different for each output. 

 

document.getElementById('calinput').addEventListener('input', function (e) {

    let lbs = e.target.value;
    document.getElementById ('proteinoutput').innerHTML= (lbs*0.3)/4;
});


document.getElementById('calinput').addEventListener('input', function (e) {

    let lbs = e.target.value;
    document.getElementById ('carbohydratesoutput').innerHTML= (lbs*0.4)/4;
});

document.getElementById('calinput').addEventListener('input', function (e) {

    let lbs = e.target.value;
    document.getElementById ('fatsoutput').innerHTML= (lbs*0.3)/9; 
});






