const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const firstEl = document.createElement('li')
firstEl.textContent = ingredients[0]

const secondEl = document.createElement('li')
secondEl.textContent = ingredients[1]

const thirdEl = document.createElement('li')
thirdEl.textContent = ingredients[2]

const fourthEl = document.createElement('li')
fourthEl.textContent = ingredients[3]

const fifthEl = document.createElement('li')
fifthEl.textContent = ingredients[4]

const sixthEl = document.createElement('li')
sixthEl.textContent = ingredients[5]

const listUl = document.querySelector('#ingredients')
console.log(listUl);
listUl.append(firstEl, secondEl, thirdEl, fourthEl, fifthEl, sixthEl)