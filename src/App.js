import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Offers from './pages/Offers';
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from "./pages/Profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";

function App() {
  return (
    <div>


      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
