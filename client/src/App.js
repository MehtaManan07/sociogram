import React, { createContext, useReducer, useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import CreatePost from "./Pages/CreatePost";
import { reducer, initialState } from "./reducers/userReducer";
import Landing from "./Pages/Landing";
import { isAuth } from "./helpers/auth";
import PrivateRoute from "./components/Auth/PrivateRoute";

export const UserContext = createContext();

const Routing = () => {
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    if (isAuth()) {
      dispatch({ type: "USER", payload: isAuth().user });
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <PrivateRoute path="/home" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/create/post" component={CreatePost} />
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <Routing />
    </UserContext.Provider>
  );
}

export default App;
