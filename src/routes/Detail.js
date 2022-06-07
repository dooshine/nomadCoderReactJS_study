import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = function () {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            {
                loading
                    ?
                    <h1>
                        LOADING...
                    </h1>
                    :
                    <>
                        <h2>
                            <Link to={`/movie/${id}`}>{movie.title}</Link>
                        </h2>
                        <img src={movie.medium_cover_image} alt={movie.title} />
                        <h3>Genres</h3>
                        <ul>
                            {movie.genres.map(g => (
                                <li key={g}>
                                    {g}
                                </li>))}
                        </ul>
                        <p>
                            {movie.description_full}
                        </p>
                    </>
            }
        </div>
    );
}
export default Detail;