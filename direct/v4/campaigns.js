var helper = require('./helper');

module.exports = {
  archiveCampaign: function(param, callback)
  {
	if (!param.CampaignID) {
		throw new SyntaxError("Требуется Идентификатор кампании.");
	}
	
	var data = helper.getParamData("ArchiveCampaign", param);
	helper.invokeRequest(data, callback);
  },
  
  createOrUpdateCampaign: function(param, callback)
  {
	var data = helper.getParamData("CreateOrUpdateCampaign", param);
	helper.invokeRequest(data, callback);
  },
  
  deleteCampaign: function(param, callback)
  {
	if (!param.CampaignID) {
		throw new SyntaxError("Требуется Идентификатор кампании.");
	}
	
	var data = helper.getParamData("DeleteCampaign", param);
	helper.invokeRequest(data, callback);
  },
  
  getCampaignParams: function(param, callback)
  {
    if (!param.CampaignID) {
		throw new SyntaxError("Требуется Идентификатор кампании.");
	}
	var data = helper.getParamData("GetCampaignParams",param);
	helper.invokeRequest(data, callback)
  },
  
  getCampaignsList: function(param, callback)
  {
	if(!param)
	{
		var data = helper.getBaseData("GetCampaignsList");
	}else{
		if(!Array.isArray(param))
		{
			throw new SyntaxError("Поле Logins должно быть массивом.");
		}
		var data = helper.getParamData("GetCampaignsList", param);
	}
	helper.invokeRequest(data, callback)
  },
  
  getCampaignsListFilter: function(param, callback)
  {
	var data = helper.getParamData("GetCampaignsListFilter",param);
	helper.invokeRequest(data, callback)
  },
  
  getCampaignsParams: function(param, callback)
  {
	var data = helper.getParamData("GetCampaignsParams",param);
	helper.invokeRequest(data, callback)
  },
  
  resumeCampaign: function(param, callback)
  {
    if (!param.CampaignID) {
		throw new SyntaxError("Требуется Идентификатор кампании.");
	}
	var data = helper.getParamData("ResumeCampaign",param);
	helper.invokeRequest(data, callback)
  },
  
  stopCampaign: function(param, callback)
  {
    if (!param.CampaignID) {
		throw new SyntaxError("Требуется Идентификатор кампании.");
	}
	var data = helper.getParamData("StopCampaign",param);
	helper.invokeRequest(data, callback)
  },
  
  unArchiveCampaign: function(param, callback)
  {
    if (!param.CampaignID) {
		throw new SyntaxError("Требуется Идентификатор кампании.");
	}
	var data = helper.getParamData("UnArchiveCampaign",param);
	helper.invokeRequest(data, callback)
  }
};