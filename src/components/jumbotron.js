const Jumbotron = (props) =>{
  let Imagen = {backgroundimage: "url('https://pbs.twimg.com/media/CEWk561WEAEhWQA.jpg')"}
    return (
       
      <div  className= "p-5 mb-4 bg-light rounded-3" >
      <div  className="container-fluid py-5" >
      <img src={props.img} className="d-block w-100" alt="imagen"/>
      <h1 className="display-5 fw-bold">Guía del viajero en Chile</h1>
        <h1 className="display-5 fw-bold"></h1>
        <p className="col-md-8 fs-4"></p>
        <button  className="btn btn-primary btn-lg" type="button">Más información</button>
      </div>
    </div>

    )
};




export default Jumbotron;