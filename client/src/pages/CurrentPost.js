import React from 'react';
import { useQuery } from '@apollo/client';

// import ProfileList from '../components/ProfileList';
// import ProfileForm from '../components/ProfileForm';

import { QUERY_PROFILES } from '../utils/queries';

const CurrentPosts = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div class="window">
          <h1>Current Posts</h1>
          <p>Window to fill with Current Posts.</p>
        </div>
      </div>
    </main>
  );
};

export default CurrentPosts;
