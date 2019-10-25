import { elements, toggleForm, toggleProjectSelection } from './elements';

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

export const getSelectedProjectID = e => {
  if (e.target.closest("[id^='project']")) {
    return e.target.closest("[id^='project']").id;
  }
};

export const highlightSelected = id => {
  document
    .querySelectorAll("[id^='project']")
    .forEach(el => el.classList.remove(toggleProjectSelection));
  document.getElementById(id).classList.add(toggleProjectSelection);
};

elements.addProjectBtn.addEventListener('click', () => {
  toggleProjectForm();
});

elements.closeProjectBtn.addEventListener('click', () => {
  toggleProjectForm();
});
