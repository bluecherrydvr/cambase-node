'use strict';

var utils = require('../utils/writer.js');
var Recorders = require('../service/RecordersService');

module.exports.apiV1RecordersCreate = function apiV1RecordersCreate (req, res, next) {
  var vendor_id = req.swagger.params['vendor_id'].value;
  var recorder[model] = req.swagger.params['recorder[model]'].value;
  var recorder[name] = req.swagger.params['recorder[name]'].value;
  var recorder[recorder_type] = req.swagger.params['recorder[recorder_type]'].value;
  var recorder[resolution] = req.swagger.params['recorder[resolution]'].value;
  var recorder[onvif] = req.swagger.params['recorder[onvif]'].value;
  var recorder[psia] = req.swagger.params['recorder[psia]'].value;
  var recorder[ptz] = req.swagger.params['recorder[ptz]'].value;
  var recorder[discontinued] = req.swagger.params['recorder[discontinued]'].value;
  var recorder[support_3rdparty] = req.swagger.params['recorder[support_3rdparty]'].value;
  var recorder[sd_card] = req.swagger.params['recorder[sd_card]'].value;
  var recorder[upnp] = req.swagger.params['recorder[upnp]'].value;
  var recorder[hot_swap] = req.swagger.params['recorder[hot_swap]'].value;
  var recorder[hdmi] = req.swagger.params['recorder[hdmi]'].value;
  var recorder[digital_io] = req.swagger.params['recorder[digital_io]'].value;
  var recorder[audio_in] = req.swagger.params['recorder[audio_in]'].value;
  var recorder[audio_out] = req.swagger.params['recorder[audio_out]'].value;
  var recorder[input_channels] = req.swagger.params['recorder[input_channels]'].value;
  var recorder[playback_channels] = req.swagger.params['recorder[playback_channels]'].value;
  var recorder[usb] = req.swagger.params['recorder[usb]'].value;
  var recorder[sdhc] = req.swagger.params['recorder[sdhc]'].value;
  var recorder[mobile_access] = req.swagger.params['recorder[mobile_access]'].value;
  var recorder[alarms] = req.swagger.params['recorder[alarms]'].value;
  var recorder[raid_support] = req.swagger.params['recorder[raid_support]'].value;
  var recorder[storage] = req.swagger.params['recorder[storage]'].value;
  var recorder[additional_information] = req.swagger.params['recorder[additional_information]'].value;
  var recorder[default_username] = req.swagger.params['recorder[default_username]'].value;
  var recorder[default_password] = req.swagger.params['recorder[default_password]'].value;
  var recorder[jpeg_url] = req.swagger.params['recorder[jpeg_url]'].value;
  var recorder[h264_url] = req.swagger.params['recorder[h264_url]'].value;
  var recorder[mjpeg_url] = req.swagger.params['recorder[mjpeg_url]'].value;
  var recorder[official_url] = req.swagger.params['recorder[official_url]'].value;
  Recorders.apiV1RecordersCreate(vendor_id,recorder[model],recorder[name],recorder[recorder_type],recorder[resolution],recorder[onvif],recorder[psia],recorder[ptz],recorder[discontinued],recorder[support_3rdparty],recorder[sd_card],recorder[upnp],recorder[hot_swap],recorder[hdmi],recorder[digital_io],recorder[audio_in],recorder[audio_out],recorder[input_channels],recorder[playback_channels],recorder[usb],recorder[sdhc],recorder[mobile_access],recorder[alarms],recorder[raid_support],recorder[storage],recorder[additional_information],recorder[default_username],recorder[default_password],recorder[jpeg_url],recorder[h264_url],recorder[mjpeg_url],recorder[official_url])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1RecordersId_jsonPATCH = function apiV1RecordersId_jsonPATCH (req, res, next) {
  var id = req.swagger.params['id'].value;
  var vendor_id = req.swagger.params['vendor_id'].value;
  var recorder[model] = req.swagger.params['recorder[model]'].value;
  var recorder[name] = req.swagger.params['recorder[name]'].value;
  var recorder[recorder_type] = req.swagger.params['recorder[recorder_type]'].value;
  var recorder[resolution] = req.swagger.params['recorder[resolution]'].value;
  var recorder[onvif] = req.swagger.params['recorder[onvif]'].value;
  var recorder[psia] = req.swagger.params['recorder[psia]'].value;
  var recorder[ptz] = req.swagger.params['recorder[ptz]'].value;
  var recorder[discontinued] = req.swagger.params['recorder[discontinued]'].value;
  var recorder[support_3rdparty] = req.swagger.params['recorder[support_3rdparty]'].value;
  var recorder[sd_card] = req.swagger.params['recorder[sd_card]'].value;
  var recorder[upnp] = req.swagger.params['recorder[upnp]'].value;
  var recorder[hot_swap] = req.swagger.params['recorder[hot_swap]'].value;
  var recorder[hdmi] = req.swagger.params['recorder[hdmi]'].value;
  var recorder[digital_io] = req.swagger.params['recorder[digital_io]'].value;
  var recorder[audio_in] = req.swagger.params['recorder[audio_in]'].value;
  var recorder[audio_out] = req.swagger.params['recorder[audio_out]'].value;
  var recorder[input_channels] = req.swagger.params['recorder[input_channels]'].value;
  var recorder[playback_channels] = req.swagger.params['recorder[playback_channels]'].value;
  var recorder[usb] = req.swagger.params['recorder[usb]'].value;
  var recorder[sdhc] = req.swagger.params['recorder[sdhc]'].value;
  var recorder[mobile_access] = req.swagger.params['recorder[mobile_access]'].value;
  var recorder[alarms] = req.swagger.params['recorder[alarms]'].value;
  var recorder[raid_support] = req.swagger.params['recorder[raid_support]'].value;
  var recorder[storage] = req.swagger.params['recorder[storage]'].value;
  var recorder[additional_information] = req.swagger.params['recorder[additional_information]'].value;
  var recorder[default_username] = req.swagger.params['recorder[default_username]'].value;
  var recorder[default_password] = req.swagger.params['recorder[default_password]'].value;
  var recorder[jpeg_url] = req.swagger.params['recorder[jpeg_url]'].value;
  var recorder[h264_url] = req.swagger.params['recorder[h264_url]'].value;
  var recorder[mjpeg_url] = req.swagger.params['recorder[mjpeg_url]'].value;
  var recorder[official_url] = req.swagger.params['recorder[official_url]'].value;
  Recorders.apiV1RecordersId_jsonPATCH(id,vendor_id,recorder[model],recorder[name],recorder[recorder_type],recorder[resolution],recorder[onvif],recorder[psia],recorder[ptz],recorder[discontinued],recorder[support_3rdparty],recorder[sd_card],recorder[upnp],recorder[hot_swap],recorder[hdmi],recorder[digital_io],recorder[audio_in],recorder[audio_out],recorder[input_channels],recorder[playback_channels],recorder[usb],recorder[sdhc],recorder[mobile_access],recorder[alarms],recorder[raid_support],recorder[storage],recorder[additional_information],recorder[default_username],recorder[default_password],recorder[jpeg_url],recorder[h264_url],recorder[mjpeg_url],recorder[official_url])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1RecordersId_jsonPUT = function apiV1RecordersId_jsonPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var vendor_id = req.swagger.params['vendor_id'].value;
  var recorder[model] = req.swagger.params['recorder[model]'].value;
  var recorder[name] = req.swagger.params['recorder[name]'].value;
  var recorder[recorder_type] = req.swagger.params['recorder[recorder_type]'].value;
  var recorder[resolution] = req.swagger.params['recorder[resolution]'].value;
  var recorder[onvif] = req.swagger.params['recorder[onvif]'].value;
  var recorder[psia] = req.swagger.params['recorder[psia]'].value;
  var recorder[ptz] = req.swagger.params['recorder[ptz]'].value;
  var recorder[discontinued] = req.swagger.params['recorder[discontinued]'].value;
  var recorder[support_3rdparty] = req.swagger.params['recorder[support_3rdparty]'].value;
  var recorder[sd_card] = req.swagger.params['recorder[sd_card]'].value;
  var recorder[upnp] = req.swagger.params['recorder[upnp]'].value;
  var recorder[hot_swap] = req.swagger.params['recorder[hot_swap]'].value;
  var recorder[hdmi] = req.swagger.params['recorder[hdmi]'].value;
  var recorder[digital_io] = req.swagger.params['recorder[digital_io]'].value;
  var recorder[audio_in] = req.swagger.params['recorder[audio_in]'].value;
  var recorder[audio_out] = req.swagger.params['recorder[audio_out]'].value;
  var recorder[input_channels] = req.swagger.params['recorder[input_channels]'].value;
  var recorder[playback_channels] = req.swagger.params['recorder[playback_channels]'].value;
  var recorder[usb] = req.swagger.params['recorder[usb]'].value;
  var recorder[sdhc] = req.swagger.params['recorder[sdhc]'].value;
  var recorder[mobile_access] = req.swagger.params['recorder[mobile_access]'].value;
  var recorder[alarms] = req.swagger.params['recorder[alarms]'].value;
  var recorder[raid_support] = req.swagger.params['recorder[raid_support]'].value;
  var recorder[storage] = req.swagger.params['recorder[storage]'].value;
  var recorder[additional_information] = req.swagger.params['recorder[additional_information]'].value;
  var recorder[default_username] = req.swagger.params['recorder[default_username]'].value;
  var recorder[default_password] = req.swagger.params['recorder[default_password]'].value;
  var recorder[jpeg_url] = req.swagger.params['recorder[jpeg_url]'].value;
  var recorder[h264_url] = req.swagger.params['recorder[h264_url]'].value;
  var recorder[mjpeg_url] = req.swagger.params['recorder[mjpeg_url]'].value;
  var recorder[official_url] = req.swagger.params['recorder[official_url]'].value;
  Recorders.apiV1RecordersId_jsonPUT(id,vendor_id,recorder[model],recorder[name],recorder[recorder_type],recorder[resolution],recorder[onvif],recorder[psia],recorder[ptz],recorder[discontinued],recorder[support_3rdparty],recorder[sd_card],recorder[upnp],recorder[hot_swap],recorder[hdmi],recorder[digital_io],recorder[audio_in],recorder[audio_out],recorder[input_channels],recorder[playback_channels],recorder[usb],recorder[sdhc],recorder[mobile_access],recorder[alarms],recorder[raid_support],recorder[storage],recorder[additional_information],recorder[default_username],recorder[default_password],recorder[jpeg_url],recorder[h264_url],recorder[mjpeg_url],recorder[official_url])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1RecordersIndex = function apiV1RecordersIndex (req, res, next) {
  var page = req.swagger.params['page'].value;
  var order = req.swagger.params['order'].value;
  Recorders.apiV1RecordersIndex(page,order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1RecordersSearch = function apiV1RecordersSearch (req, res, next) {
  var page = req.swagger.params['page'].value;
  var q[model_cont] = req.swagger.params['q[model_cont]'].value;
  var q[vendor_name_cont] = req.swagger.params['q[vendor_name_cont]'].value;
  var q[sdhc_eq] = req.swagger.params['q[sdhc_eq]'].value;
  var q[type_eq] = req.swagger.params['q[type_eq]'].value;
  var q[resolution_eq] = req.swagger.params['q[resolution_eq]'].value;
  var q[input_channels_eq] = req.swagger.params['q[input_channels_eq]'].value;
  var q[playback_channels_eq] = req.swagger.params['q[playback_channels_eq]'].value;
  var q[onvif_true] = req.swagger.params['q[onvif_true]'].value;
  var q[psia_true] = req.swagger.params['q[psia_true]'].value;
  var q[ptz_true] = req.swagger.params['q[ptz_true]'].value;
  var q[sd_card_true] = req.swagger.params['q[sd_card_true]'].value;
  var q[upnp_true] = req.swagger.params['q[upnp_true]'].value;
  var q[audio_in_true] = req.swagger.params['q[audio_in_true]'].value;
  var q[audio_out_true] = req.swagger.params['q[audio_out_true]'].value;
  var q[hdmi_true] = req.swagger.params['q[hdmi_true]'].value;
  var q[hot_swap_true] = req.swagger.params['q[hot_swap_true]'].value;
  var q[support_3rdparty_true] = req.swagger.params['q[support_3rdparty_true]'].value;
  var q[digital_io_true] = req.swagger.params['q[digital_io_true]'].value;
  Recorders.apiV1RecordersSearch(page,q[model_cont],q[vendor_name_cont],q[sdhc_eq],q[type_eq],q[resolution_eq],q[input_channels_eq],q[playback_channels_eq],q[onvif_true],q[psia_true],q[ptz_true],q[sd_card_true],q[upnp_true],q[audio_in_true],q[audio_out_true],q[hdmi_true],q[hot_swap_true],q[support_3rdparty_true],q[digital_io_true])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1RecordersShow = function apiV1RecordersShow (req, res, next) {
  var id = req.swagger.params['id'].value;
  Recorders.apiV1RecordersShow(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
