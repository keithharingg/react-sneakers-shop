import './App.scss';
import { FaShoppingCart, FaUserCircle, FaHeart } from 'react-icons/fa';
import { CiSquarePlus } from 'react-icons/ci';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best sneakers shop</p>
          </div>
        </div>
        <ul className="d-flex">
          <li
            style={{
              cursor: 'pointer',
            }}
            className="mr-30">
            <FaShoppingCart />
            <span className="ml-10">€ 107,50</span>
          </li>
          <li
            style={{
              cursor: 'pointer',
            }}
            className="mr-30">
            <FaHeart />
            <span className="ml-10">Bookmarks</span>
          </li>
          <li
            style={{
              cursor: 'pointer',
            }}
            className="mr-30">
            <FaUserCircle />
            <span className="ml-10">Profile</span>
          </li>
        </ul>
      </header>
      <main>
        <div className="content p-40">
          <h1 className="mb-40">All sneakers</h1>
          <div className="d-flex justify-between">
            <div className="card">
              <img
                width={220}
                height={220}
                src="/img/sneakers/adidas-adizero-prime-x-2-strung-scarpe-running-uomo-ivory-black-id0264_A-240x240.jpg"
                alt="Sneakers"
              />
              <h5>Men's sneakers Adidas Adizero Prime X-2</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Price: </span>
                  <b>€ 299,99</b>
                </div>
                <CiSquarePlus
                  style={{
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    opacity: 0.5,
                  }}
                />
              </div>
            </div>
            <div className="card">
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
                <CiSquarePlus
                  style={{
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    opacity: 0.5,
                  }}
                />
              </div>
            </div>
            <div className="card">
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
                <CiSquarePlus
                  style={{
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    opacity: 0.5,
                  }}
                />
              </div>
            </div>
            <div className="card">
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
                <CiSquarePlus
                  style={{
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    opacity: 0.5,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
