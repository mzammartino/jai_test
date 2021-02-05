import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const User = () => {
  const id = useParams();
  const currentUser = id ? useSelector((state) => state.users.find((user) => user.id == id)) : null;

  return (
    <form>
      <input type="email" >
    </form>
  )
};
