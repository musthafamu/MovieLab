 export const key=process.env.REACT_APP_API_KEY

export const image_500="https://image.tmdb.org/t/p/w500";
export const image_300="https://image.tmdb.org/t/p/w300";
export const original="https://image.tmdb.org/t/p/original";



const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=20`,
  Trending:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}&page=40`,
    search:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=avatar&page=1&include_adult=false`
}; 



  export default requests