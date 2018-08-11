'use strict';

const Homey = require('homey');

const ZigBeeDevice = require('homey-meshdriver').ZigBeeDevice;

//#suggestion for code, don't own device so not sure abouit endpoint etc. So therefore the output on console from this.printNode() is essential to get needed info.

class ESH316GLED  extends ZigBeeDevice {

	onMeshInit() {
		this.enableDebug();
		this.printNode();

		if (this.hasCapability('onoff')) this.registerCapability('onoff', 'genOnOff');
		this.registerAttrReportListener('genOnOff', 'onOff', 1, 0, 1, value => {
			this.log('onoff', value);
			this.setCapabilityValue('onoff', value === 1);
		}, 1);

		if (this.hasCapability('dim')) this.registerCapability('dim', 'genLevelCtrl');
		this.registerAttrReportListener('genLevelCtrl', 'currentLevel', 1, 300, 2, value => {
			this.log('dim report', value);
			this.setCapabilityValue('dim', value / 254);
		}, 1);

  }

}

module.exports = ESH316GLED;


// report needed:
// event name= level event value= 100
// debug description is read attr - raw: DF4F01000808000020FE, dni: DF4F, endpoint: 01, cluster: 0008, size: 08, attrId: 0000, encoding: 20, value: fe
//DF4F = Device network id
//Value FE : dim, FE = 254, =100% (FF)
//
// ON/OFF status
//debug event name= switch event value= off
//debug description is on/off: 0