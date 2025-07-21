import React, { useState, useEffect } from 'react';
import ProductosList from './components/ProductosList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Carrito from './components/Carrito';
import './css/App.css';


function App() {
  const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem('carrito');
    return saved ? JSON.parse(saved) : [];
  });

  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const addToCarrito = (producto) => {
    setCarrito(prev => {
      const index = prev.findIndex(item => item.id === producto.id);
      if (index !== -1) {
        const updated = [...prev];
        updated[index].cantidad += 1;
        console.log('Agregando al carrito:', producto.nombre);

        return updated;
      } else {
        console.log('Agregando al carrito 1:', producto.nombre);
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };


  const removeFromCarrito = (id) => {
    setCarrito(prev => {
      const index = prev.findIndex(item => item.id === id);
      if (index !== -1) {
        const updated = [...prev];
        if (updated[index].cantidad > 1) {
          updated[index].cantidad -= 1;
          return updated;
        } else {
          return updated.filter(item => item.id !== id);
        }
      }
      return prev;
    });
  };
  const handleCheckout = () => {
    setCarrito([]);
    setMostrarCarrito(false); //ocultamos el carrito
    toast.success('¡Compra realizada con éxito!');
  };


  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Tienda sushi🍣</h1>
      <ProductosList onAddToCarrito={addToCarrito} />

    <button
      className='closeBtn floating-carrito'
      onClick={() => setMostrarCarrito(!mostrarCarrito)}
      title={`Total: $${total.toLocaleString('es-CL')}`}
    >
    🛒
      {carrito.length > 0 && (
        <span className="badge">
          {carrito.reduce((sum, item) => sum + item.cantidad, 0)}
        </span>
      )}
    </button>

    {mostrarCarrito && (
        <Carrito
          items={carrito}
          onRemoveItem={removeFromCarrito}
          onCheckout={handleCheckout}
          mostrar={mostrarCarrito}
          setMostrarCarrito={setMostrarCarrito}
        />)}

      <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />
    </div>
  );
}

export default App;
