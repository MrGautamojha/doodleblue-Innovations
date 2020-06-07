import {UPDATE_APP_STATE, UPDATE_BULK_APP_STATE} from './types';

const initialState: any = {
  userData: [],
  loggedIn: false,
  showAlertMessage: false,
  language: 'EN', //'EN', "AR"
  item: new Object(),
  tempemployee: new Object(),
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_APP_STATE: {
      const {name, value} = action.payload;
      const newState = {...state, [name]: value};
      return newState;
    }
    case UPDATE_BULK_APP_STATE: {
      const {values} = action.payload;
      const newState = {...state, ...values};
      return newState;
    }
    case 'ADD_ITEM': {
      state.item[action.payload[0]] = action.payload[1];
      const newState = {...state};
      return newState;
    }

    case 'REMOVE_ITEM': {
      delete state.item[action.payload];
      console.log('remove', action.payload);
      const newState = {...state};
      return newState;
    }

    default:
      return state;
  }
};

export default appReducer;
