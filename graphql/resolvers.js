// query를 해결(resolve) 하는 파일
import {people, getById} from './db';

const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => getById(id)
    }
}

export default resolvers;