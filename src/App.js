import './App.scss';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import SneakersList from './components/SneakersList/SneakersList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [sneakersData, setSneakersData] = useState([]);

  useEffect(() => {
    const getSneakers = async () => {
      try {
        const res = await axios.get('https://65a17f98600f49256fb1bfc5.mockapi.io/sneakers');
        setSneakersData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getSneakers();
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItemFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onRemove={onRemoveItemFromCart}
          items={cartItems}
          onClose={() => setCartOpened(false)}
        />
      )}
      <header className="d-flex justify-between align-center p-40">
        <Header onClickCart={() => setCartOpened(true)} />
      </header>
      <main>
        <SneakersList onAddToCart={onAddToCart} sneakersData={sneakersData} />
      </main>
    </div>
  );
}

export default App;
