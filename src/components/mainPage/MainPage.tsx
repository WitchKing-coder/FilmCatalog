import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

interface FilmData {
    kinopoiskId: number,
    posterUrl: string,
    nameRu: string
}
interface IMainPage {
    setFilmId(num: number): void
}

const MainPage: FC<IMainPage> = ({setFilmId}) => {
    const [page, setPage] = useState<number>(1)
    const [filmList, setFilmList] = useState<[]>()
    const navigate = useNavigate();
    const getTopMovies = () => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${page}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'b075456c-1e3f-41ce-bb5d-bc1c930c0ff1',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setFilmList(json.items))
    }

    useEffect(() => {
     getTopMovies()
    }, [])
    function chooseFilmHandler(kinopoiskId: number) {
        setFilmId(kinopoiskId)
        navigate("/filmInfo")
    }

    return (
        <div>
            {filmList && filmList.map((item: Array<FilmData>) =>{
                return (
                    <div onClick={() => chooseFilmHandler(item[0].kinopoiskId)} className="film">
                        <img src={item[0].posterUrl} alt=""/>
                        <p>item[0].nameRu</p>
                    </div>
                )
                    })}
            <button onClick={() => chooseFilmHandler(6)}>sdadsa</button>
        </div>
    );
};

export default MainPage;