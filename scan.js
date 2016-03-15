var noble = require('noble');



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
     var macAddress = peripheral.uuid;
     var rssi = peripheral.rssi;
     console.log('found a device with macAddress:', macAddress, ' ', 'with a signal strength of :', ' ', rssi);
});
