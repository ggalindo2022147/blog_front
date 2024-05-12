import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:3000/blog/v1",
    timeout: 10000,
})

export const obtenerPublicaciones = async () => {
    try {
        return await api.get('/publicaciones')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}
