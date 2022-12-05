import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from './Components/Navigation';
import Booklist from './Components/booklist';
import Categories from './Components/Categories';
import store from './redux/configureStore';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Booklist />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
