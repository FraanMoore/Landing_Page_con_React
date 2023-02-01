
const Jumbotron = (props) => {

  return (
    
    <div className="p-4 mb-4 bg-light rounded-3 d-flex " style={{flexDirection: "column"}}  >
      <img src="https://fondosmil.com/fondo/58198.jpg" className="img-fluid" style={{height:"60vh", objectFit:"cover"}} alt="imagenJumbo" />
    
      <div className="container-fluid py-5">

        <h1 className="display-5 fw-bold" style={{color: "#6C401B"}}>Guía del viajero en Chile</h1>
        
        <button className="btn btn-outline-primary" type="button">Más información</button>
      </div>
    </div>
    
  )
};




export default Jumbotron;