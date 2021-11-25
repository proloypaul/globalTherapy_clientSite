import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner/Banner';
import DoctorDashboard from './Components/DoctorDashboard/DoctorDashboard';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NotFind from './Components/NotFind/NotFind';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="banner" element={<Banner />} />
        <Route path="doctorDashboard" element={<DoctorDashboard />} />
        <Route path="*" element={<NotFind/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
