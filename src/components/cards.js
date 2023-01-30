import propType from "prop-types";

const Card = (props) => {
    return (
        <div class="card" style="width: 18rem;">
        <img src={props.imagen} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <a href="#" class="btn btn-light">Más detalles</a>
        </div>
      </div>    
)
};
const Cards = () => {
    return (
        <div className="cards d-flex">
            <Card img="https://www.franciscosaavedra.cl/wp-content/uploads/2020/11/desierodesierto.jpg" title="Desierto Florido"/>
            <Card img="http://robertosalasguzman.cl/wp-content/uploads/2019/05/Roberto-Salas-Guzm%C3%A1n_Chile.jpg" title="Santiago"/>
            <Card img="https://cecinasllanquihue.cl/blog/wp-content/uploads/2020/11/torres-del-paine-4827345_1920-1200x600.jpg" title="Llanquihue"/>
            <Card img="https://images2.alphacoders.com/989/thumb-1920-989511.jpg" title="Torres del Paine"/>
            <Card img="https://conociendochile.com/wp-content/uploads/2018/01/isla-de-pascua21-2.jpg" title="Rapa Nui"/>
        </div>
    )
};


export default Card;