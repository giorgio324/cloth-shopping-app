import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentification/authentification.component';
const Shop = () => {
  return (
    <div className=''>
      <div className=''>
        <h1>i am shop</h1>
      </div>
    </div>
  );
};
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
