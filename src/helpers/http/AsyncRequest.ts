import {FC} from "react";
import {FilmData} from "../../types/IFilmData";

interface setFilmInfo {
    setFilmInfo(props: FilmData): void
}
interface setFilmList {
    setFilmList(props: []): void,
    page: number
}

interface setSimilarFilms {
    setSimilarFilms(props: []): void
}
export const getFilmDescription: FC<setFilmInfo> = ({setFilmInfo}): any => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${localStorage.getItem('filmCode')}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': 'ea984fd9-0c14-4707-ae84-1ee818d9aedc',
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(json => setFilmInfo(json))

}


export const getTopMovies: FC<setFilmList> = ({setFilmList, page}): any => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${page}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': 'ea984fd9-0c14-4707-ae84-1ee818d9aedc',
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(json => setFilmList(json.items))
}

export const getSimilar: FC<setSimilarFilms> = ({setSimilarFilms}): any => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${localStorage.getItem('filmCode')}/similars`, {
        method: 'GET',
        headers: {
            'X-API-KEY': 'ea984fd9-0c14-4707-ae84-1ee818d9aedc',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(json => setSimilarFilms(json.items))
}