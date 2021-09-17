const refs = {
inputLink: document.querySelector("#name-input"),
spanLink: document.querySelector("#name-output")
    
}
refs.inputLink.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value);
    
    refs.spanLink.textContent = event.currentTarget.value === "" ?
        'незнакомец' :
        event.currentTarget.value
}
console.log(refs.spanLink);