Java.perform(function(){

    var RootBeer = Java.use("com.scottyab.rootbeer.RootBeer");

    RootBeer.isRootedWithoutBusyBoxCheck.implementation = function(){

        return false;

    };

   var EmulatorDetector = Java.use("net.skoumal.emulatordetector.EmulatorDetector")

   EmulatorDetector.isEmulator.implementation = function(){

        return false;

    };	


    console.log("Signature bypass with Frida");

    var LoginActivity = Java.use("com.xxxx.xxxx.LoginActivity");

    LoginActivity.isEmulator.implementation = function(){

        return false;

    };

    

    LoginActivity.decodeJws.implementation = function(a){

	console.log(a);

	var newObj = JSON.parse(this.decodeJws(a));

	console.log(newObj.basicIntegrity);

	newObj.basicIntegrity = true;

	var finalObj = JSON.stringify(newObj)

	return finalObj;
    };


});