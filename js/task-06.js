const refs = {

    inputLink: document.querySelector("#validation-input")
}
refs.inputLink.addEventListener('blur', onInputBlur)
function onInputBlur(event) {
    
  event.currentTarget.value.length === 6? 
        refs.inputLink.classList.add('valid'):
    
       
        refs.inputLink.classList.add('invalid')

    }
     
        
    console.log('потеря фокуса');
