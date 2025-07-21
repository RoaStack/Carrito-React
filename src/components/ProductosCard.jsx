// IMPORTAR todas las imágenes al inicio del archivo
import DevOpsDelight from '../assets/DevOps-delight.jpg';
import ExpressSet from '../assets/Express-set.jpg';
import MongoMix from '../assets/Mongo-mix.jpg';
import NodeNigiri from '../assets/Node-nigiri.jpg';
import RestFullRoll from '../assets/RestFull-rolls.jpg';
import '../css/ProductosCard.css'


const imageMap = {
  'DevOps-delight.jpg': DevOpsDelight,
  'Express-set.jpg': ExpressSet,
  'Mongo-mix.jpg':MongoMix,
  'Node-nigiri.jpg': NodeNigiri,
  'RestFull-rolls.jpg': RestFullRoll,
};

const ProductosCard = ({ producto, onAddToCarrito }) => (
  <div className='card'>
    <img
      src={imageMap[producto.imagen]}
      alt={producto.nombre}
      class='imagen'
    />
    <h3>{producto.nombre}</h3>
    <p>${producto.precio.toLocaleString('es-CL')}</p>
    <button onClick={() => onAddToCarrito(producto)}>
        Agregar al carrito
    </button>
  </div>
);

export default ProductosCard;
