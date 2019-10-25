import Project from './models/Project';
import Todo from './models/Todo';
import { elements } from './views/elements';
import * as projectView from './views/projectView';
import * as todoView from './views/todoView';

/*
 * Global State
 * - Contains Projects
 */
const state = {
  projects: [],
  todos: [],
  selected: undefined,
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

elements.projectList.addEventListener('click', e => {
  // 1. Get the selected ID
  const id = projectView.getSelectedProjectID(e);
  // 2. Highlight selected ID
  projectView.highlightSelected(id);
  // 3. Add it to our state
  state.selected = id;
});

const todoController = () => {
  // 1. toggle form
  todoView.toggleTodoForm();
  // 2. Get values
  const { title, description, dueDate, priority } = todoView.getAllInputValues();

  // 3. Check if all values exist
  if (title && description && dueDate && priority) {
    const todo = new Todo(title, description, dueDate, priority);
  } else {
    alert('Please enter all the values');
  }
};

elements.addTodoBtn.addEventListener('click', () => {
  if (state.selected) {
    todoView.toggleTodoForm();
  } else {
    alert('please create/select a project to add notes');
  }
});

elements.todoSubmitBtn.addEventListener('click', () => {
  todoController();
});
