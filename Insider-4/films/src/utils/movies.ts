type MovieProps = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export function getMovieList(size: number, movies: MovieProps[]) {
  let movieList = [];

  for (let i = 0; i < size; i++) {
    movieList.push(movies[i]);
  }

  return movieList;
}
