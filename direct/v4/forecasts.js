var helper = require('./helper');

module.exports = {
  createNewForecast: function(param, callback)
  {
	var data = helper.getParamData("CreateNewForecast", param);
	helper.invokeRequest(data, callback);
  },
  deleteForecastReport: function(param, callback)
  {
	var data = helper.getParamData("DeleteForecastReport", param);
	helper.invokeRequest(data, callback);
  },
  getForecast: function(param, callback)
  {
	var data = helper.getParamData("GetForecast", param);
	helper.invokeRequest(data, callback);
  },
  getForecastList: function(callback)
  {
	var data = helper.getBaseData("GetForecastList");
	helper.invokeRequest(data, callback);
  }
};