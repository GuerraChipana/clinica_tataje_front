
import { getDecodedToken } from '../utils/tokenUtils';

const user = getDecodedToken();


const InicioAdmin = () => {
    return (
        <div>
            <h1>Bienvenido al Sistema de la Clínica</h1>
            <p>Utiliza el menú lateral para gestionar las secciones del sistema.</p>
        </div>
    );
};

export default InicioAdmin;
