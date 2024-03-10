import './App.scss';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <header className="d-flex justify-between align-center p-40">
        <Header />
      </header>
      <main>
        <div className="content p-40">
          <div className="d-flex justify-between align-center mb-40">
            <h1>All sneakers</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input placeholder="Search..." type="text" />
            </div>
          </div>
          <div className="d-flex justify-between">
            <Card />
            {/* <div className="card">
              <div className="favorite">
                <FaRegHeart className="liked" />
              </div>
              <img
                width={220}
                height={220}
                src="/img/sneakers/hoka-one-one-kaha-2-low-gtx-scarpe-outdoor-uomo-goblin-blue-1123190-gbhm_A-240x240.jpg"
                alt="Sneakers"
              />
              <h5>Men's sneakers Hoka One One Kaha Low GTX</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Price: </span>
                  <b>€ 129,99</b>
                </div>
                <CiSquarePlus className="plus" />
              </div>
            </div>
            <div className="card">
              <div className="favorite">
                <FaRegHeart className="liked" />
              </div>
              <img
                width={220}
                height={220}
                src="/img/sneakers/adidas_ADIZERO_SL-CBLACK_CBLACK_CARBON_hq1348_A-240x240.jpg"
                alt="Sneakers"
              />
              <h5>Men's sneakers Adidas Adizero SL-Black</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Price: </span>
                  <b>€ 159,99</b>
                </div>
                <CiSquarePlus className="plus" />
              </div>
            </div>
            <div className="card">
              <div className="favorite">
                <FaRegHeart className="liked" />
              </div>
              <img
                width={220}
                height={220}
                src="/img/sneakers/hoka-one-one-hopara-sandali-uomo-avocado-oxford-tan-1106534-aotn_A-240x240.jpg"
                alt="Sneakers"
              />
              <h5>Men's sneakers Hoka One One Hopara</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Price: </span>
                  <b>€ 69,99</b>
                </div>
                <CiSquarePlus className="plus" />
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
