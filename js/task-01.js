document.querySelectorAll('h2').forEach(el => console.log(`категория: ${el.textContent}, кол-во элементов: ${el.nextElementSibling.children.length}`))



