window.onload = function() {
    var op1Input = document.getElementById("op1");
    var op2Input = document.getElementById("op2");
    var resultDisplay = document.getElementById("res");
    var infoDiv = document.getElementById("content");

    function displayResult(result) {
        resultDisplay.textContent = "Result: " + result;
    }

    function displayError(message) {
        resultDisplay.textContent = "Error: " + message;
    }

    document.getElementById("add-button").onclick = function() {
        var result = parseFloat(op1Input.value) + parseFloat(op2Input.value);
        displayResult(result);
    };

    document.getElementById("sub-button").onclick = function() {
        var result = parseFloat(op1Input.value) - parseFloat(op2Input.value);
        displayResult(result);
    };

    document.getElementById("mul-button").onclick = function() {
        var result = parseFloat(op1Input.value) * parseFloat(op2Input.value);
        displayResult(result);
    };

    document.getElementById("div-button").onclick = function() {
        var divisor = parseFloat(op2Input.value);
        if (divisor !== 0 && !isNaN(divisor)) {
            var result = parseFloat(op1Input.value) / divisor;
            displayResult(result);
        } else {
            displayError("Division by  0!");
        }
    };

    document.getElementById("log-button").onclick = function() {
        var op1 = parseFloat(op1Input.value);
        if (op1 > 0) {
            var result = Math.log(op1);
            displayResult(result);
            fetch("log.json")
                .then((response) => response.json())
                .then((data) => {
                    infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
                })
                .catch((error) => console.error("Error fetching log data:", error));
        } else {
            displayError("Operand 1 is less or equal to 0");
        }
    };

    document.getElementById("sin-button").onclick = function() {
        var operand = parseFloat(op1Input.value);
        if (!isNaN(operand)) {
            var result = Math.sin((operand * Math.PI) / 180); 
            displayResult(result);
            fetch("sin.json")
                .then((response) => response.json())
                .then((data) => {
                    infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
                })
                .catch((error) => console.error("Error fetching sine info:", error));
        } else {
            displayError("Invalid input");
        }
    };

    document.getElementById("tan-button").onclick = function() {
        var operand = parseFloat(op1Input.value);
        if (!isNaN(operand)) {
            var result = Math.tan((operand * Math.PI) / 180); 
            displayResult(result);
            fetch("tan.json")
                .then((response) => response.json())
                .then((data) => {
                    infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
                })
                .catch((error) => console.error("Error fetching tangent info:", error));
        } else {
            displayError("Invalid input");
        }
    };
};
