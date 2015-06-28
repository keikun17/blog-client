var SmallConstatns = require('../constants/SmallConstants.js');
var Dispatcher = require('flux').Dispatcher;

// ES6 Object.assign() ponyfill
var assign = require('object-assign')

var PayloadSources = SmallConstants.PayloadSources;

var SmallAppDispatcher = assign(new Dispatcher(){

  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },


  handleViewAction: functin(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    },
    this.dispatch(payload)
  }

});

module.exports = SmallAppDispatcher;
