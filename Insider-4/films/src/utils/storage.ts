import AsyncStorage from "@react-native-async-storage/async-storage";

type MovieProps = {
  adult: false;
  backdrop_path: string;
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_639_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];

  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

// Return All Saved Movies
export async function getSavedMovies(key: string) {
  const myMovies = await AsyncStorage.getItem(key);
  let savedMovies = myMovies ? JSON.parse(myMovies) : [];

  return savedMovies as MovieProps[];
}

type saveMovieParams = {
  key: string;
  newMovie: MovieProps;
};

// Add a filme to the storage
export async function saveMovie({ key, newMovie }: saveMovieParams) {
  let storedMovies = await getSavedMovies(key);
  let isAlreadySaved = storedMovies.some((movie) => movie.id === newMovie.id);

  if (isAlreadySaved) {
    return false;
  }

  storedMovies.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(storedMovies));

  return true;
}

// Remove Movie fromm storage
export async function removeMovie(key: string, id: number) {
  const storedMovies = await getSavedMovies(key);
  const errorMessage = "Não foi remover o filme! por favor, tente novamente";

  let myMovies = storedMovies.filter((movie) => movie.id !== id);

  await AsyncStorage.setItem(
    key,
    JSON.stringify(myMovies),
    () => new Error(errorMessage)
  );

  return myMovies;
}

// Verify if the Movie is Already Saved On Storage
export async function hasMovieAlreadySaved(key: string, id: number) {
  const storedMovies = await getSavedMovies(key);

  const hasMovie = storedMovies.some((movie) => movie.id === id);

  return hasMovie;
}
