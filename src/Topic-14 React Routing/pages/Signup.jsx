import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()


  const handleSignupForm = async (e) => {
    e.preventDefault();

    try {
      const serverUrl = import.meta.env.VITE_SERVER_URL;
      const {data} = await axios.post(
        `${serverUrl}/register`,
        {
          fullname,
          email,
          password,
        },
        { withCredentials: true },
      );

      console.log("signup-response:",data);
      navigate("/login", {replace:true})
    } catch (error) {
      setError(error?.response?.data)
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignupForm} className="register-form">
        <div>
          <div className="form-logo">
            <FaUserSecret size={40} />{" "}
          </div>
          <h2> Signup</h2>
        </div>

        {error && <p className="error-text">{error?.message}</p>}

        {/* username */}
        <div>
          <label htmlFor="inp1">
            Username <sup>*</sup>
          </label>
          <input
            type="text"
            id="inp1"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Enter fullname"
            required
          />
        </div>

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

        <button type="submit">Signup</button>
        <button type="reset">Cancel</button>

        <span>
          Already have an account? <Link to="/login">login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
