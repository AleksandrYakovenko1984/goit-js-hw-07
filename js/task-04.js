
const decBtn = document.querySelector('[data-action="decrement"]')
    const incBtn = document.querySelector('[data-action="increment"]')
        const value = document.getElementById("value")

    function getValue() {
    let value = 0;
    function decrement() {
        return(value -=1)
    }
    function increment() {
        return(value +=1)
    }
        return { decrement, increment }
}
const call = getValue()
console.log(call);

decBtn.addEventListener('click', ()=>{
    console.log('click')
    let result = call.decrement()
    console.log(result);
    value.textContent = result
})
incBtn.addEventListener('click', ()=>{
    console.log('click')
    let result = call.increment()
    console.log(result);
    value.textContent = result
})
