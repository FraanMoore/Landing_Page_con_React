import propType from "prop-types";

const Card = (props) => {

    return (
        <div className="card card border-primary mb-3"  >
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{color: "#0d6efd"}}>{props.title}</h5>
                <a href="#" className="btn btn-outline-primary">Ver más</a>
            </div>
        </div>
    )
};
const Cards = () => {
    return ( 
        <div className="cards row" >
            <div className="col-12 col-md-6" id="destinos" >
                <Card img="https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/BOH455RKTBAQRBLWK7OEFK5PVY.jpeg" title="Desierto Florido" /></div>
            <div className="col-12 col-md-6" >
                <Card img="http://robertosalasguzman.cl/wp-content/uploads/2019/05/Roberto-Salas-Guzm%C3%A1n_Chile.jpg" title="Santiago" /></div>
            <div className="col-12 col-md-6" >
                <Card img="https://cecinasllanquihue.cl/blog/wp-content/uploads/2020/11/torres-del-paine-4827345_1920-1200x600.jpg" title="Llanquihue" /></div>
            <div className="col-12 col-md-6" > 
                <Card img="https://images2.alphacoders.com/989/thumb-1920-989511.jpg" title="Torres del Paine" /></div>
            <div className="col-12 col-md-6" >
                <Card img="https://conociendochile.com/wp-content/uploads/2018/01/isla-de-pascua21-2.jpg" title="Rapa Nui" /></div>
        </div>
    )
}


export default Cards;