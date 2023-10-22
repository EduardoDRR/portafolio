import { Typography } from "@mui/material";

export function Tecnolog(){

    const URL_JS = "https://openclipart.org/image/800px/272343"
    const URL_php = "https://adaptabiz.com/wp-content/uploads/2020/04/php.png" ;
    const URL_CSS = "https://www.pinclipart.com/picdir/big/175-1759459_eng-a-med-kamel-frameworks-css-css-logo.png";
    const URL_HTML = "https://www.pattasiwa.com/assets/icons/html.png";
    const URL_React = "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png";
    const URL_MySql = "https://th.bing.com/th/id/R.a331387718d805c9720d3730d4e895c2?rik=jkAc5rWdkSjppg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f58481057cef1014c0b5e4951.png&ehk=MMkfhNuKpy0wNEkP1OhmZqg56B75F%2fOf17CT7Dtv%2b28%3d&risl=&pid=ImgRaw&r=0";

    return (
        <section className="tecnologias" id="tecnologías" >
            <div className="contenido-banner1">
                <div className="title" >
                    <Typography variant="h2"  >
                        <span className="amarillo"> Tecnologías </span>
                    </Typography>
                </div>

                <div className="contenedor-intereses">
                    <div className="lista">
                        <Typography variant="h5"  className="interes-span"> JavaScript </Typography>
                        <img src={URL_JS} className="image"/> 
                    </div>
                    
                    <div className="lista"> 
                        <Typography variant="h5" className="interes-span" >  php </Typography>
                        <img src={URL_php} className="image" />
                    </div>
                    
                    <div className="lista">
                        <Typography variant="h5" className="interes-span"> Css </Typography>
                        <img src={URL_CSS} className="image" />
                    </div>
                   
                        <div className="lista"> 
                            <Typography variant="h5" className="interes-span"> HTML </Typography>
                            <img src={URL_HTML} className="image" />
                        </div>
                    
                        <div className="lista"> 
                            <Typography variant="h5" className="interes-span"> React </Typography>
                            <img src={URL_React} className="image" />
                        </div>
                    
                        <div className="lista"> 
                            <Typography variant="h5" tclassName="interes-span"> MySql </Typography>
                            <img src={URL_MySql} className="image" />
                        </div>
                    
                </div>  
            </div>
            
        </section>
    )
}

