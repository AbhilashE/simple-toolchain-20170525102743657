/*******************************************************************************
 * Copyright (c) 2014 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *   http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *   Bryan Boyd - Initial implementation
 *******************************************************************************/

var config = {
	iot_deviceType: "Vehicle"",     // replace with your deviceType
	iot_deviceOrg: "ciqjwi",       // replace with your IoT Foundation organization
	iot_deviceSet: [               // replace with your registered device(s)
		{ deviceId: "Vehicle1", token: "5QK1rWHG9JhDwrsS" },
    		{ deviceId: "Vehicle2", token: "Q7QmQjQn6NUrA4" },
		{ deviceId: "Vehicle3", token: "4OFET9iLe4bKz" }
	],
	iot_apiKey: "a-ciqjwi-xil8p4gutd",    // replace with the key for a generated API token
	iot_apiToken: "@(42c69kMPSeh1I&rT",  // replace with the generated API token

	// these topics will be used by Geospatial Analytics
	notifyTopic: "iot-2/type/api/id/geospatial/cmd/geoAlert/fmt/json",
	inputTopic: "iot-2/type/Vehicle/id/+/evt/telemetry/fmt/json",
};

try {
	module.exports = config;
} catch (e) { window.config = config; }
