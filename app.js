var direct = require('./direct');

direct.setToken("TOKEN");
direct.setSandBox(true);

var apiV4 = direct.getV4();

apiV4.campaign.getCampaignsList(null, function(data, err){console.log(data);});

apiV4.keywords.getKeywordsSuggestion({Keywords: ['холодильник','камера']}, function(data, err){console.log(data);});


var archiveCampaignParam = {
	CampaignID: 999999
};

apiV4.campaign.archiveCampaign(archiveCampaignParam, function(data, err){});
