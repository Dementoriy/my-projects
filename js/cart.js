const cart = function(){
    const cartBtn = document.querySelector('.button-cart')
const cart = document.getElementById('modal-cart')
//getElementById отрабатывает быстрее

console.log(cart);

cartBtn.addEventListener('click',function(){
    cart.style.display = 'flex'
})
//повесить несколько обработчиков на 1 событие клик

const closeBtn = cart.querySelector('.modal-close')
closeBtn.addEventListener('click', function(){
    cart.style.display = ''
})
}

cart()
//Создали функцию cart и тут же вызвали её чтобы в других
//js файлах можно было использовать такие же имена переменных
//что и внутри этой функции (инкапсуляция кода)