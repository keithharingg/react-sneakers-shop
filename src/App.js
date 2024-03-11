import './App.scss';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import SneakersList from './components/SneakersList/SneakersList';
import { useState } from 'react';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <header className="d-flex justify-between align-center p-40">
        <Header onClickCart={() => setCartOpened(true)} />
      </header>
      <main>
        <SneakersList />
      </main>
    </div>
  );
}

export default App;
