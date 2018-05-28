import React from 'react';
import style from './styles/SVG.scss';

const Folder = () => {
        return(
            <svg className={style.folder} version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                <path d="M14 4l4 4h14v22h-32v-26z"></path>
            </svg> 
        )
}

export default Folder