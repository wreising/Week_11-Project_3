import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    return <div><h2>Welcome to Brick Blog, a place for Lego Lovers to share their thoughts on Lego sets, media and their own creations!</h2><h4>Be the first to create a post and share your thoughts! Sign Up or Log In above to get started.</h4></div>
    ;
  }

  return (
    <div>
      <div><h3>Welcome to Brick Blog, a place for Lego Lovers to share their thoughts on Lego sets, media and their own creations!</h3><h4>Sign Up or Log In above to get started.</h4></div>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <h4 className="card-header bg-primary text-dark p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${post.postAuthor}`}
                >
                  {post.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    shared this set on {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You shared this set on {post.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="centered-image">
              <img src={post.postImage} alt={post.postImage} />
            </div>
            <div className="card-body bg-light p-2">
              <p>{post.postText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/posts/${post._id}`}
            >
              See what other's have to say about this post!
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList;
