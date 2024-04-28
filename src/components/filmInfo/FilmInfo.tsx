import React, {FC, useEffect, useState} from 'react';
import './FilmInfo.scss'
import {getFilmDescription} from "../../helpers/http/AsyncRequest";
import {FilmData} from "../../types/IFilmData";
import SimilarFilms from "./similarFilms/SimilarFilms";

interface getFilmCode {
    filmCode: number
    setFilmCode(props: number): void
}
const FilmInfo: FC<getFilmCode> = ({filmCode, setFilmCode}) => {
    const [filmInfo, setFilmInfo] = useState<FilmData>()

    useEffect(() => {
        getFilmDescription({setFilmInfo})
    }, [filmCode])

    return(
        <div className="Container">
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
            <SimilarFilms setFilmCode={setFilmCode} filmCode={filmCode}/>
        </div>
    );
};

export default FilmInfo;