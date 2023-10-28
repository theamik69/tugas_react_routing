import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import "./App";


function App() {
  const [showBadge, setShowBadge] = useState(true);

  const hideBadge = () => {
    setShowBadge(false);
  };

  const showBadgeAgain = () => {
    setShowBadge(true);
  };

  return (
    <>
      <header>
        <div className="jumbotron">
          <h1>Bandung</h1>
          <p>Kota metropolitan terbesar di Provinsi Jawa Barat, sekaligus menjadi ibu kota provinsi tersebut.</p>
        </div>
        <nav>
          <ul>
            <Link to="/sejarah" onClick={hideBadge}>
              Sejarah
            </Link>
            <Link to="/geografis" onClick={hideBadge}>
              Geografis
            </Link>
            <Link to="/wisata" onClick={hideBadge}>
              Wisata
            </Link>
          </ul>
        </nav>
      </header>

      {showBadge && (
        <div className="badge">
          <img src="public\image\badung-badge.png" alt="badge" />
        </div>
      )}

      <Outlet />

      <footer>
        <p>Tugas Router &#169; 2023, EduWork</p>
      </footer>
    </>
  );
}

export default App;
