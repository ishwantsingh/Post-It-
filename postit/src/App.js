import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import AllPostList from "./components/postsContainer/AllPostList";
import AnnouncementList from "./components/postsContainer/postTypes/AnnouncementList";
import DevTeamList from "./components/postsContainer/postTypes/DevTeamList";
import DesignTeamList from "./components/postsContainer/postTypes/DesignTeamList";
import MarketingPostList from "./components/postsContainer/postTypes/MarketingPostList";
import HRPostList from "./components/postsContainer/postTypes/HRPostList";
import ProductManagerList from "./components/postsContainer/postTypes/ProductManagerList";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={AllPostList} />
            <Route path="/announcements" component={AnnouncementList} />
            <Route path="/devteam" component={DevTeamList} />
            <Route path="/desteam" component={DesignTeamList} />
            <Route path="/marketing" component={MarketingPostList} />
            <Route path="/hr" component={HRPostList} />
            <Route path="/productmanager" component={ProductManagerList} />
            {/* <Route path="/create" component={CreatePost} /> */}
            {/* <Route path="/user" component={User} /> */}

            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
