import { faAlignCenter, faAlignJustify } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

    return (<div>
        <div className="card-footer card border-primary mb-3" style={{ width: "25%", height: "25%" }} >
            <text style={{ color: "#0d6efd" }}>Ingresa tus datos para contactarnos</text>
            <div class="row g-3">
                <div class="col">
                    <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div class="col">
                    <label for="exampleFormControlInput1" className="form-label">Apellido</label>
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
            </div>
            <div className="mb-6" >
                <label for="exampleFormControlInput1" className="form-label">Ingresa tu mail para contactarnos</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3" style={{ height: "25%" }}>
                <label for="exampleFormControlTextarea1" className="form-label">Ingresa tu solicitud...</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <a href="#" class="btn btn-outline-primary">Enviar</a>
            </div>
        </div>
        <div class="col-xs-12 col-md-8 lista-enlaces-wrapper" />
        <div class="row">

            <div class="col-xs-12 col-sm-2_5 lista-enlaces-container">
                <div class="titulo-enlaces">información de SERNATUR</div>
           
            </div>
            <div class="col-xs-12 col-sm-3_5 lista-enlaces-container">
                <div class="titulo-enlaces">ENLACES DE INTERÉS</div>
                <nav>
                    <ul class="lista-enlaces">


                        <li><a href="https://www.vacacionesterceraedad.cl/" target="_blank">Vacaciones Tercera Edad</a></li>


                        <li><a href="https://www.giradeestudio.cl/" target="_blank">Gira de Estudio</a></li>


                        <li><a href="https://www.turismofamiliar.cl/" target="_blank">Turismo Familiar</a></li>


                        <li><a href="http://www.calidadturistica.cl/" rel="nofollow noopener" target="_blank">Calidad Turística</a></li>


                        <li><a href="https://chilesustentable.sernatur.cl" rel="nofollow noopener" target="_blank">Sustentabilidad</a></li>


                        <li><a href="http://www.subturismo.gob.cl/" rel="nofollow noopener" target="_blank">Subsecretaría de Turismo</a></li>

                    </ul>
                </nav>
            </div>
            <div class="col-xs-12 col-sm-3_5 lista-enlaces-container">
                <div class="titulo-enlaces">QUEREMOS AYUDARTE</div>
                <nav>
                    <ul class="lista-enlaces">
                        <li><a href="https://simo.sernatur.gob.cl">Solicitud y entrega de material turístico</a></li>
                    </ul>
                </nav>
            </div>
        </div>

    </div>
    )
};

export default Footer;