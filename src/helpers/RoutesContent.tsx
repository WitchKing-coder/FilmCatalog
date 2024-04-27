import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../components/mainPage/MainPage";
import FilmInfo from "../components/filmInfo/FilmInfo";

const RoutesContent = () => {
    const [filmId, setFilmId] = useState<number>()
    return (
        <div>
            <Routes>
                <Route path="/filmInfo" element={<FilmInfo filmId={filmId!}/>}/>
                <Route path="/" element={<MainPage setFilmId={setFilmId}/>}/>
            </Routes>
        </div>
    );
};

export default RoutesContent;