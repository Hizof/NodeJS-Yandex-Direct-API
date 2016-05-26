var helper = require('./helper');

module.exports = {
  setAutoPrice: function(param, callback)
  {
	var data = helper.getParamData("SetAutoPrice", param);
	helper.invokeRequest(data, callback);
  },
  updatePrices: function(param, callback)
  {
	var data = helper.getParamData("UpdatePrices", param);
	helper.invokeRequest(data, callback);
  }
};