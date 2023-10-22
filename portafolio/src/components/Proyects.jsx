import { Typography } from "@mui/material";
import pokeApi from '../img/pokeApi.jpg'
import galeria from '../img/galeria.jpg'
import peliculas from '../img/peliculas.jpg'

export function Proyects(){
  return (
    <section className="portafolio" id='portafolio'>
      <div className="contenido-banner1">
        <div className="contenido-section">
          <div className="title">
            <Typography variant="h2" >
              <span className="rojo"> Proyectos Personales </span>
            </Typography>
          </div>

          {/* Plantilla para poner el portafolio */}
          <div className="galeria">
            <div className="proyecto">
              <img src={pokeApi} alt=""/> 
              <div className="overlay">
                <Typography variant="h3" > PokeApi </Typography>
                <p> Proyecto que consume una api de pokemones </p>
              </div>
            </div>
            <div className="proyecto">
              <img src={galeria} alt=""/> 
              <div className="overlay">
                <Typography variant="h3" > Galería de imagenes </Typography>
                <p> Ejemplo de galeria</p>
              </div>
            </div>
            <div className="proyecto">
              <img src={peliculas} alt=""/> 
              <div className="overlay">
                <Typography variant="h3" > Películas </Typography>
                <p> Proyecto que consume una api de películas. <br/>Clon de pagina de reseñas. </p>
              </div>
            </div>




          </div>
          
          {/* <div>
            <ul>
              <Typography variant="h5" textAlign="center"> PeliculasAPI: peliculas-gamma.vercel.app </Typography>
              <Typography variant="h5" textAlign="center"> Pokedex: https://pokedexedrr.vercel.app </Typography>
              <Typography variant="h5" textAlign="center"> Galeria de imagenes: galeria-imagenes-gamma.vercel.app </Typography>
              <Typography variant="h5" textAlign="center"> Proyecto4 </Typography>
            </ul>
          </div> */}   
        </div>
      </div>
      
    </section>
  );
}




{/* <Typography variant="h2" color="rojo" noWrap="true" > 
        Mis proyextos
       <Typography/> */}