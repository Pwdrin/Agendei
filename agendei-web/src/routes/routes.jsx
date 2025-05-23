import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login.jsx";
import Register from "../pages/register/register.jsx";
import Appointments from "../pages/appointments/appointments.jsx";
import AppointmentsAdd from "../pages/appointments-add/appointments-add.jsx";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments/add" element={<AppointmentsAdd />} />
        <Route
          path="/appointments/edit/:id_appointment"
          element={<AppointmentsAdd />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
