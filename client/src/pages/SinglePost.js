import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_POST } from '../utils/queries';

const SinglePost = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-banner-yellow text-dark p-2 m-0">
        {post.postAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          share this set on {post.createdAt}
        </span>
      </h3>
      <div className=" py-4">
        <div className="centered-image">
              <img src={post.postImage} alt={post.postImage}/>
            </div>
        <blockquote
          className="p-4 bg-light"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            
            lineHeight: '1.5',
          }}
        >
          {post.postText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={post.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm postId={post._id} />
      </div>
    </div>
  );
};

export default SinglePost;
