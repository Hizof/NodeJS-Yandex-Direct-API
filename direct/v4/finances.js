var helper = require('./helper');

module.exports = {
  сreateInvoice: function(param, callback)
  {
	var data = helper.getParamFinanceData("CreateInvoice", param);
	helper.invokeRequest(data, callback);
  },
  getCreditLimits: function(callback)
  {
	var data = helper.getBaseFinanceData("GetCreditLimits", param);
	helper.invokeRequest(data, callback);
  },
  payCampaigns: function(param, callback)
  {
	var data = helper.getParamFinanceData("PayCampaigns", param);
	helper.invokeRequest(data, callback);
  },
  transferMoney: function(param, callback)
  {
	var data = helper.getParamFinanceData("TransferMoney", param);
	helper.invokeRequest(data, callback);
  }
};