import React, {FC, useEffect, useState} from 'react';
import './FilmInfo.scss'

interface IFilmInfo {
    filmId: number
}
interface FilmData {
    nameRu: string,
    description: string,
    posterUrl: string,
    year: number,
    filmLength: number,
    webUrl: string

}
const FilmInfo: FC<IFilmInfo> = ({filmId}) => {
    const [filmInfo, setFilmInfo] = useState<FilmData>()
    const [film, setFilm] = useState<number>()
    const getFilmDescription = () => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'ea984fd9-0c14-4707-ae84-1ee818d9aedc',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setFilmInfo(json))
    }
    useEffect(() => {
        setFilm(filmId)
        getFilmDescription()

    }, [])
    return(
        <div>
            <h2>{filmInfo?.nameRu}</h2>
            <div className="mainInfo">
                <div className="description">
                    <p>{filmInfo?.description}</p>
                    <div className="shortInfo">
                        <p>Длительность: {filmInfo?.filmLength} мин</p>
                        <p>Год выхода: {filmInfo?.year}</p>
                        <p>Ссылка на фильм: <a href={filmInfo?.webUrl}>здесь</a></p>
                    </div>
                </div>
                <img src={filmInfo?.posterUrl} alt=""/>
            </div>
            <div className="similarFilms">

            </div>
        </div>
    );
};

export default FilmInfo;