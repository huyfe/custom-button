function main() {
    parseCss();
}
main();


function parseCss() {
    let codeString = `.button {
    text-align: center;
    text-decoration: none;
    `;
    let endCodeString = "}";
    let inputCode = document.getElementById("inputCode");

    let button = document.getElementById("button");

    // Input css
    let color = document.getElementById("color");
    let bgColor = document.getElementById("bgColor");
    let paddingX = document.getElementById("paddingX");
    let paddingY = document.getElementById("paddingY");
    let borderRadius = document.getElementById("borderRadius");

    let codeColor = "";
    let codeBgColor = "";
    let codePaddingX = "";
    let codePaddingY = "";
    let codeBorderRadius = "";
    let result = "";

    result = `${codeString}${endCodeString}`;
    inputCode.innerHTML = result;

    color.addEventListener("input", function() {
        codeColor = `color: ${color.value};`;
        result = `${codeString}${codeColor}
    ${codeBgColor}
    ${codePaddingX}
    ${codeBorderRadius}
${endCodeString}`;

        inputCode.innerHTML = result;

        button.style.color = color.value;
    })

    bgColor.addEventListener("input", function() {
        codeBgColor = `background-color: ${bgColor.value};`;
        result = `${codeString}${codeColor}
    ${codeBgColor}
    ${codePaddingX}
    ${codeBorderRadius}
${endCodeString}`;

        inputCode.innerHTML = result;

        button.style.backgroundColor = bgColor.value;
    })

    paddingX.addEventListener("input", function() {
        codePaddingX = `padding: ${paddingX.value}px ${paddingY.value}px;`;
        result = `${codeString}${codeColor}
    ${codeBgColor}
    ${codePaddingX}
    ${codeBorderRadius}
${endCodeString}`;

        inputCode.innerHTML = result;

        button.style.padding = paddingX.value + "px " + paddingY.value + "px";

    })

    paddingY.addEventListener("input", function() {
        codePaddingX = `padding: ${paddingX.value}px ${paddingY.value}px;`;
        result = `${codeString}${codeColor}
    ${codeBgColor}
    ${codePaddingX}
    ${codeBorderRadius}
${endCodeString}`;

        inputCode.innerHTML = result;

        button.style.padding = paddingX.value + "px " + paddingY.value + "px";

    })

    borderRadius.addEventListener("input", function() {
        codeBorderRadius = `border-radius: ${borderRadius.value}px;`;
        result = `${codeString}${codeColor}
    ${codeBgColor}
    ${codePaddingX}
    ${codeBorderRadius}
${endCodeString}`;

        inputCode.innerHTML = result;

        button.style.borderRadius = borderRadius.value + "px";

    })
    
    document.querySelector("#copy").addEventListener("click", function() {
        copyToClipboard(result);
    })
    
}

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }
  