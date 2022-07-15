import './App.css';
import 'antd/dist/antd.css';
import About from './containers/About';
import Dashboard from './containers/Dashboard';
import ViewProduct from './containers/ViewProduct';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/about' element={<About />} />
      <Route path='/view-product' element={<ViewProduct />} />
    </Routes>
  );
}

export default App;
