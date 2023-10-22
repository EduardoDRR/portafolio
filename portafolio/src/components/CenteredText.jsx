import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import fotoperfil from '../fotoperfil.jpg'


//Aqui voy a redactar mi About me
export function CenteredText(){
   
    return (
        <>
        <section className="contenido-banner1" id="sobremi">
            <Typography variant="h2"   className="title" >
                    <span className="verde"> Sobre mi </span>
            </Typography>
            
            <div className="fotosobremi" >
                <img className="fotoperfil" src={fotoperfil} />
                <Grid 
                className="contenido-seccion"
                container 
                direction="column" 
                justifyContent="center" 
                alignItems="center" 
                alignContent="center"
                justify="space-around" 
                textAlign='center'> 
                        <Typography variant="h5" color="white" > 
                            Hola, soy Eduardo del Rio.
                            Soy un Development en desarollo .
                            <br/>
                            Bienvenido a mi <span className="verde"> pagina personal </span>. Aqui econtraras algunos de los <br/> 
                            <span className="rojo"> proyectos </span> que eh desarollado y las <span className="amarillo"> tecnologías</span> que manejo.
                            <br/>   <br/> 
                        </Typography> 
                        <div className="fila">
                            <div className="col">
                                <h3 className="gustos">Interes / Gustos</h3>
                                <div className="contenedor-intereses">
                                    <div className="interes">
                                        <i className="emoji"> 🎮 </i>
                                        <span className="interes-span"> Videojuegos</span>
                                    </div>
                                    <div className="interes">
                                        <i className="emoji"> 🏀 </i>
                                        <span className="interes-span"> Basquetball</span>
                                    </div>
                                    <div className="interes">
                                        <i className="emoji"> 💃🕺 </i>
                                        <span className="interes-span"> Bailar</span>
                                    </div>
                                    <div className="interes">
                                        <i className="emoji"> 🎬 </i> <br/>
                                        <span className="interes-span"> Ver series</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="descargar">
                                Descargar CV <i className="fa-sharp fa-solid fa-download"></i>
                                <span className="overlay"></span>
                        </button> 
                </Grid>
            </div>
        </section>
       
           
        </>
    );
}

//˂Development en desarollo 𝄍˃