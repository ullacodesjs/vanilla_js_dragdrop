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
}