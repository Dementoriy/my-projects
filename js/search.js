const search = function(){
    const input = document.querySelector('.search-block > input') //обращаемся к классу search-block и в нем ищем тег input
    const searchBtn = document.querySelector('.search-block > button')

    const renderGoods = (goods) =>{
        const goodsContainer = document.querySelector('.long-goods-list')

        goodsContainer.innerHTML = ""
        //убрали карточки

        goods.forEach(good =>{
            const goodBlock = document.createElement('div')

            goodBlock.classList.add('col-lg-3')
            goodBlock.classList.add('col-sm-6')

            goodBlock.innerHTML=`
                <div class="goods-card">
						<span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
						<img src="db/${good.img}" alt="${good.name}" class="goods-image">
						<h3 class="goods-title">${good.name}</h3>
						<p class="goods-description">${good.description}</p>
						<button class="button goods-card-btn add-to-cart" data-id="${good.id}">
							<span class="button-price">$${good.price}</span>
						</button>
					</div>
            `
            goodsContainer.append(goodBlock)

        })
    }

    const getData = (value) =>{
        fetch('/db/db.json')
            .then((res) => res.json())
            .then((data)=>{
            const array = data.filter(good =>{
                return good.name.toLowerCase().includes(value.toLowerCase());
            })
                //отфильтровываем данные по ссылкам
                //toLowerCase() опускает верхний регистр
                //includes ищет в одной строке другую подстроку
                //good.name.toLowerCase().includes(value.toLowerCase()); возвращает true or false

                localStorage.setItem('goods', JSON.stringify(data))

                if(window.location.pathname !== "/goods.html"){
                    window.location.href = '/goods.html'
                }else{
                    renderGoods(array)
                }

    })

    //input.addEventListener('input',(event)=>{ //обработчик событий инпут //'function()' = '=>'
        //console.log(event.target.value);
    //}) //event - объект события
        //target - сам инпут
        //value - введенное значение
    
//    try{
//     searchBtn.addEventListener('click', ()=>{
//         console.log(input.value);//вывод в консоль введенного в input значения value
//     })
//    }catch (e){
//        console.error(e.messege)
//    }

   searchBtn.addEventListener('click', ()=>{
   getData(input.value)
   })
}
}
search()