const Broadlink = require('./device');
const commands = require('./commands');

function sendData(device = false, hexData = false) {
    if (device === false || hexData === false) {
        console.log('Missing params, sendData failed', typeof device, typeof hexData);
        return;
    }

    const hexDataBuffer = new Buffer(hexData, 'hex');
    device.sendData(hexDataBuffer);
}

function oneshot(name) {
    const command = commands.find((e) => { return e.command == name; });
    if (!command) return console.log(`OneShot( Command ${name} is not available)`);

    const host = command.mac || command.ip;
    const device = Broadlink({ host });
    if (!device) return setTimeout(() => { oneshot(name) }, 1000);

    if ('sequence' in command) {
        console.log('Sending sequence..');
        for (var i in command.sequence) {
            let find = command.sequence[i];
            let send = commands.find((e) => { return e.command == find; });
            if (send) {
                setTimeout(() => {
                    console.log(`Sending command ${send.command}`)
                    sendData(device, send.data);
                }, 1000 * i);
            } else {
                console.log(`Sequence command ${find} not found`);
            }
        }
    } else {
        sendData(device, command.data);
    }
}

oneshot(process.argv[2]);

const uuid = require('uuid/v4');

console.log(uuid().split('-').join(''));