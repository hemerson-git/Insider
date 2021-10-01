import axios from "axios";

// Environments
import { TMDB_API_KEY } from "@env";

export const TMDB_KEY = TMDB_API_KEY;

const TMDB_API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default TMDB_API;
