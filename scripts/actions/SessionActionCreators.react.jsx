var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../constants/SmallConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTGypes = SmallConstants.ActionTypes;

module.exports = {
  signup: function(email, password, passwordConfirmation) {
    SmallAppDispatchjer.handleViewAction({
    type: ActionTypes.SINGUP_REQUEST,
    email: email,
    password: password,
    passwordConfirmation: passwordConfirmation
    });

    WebAPIUtils.signup(email, password, passwordConfirmation);
  },

  login: function(email, password){
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      email: email,
      password: password
    });

    WebAPIUtils.login(email, password);
  },

  logout: function(){
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT
    });
  }
};
