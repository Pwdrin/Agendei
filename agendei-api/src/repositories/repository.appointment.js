import { query } from "../database/sqlite.js";

async function Listar(id_user, dt_start, dt_end, id_doctor) {
  let fil = [];

  let sql = `select a.id_appointment, s.description as service, 
    d.name as doctor, d.specialty,
   a.booking_date, a.booking_hour, u.name as user, ds.price
from appointments a
join services s on (s.id_service = a.id_service)
join doctors d on (d.id_doctor = a.id_doctor)
join users u on (u.id_user = a.id_user)
join doctors_services ds on (ds.id_doctor = a.id_doctor and 
                        ds.id_service = a.id_service)
where a.id_appointment > 0 `;

  if (id_user) {
    fil.push(id_user);
    sql = sql + "and a.id_user = ?";
  }

  if (dt_start) {
    fil.push(dt_start);
    sql = sql + "and a.booking_date >= ?";
  }

  if (dt_end) {
    fil.push(dt_end);
    sql = sql + "and a.booking_hour <= ?";
  }

  if (id_doctor) {
    fil.push(id_doctor);
    sql = sql + "and a.id_doctor = ?";
  }

  sql = sql + "order by a.booking_date, a.booking_hour";
  const appointments = await query(sql, fil);

  return appointments;
}

async function Inserir(
  id_user,
  id_doctor,
  id_service,
  booking_date,
  booking_hour
) {
  let sql = `insert into appointments(id_user,
        id_doctor, id_service, booking_date, booking_hour) 
        values(?, ?, ?, ?, ?) returning id_appointment`;

  const appointment = await query(sql, [
    id_user,
    id_doctor,
    id_service,
    booking_date,
    booking_hour,
  ]);

  return appointment[0];
}

async function Excluir(id_user, id_appointment) {
  let sql = `delete from appointments where id_appointment=? and id_user=?`;

  await query(sql, [id_appointment, id_user]);

  return { id_appointment };
}

export default { Listar, Inserir, Excluir };
