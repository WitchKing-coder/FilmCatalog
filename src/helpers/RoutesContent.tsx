import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../components/mainPage/MainPage";
import FilmInfo from "../components/filmInfo/FilmInfo";

const RoutesContent = () => {
    const [filmCode, setFilmCode] = useState<number>(1)
    return (
        <div>
            <Routes>
                <Route path={`/filmInfo/${localStorage.getItem('filmCode')}`} element={<FilmInfo setFilmCode={setFilmCode} filmCode={filmCode}/>}/>
                <Route path="/" element={<MainPage setFilmCode={setFilmCode}/>}/>
            </Routes>
        </div>
    );
};

export default RoutesContent;