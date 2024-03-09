import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <svg></svg>
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Best sneakers shop</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg></svg>
            <span>89.99$</span>
          </li>
          <li>
            <svg></svg>
          </li>
        </ul>
      </header>
      <main>
        <div className="content">
          <h1>All sneakers</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
