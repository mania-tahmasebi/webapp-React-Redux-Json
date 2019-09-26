import { UPDATE_USER, UPDATE_USERS_LIST } from '../actions/user'
const _ = require('lodash')

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERS_LIST:
      return Object.assign({}, state, {list: action.data})
    case UPDATE_USER:
      if(action.data){
        let updatedUser = action.data;
        let users = state.list;
        let index = _.findIndex(users, {id: updatedUser.id});
        if(index != -1){
          users.splice(index, 1, updatedUser);
        }
      }
    default:
      return state
  }
}