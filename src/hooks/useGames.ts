import useData from './useData'

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// inspect > network > Fetch/XHR > Preview > games?key > results > {0} > id/name/background_image/parent_platforms/metacritic

export interface Game { 
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

const useGames = () => useData<Game>('/games')

export default useGames