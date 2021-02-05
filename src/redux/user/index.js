const ADD_USER = 'USER/ADD';
const UPDATE_USER = 'USER/UPDATE';
const DELETE_USER = 'USER/DELETE';

const initialState = [{
  id: 1,
  name: 'Test01',
  age: 10,
  gender: 'T',
  address: 'Sesame Street, 10',
  email: 'test01@example.com',
}, {
  id: 2,
  name: 'Test02',
  age: 10,
  gender: 'T',
  address: 'Sesame Street, 10',
  email: 'test02@example.com',
}, {
  id: 3,
  name: 'Test03',
  age: 10,
  gender: 'T',
  address: 'Sesame Street, 10',
  email: 'test03@example.com',
}];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return [payload, ...state];
    case UPDATE_USER:
    case DELETE_USER:
      return state;
    default:
      return state;
  }
};
