let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

let addOrSubtract = (isAddition) => {
    let output = document.querySelector("#output");
    let num = parseInt(output.innerText);
    if (isAddition) {
        output.innerText = num + 1;
    } else {
        if(num > 0){
            output.innerText = num - 1;
        }
        else {
            window.alert('Please make sure number is positive')
        }
        
    }
}
add.addEventListener("click", () => {
    addOrSubtract(true);
})

subtract.addEventListener("click", () => {
    addOrSubtract(false);
})