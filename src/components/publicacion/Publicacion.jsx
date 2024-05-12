import './publicacion.css';

export const Publicacion = ({ publicaciones }) => {
    return (
        <div className="publicacion-container">
            {publicaciones.map((publicacion, index) => (
                <div key={index} className="publicacion-card">
                    <h2>{publicacion.titulo}</h2>
                    <p>{publicacion.autor}</p>
                    <p>{publicacion.categoria}</p>
                    <p>{publicacion.contenido}</p>
                    <img src={publicacion.imagen} alt="" />
                    <p>{publicacion.fecha}</p>
                    <p>{publicacion.comoFunciona}</p>
                    <p>{publicacion.queSeUso}</p>
                    {publicacion.imagenes.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index}`} />
                    ))}
                    <p>{publicacion.etiquetas}</p>
                    <form >
                        <input type="text" placeholder="Nombre de la persona"></input>
                        <input type="text" placeholder="Comentario"></input>
                        <input type="submit" value="Enviar"></input>
                    </form>
                </div>
            ))}
        </div>
    );
};
