import { getRandomInteger, humanizeTaskDueDate } from "../utils.js"

const generateComment = () => {
  const emotion = ["smile", "sleeping", "puke", "angry"];
  const comment = [
    'wow',
    'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg',
    'omg',
    'class',
    'super!'
  ];
  const author = ['Ilya Oreilly', 'Petya', 'Ivan', 'Anzhelika', 'lika'];

  const date = ["2019-05-11T16:12:32.554Z", "2018-04-10T17:12:32.554Z", "2017-05-11T18:12:32.554Z", "2015-05-11T19:12:32.554Z","2024-06-11T15:12:32.554Z"];

}

const generateTitle = () => {
  const title = [
    'The Dance of Life',
    'A Little Pony Without The Carpet',
    'Santa Claus Conquers the Martians',
    'Popeye the Sailor Meets Sindbad the Sailor',
    'Sagebrush Trail'
  ];
  const randomIndex = getRandomInteger(0, title.length -1);
  return title[randomIndex];
};

const generateAlternativeTitle = () => {
  const alternative_title = [
  'The Dance of Life',
  'A Little Pony Without The Carpet',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad the Sailor',
  'Sagebrush Trail'];

  const randomIndex = getRandomInteger(0, alternative_title.length -1);
  return alternative_title[randomIndex];
}

const generateDescription = () => {
  const description = [
    'Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…',
    "Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…",
    'Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a',
    'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti',
    'In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…'
  ];
  const randomIndex = getRandomInteger(0, description.length -1);
  return description[randomIndex]
};

const generatePoster = () => {
  const poster = [
    "./images/posters/the-dance-of-life.jpg",
    "./images/posters/sagebrush-trail.jpg",
    "./images/posters/the-man-with-the-golden-arm.jpg",
    "./images/posters/santa-claus-conquers-the-martians.jpg",
    "./images/posters/popeye-meets-sinbad.png"
  ];
  const randomIndex = getRandomInteger(0, poster.length -1);
  return poster[randomIndex];
};

const generateTotalRatig = () => {
  const total_rating = [5.3, 7.1, 4.5, 6.0, 9];
  const randomIndex = getRandomInteger(0, total_rating.length -1);
  return total_rating[randomIndex]
};

const generateAgeRating = () => {
  const age_rating = [6, 16, 18, 3, 5];
  const randomIndex = getRandomInteger(0, age_rating.length -1);
  return age_rating[randomIndex];
}

const generateDirector = () => {
  const director = ['Anthony Mann', 'Tom Ford', 'Harry Poter', 'Liza Pit', 'Lika'];
  const randomIndex = getRandomInteger(0, director.length -1);
  return director[randomIndex];
}

const generateWriters = () => {
  const writers = ['Takeshi Kitano', 'Anne Wigton', 'Heinz Herald', 'Richard Weil'];
  return writers;
}

const generateActors = () => {
  const actors = ['Morgan Freeman', 'Erich von Stroheim', 'Mary Beth Hughes', 'Dan Duryea', 'Alla Rugacheva'];
  return actors;
}

const generateDate = () => {
  const date = ['2019-05-11T00:00:00.000Z', '2019-05-11T00:00:00.000Z', '2019-05-11T00:00:00.000Z', '2019-05-11T00:00:00.000Z', '2019-05-11T00:00:00.000Z'];
  const dateNormalize = date.map((i) => humanizeTaskDueDate(i));
  const randomIndex = getRandomInteger(0, dateNormalize.length -1);
  return date[randomIndex];
}

const generateRelease = () => {
  const release_country = ['Finland', 'USA', 'Italy', 'France', 'Canada'];
  const randomIndex = getRandomInteger(0, release_country.length -1);
  return release_country[randomIndex];
}

export const generateTask = () => ({
  title: generateTitle(),
  alternative_title: generateAlternativeTitle(),
  description: generateDescription(),
  poster: generatePoster(),
  total_rating: generateTotalRatig(),
  age_rating: generateAgeRating(),
  director: generateDirector(),
  writers: generateWriters(),
  actors: generateActors(),
  release: {date: generateDate(), release_country: generateRelease()},
});