import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
    const estiloNavbar = {
        color: "blue",
        gridtemplatecolumns: "1fr auto"
        
        
    }
    
    return (
        <div>
            <nav className="navbar navbar-fixed-top navbar-expand-lg bg-body-tertiary " style={estiloNavbar}>

                <div className="container-fluid ">
                    <a className="navbar-brand" style={estiloNavbar} href="#"><FontAwesomeIcon icon="fa-solid fa-earth-americas" />Chile</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav justify-content-center" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://localhost:3000/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#destinos">Destinos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto" >Contacto</a>

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
};

export default Navbar;