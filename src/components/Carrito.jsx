import { toast } from 'react-toastify';
import DevOpsDelight from '../assets/DevOps-delight.jpg';
import ExpressSet from '../assets/Express-set.jpg';
import MongoMix from '../assets/Mongo-mix.jpg';
import NodeNigiri from '../assets/Node-nigiri.jpg';
import RestFullRoll from '../assets/RestFull-rolls.jpg';
import '../css/Carrito.css';

const imageMap = {
  'DevOps-delight.jpg': DevOpsDelight,
  'Express-set.jpg': ExpressSet,
  'Mongo-mix.jpg':MongoMix,
  'Node-nigiri.jpg': NodeNigiri,
  'RestFull-rolls.jpg': RestFullRoll,
};

const Carrito = ({ items, onRemoveItem, onCheckout, mostrar, setMostrarCarrito }) => {
  const total = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.warn('El carrito está vacío.');
      return;
    }
    onCheckout();
  };

  return (
    <div className={`carrito-sidebar ${mostrar ? 'carrito-visible' : 'carrito-hidden'}`}>
      <button className="carrito-close-btn" onClick={() => setMostrarCarrito(false)}>✖</button>

      <div className="carrito-content">
        <h2 className="carrito-title">Tu carrito</h2>
        <ul className="carrito-list">
          {items.map((item, index) => (
            <li key={index} className="carrito-item">
              <img src={imageMap[item.imagen]} alt={item.nombre} className="carrito-img" />
              <div className="carrito-info">
                <span><strong>{item.nombre}</strong></span>
                <span>Cantidad: {item.cantidad}</span>
                <span>Subtotal: ${ (item.precio * item.cantidad).toLocaleString('es-CL') }</span>
              </div>
              <button className="carrito-remove-btn" onClick={() => onRemoveItem(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <p className="carrito-total"><strong>Total:</strong> ${total.toLocaleString('es-CL')}</p>
      </div>

        <button
          className="carrito-checkout-btn"
          onClick={handleCheckout}
          disabled={total === 0}
          style={{
            backgroundColor: total === 0 ? '#ccc' : '#4CAF50',
            cursor: total === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          Realizar compra (${total.toLocaleString('es-CL')})
      </button>
    </div>
  );
};

export default Carrito;
