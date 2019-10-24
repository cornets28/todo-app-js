import { elements, toggleForm } from './elements';

export const getInputValue = () => {
  return elements.projectInput.value;
};

export const addProjectToView = project => {
  const projectItem = `
  <li id=${project.id} class="project__item ">
    <i class="fas ${project.icon}"></i>
    <p>${project.name}</p>
  </li>`;
  elements.projectList.insertAdjacentHTML('beforeend', projectItem);
};

export const clearProjectForm = () => {
  elements.projectInput.value = '';
};

export const toggleProjectForm = () => {
  elements.projectForm.classList.toggle(toggleForm);
};

elements.addProjectBtn.addEventListener('click', () => {
  toggleProjectForm();
});

elements.closeProjectBtn.addEventListener('click', () => {
  toggleProjectForm();
});
