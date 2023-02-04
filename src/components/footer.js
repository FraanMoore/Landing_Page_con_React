import { faAlignCenter, faAlignJustify } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

    return (
        <div className="container-fluid" style={{background: "#F5F5F5"}}>
    <div className="row" id="contacto" style={{padding:"5%"}}>
        {/* primera card */}
        <div className="card-footer card border border-0 mb-3" style={{ width: "50%", height: "25%", background:"#F5F5F5" }} >
            <text style={{color: "#6C401B"}}>Ingresa tus datos para contactarnos</text>
            <div className="row g-3">
                <div className="col">
                    <label for="exampleFormControlInput1" className="form-label" style={{color: "#6C401B"}}>Nombre</label>
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div className="col">
                    <label for="exampleFormControlInput1" className="form-label"style={{color: "#6C401B"}}>Apellido</label>
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
            </div>
            <div className="mb-6" >
                <label for="exampleFormControlInput1" className="form-label"style={{color: "#6C401B"}}>Ingresa tu mail para contactarnos</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3" style={{ height: "25%" }}>
                <label for="exampleFormControlTextarea1" className="form-label"style={{color: "#6C401B"}}>Ingresa tu solicitud...</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <a href="#" className="btn btn-outline-primary">Enviar</a>
            </div>
        </div>

        {/* segunda card */}
        <div className="card card border border-0 mb-3 position-relative left" style={{ width: "50%", height: "25%", background:"#F5F5F5" }}>

            <div className="col-xs-12 col-md-8 lista-enlaces-wrapper"  />
            <div className="row" >

                <div className="col-xs-12 col-sm-2_5 lista-enlaces-container ">
                    <div className="titulo-enlaces" style={{color: "#6C401B"}}>información de SERNATUR</div>

                </div>
                <div className="col-xs-12 col-sm-3_5 lista-enlaces-container">
                    <div className="titulo-enlaces" style={{color: "#6C401B"}}>ENLACES DE INTERÉS</div>
                    <nav>
                        <ul className="lista-enlaces">


                            <li><a href="https://www.vacacionesterceraedad.cl/" target="_blank">Vacaciones Tercera Edad</a></li>


                            <li><a href="https://www.giradeestudio.cl/" target="_blank">Gira de Estudio</a></li>


                            <li><a href="https://www.turismofamiliar.cl/" target="_blank">Turismo Familiar</a></li>


                            <li><a href="http://www.calidadturistica.cl/" rel="nofollow noopener" target="_blank">Calidad Turística</a></li>


                            <li><a href="https://chilesustentable.sernatur.cl" rel="nofollow noopener" target="_blank">Sustentabilidad</a></li>


                            <li><a href="http://www.subturismo.gob.cl/" rel="nofollow noopener" target="_blank">Subsecretaría de Turismo</a></li>

                        </ul>
                    </nav>
                </div>
                <div className="col-xs-12 col-sm-3_5 lista-enlaces-container">
                    <div className="titulo-enlaces" style={{color: "#6C401B"}}>QUEREMOS AYUDARTE</div>
                    <nav>
                        <ul className="lista-enlaces">
                            <li><a href="https://simo.sernatur.gob.cl">Solicitud y entrega de material turístico</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
};

export default Footer;