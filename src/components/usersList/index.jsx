import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const UsersList = () => {
  const { users } = useSelector((state) => state);
  return (
    <div className="users">
      <table className="users__list" cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={`${user.id}`}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>
                <button type="button">Edit</button>
                <button type="button">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
