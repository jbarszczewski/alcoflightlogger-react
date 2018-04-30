const delay = 100;
const flights = [
    { id: 1, stops: 5 },
    { id: 2, stops: 1 }
];

class FlightApi {
    static getAllFlights() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], flights));
            }, delay);
        });
    }

    static addFlight(flight) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            flight.id = flights.length + 1;
            flights.push(flight);
            resolve(flight);
            }, delay);
        })
    }
}

export default FlightApi;