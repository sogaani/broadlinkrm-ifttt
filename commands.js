// Learn codes here:
// http://rm-bridge.fun2code.de/rm_manage/code_learning.html

// After learning a code, define the command name
// mac address or ip address and leave the data as is.
// add a secret value that must match the request in order to validate (sent as POST parameter).
// please modify commands.json

/*
Example:

    {
        "command": "YOUR_COMMAND_HERE",
        "secret": "SET_A_RANDOM_HASH_HERE",
        "ip": "YOUR_DEVICE_IP_HERE",
        "mac": "MAC_ADDRESS_HERE", // Use mac instead of IP when possible.
        "sequence": ["command", "command"], // If sequence is defined, all the commands inside the array will be run in sequence.
        "data": "RM_BRIDGE_DATA_HERE" // only runs if there is no sequence defined.
    }
*/

const CONFIG_FILE = __dirname + '/commands.json';

module.exports = require(CONFIG_FILE);
