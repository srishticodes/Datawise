import React from 'react';
import UsersTable from '../components/UsersTable';
import './Users.css';

const Users = () => {
  return (
    <div className="users-page">
      <h1>Users</h1>
      <div className="card">
        <UsersTable />
      </div>
    </div>
  );
};

export default Users; 