# Post-It

Welcome to Post-It Web App!
 
 Screenshot: 
![alt text][Screenshot]
 
[Screenshot]: https://github.com/ishwantsingh/Plan-It/blob/master/plan-it/src/Screenshot%20(69).png "Screenshot"

# Tech-Stack

## Back-End ```(Production)```

### Firebase Cloud Firestore
Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity. Cloud Firestore also offers seamless integration with other Firebase and Google Cloud Platform products, including Cloud Functions.

### Firebase Authentication
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

## Front-End Dependencies ```(Production)```

### React

React is the current industry standard that offers a lot of out of the box benefits. It is fast, efficient, and scalable. Due to the large community, finding solutions to potential problems and reference material is much easier, even for a potential dev without a lot of experience who would like to contribute to Main Course. | [View Dependency](https://reactjs.org/docs/getting-started.html)

### Redux

A state management tool making it possible to store the entire state of the application in a single store. This means a unidirectional data flow, and as the application scales we have predictable state updates which subsequently make things easier to test and introduce new features. Redux also has solid documentation and an active community, meaning that as new devs become introduced to the project it's likely that any problems they face would have already been encountered by someone else, thus making solutions easy to find. | [View Dependency](https://redux.js.org/)

### Redux Thunk

A middleware that allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. This functionality makes it easier to scale and implement features given diverse needs in a growing project. | [View Dependency](https://github.com/reduxjs/redux-thunk)

### Styled Components

Has a thriving community and offers the ability to directly style multiple components within a file. The syntax used is familiar to JavaScript and improves code cleanliness and makes it easy to get up and going for those without a lot of css experience. Styled components are also very efficient, improving load time for users. | [View Dependency](https://www.styled-components.com/docs/)

### Connected React Router

Allows for the ability to synchronize state with redux store through uni-directional data flow, time traveling, and dispatching of history methods. This makes for an incredibly useful tool when dealing with various stages of state and subsequent routing for a seamless and intuitive UI. | [View Dependency](https://www.npmjs.com/package/connected-react-router)

### Moment

A lightweight option for formatting JavaScript dates and time.

### Redux Firestore

Redux bindings for Firestore. Provides low-level API used in other libraries such as react-redux-firebase

### React-Redux Firebase

Redux bindings for Firebase. Includes Higher Order Component (HOC) for use with React, with Out of the box support for authentication (with auto load user profile).


# Guide

## Log In/ Sign Up on the App
Click on the Log In button to Sign Up/Sign In using your Google Account

## Posts Categories
Each Post in the App is filtered via the post type into different tabs.
The 'All Posts' Tab shows all types of posts in one tab.
The 'Announcement' tab shows all the Announcements made on the web and same goes for other Post-type tabs.
Click on anyone of the posts to visit the Post-Details page and see the complete content of the post.

## Upvote or Downvote Posts
Click on the upvote or downvote button on the post to upvote or downvote it. The post with highest difference between upvotes and downvotes will be shown on top and the least on the bottom. This is applicable for each Post-type Tab.

## Create Post
Click on the Compose button to Create Your Own Post! 
Choose the Post-type from the drop down menu and Type out the post using the input feild and then click on the creat Button.

### Its That Simple!!!


