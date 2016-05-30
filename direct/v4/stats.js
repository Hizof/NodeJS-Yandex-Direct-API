var helper = require('./helper');

module.exports = {
  getBalance: function(param, callback)
  {
	var data = helper.getParamData("GetBalance", param);
	helper.invokeRequest(data, callback);
  },
  getSummaryStat: function(param, callback)
  {
	var data = helper.getParamData("GetSummaryStat", param);
	helper.invokeRequest(data, callback);
  },
  createNewReport: function(param, callback)
  {
	var data = helper.getParamData("CreateNewReport", param);
	helper.invokeRequest(data, callback);
  },
  deleteReport: function(param, callback)
  {
	var data = helper.getParamData("DeleteReport", param);
	helper.invokeRequest(data, callback);
  },
  getReportList: function(callback)
  {
	var data = helper.getBaseData("GetReportList");
	helper.invokeRequest(data, callback);
  }
};