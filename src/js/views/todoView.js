import { elements, toggleForm } from './elements';

export const getInputValue = () => {
  return elements.projectInput.value;
};



// export const clearProjectForm = () => {
//   elements.projectInput.value = '';
// };

// export const toggleProjectForm = () => {
//   elements.projectForm.classList.toggle(toggleForm);
// };

// elements.addProjectBtn.addEventListener('click', () => {
//   toggleProjectForm();
// });

export const toggleTodoForm = () => {
  elements.todoForm.classList.toggle(toggleForm);
};

elements.addTodoBtn.addEventListener('click', () => {
    toggleTodoForm();
  });

elements.closeTodoBtn.addEventListener('click', () => {
  toggleTodoForm();
});

