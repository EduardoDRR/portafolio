

export function Navbar() {
    return (
        <header className="navbar">
           <div className="logo">
                <a href='#inicio'>Eduardo Del Rio</a> 
           </div>
           <nav id='nav'>
                <ul className="menu">
                    <li><a href='#sobremi'> SOBRE MI</a></li>
                    <li><a href='#tecnologías'> TECNOLOGÍAS</a></li>
                    <li><a href='#Curriculum'> CURRICULUM</a></li>
                    <li><a href='#portafolio'> PROYECTOS</a></li>
                    <li><a href='#contacto'> CONTACTO</a></li>
                </ul>
           </nav>
           <div className="nav-responsive">
            <i className="fa-solid fa-bars"></i>
           </div>

        </header>
        

        //Version anterior con herramienta
        /* 
         <div >
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }} >
                        Eduardo del Rio Ramos
                    </Typography>
                    <Button  color="inherit" className='menubutton' href='#inicio'> Inicio</Button>
                    <Button  color="inherit" className='menubutton' href='#sobremi'> Sobre mi</Button>
                    <Button  color="inherit" className='menubutton' href='#portafolio'>Proyectos</Button>
                    <Button  color="inherit" className='menubutton' href='#curriculum'>Curriculum</Button>
                    <Button  color="inherit" className='menubutton' href='contacto'>Contactame</Button>
                </Toolbar>
            </AppBar>
        </div>
        */
    )
}
