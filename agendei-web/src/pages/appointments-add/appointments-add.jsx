import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/header";
import { doctors, doctors_services } from "../../constants/db/data";

function AppointmentsAdd() {
  const { id_appointment } = useParams();

  return (
    <>
      <Header />
      <div className="container-fluid mt-page">
        <div className="row col-lg-4 offset-lg-4">
          <div className="col-12 mt-2">
            <h2>
              {id_appointment > 0 ? "Editar Agendamento" : "Novo Agendamento"}
            </h2>
          </div>

          <div className="col-12 mt-4">
            <label htmlFor="doctor" className="form-label">
              Médico
            </label>
            <div className="form-control mb-2">
              <select name="doctor" id="doctor">
                <option value="">Selecione o médico</option>
                {doctors.map((doc) => {
                  return (
                    <option key={doc.id_doctor} value={doc.id_doctor}>
                      {doc.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="col-12 mt-3">
            <label htmlFor="service" className="form-label">
              Serviços
            </label>
            <div className="form-control mb-2">
              <select name="service" id="service">
                <option value="">Selecione o serviço</option>
                {doctors_services.map((d) => {
                  return (
                    <option key={d.id_service} value={d.id_service}>
                      {d.description}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="col-6 mt-3">
            <label htmlFor="bookingDate" className="form-label">
              Data
            </label>
            <input
              type="date"
              className="form-control"
              name="bookingDate"
              id="bookingDate"
            />
          </div>

          <div className="col-6 mt-3">
            <label htmlFor="bookingDate" className="form-label">
              Horário
            </label>
            <div className="form-control mb-2">
              <select name="bookingHour" id="bookingHour">
                <option value="0">Horário</option>
                <option value="09:00">09:00</option>
                <option value="09:00">09:30</option>
                <option value="09:00">10:00</option>
                <option value="09:00">10:30</option>
                <option value="09:00">11:00</option>
              </select>
            </div>
          </div>

          <div className="col-12 mt-4">
            <div className="d-flex justify-content-end">
              <Link to="/appointments" className="btn btn-outline-primary me-4">
                Cancelar
              </Link>
              <button className="btn btn-primary">Salvar dados</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AppointmentsAdd;
