var ServerAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var request = require('superagent');

module.exports = {

  login: function(email, password){
    request.post('http://localhost:3002/v1/login')
      .send({ username: email, password: password, grant_type: 'password' })
      .set('Accept', 'application/json')
      .end(functin(error, res){
        if(res) {
          if (res.error){
            var errorMsgs = _getErrors(res);
            ServerActionCreators.receiveLogin(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveLogim(json, null)
          }
        }
      });
  },

  // logout: function(){
  // }

}
