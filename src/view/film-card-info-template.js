export const createFilmCardInfoTemplate = (task) => {
  const {title, description, poster, total_rating, alternative_title } = task;

  return (
    `
    <a class="film-card__link">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${total_rating}</p>
    <p class="film-card__info">
    <span class="film-card__year">1929</span>
    <span class="film-card__duration">1h 55m</span>
    <span class="film-card__genre">Musical</span>
    </p>
    <img src=${poster} alt="${alternative_title}" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <span class="film-card__comments">5 comments</span>
    </a>
    `
    )
  };
 
