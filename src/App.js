import './App.scss';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import SneakersList from './components/SneakersList/SneakersList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
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
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onAddToFavorites = (obj) => {
    if (favoriteItems.find((item) => item.id === obj.id)) {
      setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      setFavoriteItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItemFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper clear">
      <Routes>
        <Route
          path="/cart"
          element={
            <>
              <header className="d-flex justify-between align-center p-40">
                <Header onClickCart={() => setCartOpened(true)} />
              </header>
              <main>
                <SneakersList
                  onAddToFavorites={onAddToFavorites}
                  onAddToCart={onAddToCart}
                  sneakersData={sneakersData}
                />
              </main>
              {cartOpened && (
                <Drawer
                  onRemove={onRemoveItemFromCart}
                  items={cartItems}
                  onClose={() => setCartOpened(false)}
                />
              )}
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <header className="d-flex justify-between align-center p-40">
                <Header onClickCart={() => setCartOpened(true)} />
              </header>
              <main>
                <SneakersList
                  cartItems={cartItems}
                  onAddToFavorites={onAddToFavorites}
                  onAddToCart={onAddToCart}
                  sneakersData={sneakersData}
                />
              </main>
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <>
              <header className="d-flex justify-between align-center p-40">
                <Header onClickCart={() => setCartOpened(true)} />
              </header>
              <Favorites onAddToFavorites={onAddToFavorites} favoriteItems={favoriteItems} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
