var helper = require('./helper');

module.exports = {
  аrchiveBanners: function(param, callback)
  {
	var data = helper.getParamData("ArchiveBanners", param);
	helper.invokeRequest(data, callback);
  },
  createOrUpdateBanners: function(param, callback)
  {
	var data = helper.getParamData("CreateOrUpdateBanners", param);
	helper.invokeRequest(data, callback);
  },
	deleteBanners: function(param, callback)
  {
	var data = helper.getParamData("DeleteBanners", param);
	helper.invokeRequest(data, callback);
  },
    getBanners: function(param, callback)
  {
	var data = helper.getParamData("GetBanners", param);
	helper.invokeRequest(data, callback);
  },
    getBannerPhrases: function(param, callback)
  {
	var data = helper.getParamData("GetBannerPhrases", param);
	helper.invokeRequest(data, callback);
  },
    getBannerPhrasesFilter: function(param, callback)
  {
	var data = helper.getParamData("GetBannerPhrasesFilter", param);
	helper.invokeRequest(data, callback);
  },
    moderateBanners: function(param, callback)
  {
	var data = helper.getParamData("ModerateBanners", param);
	helper.invokeRequest(data, callback);
  },
    resumeBanners: function(param, callback)
  {
	var data = helper.getParamData("ResumeBanners", param);
	helper.invokeRequest(data, callback);
  },
    stopBanners: function(param, callback)
  {
	var data = helper.getParamData("StopBanners", param);
	helper.invokeRequest(data, callback);
  },
    unArchiveBanners: function(param, callback)
  {
	var data = helper.getParamData("UnArchiveBanners", param);
	helper.invokeRequest(data, callback);
  }  
};
