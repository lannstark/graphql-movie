// query를 해결(resolve) 하는 파일
import {getMovies, getById} from './db';

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => getById(id)
    }
}

export default resolvers;