var helper = require('./helper');

module.exports = {
  createNewSubclient: function(param, callback)
  {
	var data = helper.getParamData("CreateNewSubclient", param);
	helper.invokeRequest(data, callback);
  },
  getClientInfo: function(param, callback)
  {
	var data = helper.getParamData("GetClientInfo", param);
	helper.invokeRequest(data, callback);
  },
  getClientsList: function(param, callback)
  {
	if(!param)
	{
		var data = helper.getBaseData("GetClientsList");
	}else{
		var data = helper.getParamData("GetClientsList", param);
	}
	helper.invokeRequest(data, callback);
  },
  getClientsUnits: function(callback)
  {
	var data = helper.getBaseData("GetClientsUnits");
	helper.invokeRequest(data, callback);
  },
  getSubClients: function(callback)
  {
	var data = helper.getBaseData("GetSubClients");
	helper.invokeRequest(data, callback);
  },
  updateClientInfo: function(callback)
  {
	var data = helper.getBaseData("UpdateClientInfo");
	helper.invokeRequest(data, callback);
  }
};