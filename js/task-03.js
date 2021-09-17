  
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('#gallery')
console.log(galleryList);


const array = []
images.forEach((el) => {
const navElOne = document.createElement('li')
  const imageElOne = document.createElement('img')
  
  imageElOne.src = el.url;
  imageElOne.alt = el.alt;
  imageElOne.width = 640;
  navElOne.appendChild(imageElOne)
 array.push(navElOne)
})


galleryList.append( ...array)
galleryList.classList.add('picture')



