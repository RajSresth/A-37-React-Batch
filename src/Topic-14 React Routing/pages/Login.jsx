import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../store/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUserData } = useAuth();

  const handleLoginForm = async (e) => {
    e.preventDefault();

    try {
      const serverUrl = import.meta.env.VITE_SERVER_URL;

      const { data } = await axios.post(
        `${serverUrl}/login`,
        { email, password },
        { withCredentials: true },
      );

      setUserData(data?.user);
      localStorage.setItem("user",JSON.stringify(data?.user))
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error?.response?.data);
      setError(error?.response?.data);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleLoginForm} className="register-form">
        <div>
          <div className="form-logo">
            <FaUserSecret size={40} />{" "}
          </div>
          <h2>Login</h2>
        </div>

        {error && <p className="error-text">{error?.message}</p>}

        {/* Email */}
        <div>
          <label htmlFor="inp2">
            Email <sup>*</sup>
          </label>
          <input
            type="email"
            id="inp2"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        {/* password */}
        <div>
          <label htmlFor="inp3">
            Password <sup>*</sup>
          </label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="inp3"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              required
            />
            <span
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
            </span>
          </div>
        </div>

        <button type="submit">Login</button>
        <button type="reset">Cancel</button>

        <span>
          Create Your Account? <Link to="/signup">signup</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
