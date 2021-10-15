import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Authprovider from "./Contexts/Authprovider";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Book from "./Pages/Home/Service/Book/Book";
import Login from "./Pages/Login/Login";
import Privateroute from "./Pages/Login/Privateroute/Privateroute";
import Notfound from "./Pages/Notfound/Notfound";

function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Privateroute path="/booking/:serviceId">
              <Book></Book>
            </Privateroute>

            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
