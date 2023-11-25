/* eslint-disable react-refresh/only-export-components */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import {
  Addproduct,
  Cart,
  Dashboard,
  ErrorPage,
  Home,
  Login,
  Order,
  Productinfo,
  Signup,
  UpdateProduct,
} from "./Pages";
import MyState from "./context/data/MyState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="order"
            element={
              <protectedRoutes>
                <Order />
              </protectedRoutes>
            }
          />
          <Route
            path="dashboard"
            element={
              <protectedRoutesAdmin>
                <Dashboard />
              </protectedRoutesAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<Productinfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/addproduct"
            element={
              <protectedRoutesAdmin>
                <Addproduct />
              </protectedRoutesAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <protectedRoutesAdmin>
                <UpdateProduct />
              </protectedRoutesAdmin>
            }
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;

// user

export const protectedRoutes = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />; 
  }
};

export const protectedRoutesAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "ankitsrivastav34@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
