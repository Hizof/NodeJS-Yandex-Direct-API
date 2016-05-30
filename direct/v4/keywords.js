var helper = require('./helper');

module.exports = {
  createNewWordstatReport: function(param, callback)
  {
	var data = helper.getParamData("CreateNewWordstatReport", param);
	helper.invokeRequest(data, callback);
  },
  deleteWordstatReport: function(param, callback)
  {
	var data = helper.getParamData("DeleteWordstatReport", param);
	helper.invokeRequest(data, callback);
  },
  getWordstatReport: function(param, callback)
  {
	var data = helper.getParamData("GetWordstatReport", param);
	helper.invokeRequest(data, callback);
  },
  getWordstatReportList: function(callback)
  {
	var data = helper.getBaseData("GetWordstatReportList");
	helper.invokeRequest(data, callback);
  },
  getKeywordsSuggestion: function(param, callback)
  {
	var data = helper.getParamData("GetKeywordsSuggestion", param);
	helper.invokeRequest(data, callback);
  }
};