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
    let padding = document.getElementById("padding");
    let borderRadius = document.getElementById("borderRadius");

    let codeColor = "";
    let codeBgColor = "";
    let codePadding = "";
    let codeBorderRadius = "";
    let result = "";

    result = `${codeString}${endCodeString}`;
    inputCode.innerHTML = result;

    color.addEventListener("input", function() {
        codeColor = `color: ${color.value};`;
        result = `${codeString}${codeColor}
    ${codeBgColor}
    ${codePadding}
    ${codeBorderRadius}
${endCodeString}`;

        inputCode.innerHTML = result;

        button.style.color = color.value;
    })

    bgColor.addEventListener("input", function() {
        codeBgColor = `background-color: ${bgColor.value};`;
        result = `${codeString}${codeColor}
    ${codeBgColor}
    ${codePadding}
    ${codeBorderRadius}
${endCodeString}`;

        inputCode.innerHTML = result;

        button.style.backgroundColor = bgColor.value;
    })

    padding.addEventListener("input", function() {
        codePadding = `padding: ${padding.value}px;`;
        result = `${codeString}${codeColor}
    ${codeBgColor}
    ${codePadding}
    ${codeBorderRadius}
${endCodeString}`;

        inputCode.innerHTML = result;

        button.style.padding = padding.value + "px";

    })

    borderRadius.addEventListener("input", function() {
        codeBorderRadius = `border-radius: ${borderRadius.value}px;`;
        result = `${codeString}${codeColor}
    ${codeBgColor}
    ${codePadding}
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
  