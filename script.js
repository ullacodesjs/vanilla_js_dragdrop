const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const faveBooks = [
    '1Q84',
    'Harry Potter 4th Book',
    'Throne of Glass',
    'Indelicacy',
    'We Were Liars',
    'Lord of The Rings',
    'Hamnet',
    'Just Kids',
    'At Risk',
    'IT'

];

//store list items
const listItems = [];

let dragStartIndex;

createList();

//insert list items into dom
function createList() {
    [...faveBooks]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((book, index) => {
            const listItem = document.createElement('li');

            // listItem.classList.add('wrong');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index + 1}></span>
        <div class="draggable" draggable="true">
        <p class="book-name">${book}</p>
        <i class="fas fa-book"></i>
        </div>
        `;

        listItems.push(listItem);

        draggable_list.appendChild(listItem);
    });
addEventListeners();
}

function dragStart() {
    // console.log('Ev('ent: ', 'dragstart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    console.log(dragStartIndex);
}
function dragEnter() {
    // console.log('Event: ', 'dragenter');
    this.classList.add('over');
}
function dragLeave() {
    // console.log('Event: ', 'dragleave');
    this.classList.remove('over');
}
function dragOver(e) {
    // console.log('Event: ', 'dragover');
    e.preventDefault();
}
function dragDrop() {
    // console.log('Event: ', 'drop');
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
}

//swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}
//check the order of list items
function checkOrder() {
    listItems.forEach((listItem, index) => {
        const bookName = listItem.querySelector('.draggable')
        .innerText.trim();

        if(bookName !== faveBooks[index]) {
            listItem.classList.add('wrong');
        } else {
            listItem.classList.remove('wrong');
            listItem.classList.add('right');
        }
    });

}

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);

    });

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
        
    });
}

check.addEventListener('click', checkOrder);