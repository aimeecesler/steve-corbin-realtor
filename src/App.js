import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import CurrentListings from "./pages/CurrentListings/CurrentListings";
import SearchResults from "./pages/SearchResults/SearchResults";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/current-listings" component={CurrentListings} />
          <Route exact path="/search-results" component={SearchResults} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
