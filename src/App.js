import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Home/Services/Services';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Experts from './Pages/Home/Experts/Experts';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import AddUser from './Pages/AddUser/AddUser';
import ManageService from './Pages/ManageService/ManageService';
import CheckOut from './CheckOut/CheckOut';
import { ToastContainer } from 'react-toastify';
import Order from './Pages/Order/Order';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={
          <RequireAuth>
            <About />
          </RequireAuth>
        }>
        </Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        }>
        </Route>
        <Route path='/adduser' element={
          <RequireAuth>
            <AddUser />
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageService />
          </RequireAuth>
        }></Route>
        <Route path='/order' element={
          <RequireAuth>
            <Order/>
          </RequireAuth>
        }></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/expert' element={<Experts />}></Route>
        <Route path='/serviceDetails/:serviceId' element={<ServiceDetails />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
