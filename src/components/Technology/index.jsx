import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';

const Technology = ({ technologies }) => {

    // translations
    const { t } = useTranslation();

    return (
        technologies && technologies.map((tech, i) => (
            <div className="tech_content" key={i}>
                <div className="container_tech_img">
                    <img src={tech.logo} className="img_tech" alt="technology logo" />
                </div>
                <div className="tech_properties">
                    <p><span className="bold_txt">{t('List.tech')} </span>{tech.tech}</p>
                    <p><span className="bold_txt">{t('List.year')} </span>{tech.year}</p>
                    <p><span className="bold_txt">{t('List.author')} </span>{tech.author}</p>
                    <p><span className="bold_txt">{t('List.license')} </span>{tech.license}</p>
                    <p><span className="bold_txt">{t('List.language')} </span>{tech.language}</p>
                    <p><span className="bold_txt">{t('List.type')} </span>{tech.type}</p>
                </div>
            </div>
        ))
    );
}

export default Technology;