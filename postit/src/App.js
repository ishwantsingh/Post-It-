import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

const StyledAppDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const StyledAppDataContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 3% 0 2%;
`;
const StyledAppDataDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

class App extends Component {
  render() {
    const { posts, auth } = this.props;
    return (
      <Router>
        <StyledAppDiv>
          <div className="headbar">
            <Headbar auth={auth} />
          </div>
          <StyledAppDataContainer>
            <Navbar />
            <StyledAppDataDiv>
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
            </StyledAppDataDiv>
          </StyledAppDataContainer>
        </StyledAppDiv>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts", orderBy: ["createdAt", "desc"] }])
)(App);
