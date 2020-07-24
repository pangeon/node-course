var $txt = require("./print.js");
var $path = require('path');
var $crypto = require('crypto');

$txt.printn($path.basename('/Dokumenty/node-course/modules/print.js'));
$txt.printn($crypto.createHmac('sha256', 'Kamil Cecherz').digest('hex'));


