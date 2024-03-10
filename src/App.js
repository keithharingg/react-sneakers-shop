import './App.scss';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import SneakersList from './components/SneakersList/SneakersList';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <header className="d-flex justify-between align-center p-40">
        <Header />
      </header>
      <main>
        <SneakersList />
      </main>
    </div>
  );
}

export default App;
