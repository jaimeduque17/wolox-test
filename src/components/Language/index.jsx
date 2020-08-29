import React from 'react';
import i18next from 'i18next';
import './style.scss';

const Language = () => {

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (
        <div className="change_language">
            <h1><span className="pointer" role="img" aria-label="US flag" onClick={() => handleClick('en')} >
                🇺🇸
          </span></h1>
            <h1><span className="pointer" role="img" aria-label="CO flag" onClick={() => handleClick('es')} >
                🇨🇴
          </span></h1>
        </div>
    );
}

export default Language;