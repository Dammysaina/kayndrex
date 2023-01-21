import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Language from './components/languages';
import Layout from './components/layout';
import Privacypolicy from './components/privacypolicy';
import Termsandcons from './components/termsandcons';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path="home" element={<Privacypolicy/>}/>
        <Route exact path="termsandconditions" element={<Termsandcons/>} />
        <Route exact path="language" element={<Language/>}/>
        <Route path="/" element={<Navigate replace to="/privacypolicy" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
