import { elements, toggleForm } from './elements';

export const getInputValue = () => {
  return elements.projectInput.value;
};

export const toggleTodoForm = () => {
  elements.todoForm.classList.toggle(toggleForm);
};

export const getAllInputValues = (todoValues) => {
    elements.todoInputName.value
    elements.todoInputDate.value
    elements.todoInputDescription
   

    return todoValues;

}


elements.addTodoBtn.addEventListener('click', () => {
    toggleTodoForm();
  });

elements.closeTodoBtn.addEventListener('click', () => {
  toggleTodoForm();
});

