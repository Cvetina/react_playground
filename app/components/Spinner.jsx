import React from 'react';
import {render} from 'react-dom';
import style from './styles/Spinner.scss';

const Spinner = () => (
    <div className={style.spinner}>
    <div className={style.doubleBounce1}></div>
    <div className={style.doubleBounce2}></div>
</div>
   );
   
export default Spinner;