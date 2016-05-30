var https = require('https');

var _isSandBox = false;
var _token = "";

module.exports = {
	setToken: function(token)
	{
		_token = token;
	},
	setSandBox: function(isSandBox)
	{
		_isSandBox = isSandBox;
	},
	getConnectionOption: function(data)
	{
		var options = {
			host: _isSandBox ? 'api-sandbox.direct.yandex.ru' : "api.direct.yandex.ru",
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
				var json = JSON.parse(data);
				callback(json);
			});
		});
		
		req.write(data);
		req.end();
	},
	invokeRequest: function(data, callback, errcallback)
	{
		var options = this.getConnectionOption(data);
		var req = https.request(options, function(res) {
			var dataStr = "";
			res.setEncoding('utf8');
			res.on('data', function (data) {
				dataStr += data;
			});
			res.on('end', function () {
				var json = JSON.parse(dataStr);
				if(typeof errcallback === "function" && json.error_code)
				{
					errcallback(json);
				}else{
					callback(json);
				}
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
	},
	
	getBaseFinanceData: function(method)
	{
		throw new Error("NotImplementedException");
	},

	getParamFinanceData: function(method, param)
	{
		throw new Error("NotImplementedException");
	}
}