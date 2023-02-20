import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Offers from './pages/Offers';
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from "./pages/Profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>


      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
