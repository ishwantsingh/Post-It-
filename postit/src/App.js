import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

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
import CreatePost from "./components/postsContainer/CreatePost";
import PostDetails from "./components/postsContainer/postFunctions/PostDetails";
import User from "./components/user/User";

class App extends Component {
  render() {
    const { posts, auth } = this.props;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="data-div">
            <Switch>
              <Route
                exact
                path="/"
                render={props => <AllPostList {...props} posts={posts} />}
              />
              <Route
                path="/announcements"
                render={props => <AnnouncementList {...props} posts={posts} />}
              />
              <Route
                path="/devteam"
                render={props => <DevTeamList {...props} posts={posts} />}
              />
              <Route
                path="/desteam"
                render={props => <DesignTeamList {...props} posts={posts} />}
              />
              <Route
                path="/marketing"
                render={props => <MarketingPostList {...props} posts={posts} />}
              />
              <Route
                path="/hr"
                render={props => <HRPostList {...props} posts={posts} />}
              />
              <Route
                path="/productmanager"
                render={props => (
                  <ProductManagerList {...props} posts={posts} />
                )}
              />
              <Route path="/create" component={CreatePost} />
              <Route
                path="/post/:id"
                render={props => <PostDetails {...props} posts={posts} />}
              />
              <Route
                path="/user"
                render={props => <User {...props} auth={auth} />}
              />

              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts", orderBy: ["createdAt", "desc"] }])
)(App);
