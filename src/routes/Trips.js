import Controller from "../controllers/trips";

module.exports = app => {
    let TripsController = new Controller();
    
    const createNewTrip = (req, res) => TripsController.createNewTrip(req, res);
    const getTrips = (req, res) => TripsController.getTrips(req, res);
    const updateTrips = (req, res) => TripsController.updateTrips(req, res);
    const deleteTrip = (req, res) => TripsController.deleteTrip(req, res);
    const markTripActive = (req, res) => TripsController.markTripActive(req, res);
    
    app.route(`${process.env.API_BASE}trips`).post(createNewTrip);
    app.route(process.env.API_BASE + "trips").get(getTrips);
    app.route(`${process.env.API_BASE}trips`).put(updateTrips);
    app.route(`${process.env.API_BASE}trips`).delete(deleteTrip);
    app.route(`${process.env.API_BASE}trips/mark_active`).get(markTripActive);
}