const big = document.getElementById('btn_big')
const small = document.getElementById('btn_small')
const img = document.getElementById('img')

big.addEventListener('click', () => {
   img.style.width = '500px';
   img.style.height = '500px';

})

small.addEventListener('click', () => {
    img.style.width = '100px';
    img.style.height = '100px';
 
 })