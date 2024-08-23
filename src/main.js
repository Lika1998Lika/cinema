import {render} from './render.js';
import FilmsPresenter from './presenter/films-presenter.js';
import HeaderProfileView from "./view/header-profile-view.js";
import FilterView from "./view/filter-view.js";
import TasksModel from './model/tasks-model.js';
import FooterStatisticsView from './view/footer-statistics-view.js'

const bodyElement = document.querySelector('body');
const siteMainElement = bodyElement.querySelector('.main');
const siteHeaderElement = bodyElement.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');

const tasksModel = new TasksModel();
const filmsPresenter = new FilmsPresenter();

render(new FilterView(), siteMainElement);
render(new HeaderProfileView(), siteHeaderElement);
render(new FooterStatisticsView(), siteFooterElement);

filmsPresenter.init(siteMainElement, tasksModel);

