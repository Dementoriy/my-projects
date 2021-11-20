const getGoods = () =>{
    const links = document.querySelectorAll('.navigation-link')

    const getData = () =>{
        fetch('https://wildberries-8b03d-default-rtdb.europe-west1.firebasedatabase.app/db.json')
    .then((response) => response.json())
    .then((date)=>{
        console.log(date);
    })
    //fetch - метод получения данных с сервера либо с локального файла
    //данные лежат в firebase можно заменить на путь к локальному файлу
    //response - ответ от сервера
    }

    links.forEach((link) => {
        link.addEventListener('click',(event)=>{
            event.preventDefault()//заблокировать стандартное поведение переход по ссылке
        })
    })

    localStorage.setItem('goods', JSON.stringify([1,2,3,4,5]))
    //храним в localStorage массив с ключом 'goods'
    //localStorage живет пока его не удалит пользователь или програмно
    //sessionStorage живет пока не обновится страница

    console.log(localStorage.getItem('goods'));
    //вывод в консоль массива в строчкой [1,2,3,4,5]

    const goods = JSON.parse(localStorage.getItem('goods'));
    console.log(goods);
    //сохраняем массив в виде массива, а не строки в переменной goods

    localStorage.removeItem('goods')
    console.log(localStorage);
    //удаление элементов из localStorage
}

getGoods()