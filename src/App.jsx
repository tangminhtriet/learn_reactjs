import { Link, Route, Routes } from 'react-router-dom';
import TodoFeature from './features/ToDo';
import AlbumFeature from './features/Album'
function App() {
  return (
    <div className="App">
      Home Page
      <p>
        <Link to="/todo">todo</Link>
      </p>
      <p>
        <Link to="/albums">AlbumFeature</Link>
      </p>
      <Routes>
        <Route path='/' Component={TodoFeature} exact />
        <Route path='/todo' Component={TodoFeature} />
        <Route path='/albums' Component={AlbumFeature} />
      </Routes>
    </div>
  );
}

export default App;
