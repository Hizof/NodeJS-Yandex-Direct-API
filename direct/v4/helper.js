var https = require('https');

// Yandex Direct API domain.
const API = 'https://api.direct.yandex.ru/';
// Sandbox Yandex Direct API url.
const SANDBOX_API = 'https://api-sandbox.direct.yandex.ru/json-api/';

var _isSendBox = false;
var _token = "";

module.exports = {
	setToken: function(token)
	{
		_token = token;
	},
	getConnectionOption: function(data)
	{
		var options = {
			host: 'api-sandbox.direct.yandex.ru',
			port: 443,
			path: '/v4/json/',
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain; charset=UTF-8',
				'Content-Length': Buffer.byteLength(data)
			}
		};
		
		return options;
	},

	invokeRequest: function(data, callback)
	{
		var options = this.getConnectionOption(data);
		var req = https.request(options, function(res) {
			res.setEncoding('utf8');
			res.on('data', function (data) {
				callback(JSON.parse(data));
			});
		});
		
		req.write(data);
		req.end();
	},

	getBaseData: function(method)
	{
		var data = JSON.stringify(
		{
				   "method": method,
				   "locale": "ru",
				   "token": _token
		});
		
		return data;
	},

	getParamData: function(method, param)
	{
		var data = JSON.stringify(
		{
				   "method": method,
				   "locale": "ru",
				   "token": _token,
				   "param": param
		});
		
		return data;
	}
}