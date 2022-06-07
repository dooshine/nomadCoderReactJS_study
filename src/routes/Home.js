import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = function () {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect(() => {
      getMovies();
    }, []);
  
    return (
        <>
        <h1>
          Movie Recommendation
        </h1>
        {
          loading
            ?
            <h2>
              Loading
            </h2>
            :
            <div>
              {movies.map((movie) =>
              <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
              />
                )}
  
            </div>
        }
      </>
  
    );
}
export default Home;