const refs = {
inputLink: document.querySelector("#font-size-control"),
spanLink: document.querySelector("#text")
    
}

refs.inputLink.addEventListener('input', onInputChange)

function onInputChange(event) {
    
    console.log(event.currentTarget.value);
    if (event.target !== event.currentTarget.value) {
        refs.spanLink.setAttribute(
   "style", `font-size: ${event.currentTarget.value}px`);
   }
    
   
   
}