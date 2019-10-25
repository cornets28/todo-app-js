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
  // 4. Change selected title
  const project = state.projects.find(val => val.id === state.selected);
  todoView.changeProjectTitle(project.name);
  // 5. Render Todos
  todoView.renderTodos(project.todos);
});

const todoController = () => {
  // 1. toggle form
  todoView.toggleTodoForm();
  // 2. Get values
  const { title, description, dueDate, priority } = todoView.getAllInputValues();

  // 3. Check if all values exist
  if (title && description && dueDate && priority) {
    // 4. Create a todo
    const todo = new Todo(title, description, dueDate, priority);
    //5. Update the state
    const project = state.projects.find(val => val.id === state.selected);
    project.todos.push(todo);
    //6. Update the added todo in UI
    todoView.addTodoToList(todo);
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

elements.todoList.addEventListener('click', (e) => { 
  const id = todoView.getSelectedTodoID(e);
  const project = state.projects.find(val => val.id === state.selected);
  const filteredTodos = project.todos.filter((todo) => todo.id !== id);
  project.todos = filteredTodos;
  todoView.renderTodos(project.todos); 
})

elements.todoList.addEventListener('click', (e) => {
  const id = todoView.getSelectedTodoID(e);
  const project = state.projects.find(val => val.id === state.selected);
  const todo = project.todos.find(val => val.id === id); 
  alert(`${todo}`)
})