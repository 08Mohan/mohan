var noble = require('noble');


var socket = require('socket.io-client')('http://192.168.80.1/scanner');


var addressToTrack = '6362ea74ba36';


socket.on('connect', function () {
    console.log('connected to server');
});


noble.on('discover', function (peripheral)
 {
     if (peripheral.uuid == addressToTrack)
      {
        socket.emit('deviceData', { mac: peripheral.uuid, rssi: peripheral.rssi });
      }
 });

 noble.startScanning([], true);
