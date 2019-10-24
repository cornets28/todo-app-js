/* eslint-disable class-methods-use-this */
import uuid from 'uuid/v4';

export default class Project {
  constructor(name) {
    this.id = uuid();
    this.name = name;
    this.icon = this.getRandomIcon();
    this.todos = [];
  }

  getRandomIcon() {
    const icons = ['fa-home', 'fa-asterisk', 'fa-cloud', 'fa-cut'];
    const random = Math.round(Math.random() * icons.length) + 1;
    return icons[random];
  }
}
