//Function for adding tags, classes, text, and id.
function createElement(tagName, className = '', text = '', id = '') {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  if (id) {
    element.id = id;
  }

  return element;
}

//Card creation function 
function createTodoCard(todoText = 'Todo text') {
  const card = createElement('div', 'card');

  const cardCheckbox = createElement('input', 'card__checkbox');
  cardCheckbox.type = 'checkbox';
  card.appendChild(cardCheckbox);

  const cardInput = createElement('p', 'card__input', todoText);
  card.appendChild(cardInput);

  const cardButtonDell = createElement('button', 'card__btn-dell', 'Delete');
  card.appendChild(cardButtonDell);

  const now = new Date();
  const cardTime = createElement('time', 'card__time');
  cardTime.dateTime = now.toISOString(); 
  cardTime.textContent = now.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  card.appendChild(cardTime);

  return card;
}

//Get root element from DOM.
const root = document.getElementById('root');

if (root) {
  const todoList = createElement('div', 'todo-list');
  root.appendChild(todoList);

  //Control panel.
  const controlPanel = createElement('div', 'control-panel');
  todoList.appendChild(controlPanel);

  const btnDellAll = createElement('button', 'control-panel__btn-dell', 'Delete All' );
  controlPanel.appendChild(btnDellAll);

  const inputTodoText = createElement('input', 'control-panel__input', '', 'todo-input');
  inputTodoText.type = 'text';
  inputTodoText.placeholder = 'Enter todo ...';
  controlPanel.appendChild(inputTodoText);

  const btnAdd = createElement('button', 'control-panel__btn-ad', 'Add');
  controlPanel.appendChild(btnAdd);
}

//Event handler todo-list
//Remove all cards
const todoList = document.querySelector('.todo-list');
const inputTodoText = document.querySelector('.control-panel__input');

if (todoList && inputTodoText) {
  todoList.addEventListener('change', (event) => {
    const cardCheckbox = event.target.closest('.card__checkbox');

    if (cardCheckbox) {
      const card = cardCheckbox.closest('.card');

      if (card) {
        card.classList.toggle('card--completed', cardCheckbox.checked);
      }
    }
  });

todoList.addEventListener('click', (event) => {
  const btnDellAll = event.target.closest('.control-panel__btn-dell');
    if (btnDellAll) {
    const cards = todoList.querySelectorAll('.card');
    cards.forEach((card) => card.remove());
      return;
  }

  //Add a card
  const btnAdd = event.target.closest('.control-panel__btn-ad');
    if (btnAdd) {
      const todoText = inputTodoText.value.trim();

      if (!todoText) {
        inputTodoText.focus();
        return;
      }

      const card = createTodoCard(todoText);
      todoList.appendChild(card);
      inputTodoText.value = '';
      inputTodoText.focus();
      return;
  }

  //Delete card
  const cardButtonDell = event.target.closest('.card__btn-dell');
    if (cardButtonDell) {
    const card = cardButtonDell.closest('.card');
      if (card) {
      card.remove();
    }
  }
  });
}
 



