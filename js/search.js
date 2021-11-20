const search = function(){
    const input = document.querySelector('.search-block > input') //обращаемся к классу search-block и в нем ищем тег input
    const searchBtn = document.querySelector('.search-block > button')

    //input.addEventListener('input',(event)=>{ //обработчик событий инпут //'function()' = '=>'
        //console.log(event.target.value);
    //}) //event - объект события
        //target - сам инпут
        //value - введенное значение
    
   
    searchBtn.addEventListener('click', ()=>{
        console.log(input.value);//вывод в консоль введенного в input значения value
    })
}
search()