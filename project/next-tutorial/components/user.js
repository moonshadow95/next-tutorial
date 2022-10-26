import React from 'react';

const User = ({ user }) => (
  <div key={user.id}>
    <p>{user.name}</p>
    <p>{user.email}</p>
  </div>
);

export default User;
