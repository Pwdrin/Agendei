import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import logo from "../../assets/images/logo.png";
import background from "../../assets/images/fundo.png";
import api from "../../constants/api/api.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  async function ExecuteLogin(event) {
    event.preventDefault();

    setMsg("");

    if (!email || !password) {
      setMsg("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const response = await api.post("/admin/login", {
        email,
        password,
      });

      if (response.data) {
        localStorage.setItem("sessionToken", response.data.token);
        localStorage.setItem("sessionId", response.data.id_admin);
        localStorage.setItem("sessionEmail", response.data.email);
        localStorage.setItem("sessionName", response.data.name);
        api.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        navigate("/appointments");
      } else {
        setMsg("Erro ao tentar efetuar login. Tente novamente mais tarde!");
      }
    } catch (error) {
      if (error.response?.data.error) setMsg(error.response?.data.error);
      else setMsg("Erro ao tentar efetuar login. Tente novamente mais tarde!");
      console.log(error);
    }
  }

  return (
    <div className="row">
      <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
        <form className="form-signin">
          <img src={logo} className="logo mb-4" />
          <h5 className="mb-5">
            Gerencie seus agendamentos de forma descomplicadas.
          </h5>
          <h5 className="mb-4 text-secondary">Acesse sua conta</h5>

          <div className="mt-4">
            <input
              type="email"
              placeholder="E-mail"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              type="password"
              placeholder="Senha"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-3 mb-5">
            <button onClick={ExecuteLogin} className="btn btn-primary w-100">
              Login
            </button>
          </div>

          {msg.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {msg}
            </div>
          )}

          <div>
            <span className="me-1">Não tenho uma conta. </span>
            <Link to="/register">Criar agora!</Link>
          </div>
        </form>
      </div>
      <div className="col-sm-7 d-flex">
        <img src={background} className="bg-login" />
      </div>
    </div>
  );
}

export default Login;
