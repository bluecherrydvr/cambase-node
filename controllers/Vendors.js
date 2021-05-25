'use strict';

var utils = require('../utils/writer.js');
var Vendors = require('../service/VendorsService');

module.exports.apiV1VendorsCreate = function apiV1VendorsCreate (req, res, next) {
  var vendor[name] = req.swagger.params['vendor[name]'].value;
  var vendor[info] = req.swagger.params['vendor[info]'].value;
  var vendor[url] = req.swagger.params['vendor[url]'].value;
  var vendor[mac] = req.swagger.params['vendor[mac]'].value;
  Vendors.apiV1VendorsCreate(vendor[name],vendor[info],vendor[url],vendor[mac])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1VendorsId_jsonPATCH = function apiV1VendorsId_jsonPATCH (req, res, next) {
  var id = req.swagger.params['id'].value;
  var vendor[name] = req.swagger.params['vendor[name]'].value;
  var vendor[info] = req.swagger.params['vendor[info]'].value;
  var vendor[url] = req.swagger.params['vendor[url]'].value;
  var vendor[mac] = req.swagger.params['vendor[mac]'].value;
  Vendors.apiV1VendorsId_jsonPATCH(id,vendor[name],vendor[info],vendor[url],vendor[mac])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1VendorsId_jsonPUT = function apiV1VendorsId_jsonPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var vendor[name] = req.swagger.params['vendor[name]'].value;
  var vendor[info] = req.swagger.params['vendor[info]'].value;
  var vendor[url] = req.swagger.params['vendor[url]'].value;
  var vendor[mac] = req.swagger.params['vendor[mac]'].value;
  Vendors.apiV1VendorsId_jsonPUT(id,vendor[name],vendor[info],vendor[url],vendor[mac])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1VendorsIndex = function apiV1VendorsIndex (req, res, next) {
  var page = req.swagger.params['page'].value;
  var order = req.swagger.params['order'].value;
  Vendors.apiV1VendorsIndex(page,order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1VendorsShow = function apiV1VendorsShow (req, res, next) {
  var id = req.swagger.params['id'].value;
  var order = req.swagger.params['order'].value;
  Vendors.apiV1VendorsShow(id,order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
