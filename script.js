const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const faveBooks = [
    '1Q84',
    'Harry Potter 4',
    'Throne of Glass',
    'Indelicacy',
    'We Were Liars',
    'Lord of the Rings',
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
    .forEach((book, index) => {
        const listItem = document.createElement('li');

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
}