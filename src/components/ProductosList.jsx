import ProductosCard from './ProductosCard';
import productos from '../datos/productos';

const ProductosList = ({ onAddToCarrito }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {productos.map((producto) => (
      <ProductosCard 
        key={producto.id} 
        producto={producto} 
        onAddToCarrito={onAddToCarrito} />
    ))}
  </div>
);

export default ProductosList;
