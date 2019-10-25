import { elements, toggleForm } from './elements';

export const toggleTodoForm = () => {
  elements.todoForm.classList.toggle(toggleForm);
};

export const getAllInputValues = () => {
  const priority = document.querySelector('input[name = rdo]:checked').value;
  return {
    title: elements.todoInputName.value,
    description: elements.todoInputDescription.value,
    dueDate: elements.todoInputDate.value,
    priority,
  };
};

export const addTodoToList = todo => {
  const todoItem = `
  <li id=${todo.id} class="todo__item">
    <div class="todo__change">
      <div class="todo__icon todo__edit"><i class="fas fa-edit"></i></div>
      <div class="todo__icon todo__delete"><i class="fas fa-trash"></i></div>
    </div>
    <div class="todo__container">
      <div class="todo__priority priority__${todo.priority}">
        <i class="fas fa-flag"></i>
      </div>
      <div class="todo__content">
        <p class="content__date">${todo.dueDate}</p>
        <h3 class="content__title">${todo.title}</h3>
        <p class="content__description">${todo.description}</p>
      </div>
    </div>
  </li>`;
  elements.todoList.insertAdjacentHTML('beforeend', todoItem);
};

export const renderTodos = todos => {
  elements.todoList.innerHTML = '';
  let todoItems = '';
  todos.forEach(todo => {
    todoItems += `
    <li id=${todo.id} class="todo__item">
      <div class="todo__change">
        <div class="todo__icon todo__edit"><i class="fas fa-edit"></i></div>
        <div class="todo__icon todo__delete"><i class="fas fa-trash"></i></div>
      </div>
      <div class="todo__container">
        <div class="todo__priority priority__${todo.priority}">
          <i class="fas fa-flag"></i>
        </div>
        <div class="todo__content">
          <p class="content__date">${todo.dueDate}</p>
          <h3 class="content__title">${todo.title}</h3>
          <p class="content__description">${todo.description}</p>
        </div>
      </div>
    </li>`;
  });
  elements.todoList.insertAdjacentHTML('beforeend', todoItems);
};

export const changeProjectTitle = title => {
  elements.selectedProjectTitle.textContent = title;
};

elements.closeTodoBtn.addEventListener('click', () => {
  toggleTodoForm();
});
