//var _token = "";
var _isSendBox = false;
var helper = require('./v4/helper');

module.exports = {
  setToken: function(token)
  {
	//_token = token;
	helper.setToken(token);
  },
  setSandBox: function(isSendBox)
  {
	_isSendBox = isSendBox;
  },
  getV4: function()
  {
	return require('./v4');
  },
  getV4Live: function()
  {
	throw new Error("NotImplementedException");
	return require('./v4Live');
  },
  getV5: function()
  {
	throw new Error("NotImplementedException");
	return require('./v5');
  }
};