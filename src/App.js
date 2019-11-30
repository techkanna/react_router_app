import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Blogs from './Blogs';
import Post from './Post';
import UserProfile from './UserProfile';
import FullImage from './FullImage';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/profiles" exact component={UserProfile} />
          <Route path="/profiles/:id" component={FullImage} />
          <Route path="/blogs/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
