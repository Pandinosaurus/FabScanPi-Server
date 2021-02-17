(function(){ window.i18n || (window.i18n = {}) 
var MessageFormat = { locale: {} };
MessageFormat.locale.de=function(n){return n===1?"one":"other"}

window.i18n["main"] = {}
window.i18n["main"]["FABSCAN"] = function(d){return "Fabscan"}
window.i18n["main"]["SCAN_CANCELED"] = function(d){return "Scan stopped"}
window.i18n["main"]["SCAN_STOPED"] = function(d){return "Scan stopped"}
window.i18n["main"]["SCANNING_OBJECT"] = function(d){return "Scanning Object"}
window.i18n["main"]["SCANNING_TEXTURE"] = function(d){return "Scanning Texture"}
window.i18n["main"]["NO_LASER_FOUND"] = function(d){return "No laser detected. Try other settings"}
window.i18n["main"]["SAVING_POINT_CLOUD"] = function(d){return "Saving Point Cloud please wait..."}
window.i18n["main"]["SCAN_COMPLETE"] = function(d){return "Scan complete"}
window.i18n["main"]["NO_SERIAL_CONNECTION"] = function(d){return "No connection to Arduino"}
window.i18n["main"]["NO_CAMERA_CONNECTION"] = function(d){return "Camera is not connected"}
window.i18n["main"]["CONNECTED_TO_SERVER"] = function(d){return "Connected to FabScanPi-Server"}
window.i18n["main"]["SERIAL_CONNECTION_READY"] = function(d){return "FabScanPI HAT connected"}
window.i18n["main"]["CAMERA_READY"] = function(d){return "Camera ready"}
window.i18n["main"]["MESHING_STARTED"] = function(d){return "Meshing started."}
window.i18n["main"]["MESHING_DONE"] = function(d){return "Meshed file is available now"}
window.i18n["main"]["START_CALIBRATION"] = function(d){return "Calibration started."}
window.i18n["main"]["FINISHED_CALIBRATION"] = function(d){return "Calibration finished."}
window.i18n["main"]["UPGRADE_IN_PROGRESS"] = function(d){return "Software wird aktualisiert..."}
window.i18n["main"]["SCANNER_IN_CALIBRATION_MODE"] = function(d){return "Scanner wird kalibriert. Bitte warten..."}
window.i18n["main"]["STOPPED_CALIBRATION"] = function(d){return "Kalibrierung abgebrochen"}
window.i18n["main"]["SCANNER_NOT_CALIBRATED"] = function(d){return "Scanner is not calibrated. For instructions visit: <a href='https://fabscanpi-server.readthedocs.io/en/latest/scanner_calibration.html'>fabscan.org</a>"}
window.i18n["main"]["SCANNER_CALIBRATION_FAILED"] = function(d){return "Scanner calibration failed. Please try again."}
window.i18n["main"]["UPGRADE_SUCCESS"] = function(d){return "Upgrade was successful."}
window.i18n["main"]["UPGRADE_FAILED"] = function(d){return "Upgrade failed. See log for further information."}
window.i18n["main"]["UPGRADE_STARTED"] = function(d){return "Upgrade process started..."}
window.i18n["main"]["RESTARTING_SERVER"] = function(d){return "Server is going down for Restart."}
})();