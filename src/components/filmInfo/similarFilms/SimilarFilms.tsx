import React, {FC, useEffect, useState} from 'react';
import './SimilarFilms.scss'
import {useNavigate} from "react-router-dom";
import {getSimilar} from "../../../helpers/http/AsyncRequest";
import {ISimilarFilms} from "../../../types/ISimilarFilms";

interface ISimilarFilm {
    filmCode: number
    setFilmCode(props: number): void
}

const SimilarFilms: FC<ISimilarFilm> = ({setFilmCode, filmCode}) => {
    const [similarFilms, setSimilarFilms]= useState<[]>()
    const navigate = useNavigate();

    useEffect(() => {
        getSimilar({setSimilarFilms})
    }, [filmCode])

    function chooseFilmHandler(kinopoiskId: number) {
        setFilmCode(kinopoiskId)
        localStorage.setItem('filmCode', kinopoiskId.toString())
        navigate(`/filmInfo/${kinopoiskId}`)
    }

    return (
        <div className="similarFilmsContainer">
            <h3>Похожие Фильмы</h3>
            <div className="similarFilms">
                {similarFilms && similarFilms.slice(-5).map((similarFilm: ISimilarFilms) => {
                    console.log(similarFilm)
                    return(
                        <div className="similarFilm" onClick={() => chooseFilmHandler(similarFilm.filmId)}>
                            <img src={similarFilm.posterUrl} alt=""/>
                            <div className="shortDesc">
                                <p>{similarFilm.nameRu}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default SimilarFilms;