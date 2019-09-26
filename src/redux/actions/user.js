const axios = require('axios');

export const UPDATE_USERS_LIST = 'user/UPDATE_USERS_LIST'
export const UPDATE_USER = 'user/UPDATE_USER'

export const fetchUsers = () => {
  return async (dispatch) => {
    try{
      let response = await axios.get('/users.json');
      if(response && response.data){
        const users = response.data;

        dispatch({
          type: UPDATE_USERS_LIST,
          data: users
        })
      }
    }catch (e) {

    }

  }
}

export const updateUser = (user) => {
  return async (dispatch) => {
    try{
      //TODO: call rest api to save user information to server
      dispatch({
        type: UPDATE_USER,
        data: user
      })
    }catch (e) {

    }

  }
}