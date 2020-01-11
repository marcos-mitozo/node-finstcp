var fins = require('../lib/index');

/* Connecting to remote FINS client on port 9600 with default timeout value. */
var client = fins.FinsClient(9600, '192.168.10.2');

/* Setting up our error listener */
client.on('error', function (error) {
    console.log("Error: ", error);
});

client.write('D5019', 2, function (err, bytes) {
    console.log("Bytes: ", bytes);
});