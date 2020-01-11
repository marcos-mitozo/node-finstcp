var fins = require('../lib/index');

/* Connecting to remote FINS client on port 9600 with default timeout value. */
var client = fins.FinsClient(9600, '192.168.10.2');

/* Setting up our error listener */
client.on('error', function (error) {
    console.log("Error: ", error);
});

exports.get = (req, res, next) => {
    client.on('reply', function (msg) {
        console.log("Reply from: ", msg.remotehost);
        console.log("Replying to issued command of: ", msg.command);
        console.log("Response code of: ", msg.code);
        console.log("Data returned: ", msg.values);
        console.log("Dado retornado em decimal: ", parseInt(msg.values, 16))
    });

    client.read('D1507', 1, function (err, bytes) {
        console.log("Bytes: ", bytes);
        res.status(200).send(
            "bytes"
        )
    });
}