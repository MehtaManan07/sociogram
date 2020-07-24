import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import CreatePost from "./Pages/CreatePost";
import { reducer, initialState } from "./reducers/userReducer";
import Landing from "./Pages/Landing";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/create/post" component={CreatePost} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
