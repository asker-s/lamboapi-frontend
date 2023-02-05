import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddOwner from "./owners/AddOwner";
import EditOwner from "./owners/EditOwner";
import ViewOwner from "./owners/ViewOwner";
import ViewGarages from "./owners/ViewGarages";
import AddGarage from "./garages/AddGarage";
import ViewGarage from "./garages/ViewGarage";
import Cars from "./cars/Cars";
import AddCar from "./cars/AddCar";
import ViewCars from "./garages/ViewCars";
import AssignCar from "./garages/AssignCar";
import AccessibleGarages from "./cars/AccessibleGarages";
import AssignGarage from "./cars/AssignGarage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addowner" element={<AddOwner />} />
          <Route exact path="/editowner/:id" element={<EditOwner />} />
          <Route exact path="/viewowner/:id" element={<ViewOwner />} />
          <Route exact path="/viewgarages/:id" element={<ViewGarages />} />
          <Route exact path="/addgarage/:id" element={<AddGarage />} />
          <Route
            exact
            path="/viewgarage/:ownerId/:garageId"
            element={<ViewGarage />}
          />
          <Route exact path="/cars" element={<Cars />} />
          <Route exact path="/addcar" element={<AddCar />} />
          <Route
            exact
            path="/viewgarages/:ownerId/:garageId/cars"
            element={<ViewCars />}
          />
          <Route
            exact
            path="/owner/:ownerId/garages/:garageId/cars/assign"
            element={<AssignCar />}
          />
          <Route
            exact
            path="/cars/:id/garages"
            element={<AccessibleGarages />}
          />
          <Route
            exact
            path="/cars/:carId/garages/assign"
            element={<AssignGarage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
