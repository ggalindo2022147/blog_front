import {Nav} from '../../components/nav/Nav.jsx'
import { useState, useEffect } from 'react'
import { obtenerPublicaciones } from '../../services/api.jsx';
import { Publicacion } from '../../components/publicacion/Publicacion.jsx';

export const Dashboard = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  
  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const response = await obtenerPublicaciones();
        if (!response.error) {
          setPublicaciones(response.data || []);
        } else {
          console.log('Error', response.data);
        }
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchPublicaciones();
  }, []);

  return (
    <>
    <div>
      <Nav/>
      <Publicacion publicaciones={publicaciones} />
    </div>
    </>
  )
}
