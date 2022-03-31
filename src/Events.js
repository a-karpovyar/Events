/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    document.body.insertAdjacentElement('afterbegin', button);
    button.textContent = 'Удали меня';
    button.onclick = () => document.getElementsByTagName('button')[0].remove();
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    document.body.insertAdjacentHTML('beforeend', `<ul></ul>`);
    arr.map((item) => {
        const element = document.createElement('li');
        element.textContent = item;
        element.addEventListener('mouseover', () =>
            element.setAttribute('title', element.textContent),
        );
        document
            .querySelector('ul')
            .insertAdjacentElement('beforeend', element);
    });
}
/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    document.body.insertAdjacentHTML(
        'beforeend',
        `<a href='https://tensor.ru/'>tensor</a>`,
    );
    const firsttap = document.querySelector('a');
    firsttap.addEventListener('click', (event) => {
        if (!firsttap.textContent.includes('https://tensor.ru/')) {
            event.preventDefault();
            firsttap.textContent += ' https://tensor.ru/';
        }
    });
}
/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.insertAdjacentHTML(
        'beforeend',
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>',
    );
    const elem = document.querySelector('ul');
    document.querySelector('button').onclick = () => {
        const element = document.createElement('li');
        element.textContent = 'Пункт';
        elem.insertAdjacentElement('beforeend', element);
    };
    elem.addEventListener('click', function (event) {
        if (event.target.nodeName === 'LI') {
            event.target.textContent += '!';
        }
    });
}
