import { Route, Routes } from 'react-router-dom';
import './App.css';
import AnzoGramHeader from './components/anzoGramAssets/AnzoGramHeader';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';




function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/About' element={<LandingPage/>}></Route>
      <Route path='/AnzoGram' element={<AnzoGramHeader/>}></Route>
    </Routes>
    </>
  );
}

export default App;
