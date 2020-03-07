function init() {
    // Clear text input and set default drop-down to grams

    document.getElementById("textInput").value = "";
    document.getElementById("unitSelect").value = "fromGrams";
    var output = document.getElementById("output");
    output.style.visibility = 'hidden';
    

}

window.onload = init;

var outputOne = document.querySelector("#output-1-header");
var outputTwo = document.querySelector("#output-2-header");


// CALCULATE AND DISPLAY RESULTS

function loadResults(input, unit) {
    if (unit == "fromGrams") {
        outputOne.textContent = "Pounds";
        outputTwo.textContent = "Ounces";
        document.getElementById('output-1-text').innerHTML = (input/454).toFixed(1);
        document.getElementById('output-2-text').innerHTML = (input/28.35).toFixed(1);

    } else if (unit == "fromOunces") {
        outputOne.textContent = "Pounds";
        outputTwo.textContent = "Grams";
        document.getElementById('output-1-text').innerHTML = (input/16).toFixed(1);
        document.getElementById('output-2-text').innerHTML = (input*28.35).toFixed(1);

    } else if (unit == "fromPounds") {
        outputOne.textContent = "Grams";
        outputTwo.textContent = "Ounces";
        document.getElementById('output-1-text').innerHTML = (input*454).toFixed(1);
        document.getElementById('output-2-text').innerHTML = (input*16).toFixed(1);
    }

    if (input == 0) {
        output.style.visibility = 'hidden';
    }
}


// GET INPUT VALUE IF TEXT IS ENTERED

document.getElementById('textInput').addEventListener('input', function(e){          // Runs when text is entered
   
    output.style.visibility = 'visible';

    var input = e.target.value;                                     // Sets input to text entered
    var unit = document.getElementById("unitSelect").value;         // Sets unit to drop-down already selected
    loadResults (input, unit);                                      // Pass both into loadResults func.

})

// GET UNIT VALUE IF DROP-DOWN IS CHANGED

document.getElementById('unitSelect').addEventListener('change', function(e){       // Runs if drop-down is changed

    output.style.visibility = 'visible';
    
    var unit = e.target.value;                                      // Sets unit to drop-down value
    var input = document.getElementById("textInput").value;         // Sets input to text already entered
    loadResults (input, unit);                                      // Pass both into loadResults func.
    
});
