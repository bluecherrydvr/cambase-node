'use strict';


/**
 * Creates a new Model
 *
 * vendor_id String Vendor ID
 * model[model] String Model
 * model[shape] String Shape (optional)
 * model[resolution] String Resolution (optional)
 * model[onvif] String ONVIF (optional)
 * model[psia] String PSIA (optional)
 * model[ptz] String PTZ (optional)
 * model[infrared] String Infrared (optional)
 * model[varifocal] String Varifocal (optional)
 * model[sd_card] String SD Card (optional)
 * model[upnp] String UPnP (optional)
 * model[audio_in] String UPnP (optional)
 * model[audio_out] String UPnP (optional)
 * model[default_username] String Default Username (optional)
 * model[default_password] String Default Password (optional)
 * model[jpeg_url] String JPEG URL (optional)
 * model[h264_url] String H264 URL (optional)
 * model[mjpeg_url] String MJPEG URL (optional)
 * no response value expected for this operation
 **/
exports.apiV1ModelsCreate = function(vendor_id,model[model],model[shape],model[resolution],model[onvif],model[psia],model[ptz],model[infrared],model[varifocal],model[sd_card],model[upnp],model[audio_in],model[audio_out],model[default_username],model[default_password],model[jpeg_url],model[h264_url],model[mjpeg_url]) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates an existing Model
 *
 * id String Model ID
 * vendor_id String Vendor ID
 * model[model] String Model (optional)
 * model[shape] String Shape (optional)
 * model[resolution] String Resolution (optional)
 * model[onvif] String ONVIF (optional)
 * model[psia] String PSIA (optional)
 * model[ptz] String PTZ (optional)
 * model[infrared] String Infrared (optional)
 * model[varifocal] String Varifocal (optional)
 * model[sd_card] String SD Card (optional)
 * model[upnp] String UPnP (optional)
 * model[audio_in] String Audio In (optional)
 * model[audio_out] String Audio Out (optional)
 * model[default_username] String Default Username (optional)
 * model[default_password] String Default Password (optional)
 * model[jpeg_url] String JPEG URL (optional)
 * model[h264_url] String H264 URL (optional)
 * model[mjpeg_url] String MJPEG URL (optional)
 * no response value expected for this operation
 **/
exports.apiV1ModelsId_jsonPATCH = function(id,vendor_id,model[model],model[shape],model[resolution],model[onvif],model[psia],model[ptz],model[infrared],model[varifocal],model[sd_card],model[upnp],model[audio_in],model[audio_out],model[default_username],model[default_password],model[jpeg_url],model[h264_url],model[mjpeg_url]) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates an existing Model
 *
 * id String Model ID
 * vendor_id String Vendor ID
 * model[model] String Model (optional)
 * model[shape] String Shape (optional)
 * model[resolution] String Resolution (optional)
 * model[onvif] String ONVIF (optional)
 * model[psia] String PSIA (optional)
 * model[ptz] String PTZ (optional)
 * model[infrared] String Infrared (optional)
 * model[varifocal] String Varifocal (optional)
 * model[sd_card] String SD Card (optional)
 * model[upnp] String UPnP (optional)
 * model[audio_in] String Audio In (optional)
 * model[audio_out] String Audio Out (optional)
 * model[default_username] String Default Username (optional)
 * model[default_password] String Default Password (optional)
 * model[jpeg_url] String JPEG URL (optional)
 * model[h264_url] String H264 URL (optional)
 * model[mjpeg_url] String MJPEG URL (optional)
 * no response value expected for this operation
 **/
exports.apiV1ModelsId_jsonPUT = function(id,vendor_id,model[model],model[shape],model[resolution],model[onvif],model[psia],model[ptz],model[infrared],model[varifocal],model[sd_card],model[upnp],model[audio_in],model[audio_out],model[default_username],model[default_password],model[jpeg_url],model[h264_url],model[mjpeg_url]) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetches all Models
 *
 * page Integer Page number (optional)
 * order String Sort order (optional)
 * no response value expected for this operation
 **/
exports.apiV1ModelsIndex = function(page,order) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Searches all Models
 *
 * page Integer Page number (optional)
 * q[model_cont] String Model (optional)
 * q[manufacturer_name_cont] String Vendor (optional)
 * q[shape_eq] String Shape (optional)
 * q[resolution_eq] String Resolution (optional)
 * q[onvif_true] String ONVIF (optional)
 * q[psia_true] String PSIA (optional)
 * q[ptz_true] String PTZ (optional)
 * q[infrared_true] String Infrared (optional)
 * q[varifocal_true] String Varifocal (optional)
 * q[sd_card_true] String SD Card (optional)
 * q[upnp_true] String UPnP (optional)
 * q[audio_in_true] String Audio In (optional)
 * q[audio_out_true] String Audio Out (optional)
 * no response value expected for this operation
 **/
exports.apiV1ModelsSearch = function(page,q[model_cont],q[manufacturer_name_cont],q[shape_eq],q[resolution_eq],q[onvif_true],q[psia_true],q[ptz_true],q[infrared_true],q[varifocal_true],q[sd_card_true],q[upnp_true],q[audio_in_true],q[audio_out_true]) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetches a single Model
 *
 * id Integer Model ID
 * no response value expected for this operation
 **/
exports.apiV1ModelsShow = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

