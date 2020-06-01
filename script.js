var buttonBack = document.getElementById('button_Back'); // подключаем кнопку
var buttonForward = document.getElementById('button_Forward'); // подключаем кнопку

var proverbs = document.querySelector('#ollContent__proverbs'); // добираемся к полю proverbs

var ollContent_block = proverbs.parentNode; // бобираемся к родителю proverbs

var picture = document.createElement('img'); // создаем элемент в ДОМ дереве

ollContent_block.insertBefore(picture, proverbs); // picture вставляем before proverbs 

var ollProverbs = ['Хитрость лисы – в глупости кур.',
                    'Ошибаться — ума набираться.',
                    'Хорошая музыка производит впечатление, что она не придумана с нуля, а просто взята из твоей души и проиграна.',
                    'Всем известно, что за деньги можно купить туфли, но не счастье, еду, но не аппетит, постель, но не сон, лекарство, но не здоровье, слуг, но не друзей, развлечение, но не радость, учителей, но не ум.',
                    'Не стыдно не знать, стыдно не учиться.',
                    'Выбери себе работу по душе, и тебе не придётся работать ни одного дня в своей жизни.',
                    'Под здравым смыслом всякий разумеет только свой собственный.',
                    'Не задав правильный вопрос, невозможно получить правильный ответ.',
                    'Тот не ошибается, кто ничего не делает.',
                    'Хочешь помочь человеку – дай ему не рыбу, а удочку.',
                    'Я знаю, что ничего не знаю, но многие не знают и этого.'];

var ollFoto = ['imga/1_лиса.jpg',
                'imga/2_ошибаться.jpg', 
                'imga/3_музон.jpg', 
                'imga/4_бабло.jpg', 
                'imga/5_учимся.jpg', 
                'imga/6_работа.jpg',
                'imga/7_здравый.jpeg', 
                'imga/8_вопрос.jpg', 
                'imga/9_неOшибаться.jpg', 
                'imga/10_удочка.jpg', 
                'imga/11_не_знаю.jpg'];


var length_start_ollFoto = 0;
var length_finish_ollFoto = ollFoto.length + 1;
// добавила к длине + 1, так как буду высчитивать рандомное число
// по формуде внизу, если дилинна масива равно 11, то умножая на переменную равную 12, выбьет рандомное число с 0 до 11

var random = Math.floor(Math.random() * length_finish_ollFoto);



picture.src = ollFoto[random]; // подгружаем рандомную картинку
proverbs.innerText = ollProverbs[random]; // подгружаем рандомный proverbs







function whatButtonDoesBack() {

    if(random === 0) {                                     
        random = ollFoto.length - 1;                        // переназначаем random на конец последнего элемента массива
        picture.src = ollFoto[random];
        proverbs.innerText = ollProverbs[random];
    } else {
        proverbs.innerText = ollProverbs[--random];         // декримент у random отминусовывает 1
        picture.src = ollFoto[random];
    }
}

function whatButtonDoesForward() {

    if(random === ollFoto.length - 1) {
        random = length_start_ollFoto;                      // переназначаем random на начало массива
        picture.src = ollFoto[random];
        proverbs.innerText = ollProverbs[random];
    } else {
        proverbs.innerText = ollProverbs[++random];         // инкремент у random плюсует 1
        picture.src = ollFoto[random];
    }

}






ollFoto.push('test.jpg'); // протестила, добавила картинку в массив
ollProverbs.push('test'); // и proverbs




buttonBack.addEventListener('click', whatButtonDoesBack);
buttonForward.addEventListener('click', whatButtonDoesForward);

















































//______________________________________________________________________________________________________________________________




// var elemOne = document.querySelector('#sectionOne');
// var elemTwo = document.querySelector('#sectionTwo');
// var elemThree = document.querySelector('#sectionThree');
// var elemFour = document.querySelector('#sectionFour');
// var elemFive = document.querySelector('#sectionFive');
// var elemSix = document.querySelector('#sectionSix');
// var elemSeven = document.querySelector('#sectionSeven');
// var elemEigth = document.querySelector('#sectionEigth');
// var elemNine = document.querySelector('#sectionNine');
// var elemTen = document.querySelector('#sectionTen');
// var elemEleven = document.querySelector('#sectionEleven');

// var buttonBack = document.getElementById('button_Back');
// var buttonForward = document.getElementById('button_Forward');



// var contentArr = [];
// contentArr.push(elemOne);
// contentArr.push(elemTwo);
// contentArr.push(elemThree);
// contentArr.push(elemFour);
// contentArr.push(elemFive);
// contentArr.push(elemSix);
// contentArr.push(elemSeven);
// contentArr.push(elemEigth);
// contentArr.push(elemNine);
// contentArr.push(elemTen);
// contentArr.push(elemEleven); 
// // все полученные элементы пушим в пустой массив



// var min = contentArr.length - contentArr.length; // 0
// var max = contentArr.length; // 11
// var random = Math.floor(Math.random() * max); // от 0, до 10
// // для отображение рандомной картинки на экране, вывожу рандомное число от 0 до 10, так как как буду работать с индексам массива
// // длинна масива от 1 до 11
// // индекс массива от 0 до 10

// contentArr[random].style.display = 'block'; // загрузка рандомной картинки про обновлении страницы



// function whatButtonDoesBack(event) { // функция запускаеться при нажатии кнопки - Back

//     if(random === min) {                                    // если random (индекс) равно ноль, то:
//         // debugger;
//         contentArr[random].style.display = 'none';          // прошлая картинка с индексом 0 скрываеться 
//         random = max - 1;                                   // random перезаписываем на 10
//         contentArr[random].style.display = 'block';         // отображаем 10 по индексу элемент
//     } else {                                                // если random не ноль, а 6 например, то:
//         // debugger;
//         contentArr[random--].style.display = 'none';        // 6 элемент скрываем и срабатывает постфиксный декремент, который после события отменяет 1
//         contentArr[random].style.display = 'block';         // 5 элемент отображаем
//     }
        
// }


// function whatButtonDoesForward(event) { // // функция запускаеться при нажатии кнопки - Forward

//     if(random === max - 1) {                                // если random (индекс) равно 10, то:
//         contentArr[random].style.display = 'none';          // прошлая картинка с индексом 10 скрываеться 
//         random = min;                                       // random перезаписываем на 0
//         contentArr[random].style.display = 'block';         // отображаем 0 по индексу элемент
//     } else {                                                // если random не 10, а 6 например, то:
//         contentArr[random++].style.display = 'none';        // 6 элемент скрываем и срабатывает постфиксный инкремент, который после события увеличивает на 1
//         contentArr[random].style.display = 'block';         // 7 элемент отображаем 
//     }
        
// }




// buttonBack.addEventListener('click', whatButtonDoesBack); // ставим прослушку-шпиона на кнопку
// buttonForward.addEventListener('click', whatButtonDoesForward); // ставим прослушку-шпиона на кнопку