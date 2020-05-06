import React from 'react';

import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';
import Alert from './components/Alert';

function App() {
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
      <Alert />
    </>
  );
}

export default App;
