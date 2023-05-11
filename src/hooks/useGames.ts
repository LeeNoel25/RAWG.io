import useData from './useData'
import { Genre } from './useGenres'


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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
useData<Game>('/games', {
    params: 
    {
        genres: selectedGenre?.id, platforms:selectedPlatform?.id
    } }, 
    [selectedGenre?.id, selectedPlatform?.id])

export default useGames