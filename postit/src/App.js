import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import styled from "styled-components";

import Headbar from "./components/layout/Headbar";
import Navbar from "./components/layout/Navbar";
import AllPostList from "./components/postsContainer/AllPostList";
import AnnouncementList from "./components/postsContainer/postTypes/AnnouncementList";
import DevTeamList from "./components/postsContainer/postTypes/DevTeamList";
import DesignTeamList from "./components/postsContainer/postTypes/DesignTeamList";
import MarketingPostList from "./components/postsContainer/postTypes/MarketingPostList";
import HRPostList from "./components/postsContainer/postTypes/HRPostList";
import ProductManagerList from "./components/postsContainer/postTypes/ProductManagerList";
import CreatePost from "./components/postsContainer/CreatePost";
import PostDetails from "./components/postsContainer/postFunctions/PostDetails";
import User from "./components/user/User";
import Login from "./components/layout/Login";
import Spinner from "./components/layout/Spinner";

class App extends Component {
  render() {
    const { posts, auth } = this.props;
    return (
      <Router>
        <div className="App">
          <div className="headbar">
            <Headbar auth={auth} />
          </div>
          <div className="app-data">
            <Navbar />
            <div className="data-div">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <AllPostList {...props} posts={posts} auth={auth} />
                  )}
                />
                <Route
                  path="/announcements"
                  render={props => (
                    <AnnouncementList {...props} posts={posts} auth={auth} />
                  )}
                />
                <Route
                  path="/devteam"
                  render={props => (
                    <DevTeamList {...props} posts={posts} auth={auth} />
                  )}
                />
                <Route
                  path="/desteam"
                  render={props => (
                    <DesignTeamList {...props} posts={posts} auth={auth} />
                  )}
                />
                <Route
                  path="/marketing"
                  render={props => (
                    <MarketingPostList {...props} posts={posts} auth={auth} />
                  )}
                />
                <Route
                  path="/hr"
                  render={props => (
                    <HRPostList {...props} posts={posts} auth={auth} />
                  )}
                />
                <Route
                  path="/productmanager"
                  render={props => (
                    <ProductManagerList {...props} posts={posts} auth={auth} />
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

                <Route
                  path="/login"
                  render={() => (
                    <Spinner>
                      <Login />
                    </Spinner>
                  )}
                />
              </Switch>
            </div>
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
