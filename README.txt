Elko SmartHome
Add support for Elko SmartHome to the Athom Homey

Supports:
- ESH 316GLED RF PH
  - Known bugs:
    - forced_timeouts when multiple commands are sent from Homey app or Web app
    - New ESH316GLED devices produced after June 2019 should not be affected of this bug

- ESH Super TR RF PH - Thermostat
  - Read floor and air temp
  - Read/Write Thermostat set temp (if thermostat mode)
  - Read/Write Regulator % (if regulator mode)
  - Read Heating status
  - Read Child lock status
  - Read Night Mode status
  - Read Frost Guard status
  - Read Temperature Mode (Floor, Air, Floor Guard)

- ESH 316 Dimmer Remote (BETA)
  - Toggle and Dim up/down through flow cards
    - Issues - Flooding of commands! Use carefully or your Homey will be unresponsive!
  - Thanks to Niels Petter Rasch-Olsen on this!

Donate
 If you like the app, please donate so I can keep improving it!
 https://paypal.me/prj84
