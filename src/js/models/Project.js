/* eslint-disable class-methods-use-this */
import uuid from 'uuid/v4';

export default class Project {
  constructor(name) {
    this.id = `project-${uuid()}`;
    this.name = name;
    this.icon = this.getRandomIcon();
    this.todos = [];
  }

  getRandomIcon() {
    const icons = [
      'fa-accusoft',
      'fa-ad',
      'fa-address-book',
      'fa-address-card',
      'fa-adjust',
      'fa-adobe',
      'fa-adversal',
      'fa-affiliatetheme',
      'fa-air-freshener',
      'fa-algolia',
      'fa-anchor',
      'fa-archive',
      'fa-archway'];
    const random = Math.round(Math.random() * icons.length) + 1;
    return icons[random];
  }
}
