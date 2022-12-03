const STATUS_CHECKER = 'STATUS_CHECKER';

const statusChecker = () => ({ type: STATUS_CHECKER });

const handleStatus = (state = [], action) => {
  switch (action.type) {
    case STATUS_CHECKER:
      return 'Under construction';
    default:
      return state;
  }
};

export default handleStatus;
export { statusChecker };
