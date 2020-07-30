import React, { createContext, useReducer, useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import CreatePost from "./Pages/Post/CreatePost";
import { reducer, initialState } from "./reducers/userReducer";
import Landing from "./Pages/Home/Landing";
import { isAuth } from "./helpers/auth";
import PrivateRoute from "./components/Auth/PrivateRoute";
import IndividualPost from "./components/Posts/IndividualPost";
import UserProfile from "./Pages/Profile/UserProfile";
import SubPosts from "./Pages/Post/SubPosts";
import EditProfile from "./Pages/Profile/Edit-Profile";

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
      <PrivateRoute path="/subPosts" exact component={SubPosts} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/singlepost/:postId" component={IndividualPost} />
      <PrivateRoute path="/create/post" component={CreatePost} />
      <PrivateRoute path="/profile/:id" component={UserProfile} />
      <PrivateRoute path="/edit-profile/:id" component={EditProfile} />
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
