import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const User = () => {
  const id = useParams();
  const currentUser = id
    ? useSelector((state) => state.users.find((user) => user.id === id))
    : null;
  const [email, setEmail] = useState(currentUser?.email);

  return (
    <form>
      <input type="email" defaultValue={email} onChange={(e) => setEmail(e.currentTarget.value)} />
    </form>
  );
};

export default User;
