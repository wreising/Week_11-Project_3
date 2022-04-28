import React from 'react';
import { useQuery } from '@apollo/client';

// import ProfileList from '../components/ProfileList';
// import ProfileForm from '../components/ProfileForm';

import { QUERY_PROFILES } from '../utils/queries';

const Catagories = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div class="window">
          <h1>List by Catagories</h1>
          <p>The window that can be replaced.</p>
        </div>
      </div>
    </main>
  );
};

export default Catagories;
