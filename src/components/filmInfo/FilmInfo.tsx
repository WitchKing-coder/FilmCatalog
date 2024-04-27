import React, {FC} from 'react';

interface IFilmInfo {
    filmId: number
}
const FilmInfo: FC<IFilmInfo> = ({filmId}) => {
    return (
        <div>
            {filmId}
        </div>
    );
};

export default FilmInfo;