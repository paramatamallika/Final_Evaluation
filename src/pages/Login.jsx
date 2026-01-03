import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const role = login(email, pass);
    if (role === "admin") nav("/admin/dashboard");
    else if (role === "customer") nav("/customers/dashboard");
    else alert("Wrong email or password");
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Login</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
