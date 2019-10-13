# Elko SmartHome
Add support for Elko SmartHome to the Athom Homey

# Supports:
- **ESH 316GLED RF PH** - Dimmer (Still some bugs with forced_timeouts)
  http://proff.elko.no/elko-smart-home-316gled/esh-rs16-316gled-dimmer-rf-ph-article2622-1781.html
  - *Known bugs*:
    - forced_timeouts when multiple commands are sent from Homey app or Web app
    - New ESH316GLED devices produced after June 2019 should not be affected of this bug

- **ESH Super TR RF PH** - Thermostat
  http://proff.elko.no/elko-smart-home-super-termostat/esh-plus-super-tr-rf-ph-article2629-1779.html
  - Read floor and air temp
  - Read Thermostat mode
  - Read/Write Thermostat set temp
  - Read Heating status
  - Read Child lock status


## Plan for support:
  - ESH 316GLED Dimmer Remote - Working on support, but On/Off command from dimmer remote is not detected by Homey.
  - **New Elko SmartHome products - Unknown release**
    - ESH Plus wall Switch - 4 button Zigbee switch (Battery)
    - ESH Plus wall Switch with PIR - 4 button Zigbee switch (Battery)
    - ESH Plus wall Switch with dimmer - 5 button with dimmer wheel Zigbee switch (Battery)
    - ESH Socket relay - Zigbee
    - ESH Relay Puck - In wall Zigbee relay
    - ESH Dimmer Puck - in wall Zigbee dimmer

# Donate
 If you like the app, please donate so I can keep improving it!
 https://paypal.me/prj84

# Changelog

## Version: 0.0.6
**Thermostat has to be readded to get all new capabilites!**
- Updated Meshdriver
- Updated with support for Norwegian texts
- Temperature Mode (air, floor, floor guard) on thermostat is now pulled from device and used to set correct temperature on device card
- If thermostat does not have a floor sensor connected the value is now blanked out (not -99,9c anymore)
- Heating and Child lock status is now moved from buttons to sesnor screen
- Child lock can now be set through Flow card
(Thanks to Bjørnar Almli for help with this update)
## Version: 0.0.5
- Fixed potential uncaught exception - Still forced_timeouts is repoted, but problem should be less for some users (Thanks to Espen Aa Ljosland!)
- Removed function to prevent multiple commands since users reporting problems when adding devices to flows.

## Version: 0.0.4
- Updated Meshdriver
- Temp. Fix for forced_timeout issue. Update tries to address the forced_timeout issue by preventing the user from sending multiple commands to the same light "too fast". (Thanks to Espen Herseth Halvorsen for this temp. fix)

## Version: 0.0.3
- Updated Meshdriver
- Turned of SetOnDim capability option to prevent forced_timeouts

## Version: 0.0.2
- Tested som new code to eliminate forced_timeouts with ESH316GLED

## Version: 0.0.1
- First beta
- Includes support for ESH 316GLED RF PH - Dimmer
- Includes support for ESH Super TR RF PH - Thermostat
