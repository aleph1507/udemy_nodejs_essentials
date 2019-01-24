let path = require('path');
let util = require('util');
let v8 = require('v8');

util.log(path.basename(__filename));

let dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUploads);

util.log(v8.getHeapStatistics());