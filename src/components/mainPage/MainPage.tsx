import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './MainPage.scss'
import {getTopMovies} from "../../helpers/http/AsyncRequest";
import {CatalogData} from "../../types/ICatalogData";

interface setFilmCode {
    setFilmCode(props: number): void
}

const MainPage: FC<setFilmCode> = ({setFilmCode}) => {
    const [page, setPage] = useState<number>(1)
    const [filmList, setFilmList] = useState<[]>()
    const navigate = useNavigate();
    const numOfPages = [1,2,3,4,5]

    useEffect(() => {
     getTopMovies({setFilmList, page})
    }, [page])

    function chooseFilmHandler(kinopoiskId: number) {
        setFilmCode(kinopoiskId)
        localStorage.setItem('filmCode', kinopoiskId.toString())
        navigate(`/filmInfo/${kinopoiskId}`)
    }

    function pageChangeHandler(num: number) {
        setPage(num)
    }

    return (
        <div className="MainPage">
            <h2>Лучшие фильмы</h2>
            <div className="pagination">
                {numOfPages.map((num) => (
                    <button className={num === page ? "active" : ""} onClick={() => pageChangeHandler(num)}>{num}</button>
                ))}
            </div>
            <div className="filmCatalog">
                {filmList && filmList.map((item: CatalogData) =>{
                    return (
                        <div onClick={() => chooseFilmHandler(item.kinopoiskId)} className="film">
                            <img src={item.posterUrl} alt=""/>
                            <div className="shortDesc">
                                <p className="rating">{item.ratingImdb}</p>
                                <p>{item.nameRu}</p>
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default MainPage;