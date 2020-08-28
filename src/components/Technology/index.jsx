import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';

const Technology = ({ technology }) => {

     // translations
     const { t } = useTranslation();

    return (
        <div className="tech_content">
            <div className="container_tech_img">
                <img src={technology.logo} className="img_tech" alt="technology logo" />
            </div>
            <div className="tech_properties">
                <p><span className="bold_txt">{t('List.tech')} </span>{technology.tech}</p>
                <p><span className="bold_txt">{t('List.year')} </span>{technology.year}</p>
                <p><span className="bold_txt">{t('List.author')} </span>{technology.author}</p>
                <p><span className="bold_txt">{t('List.license')} </span>{technology.license}</p>
                <p><span className="bold_txt">{t('List.language')} </span>{technology.language}</p>
                <p><span className="bold_txt">{t('List.type')} </span>{technology.type}</p>
            </div>
        </div>
    );
}

export default Technology;