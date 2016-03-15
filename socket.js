var noble = require('noble');


var socket = require('socket.io-client')('http://localhost/scanner');


var addressToTrack = '6362ea74ba36';

socket.on('connect', function () {
    console.log('connected to server');
});


console.log('noble');



noble.on('stateChange', function (state) 
{
    console.log('on -> stateChange: ' + state);

    if (state === 'poweredOn')
    {
        noble.startScanning();
    }
    else
    {
        noble.stopScanning();
    }
});



noble.on('scanStart',function()
{
    console.log('on -> scanStart');
});


noble.on('scanstop',function()
{
    console.log('on -> scanStop');
});


noble.on('discover', function (peripheral)
 {
     if (peripheral.uuid == addressToTrack)
      {
        socket.emit('deviceData', { mac: peripheral.uuid, rssi: peripheral.rssi });
      }
 });




 noble.startScanning([], true);

    
