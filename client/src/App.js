import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import CurrentListings from "./pages/CurrentListings/CurrentListings";
import Search from "./pages/Search/Search";
import { useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import { setAxiosDefaults } from "./utils/axiosDefaults";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ManageProperties from "./pages/ManageProperties/ManageProperties";
import Login from "./pages/Login/Login";
import NewUser from "./pages/NewUser/NewUser";
import AlertContext from "./context/AlertContext";

function App() {
  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });

  const [jwt, setJwt] = useState("");

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt);
    }
  }, [jwt]);
  
  return (
    <Router>
      <AlertContext.Provider value={{ ...alert, setAlert: setAlert }}>
        <AuthContext.Provider value={{ jwt, setJwt }}>
          <div className="d-flex flex-column min-vh-100">
            <MyNavbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route
                exact
                path="/current-listings"
                component={CurrentListings}
              />
              <Route exact path="/search" component={Search} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/new-user" component={NewUser} />
              <ProtectedRoute
                exact
                path="/manage-properties"
                component={ManageProperties}
              />
            </Switch>
            <Footer />
          </div>
        </AuthContext.Provider>
      </AlertContext.Provider>
    </Router>
  );
}

export default App;
