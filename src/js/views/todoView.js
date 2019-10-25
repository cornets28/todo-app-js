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

elements.closeTodoBtn.addEventListener('click', () => {
  toggleTodoForm();
});
