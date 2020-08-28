import React from 'react';
import i18next from 'i18next';
import './style.scss';

const Language = () => {

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (
        <div className="change_language">
            <h1><span className="pointer" onClick={() => handleClick('en')} >
                🇺🇸
          </span></h1>
            <h1><span className="pointer" onClick={() => handleClick('es')} >
                🇨🇴
          </span></h1>
        </div>
    );
}

export default Language;