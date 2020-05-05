import React from 'react';
import { useSelector } from 'react-redux';

import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';

function App() {
  const alert = useSelector(state => state.app.alert);

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <PostForm />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Posts />
          </div>
          <div className="col-md-6">
            <FetchedPosts />
          </div>
        </div>
      </div>
      {alert &&
      <div
        className="fixed-bottom alert alert-primary text-center"
        role="alert"
      >
        {alert}
      </div>}
    </>
  );
}

export default App;
