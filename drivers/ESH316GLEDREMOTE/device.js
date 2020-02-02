'use strict';

const Homey = require('homey');
const ZigBeeDevice = require('homey-meshdriver').ZigBeeDevice;
const throttledQueue = require('throttled-queue');

class ESH316GLEDREMOTE extends ZigBeeDevice {

  onMeshInit() {
    //this.enableDebug();
    //this.printNode();
    this.setAvailable();
    const settings = this.getSettings();
    var triggers_sec = settings.triggers_sec;


    //Defines number of triggers pr sec
    var throttle = throttledQueue(triggers_sec, 1000, true);
    //var throttle = throttledQueue(5, 1000);

		this.registerReportListener('genOnOff', 'toggle', this.toggleCommandParser.bind(this));
		this.registerReportListener('genLevelCtrl', 'step', this.stepCommandParser.bind(this));

		this.switchToggleTriggerDevice = new Homey.FlowCardTriggerDevice('ESH316GLEDREMOTE_toggle').register();
    this.switchDimTriggerDevice = new Homey.FlowCardTriggerDevice('ESH316GLEDREMOTE_dim').register().registerRunListener((args, state, callback) => {
        	return callback(null, args.action === state.action);
      });
	}

	toggleCommandParser(report) {
    //Trigger toggle flow card
    return this.switchToggleTriggerDevice.trigger(this, {}, {})
			.then(() => this.log('triggered ESH316GLEDREMOTE_toggle'))
			.catch(err => this.error('Error triggering ESH316GLEDREMOTE_toggle', err));
	}

	stepCommandParser(report) {
    //Turned right or left? 0-Right, 1-Left
    var direction = report.stepmode === 0 ? 'right-turned' : 'left-turned';
    //Trigger flow card with direction
		return this.switchDimTriggerDevice.trigger(this, {}, {
				action: `${direction}`
			})
			.then(() => this.log(`triggered ESH316GLEDREMOTE_dim, action=${direction}`))
			.catch(err => this.error('Error triggering ESH316GLEDREMOTE_dim', err));
	}

  //------------------------------------------------------------------------------------------------------------------------------------------------------
    //Refresh setting constant when user changes settings
    async onSettings(oldSettingsObj, newSettingsObj, changedKeysArr, callback) {

      this.log(changedKeysArr);
      this.log('newSettingsObj', newSettingsObj);
      this.log('oldSettingsObj', oldSettingsObj);
      this.log('Load test: ', changedKeysArr.includes('triggers_sec'));
      // Thermostat load effect changed
      if (changedKeysArr.includes('triggers_sec')) {
        this.log('Triggers pr sec changed: ', newSettingsObj.triggers_sec);
        callback(null, true);
        var triggers_sec = newSettingsObj.triggers_sec;
        this.log('New floor_watt setting is: ', floor_watt)
      }
    }

}
 module.exports = ESH316GLEDREMOTE;

 /*2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ZigBeeDevice has been inited
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ------------------------------------------
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] Node: 21eb127a-14ff-4e07-8d8f-7167630c04b1
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] - Battery: true
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] - Endpoints: 0
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] -- Clusters:
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- zapp
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- genBasic
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- cid : genBasic
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- sid : attrs
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- zclVersion : 1
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- appVersion : 0
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- hwVersion : 1
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- manufacturerName : ELKO
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- modelId : ElkoDimmerRemoteZHA
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- powerSource : 3
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- swBuildId : 0.0.14
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- genIdentify
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- cid : genIdentify
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- sid : attrs
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- identifyTime : 0
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- genOnOff
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- cid : genOnOff
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- sid : attrs
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- onOff : null
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- genLevelCtrl
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- cid : genLevelCtrl
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- sid : attrs
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ----------------------------------------

019-03-26 14:15:36 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] { token: '21eb127a-14ff-4e07-8d8f-7167630c04b1',
 device: '0x000d6f000cb06b98',
 endpoint: '0',
 cluster: 'genOnOff',
 attr: 'toggle',
 value:
  { src: { epId: 1, ieeeAddr: '0x000d6f000cb06b98', nwkAddr: 19149 },
   command: 'toggle' },
event: 'command' }


Step Up
2019-03-26 14:16:47 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] { token: '21eb127a-14ff-4e07-8d8f-7167630c04b1',
device: '0x000d6f000cb06b98',
endpoint: '0',
cluster: 'genLevelCtrl',
attr: 'step',
value:
{ stepmode: 0,
stepsize: 12,
transtime: 65535,
src: { epId: 1, ieeeAddr: '0x000d6f000cb06b98', nwkAddr: 19149 },
command: 'step' },
event: 'command' }


Step Down
2019-03-26 14:19:12 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] { token: '21eb127a-14ff-4e07-8d8f-7167630c04b1',
device: '0x000d6f000cb06b98',
endpoint: '0',
cluster: 'genLevelCtrl',
attr: 'step',
value:
{ stepmode: 1,
stepsize: 12,
transtime: 65535,
src: { epId: 1, ieeeAddr: '0x000d6f000cb06b98', nwkAddr: 19149 },
command: 'step' },
event: 'command' }


*/
