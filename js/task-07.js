const refs = {
inputLink: document.querySelector("#font-size-control"),
spanLink: document.querySelector("#text")
    
}

refs.inputLink.addEventListener('input', onInputChange)

function onInputChange(event) {
    event.target === '50px'
    console.log(event.currentTarget.value);
    if (event.target !== event.currentTarget.value) {
       refs.spanLink.textContent === event.currentTarget.value
   }
    
   
   
}