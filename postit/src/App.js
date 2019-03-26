import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import dummyData from "./dummyData/postData";

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
  constructor() {
    super();
    this.state = {
      posts: ""
    };
  }
  // componentDidMount() {
  //   this.setState({ posts: dummyData });
  // }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="data-div">
            <Switch>
              <Route
                exact
                path="/"
                render={props => <AllPostList {...props} />}
              />
              <Route
                path="/announcements"
                render={props => <AnnouncementList {...props} />}
              />
              <Route
                path="/devteam"
                render={props => <DevTeamList {...props} />}
              />
              <Route
                path="/desteam"
                render={props => <DesignTeamList {...props} />}
              />
              <Route
                path="/marketing"
                render={props => <MarketingPostList {...props} />}
              />
              <Route path="/hr" render={props => <HRPostList {...props} />} />
              <Route
                path="/productmanager"
                render={props => <ProductManagerList {...props} />}
              />
              {/* <Route path="/create" component={CreatePost} /> */}
              {/* <Route path="/user" component={User} /> */}

              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
