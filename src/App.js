import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import SneakersList from './components/SneakersList/SneakersList';
import Favorites from './components/Favorites/Favorites';
import Orders from './components/Orders/Orders';
import './App.scss';

export const AppContext = createContext({});

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [sneakersData, setSneakersData] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getSneakers = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('https://65a17f98600f49256fb1bfc5.mockapi.io/sneakers');
        setSneakersData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setIsLoading(false);
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
    if (favoriteItems.find((item) => item.title === obj.title)) {
      setFavoriteItems((prev) => prev.filter((item) => item.title !== obj.title));
    } else {
      setFavoriteItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItemFromCart = (title) => {
    setCartItems((prev) => prev.filter((item) => item.title !== title));
  };

  const updateOrders = (items) => {
    setOrders(items);
  };

  return (
    <AppContext.Provider
      value={{
        onAddToFavorites,
        onAddToCart,
        cartItems,
        sneakersData,
        favoriteItems,
        setCartOpened,
        setCartItems,
        orders,
      }}>
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
                <Drawer
                  opened={cartOpened}
                  updateOrders={updateOrders}
                  onRemove={onRemoveItemFromCart}
                  items={cartItems}
                  onClose={() => setCartOpened(false)}
                />
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
                    isLoading={isLoading}
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
                <Favorites />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <header className="d-flex justify-between align-center p-40">
                  <Header onClickCart={() => setCartOpened(true)} />
                </header>
                <Orders orders={orders} />
              </>
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
