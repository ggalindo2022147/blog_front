import { useState } from "react";
import toast from "react-hot-toast";
import { getObtenerPublicaciones as getObtenerPublicacionesRequest } from '../../services';

export const usePublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState([]);

    const obtenerPublicaciones = async () => {
        const publicacionesData = await getObtenerPublicacionesRequest();
        if (publicacionesData.error) {
            return toast.error(
                publicacionesData.response?.data || "Error al obtener las publicaciones :("
            );
        }
        setPublicaciones(publicacionesData.data);

        return publicacionesData.data;
    };
}