import Project from './models/Project';
import Todo from './models/Todo';
import { elements } from './views/elements';
import * as projectView from './views/projectView';
import * as todoView from './views/todoView';

/*
 * Global State
 * - Contains Projects
 */
let state = {};

const setupState = () => {
  if (localStorage.getItem('state')) {
    state = JSON.parse(localStorage.getItem('state'));
  } else {
    const defaultProject = new Project('Default');
    state = {
      projects: [],
      todos: [],
      selected: defaultProject.id,
    };
    state.projects.push(defaultProject);
  }
};

const setupView = () => {
  projectView.renderProjects(state.projects, state.selected);
  projectView.highlightSelected(state.selected);
  const project = state.projects.find(val => val.id === state.selected);
  todoView.renderTodos(project.todos);
  todoView.changeProjectTitle(project.name);
};

setupState();
setupView();

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
    localStorage.setItem('state', JSON.stringify(state));
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
  localStorage.setItem('state', JSON.stringify(state));
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
  console.log(title, description, dueDate, priority);

  // 3. Check if all values exist
  if (title && description && dueDate && priority) {
    if (state.editing) {
      // 4. Find the todo
      const project = state.projects.find(val => val.id === state.selected);
      const todo = project.todos.find(el => el.id === state.editing);
      // 5. update todo
      todo.title = title;
      todo.description = description;
      todo.dueDate = dueDate;
      todo.priority = priority;
      //6. update state
      state.editing = null;
      localStorage.setItem('state', JSON.stringify(state));
      //7. render todos
      todoView.renderTodos(project.todos);
    } else {
      // 4. Create a todo
      const todo = new Todo(title, description, dueDate, priority);
      //5. Update the state
      const project = state.projects.find(val => val.id === state.selected);
      project.todos.push(todo);
      localStorage.setItem('state', JSON.stringify(state));
      //6. Update the added todo in UI
      todoView.addTodoToList(todo);
    }
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
  todoView.clearAllinputValues();
});

const deleteTodo = id => {
  const project = state.projects.find(val => val.id === state.selected);
  const filteredTodos = project.todos.filter(todo => todo.id !== id);
  project.todos = filteredTodos;
  localStorage.setItem('state', JSON.stringify(state));
  todoView.renderTodos(project.todos);
};

const editTodo = id => {
  // 1. Find the todo
  const project = state.projects.find(val => val.id === state.selected);
  const todo = project.todos.find(el => el.id === id);
  // 2. Toggle todoform
  todoView.toggleTodoForm();
  todoView.editTodo(todo);
  //3. Add edit item to state
  state.editing = todo.id;
};

elements.todoList.addEventListener('click', e => {
  const id = todoView.getSelectedTodoID(e);
  if (id) {
    if (e.target.closest('.todo__edit')) {
      editTodo(id);
    } else if (e.target.closest('.todo__delete')) {
      deleteTodo(id);
    }
  }
});
