import React from 'react';
import './style.scss';

const Technology = ({ technology }) => {

    return (
        <div className="tech_content">
            <div className="container_tech_img">
                <img src={technology.logo} className="img_tech" alt="technology logo" />
            </div>
            <div className="tech_properties">
                <p><span className="bold_txt">Tecnologia: </span>{technology.tech}</p>
                <p><span className="bold_txt">Año: </span>{technology.year}</p>
                <p><span className="bold_txt">Autor: </span>{technology.author}</p>
                <p><span className="bold_txt">Licencia: </span>{technology.license}</p>
                <p><span className="bold_txt">Lenguaje: </span>{technology.language}</p>
                <p><span className="bold_txt">Tipo: </span>{technology.type}</p>
            </div>
        </div>
    );
}

export default Technology;