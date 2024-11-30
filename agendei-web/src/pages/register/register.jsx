import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import logo from "../../assets/images/logo.png";
import background from "../../assets/images/fundo.png";
import api from "../../constants/api/api.js";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  async function ExecuteRegister() {
    setMsg("");

    if (!name || !email || !password || !password2) {
      return setMsg("Por favor, preencha todos os campos!");
    }

    if (password !== password2) {
      return setMsg("As senhas não coincidem. Tente novamente.");
    }

    try {
      const response = await api.post("/admin/register", {
        name,
        email,
        password,
      });

      if (response.data) {
        localStorage.setItem("sessionToken", response.data.token);
        localStorage.setItem("sessionId", response.data.id_admin);
        localStorage.setItem("sessionEmail", email);
        localStorage.setItem("sessionName", name);
        api.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        navigate("/appointments");
      } else {
        setMsg("Erro ao tentar criar uma conta. Tente novamente mais tarde!");
      }
    } catch (error) {
      if (error.response?.data.error) setMsg(error.response?.data.error);
      else setMsg("Erro ao tentar criar conta. Tente novamente mais tarde!");
      console.log(error);
    }
  }

  return (
    <div className="row">
      <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
        <form className="form-signin">
          <img src={logo} className="logo mb-4" />
          <h5 className="mb-5">Crie sua conta agora mesmo.</h5>
          <h5 className="mb-4 text-secondary">Preencha os campos abaixo</h5>

          <div className="mt-4">
            <input
              type="name"
              placeholder="Nome"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mt-3">
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
          <div className="mt-3">
            <input
              type="password"
              placeholder="Confirme a senha"
              className="form-control"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <div className="mt-3 mb-5">
            <button
              onClick={ExecuteRegister}
              className="btn btn-primary w-100"
              type="button"
            >
              Criar minha conta
            </button>
          </div>
          {msg.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {msg}
            </div>
          )}
          <div>
            <span className="me-1">Já tenho uma conta. </span>
            <Link to="/">Acessar agora!</Link>
          </div>
        </form>
      </div>
      <div className="col-sm-7 d-flex">
        <img src={background} className="bg-login" />
      </div>
    </div>
  );
}

export default Register;
