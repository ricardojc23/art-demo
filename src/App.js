import { useState, useEffect } from 'react'

function App() {

  const url = `https://api.artic.edu/api/v1/artworks`;

  // This is comment

  const [currentPage, setCurrentPage] = useState(1);
  const [arts, setArts] = useState([]);
  const [artsError, setArtsError] = useState('');

  useEffect(() => {
    async function getArts() {
      setArts([]);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setArts(json.data);
      } catch (error) {
        setArtsError(error.message);
        setArts([]);
      }
    }
    getArts();
  });

  return (
    <div>
      {artsError ? <h4>{artsError}</h4> : null }
      <button  onClick={() => setCurrentPage(currentPage + 1)} className="btn btn-primary">
        Next Page
      </button>
      <p>{arts}</p>
      <p>{currentPage}</p>
      {/* {arts.map((art) => (
        <div className="card" style={{width: '18rem',}}>
          <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{art.title}</h5>
            <p className="card-text">{`${art.artist_title}`}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default App;
