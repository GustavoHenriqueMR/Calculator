var fullExpression = ""; // Variable to store the complete expression

function insert(num) {
    var result = document.getElementById('result').innerHTML;

    if (result === "" && (num === "/" || num === "*")) {
        return;
    }

    // Checks if the last character is an operator and if the new character is also an operator, to avoid : ++, **, \\, --
    if (/[\+\-\*\/]$/.test(result) && /[\+\-\*\/]/.test(num)) {
        return;
    }

    fullExpression = fullExpression + num;
    var limitVisorResult = fullExpression.substring(Math.max(fullExpression.length - 11, 0));
    document.getElementById('result').innerHTML = limitVisorResult;
}

function clean() {
    fullExpression = "";
    document.getElementById('result').innerHTML = "";
}

function back() {
    fullExpression = fullExpression.substring(0, fullExpression.length - 1);
    document.getElementById('result').innerHTML = fullExpression;
}

function calc() {
    var evalResult = eval(fullExpression);
    var limitResult = evalResult.toString().substring(0, 13);
    document.getElementById('result').innerHTML = limitResult;
}
