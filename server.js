const https = require("https");

const apiKey = "My_API_KEY";            // Set up API Key
const origin = "KIAH";                  // Set up origin in ICAO/IATA code
const destination = "KLGA";             // Set up destination in ICAO/IATA code
const departureTime = "2023-03-14";     // Set up departure time in ISO8601 date or datetime
const arrivalTime = "2023-04-19";       // Set up departure time in ISO8601 date or datetime


const options = {
    hostname: "aeroapi.flightaware.com/aeroapi",
    path: '/aeroapi/airports/' + origin + '/flights/to/' + destination + "?start=" + departureTime + '&end=' + arrivalTime,
    headers: {
        'x-apiKey': apiKey
    }
}

https.get(options, function (response) {
    let data = "";

    response.on("data", (chunk) => {
        data += chunk;
    });

    response.on("end", () => {
        const flightData = JSON.parse(data.toString());
    })
})
