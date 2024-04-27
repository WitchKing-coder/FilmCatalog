import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './MainPage.scss'

interface FilmData {
    kinopoiskId: number,
    posterUrl: string,
    nameRu: string,
    ratingImdb: number
}
interface IMainPage {
    setFilmId(num: number): void
}

const MainPage: FC<IMainPage> = ({setFilmId}) => {
    const [page, setPage] = useState<number>(1)
    const [filmList, setFilmList] = useState<[]>()
    const navigate = useNavigate();
    const numOfPages = [1,2,3,4,5]
    const getTopMovies = () => {
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

    useEffect(() => {
     getTopMovies()
    }, [page])
    function chooseFilmHandler(kinopoiskId: number) {
        setFilmId(kinopoiskId)
        navigate("/filmInfo")
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
                {filmList && filmList.map((item: FilmData) =>{
                    console.log(item)
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