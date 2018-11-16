const Alarm = require('../tire-pressure-monitoring-system/alarm');

// TirePressureMonitoringSystem exercise:
// write the unit tests for the Alarm class.
// The Alarm class is designed to monitor tire pressure and
// set an alarm if the pressure falls outside of the expected
// range.
// The Sensor class provided for the exercise fakes the
// behaviour of a real tire sensor, providing random but
// realistic values.

describe('Tyre Pressure Monitoring System', function () {
	describe('Alarm', function () {
		// beforeEach(() => {		
		// 	target = new Alarm();
		// });

		it('Do something', function () {
			const target = new Alarm();
			target.check();
		
		});
	});
});
