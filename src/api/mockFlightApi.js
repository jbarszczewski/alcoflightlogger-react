const delay = 1000;
const flights = [
    { id: 1, stops: [{ id: 1, lat: 50, lng: 0 }, { id: 2, lat: 51, lng: -1 }] },
    { id: 2, stops: [{ id: 1, lat: 51, lng: -0.3 }] }
];

class FlightApi {
    static getAllFlights() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], flights));
            }, delay);
        });
    }

    static getFlight(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const flight = flights.find(flight => flight.id === id);
                if (flight) {
                    resolve(flight);
                } else {
                    reject(`No flight with id ${id}`);
                }
            }, delay);
        })
    }

    static addStop(stop) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const flight = flights.find(flight => flight.id === stop.flightId);
                if (flight) {
                    const newStop = { id: flight.stops.length + 1, lat: stop.lat, lng: stop.lng };
                    flight.stops.push(newStop)
                    resolve(newStop);
                } else {
                    reject(`No flight with id ${stop.flightId}`);
                }
            }, delay);
        })
    }

    static addFlight(flight) {
        return new Promise((resolve) => {
            setTimeout(() => {
                flight.id = flights.length + 1;
                flights.push(flight);
                resolve(flight);
            }, delay);
        })
    }
}

export default FlightApi;