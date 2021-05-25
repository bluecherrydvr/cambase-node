'use strict';

var utils = require('../utils/writer.js');
var Models = require('../service/ModelsService');

module.exports.apiV1ModelsCreate = function apiV1ModelsCreate (req, res, next) {
  var vendor_id = req.swagger.params['vendor_id'].value;
  var model[model] = req.swagger.params['model[model]'].value;
  var model[shape] = req.swagger.params['model[shape]'].value;
  var model[resolution] = req.swagger.params['model[resolution]'].value;
  var model[onvif] = req.swagger.params['model[onvif]'].value;
  var model[psia] = req.swagger.params['model[psia]'].value;
  var model[ptz] = req.swagger.params['model[ptz]'].value;
  var model[infrared] = req.swagger.params['model[infrared]'].value;
  var model[varifocal] = req.swagger.params['model[varifocal]'].value;
  var model[sd_card] = req.swagger.params['model[sd_card]'].value;
  var model[upnp] = req.swagger.params['model[upnp]'].value;
  var model[audio_in] = req.swagger.params['model[audio_in]'].value;
  var model[audio_out] = req.swagger.params['model[audio_out]'].value;
  var model[default_username] = req.swagger.params['model[default_username]'].value;
  var model[default_password] = req.swagger.params['model[default_password]'].value;
  var model[jpeg_url] = req.swagger.params['model[jpeg_url]'].value;
  var model[h264_url] = req.swagger.params['model[h264_url]'].value;
  var model[mjpeg_url] = req.swagger.params['model[mjpeg_url]'].value;
  Models.apiV1ModelsCreate(vendor_id,model[model],model[shape],model[resolution],model[onvif],model[psia],model[ptz],model[infrared],model[varifocal],model[sd_card],model[upnp],model[audio_in],model[audio_out],model[default_username],model[default_password],model[jpeg_url],model[h264_url],model[mjpeg_url])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ModelsId_jsonPATCH = function apiV1ModelsId_jsonPATCH (req, res, next) {
  var id = req.swagger.params['id'].value;
  var vendor_id = req.swagger.params['vendor_id'].value;
  var model[model] = req.swagger.params['model[model]'].value;
  var model[shape] = req.swagger.params['model[shape]'].value;
  var model[resolution] = req.swagger.params['model[resolution]'].value;
  var model[onvif] = req.swagger.params['model[onvif]'].value;
  var model[psia] = req.swagger.params['model[psia]'].value;
  var model[ptz] = req.swagger.params['model[ptz]'].value;
  var model[infrared] = req.swagger.params['model[infrared]'].value;
  var model[varifocal] = req.swagger.params['model[varifocal]'].value;
  var model[sd_card] = req.swagger.params['model[sd_card]'].value;
  var model[upnp] = req.swagger.params['model[upnp]'].value;
  var model[audio_in] = req.swagger.params['model[audio_in]'].value;
  var model[audio_out] = req.swagger.params['model[audio_out]'].value;
  var model[default_username] = req.swagger.params['model[default_username]'].value;
  var model[default_password] = req.swagger.params['model[default_password]'].value;
  var model[jpeg_url] = req.swagger.params['model[jpeg_url]'].value;
  var model[h264_url] = req.swagger.params['model[h264_url]'].value;
  var model[mjpeg_url] = req.swagger.params['model[mjpeg_url]'].value;
  Models.apiV1ModelsId_jsonPATCH(id,vendor_id,model[model],model[shape],model[resolution],model[onvif],model[psia],model[ptz],model[infrared],model[varifocal],model[sd_card],model[upnp],model[audio_in],model[audio_out],model[default_username],model[default_password],model[jpeg_url],model[h264_url],model[mjpeg_url])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ModelsId_jsonPUT = function apiV1ModelsId_jsonPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var vendor_id = req.swagger.params['vendor_id'].value;
  var model[model] = req.swagger.params['model[model]'].value;
  var model[shape] = req.swagger.params['model[shape]'].value;
  var model[resolution] = req.swagger.params['model[resolution]'].value;
  var model[onvif] = req.swagger.params['model[onvif]'].value;
  var model[psia] = req.swagger.params['model[psia]'].value;
  var model[ptz] = req.swagger.params['model[ptz]'].value;
  var model[infrared] = req.swagger.params['model[infrared]'].value;
  var model[varifocal] = req.swagger.params['model[varifocal]'].value;
  var model[sd_card] = req.swagger.params['model[sd_card]'].value;
  var model[upnp] = req.swagger.params['model[upnp]'].value;
  var model[audio_in] = req.swagger.params['model[audio_in]'].value;
  var model[audio_out] = req.swagger.params['model[audio_out]'].value;
  var model[default_username] = req.swagger.params['model[default_username]'].value;
  var model[default_password] = req.swagger.params['model[default_password]'].value;
  var model[jpeg_url] = req.swagger.params['model[jpeg_url]'].value;
  var model[h264_url] = req.swagger.params['model[h264_url]'].value;
  var model[mjpeg_url] = req.swagger.params['model[mjpeg_url]'].value;
  Models.apiV1ModelsId_jsonPUT(id,vendor_id,model[model],model[shape],model[resolution],model[onvif],model[psia],model[ptz],model[infrared],model[varifocal],model[sd_card],model[upnp],model[audio_in],model[audio_out],model[default_username],model[default_password],model[jpeg_url],model[h264_url],model[mjpeg_url])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ModelsIndex = function apiV1ModelsIndex (req, res, next) {
  var page = req.swagger.params['page'].value;
  var order = req.swagger.params['order'].value;
  Models.apiV1ModelsIndex(page,order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ModelsSearch = function apiV1ModelsSearch (req, res, next) {
  var page = req.swagger.params['page'].value;
  var q[model_cont] = req.swagger.params['q[model_cont]'].value;
  var q[manufacturer_name_cont] = req.swagger.params['q[manufacturer_name_cont]'].value;
  var q[shape_eq] = req.swagger.params['q[shape_eq]'].value;
  var q[resolution_eq] = req.swagger.params['q[resolution_eq]'].value;
  var q[onvif_true] = req.swagger.params['q[onvif_true]'].value;
  var q[psia_true] = req.swagger.params['q[psia_true]'].value;
  var q[ptz_true] = req.swagger.params['q[ptz_true]'].value;
  var q[infrared_true] = req.swagger.params['q[infrared_true]'].value;
  var q[varifocal_true] = req.swagger.params['q[varifocal_true]'].value;
  var q[sd_card_true] = req.swagger.params['q[sd_card_true]'].value;
  var q[upnp_true] = req.swagger.params['q[upnp_true]'].value;
  var q[audio_in_true] = req.swagger.params['q[audio_in_true]'].value;
  var q[audio_out_true] = req.swagger.params['q[audio_out_true]'].value;
  Models.apiV1ModelsSearch(page,q[model_cont],q[manufacturer_name_cont],q[shape_eq],q[resolution_eq],q[onvif_true],q[psia_true],q[ptz_true],q[infrared_true],q[varifocal_true],q[sd_card_true],q[upnp_true],q[audio_in_true],q[audio_out_true])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ModelsShow = function apiV1ModelsShow (req, res, next) {
  var id = req.swagger.params['id'].value;
  Models.apiV1ModelsShow(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
