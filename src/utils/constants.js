export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/33726616?v=4";
export const PAGE_BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};
export const TMDB_URL_PREFIX = "https://api.themoviedb.org/3/movie/";
export const YOUTUBE_EMBED_URL_PREFIX = "https://www.youtube.com/embed/";
export const TMDB_IMAGE_URL_PREFIX = "https://image.tmdb.org/t/p/";
export const TMDB_FETCH_MOVIE_URL_PREFIX =
  "https://api.themoviedb.org/3/search/movie?query=";
export const LANGUAGE_LIST = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "es", label: "Spanish" },
];