// query를 해결(resolve) 하는 파일
import {getMovies, getById, addMovie, deleteMovie} from './db';

const resolvers = {
    Query: {
        movies:(_, {limit, rating}) => getMovies(limit, rating),
    },
}

export default resolvers;