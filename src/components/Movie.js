import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = function ({id, title, coverImg, summary, genres}) {
    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <img src={coverImg} alt={title} />
            <p>
                {summary}
            </p>
            <ul>
                {genres.map(g => (
                    <li key={g}>
                        {g}
                    </li>))}
            </ul>
            <hr></hr>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;