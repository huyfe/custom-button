
(function parseCss() {
    let outputCode = document.getElementById("outputCode");
    let button = document.getElementById("button");
    // Element input
    let color = document.getElementById("color");
    let bgColor = document.getElementById("bgColor");
    let paddingX = document.getElementById("paddingX");
    let paddingY = document.getElementById("paddingY");
    let border = document.getElementById("border");
    let borderColor = document.getElementById("borderColor");
    let borderRadius = document.getElementById("borderRadius");
    // Default array
    let arrInput = [
        {
            styleCss: "color",
            value: `${color.value}`
        },
        {
            styleCss: "background-color",
            value: `${bgColor.value}`
        },
        {
            styleCss: "padding",
            value: `${paddingX.value}px ${paddingY.value}px`
        },
        {
            styleCss: "border",
            value: `${border.value}px solid ${borderColor.value}`
        },
        {
            styleCss: "border-radius",
            value: `${borderRadius.value}px`
        }
    ];

    let code = "";
    arrInput.forEach((item) => {
        if (item.styleCss == "color") button.style.color = item.value;
        if (item.styleCss == "background-color") button.style.backgroundColor = item.value;
        if (item.styleCss == "padding") button.style.padding = item.value;
        if (item.styleCss == "border") button.style.border = item.value;
        if (item.styleCss == "border-radius") button.style.borderRadius = item.value;
        code += `\n\t${item.styleCss}: ${item.value};`;
    });
    let result = `.button { \n\ttext-align: center; \n\ttext-decoration: none;${code}\n\tcursor: pointer;\n}`;
    outputCode.innerHTML = result;

    // Gọi hàm để add event cho mỗi element khi input change
    changeValueInput(color);
    changeValueInput(bgColor);
    changeValueInput(paddingX);
    changeValueInput(paddingY);
    changeValueInput(border);
    changeValueInput(borderColor);
    changeValueInput(borderRadius);

    function changeValueInput(inputElem) {
        inputElem.addEventListener("input", function () {
            // Set to arrInput variable current value of all input
            arrInput = [
                {
                    styleCss: "color",
                    value: `${color.value}`
                },
                {
                    styleCss: "background-color",
                    value: `${bgColor.value}`
                },
                {
                    styleCss: "padding",
                    value: `${paddingX.value}px ${paddingY.value}px`
                },
                {
                    styleCss: "border",
                    value: `${border.value}px solid ${borderColor.value}`
                },
                {
                    styleCss: "border-radius",
                    value: `${borderRadius.value}px`
                }
            ];
            code = "";
            arrInput.forEach((item) => {
                if (item.styleCss == "color") button.style.color = item.value;
                if (item.styleCss == "background-color") button.style.backgroundColor = item.value;
                if (item.styleCss == "padding") button.style.padding = item.value;
                if (item.styleCss == "border") button.style.border = item.value;
                if (item.styleCss == "border-radius") button.style.borderRadius = item.value;
                code += `\n\t${item.styleCss}: ${item.value};`;
            });
            result = `.button { \n\ttext-align: center; \n\ttext-decoration: none;${code}\n\tcursor: pointer;\n}`;
            outputCode.innerHTML = result;
        })
    }
    // Event click to copy code
    document.querySelector("#copy").addEventListener("click", function () {
        window.prompt("Copy to clipboard: Ctrl+C, Enter", outputCode.innerHTML);
    })
})();