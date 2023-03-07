'use strict';

var Client = require('../index').Client;
var config = require('./config');

var client = new Client(config.accessKey, config.businessId);

client.getTemplates().then((res) => res).then(res => {
    return res;
}).catch(function(err) {
    console.log(err);
});