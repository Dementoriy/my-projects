const getGoods = () =>{
    const links = document.querySelectorAll('https://wb123-889f4-default-rtdb.firebaseio.com/db.json')

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

    const getData = (value, category) =>{
        fetch('/db/db.json')
            .then((res) => res.json())
            .then((data)=>{
            const array = category ? data.filter((item) => item[category] === value) : data
                //отфильтровываем данные по ссылкам

                localStorage.setItem('goods', JSON.stringify(data))

                if(window.location.pathname !== "/goods.html"){
                    window.location.href = '/goods.html'
                }else{
                    renderGoods(array)
                }

    })
    //fetch - метод получения данных с сервера либо с локального файла
    //данные лежат в локальном файле. Можно воспользоваться сервисом firebase
    //response(res) - ответ от сервера
    }

    links.forEach((link) => {
        link.addEventListener('click',(event)=>{
            event.preventDefault()//заблокировать стандартное поведение переход по ссылке
            const linkValue = link.textContent
            const category = link.dataset.field

            getData()
        })
    })

    if (localStorage.getItem('goods') && window.location.pathname === "/goods.html"){
        renderGoods(JSON.parse(localStorage.getItem('goods')))
    }
    //возвращать данные только когда переходим не на главную страницу


    // localStorage.setItem('goods', JSON.stringify([1,2,3,4,5]))
    // //храним в localStorage массив с ключом 'goods'
    // //localStorage живет пока его не удалит пользователь или програмно
    // //sessionStorage живет пока не обновится страница

    // console.log(localStorage.getItem('goods'));
    // //вывод в консоль массива в строчкой [1,2,3,4,5]

    // const goods = JSON.parse(localStorage.getItem('goods'));
    // console.log(goods);
    // //сохраняем массив в виде массива, а не строки в переменной goods

    // localStorage.removeItem('goods')
    // console.log(localStorage);
    // //удаление элементов из localStorage
}

getGoods()