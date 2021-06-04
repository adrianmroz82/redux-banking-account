const initialState = 0;

export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.amount;
    case 'WITHDRAW':
      return state - action.amount;
    case 'COLLECT_INTEREST':
      return state * 1.03;
    case 'DELETE_ACCOUNT':
      return 0;
    default:
      return state;
  }
};

const deposit = {
  type: 'DEPOSIT',
  amount: 10,
};

const withdraw = {
  type: 'WITHDRAW',
  amount: 3,
};

const collectInterest = {
  type: 'COLLECT_INTEREST',
};

const deleteAccount = {
  type: 'DELETE_ACCOUNT',
};
