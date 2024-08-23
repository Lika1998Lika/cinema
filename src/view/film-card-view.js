import {createElement} from '../render.js';
import {createFilmCardInfoTemplate} from './film-card-info-template.js';
import {createFilmCardControlsTemplate} from './film-card-controls-template.js';

const createFilmCardTemplate = (task) =>
  `
    <article class="film-card">
      ${createFilmCardInfoTemplate(task)}
      ${createFilmCardControlsTemplate()}
    </article>
  `;

export default class FilmCardView {
  constructor(task) {
    this.task = task;
  }
  getTemplate() {
    return createFilmCardTemplate(this.task);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
