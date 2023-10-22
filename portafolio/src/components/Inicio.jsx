import fotoperfil from '../fotoperfil.jpg'
import Typography from '@mui/material/Typography';

//Aqui sera el inicio de la pagina
export function Inicio() {
    return (
        <section id="inicio" className="inicio">
            <div className="contenido-banner">
                <div className="contenedor-img" >
                    <img src={fotoperfil} className='fotoperfilinicio'/>
                </div>
                <h1> Eduardo Del Rio Ramos</h1>
                <Typography variant="h2" color="white" fontSize="1.4rem" >  
                    Hola, soy Eduardo del Rio.
                    Development en desarollo.
                </Typography>
            </div>
        </section>
    )
}
