import useData from './useData';

// https://api.rawg.io/docs/#operation/platforms_lists_parents_list
// GET /platforms/lists/parents
// https://api.rawg.io/api/platforms/lists/parents

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;