import React from 'react';
import { useQuery } from '@apollo/client';

// import ProfileList from '../components/ProfileList';
// import ProfileForm from '../components/ProfileForm';

import { QUERY_USER, } from '../utils/queries';

const Categories = () => {
  // const { loading, data } = useQuery(QUERY_USER);
  // const users = data?.users || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div class="window">
          <h1>List by Categories</h1>
          <p>Categories in progress.</p>
        </div>
      </div>
    </main>
  );
};

export default Categories;
