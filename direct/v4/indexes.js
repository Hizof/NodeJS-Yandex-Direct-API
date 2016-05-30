var helper = require('./helper');

module.exports = {
  getAvailableVersions: function(callback)
  {
	var data = helper.getBaseData("GetAvailableVersions");
	helper.invokeRequest(data, callback);
  },
  getChanges: function(param, callback)
  {
	if(!param)
	{
		var data = helper.getBaseData("GetChanges");
	}else{
		var data = helper.getParamData("GetChanges", param);
	}
	helper.invokeRequest(data, callback);
  },
  getRegions: function(callback)
  {
	var data = helper.getBaseData("GetRegions");
	helper.invokeRequest(data, callback);
  },
  getRubrics: function(callback)
  {
	var data = helper.getBaseData("GetRubrics");
	helper.invokeRequest(data, callback);
  },
  getStatGoals: function(param, callback)
  {
	var data = helper.getParamData("GetStatGoals", param);
	helper.invokeRequest(data, callback);
  },
  getTimeZones: function(callback)
  {
	var data = helper.getBaseData("GetTimeZones");
	helper.invokeRequest(data, callback);
  },
  getVersion: function(callback)
  {
	var data = helper.getBaseData("GetVersion");
	helper.invokeRequest(data, callback);
  },
  pingAPI: function(callback)
  {
	var data = helper.getBaseData("PingAPI");
	helper.invokeRequest(data, callback);
  }
};