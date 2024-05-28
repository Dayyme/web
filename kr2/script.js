(function () {
    function getRandomInt(max = 100) {
        return Math.floor(Math.random() * max);
    }

    function generateArray(n) {
        return Array.from({ length: n }, getRandomInt);
    }

    let array = generateArray(20).sort((a, b) => b - a);
    document.getElementById("container").textContent = array;

    document.getElementById("generate-button").addEventListener("click", () => {
        const widthValue = document.getElementById("width").value;
        if (!document.getElementById("select-container") && widthValue) {
            createContainer(widthValue);
        } else {
            document.querySelectorAll("#select-container, #up, #down").forEach(elem => elem.remove());
            createContainer(widthValue);
        }
    });

    function createContainer(width) {
        const div = document.createElement("div");
        div.id = "select-container";
        div.style.backgroundColor = "red";
        div.style.position = "relative";
        div.style.width = `${width}px`;
        div.style.height = "30px";
        document.body.appendChild(div);
        createButtons();
    }

    function createButtons() {
        const buttonUp = document.createElement("button");
        const buttonDown = document.createElement("button");
        buttonUp.id = "up";
        buttonDown.id = "down";
        buttonUp.textContent = "Посунути уверх";
        buttonDown.textContent = "Посунути вниз";
        buttonUp.addEventListener("click", () => moveContainer(-20));
        buttonDown.addEventListener("click", () => moveContainer(20));
        document.body.appendChild(buttonUp);
        document.body.appendChild(buttonDown);
    }

    function moveContainer(offset) {
        const selectContainer = document.getElementById("select-container");
        if (selectContainer) {
            let topVal = parseInt(selectContainer.style.top) || 0;
            selectContainer.style.top = `${topVal + offset}px`;
        }
    }
})();

