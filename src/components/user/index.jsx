/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Formik, Form } from 'formik';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import GENDERS from '../../GENDERS';
import { setForm } from '../../redux/form';
import { addUser, updateUser } from '../../redux/user';

const User = () => {
  const { id } = useParams();
  const history = useHistory();
  const ref = useRef();
  const dispatch = useDispatch();
  const currentUser = id
    ? useSelector((state) => state.users.find((user) => user.id === Number(id)))
    : null;

  useEffect(() => {
    dispatch(setForm(ref.current));
    return () => dispatch(setForm(null));
  });

  return (
    <Formik
      innerRef={ref}
      initialValues={{
        email: currentUser?.email || '',
        name: currentUser?.name || '',
        address: currentUser?.address || '',
        age: currentUser?.age || '',
        gender: currentUser?.gender || GENDERS[0].description,
      }}
      onSubmit={(values) => {
        const user = {
          id: id || Date.now(),
          email: values.email,
          name: values.name,
          address: values.address,
          age: values.age,
          gender: values.gender,
        };
        if (id) {
          dispatch(updateUser(user));
        } else {
          dispatch(addUser(user));
        }
        history.push('/');
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" placeholder="Jane" />

        <label htmlFor="address">Address</label>
        <Field id="address" name="address" placeholder="Sesame Street, 10" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />

        <label htmlFor="gender">Gender</label>
        <Field as="select" id="gender" name="gender">
          {GENDERS.map(
            (gender) => (
              <option
                key={gender.id}
                value={gender.description}
              >
                {gender.description}
              </option>
            ),
          )}
        </Field>

        <label htmlFor="address">Age</label>
        <Field id="age" name="age" placeholder="Sesame Street, 10" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default User;
