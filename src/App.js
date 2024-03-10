import './App.scss';
import { FaShoppingCart, FaUserCircle, FaHeart, FaRegHeart } from 'react-icons/fa';
import { CgCloseR } from 'react-icons/cg';
import { BiSolidCheckboxChecked } from 'react-icons/bi';
import { CiSquarePlus } from 'react-icons/ci';

function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: 'none' }} className="drawer-overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between">
            Cart <CgCloseR className="cart-remove" />
          </h2>

          <div className="cart-items">
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-10"
                width={150}
                height={150}
                src="/img/sneakers/hoka-one-one-kaha-2-low-gtx-scarpe-outdoor-uomo-goblin-blue-1123190-gbhm_A-240x240.jpg"
                alt="Sneakers"
              />
              <div className="mr-10">
                <p className="sex">Men's sneakers</p>
                <p className="title">Hoka One One Kaha Low GTX</p>
                <b>€ 129,99</b>
              </div>
              <CgCloseR className="cart-remove" />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-10"
                width={150}
                height={150}
                src="/img/sneakers/adidas-adizero-prime-x-2-strung-scarpe-running-uomo-ivory-black-id0264_A-240x240.jpg"
                alt="Sneakers"
              />
              <div className="mr-10">
                <p className="sex">Men's sneakers</p>
                <p className="title">Adidas Adizero Prime X-2</p>
                <b>€ 299,99</b>
              </div>
              <CgCloseR className="cart-remove" />
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total: </span>
                  <div></div>
                  <b>€ 430,00</b>
                </li>
                <li>
                  <span>Tax 5%: </span>
                  <div></div>
                  <b>€ 21,05</b>
                </li>
              </ul>
              <button className="greenButton">
                Checkout <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
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
          <div className="d-flex justify-between align-center mb-40">
            <h1>All sneakers</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input placeholder="Search..." type="text" />
            </div>
          </div>
          <div className="d-flex justify-between">
            <div className="card">
              <div className="favorite">
                <FaRegHeart className="liked" />
              </div>
              {/* <FaHeart /> */}
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
                {/* <BiSolidCheckboxChecked
                  style={{
                    width: '50px',
                    height: '50px',
                    cursor: 'pointer',
                    opacity: 0.5,
                  }}
                /> */}
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
