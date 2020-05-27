var elemOne = document.querySelector('#sectionOne');
var elemTwo = document.querySelector('#sectionTwo');
var elemThree = document.querySelector('#sectionThree');
var elemFour = document.querySelector('#sectionFour');
var elemFive = document.querySelector('#sectionFive');
var elemSix = document.querySelector('#sectionSix');
var elemSeven = document.querySelector('#sectionSeven');
var elemEigth = document.querySelector('#sectionEigth');
var elemNine = document.querySelector('#sectionNine');
var elemTen = document.querySelector('#sectionTen');
var elemEleven = document.querySelector('#sectionEleven');

var buttonBack = document.getElementById('button_Back');
var buttonForward = document.getElementById('button_Forward');



var contentArr = [];
contentArr.push(elemOne);
contentArr.push(elemTwo);
contentArr.push(elemThree);
contentArr.push(elemFour);
contentArr.push(elemFive);
contentArr.push(elemSix);
contentArr.push(elemSeven);
contentArr.push(elemEigth);
contentArr.push(elemNine);
contentArr.push(elemTen);
contentArr.push(elemEleven); 
// все полученные элементы пушим в пустой массив



var min = contentArr.length - contentArr.length; // 0
var max = contentArr.length; // 11
var random = Math.floor(Math.random() * max); // от 0, до 10
// для отображение рандомной картинки на экране, вывожу рандомное число от 0 до 10, так как как буду работать с индексам массива
// длинна масива от 1 до 11
// индекс массива от 0 до 10

contentArr[random].style.display = 'block'; // загрузка рандомной картинки про обновлении страницы



function whatButtonDoesBack(event) { // функция запускаеться при нажатии кнопки - Back

    if(random === min) {                                    // если random (индекс) равно ноль, то:
        // debugger;
        contentArr[random].style.display = 'none';          // прошлая картинка с индексом 0 скрываеться 
        random = max - 1;                                   // random перезаписываем на 10
        contentArr[random].style.display = 'block';         // отображаем 10 по индексу элемент
    } else {                                                // если random не ноль, а 6 например, то:
        // debugger;
        contentArr[random--].style.display = 'none';        // 6 элемент скрываем и срабатывает постфиксный декремент, который после события отменяет 1
        contentArr[random].style.display = 'block';         // 5 элемент отображаем
    }
        
}


function whatButtonDoesForward(event) { // // функция запускаеться при нажатии кнопки - Forward

    if(random === max - 1) {                                // если random (индекс) равно 10, то:
        contentArr[random].style.display = 'none';          // прошлая картинка с индексом 10 скрываеться 
        random = min;                                       // random перезаписываем на 0
        contentArr[random].style.display = 'block';         // отображаем 0 по индексу элемент
    } else {                                                // если random не 10, а 6 например, то:
        contentArr[random++].style.display = 'none';        // 6 элемент скрываем и срабатывает постфиксный инкремент, который после события увеличивает на 1
        contentArr[random].style.display = 'block';         // 7 элемент отображаем 
    }
        
}




buttonBack.addEventListener('click', whatButtonDoesBack); // ставим прослушку-шпиона на кнопку
buttonForward.addEventListener('click', whatButtonDoesForward); // ставим прослушку-шпиона на кнопку
