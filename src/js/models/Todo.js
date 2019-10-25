import uuid from 'uuid/v4';

export default class Todo {
  constructor(title, description, dueDate, priority) {
    this.id = `todo-${uuid()}`;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
