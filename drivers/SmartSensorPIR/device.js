'use strict';

const Homey = require('homey');
const { ZigBeeDevice } = require('homey-zigbeedriver');
const { CLUSTER } = require('zigbee-clusters');

class SmartSensorPIR extends ZigBeeDevice {


  	// this method is called when the Device is inited
  async	onNodeInit({ zclNode }) {
      this.enableDebug();
      //this.printNode();
      this.setAvailable();

      //This is for the raw logging of zigbee trafic. Otherwise not used.
      //const { Util } = require('homey-zigbeedriver');
      //Util.debugZigbeeClusters(true);

      // Register measure_battery capability and configure attribute reporting
      this.batteryThreshold = 20;
      if (this.hasCapability('alarm_battery')) {
      await this.registerCapability('alarm_battery', CLUSTER.POWER_CONFIGURATION, {
            reportOpts: {
              configureAttributeReporting: {
                minInterval: 0, // No minimum reporting interval
                maxInterval: 60000, // Maximally every ~16 hours
                minChange: 5, // Report when value changed by 5
              },
            },
          });
        };

      // measure_battery
      if (this.hasCapability('measure_battery')) {
      await this.registerCapability('measure_battery', CLUSTER.POWER_CONFIGURATION, {
              getOpts: {
              getOnStart: true,
              },
              reportOpts: {
                configureAttributeReporting: {
                  minInterval: 6000,
                  maxInterval: 60000,
                  minChange: 1,
                },
              },
            });
          };

        // measure_luminance
        if (this.hasCapability('measure_luminance')) {
        this.hasCapability('measure_luminance', CLUSTER.ILLUMINANCE_MEASUREMENT, {
          getOpts: {
            getOnStart: true,
          },
          reportOpts: {
            configureAttributeReporting: {
              minInterval: 0,
              maxInterval: 300,
              minChange: 1,
              },
            }
        });
      };

      //alarm_motion
      // add measure_smoke_density capabilities if needed
      if (!this.hasCapability('alarm_motion')) {
        this.addCapability('alarm_motion');
      }
      zclNode.endpoints[1].clusters[CLUSTER.IAS_ZONE.NAME].onZoneStatusChangeNotification = payload => {
          this.onIASZoneStatusChangeNoficiation(payload);
        };

/*
      if (this.hasCapability('alarm_motion')) {
      await this.registerCapability('alarm_motion', CLUSTER.IAS_ZONE, {
        getOpts: {
          getOnStart: true,
        },
        reportOpts: {
          configureAttributeReporting: {
            minInterval: 0, // No minimum reporting interval
            maxInterval: 60000, // Maximally every ~16 hours
            minChange: 1, // Report when value changed by 1
          },
        },
      });
    };
*/
  }

  onIASZoneStatusChangeNoficiation({
    zoneStatus, extendedStatus, zoneId, delay,
  }) {
    this.log('IASZoneStatusChangeNotification received:', zoneStatus, extendedStatus, zoneId, delay);
    this.setCapabilityValue('alarm_motion', zoneStatus.alarm1);
  }

}
module.exports = SmartSensorPIR;

/*2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] ZigBeeDevice has been initialized (first init: true)
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] ------------------------------------------
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] Node: a1bf7a0b-9da3-430d-b1d7-621a2449ac1b
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] - Receive when idle: false
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] - Endpoints: 1
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] -- Clusters:
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] --- basic
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] --- powerConfiguration
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] --- identify
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] --- ota
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] --- pollControl
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] --- illuminanceMeasurement
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] --- iasZone
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] --- diagnostics
2020-12-10 10:20:02 [log] [ManagerDrivers] [SmartSensorPIR] [0] ------------------------------------------
*/
