'use strict';

const Homey = require('homey');

const ZigBeeDevice = require('homey-meshdriver').ZigBeeDevice;

class ESHSUPERTR extends ZigBeeDevice {

	onMeshInit() {
		this.enableDebug();
		this.printNode();

		//if (this.hasCapability('measure_temperature.air')) this.registerCapability('measure_temperature.air', 'localTemp');
		//this.registerAttrReportListener('localTemp', 'measure_temperature.air', 1, 0, 1, value => {
		//	this.log('measure_temperature.air', value);
		//	this.setCapabilityValue('measure_temperature.air', value === 1);
		//}, 0);
		
		//if (this.hasCapability('measure_temperature.floor')) this.registerCapability('measure_temperature.floor', '1033');
		//this.registerAttrReportListener('1033', 'measure_temperature.floor', 1, 0, 1, value => {
		//	this.log('measure_temperature.floor', value);
		//	this.setCapabilityValue('measure_temperature.floor', value === 1);
		//}, 0);

  }
}
module.exports = ESHSUPERTR;

//A lot more is found in ST_Code directory, many functions is not zigbee standard

//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ZigBeeDevice has been inited
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ------------------------------------------
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] Node: f09495b9-8b75-42b2-94a5-d0218e378abf
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] - Battery: false
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] - Endpoints: 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] -- Clusters:
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] --- zapp
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] --- genBasic
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- cid : genBasic
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- sid : attrs
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- zclVersion : 1
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- manufacturerName : ELKO
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- modelId : Super TR
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- powerSource : 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] --- genIdentify
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- cid : genIdentify
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- sid : attrs
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- identifyTime : 0
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] --- hvacThermostat
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1025 : 2000 		\\(encoding:21, value: (bath/entre = 1000 decimal,  gang and lekerom = 2000)
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1026 : Gang 		\\(encoding:42, value: <verified sonetext as hexstring>
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1027 : 0 			\\(encoding:30, value: <verified 00=luftføler, 01=gulvføler, 03=gulv vakt>
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1028 : 15 					\\(encoding:20 value:0f for all termostats)
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1029 : 0 					\\(encoding:10 value:0 for all termostats)
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1030 : 1 					\\(encoding:10 value:01 for all termostats)
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1031 : 						\\(encoding:41 value:00 for all termostats) unhandled length warning)
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1032 : 0 			\\(encoding:21 value: floating values ex: 001a, 01a9, 01dd, 0000, 0087 <- probably power consumption
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1033 : -9990		\\(encoding:29 value: <verified floor temperature sensor measurement>
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1041 : 0					\\(encoding:10, value:00 for all)
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1042 : 0					\\(encoding:10, value:00 for all)
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1043 : 1			\\(encoding:10, value: <verified child lock> 00=unlocked 01=locked
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1044 : 28			\\(encoding:20, value:1c for gang/bad/entre og 1b for lekerom) <- might be max temp for gulv vakt
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1045 : 0			\\(floating encoding:10, value: <verified heating active/inactive> 00=idle 01=heating
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1046 : R					\\(encoding:41, value:520a000106010107 for both) unhandled length warning
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1047 : 20					\\(encoding:28, value:00 for all)
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1048 : 9					\\(encoding:20, value:0a for all)
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- 1049 : 0					\\(encoding:20, value:00 for all)
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- cid : hvacThermostat
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- sid : attrs
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- localTemp : 2370
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- absMinHeatSetpointLimit : 5
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- absMaxHeatSetpointLimit : 50
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- occupiedCoolingSetpoint : 2600
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- occupiedHeatingSetpoint : 1500
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- ctrlSeqeOfOper : 2
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ---- systemMode : 1
//2018-08-13 20:00:46 [log] [ManagerDrivers] [ESHSUPERTR] [0] ------------------------------------------