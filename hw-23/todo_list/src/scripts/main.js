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

//Get root element from DOM.
const root = document.getElementById('root');

if (root) {
  const container = createElement('div', 'container');
  root.appendChild(container);

  //Control panel.
  const controlPanel = createElement('div', 'control-panel');
  container.appendChild(controlPanel);

  const btnDellAll = createElement('button', 'control-panel__btn-dell', 'Delete All' );
  controlPanel.appendChild(btnDellAll);

  const inputTodoText = createElement('input', 'control-panel__input');
  inputTodoText.type = 'text';
  inputTodoText.placeholder = 'Enter todo ...';
  controlPanel.appendChild(inputTodoText);

  const btnAdd = createElement('button', 'control-panel__btn-ad', 'Add');
  controlPanel.appendChild(btnAdd);


  //Card.
  const card = createElement('div', 'card');
  container.appendChild(card);

  const cardCheckbox = createElement('checkbox', 'card__checkbox');
  cardCheckbox.type = 'checkbox'
  card.appendChild(cardCheckbox);
  
  const cardInput = createElement('p', 'card__input');
  card.appendChild(cardInput);

  const cardButtonDell = createElement('button', 'card__btn-dell');
  card.appendChild(cardButtonDell);

  const cardTime = createElement('time', 'card__time');
  card.appendChild(cardTime);

  


}


 
 