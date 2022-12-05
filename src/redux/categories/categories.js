const CHECK_STATUS = 'BOOKSTORE/categories/CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const initialState = [];

// reducer
const checkStatusReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case CHECK_STATUS:
      return 'UNDER_CONSTRUCTION';
    default:
      return state;
  }
};

export default checkStatusReducer;
