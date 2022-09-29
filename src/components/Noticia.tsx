import React from "react";
import './Noticia.css';

interface NoticiaProps{
    titulo: string,
    image: string,
    url: string,
    autor: string,
    descriptcion: string,
    fechaPublicacion: string,
    className: string

}
const Noticia : React.FC<NoticiaProps> = ({titulo, autor, descriptcion, url, image, fechaPublicacion, className}) => {
    return(
        <div className={className}>
            <div className="imgNoticia">
                <a href={url} target="_blank" rel="noreferrer"><img className="imageNoticia" src={image} alt="imagen noticia" /></a>
                <p>{fechaPublicacion}</p>
            </div>
            <div className="cuerpoNoticia">
                <h4>{titulo}</h4>
                <p className="autor">Autor: {autor}</p>
                <p>{descriptcion}</p>
                <a href={url} target="_blank" rel="noreferrer"><button>Conocer Más</button></a>
            </div>
        </div>
    )
}


export default Noticia;