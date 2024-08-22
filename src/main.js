import {render} from './render.js';
import FilmsPresenter from './presenter/films-presenter.js';
import HeaderProfileView from "./view/header-profile-view.js";
import FilterView from "./view/filter-view.js";

const bodyElement = document.querySelector('body');
const siteMainElement = bodyElement.querySelector('.main');
const siteHeaderElement = bodyElement.querySelector('.header');

const filmsPresenter = new FilmsPresenter();

render(new FilterView(), siteMainElement);
render(new HeaderProfileView(), siteHeaderElement);

filmsPresenter.init(siteMainElement);
