import React from 'react';
// import { useQuery } from '@apollo/client';

// import { QUERY_PROFILES } from '../utils/queries';

const Signup = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div class="window">
          <h1>Signup Form</h1>
          <p>The window that can be replaced.</p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
