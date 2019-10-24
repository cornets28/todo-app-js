import Project from './models/Project';
import { elements } from './views/elements';
import * as projectView from './views/projectView';

/*
 * Global State
 * - Contains Projects
 */
const state = {
  projects: [],
};

/*
 * PROJECT CONTROLLER
 */

const projectController = () => {
  // 1. Hide the form

  projectView.toggleProjectForm();

  // 2. get input value from project form
  const value = projectView.getInputValue();

  if (value !== '' || value != null) {
    // 3. Create a project
    const project = new Project(value);
    // 4. Update the state
    state.projects.push(project);
    // 5. Update the project list UI
    projectView.addProjectToView(project);

    // 6. Clear input
    projectView.clearProjectForm();
  } else {
    alert("Project name can't be empty");
  }
};

elements.submitProjectBtn.addEventListener('click', () => {
  projectController();
});
