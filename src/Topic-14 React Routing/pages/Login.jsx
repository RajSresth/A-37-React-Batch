import { useRef, useState } from "react";
import { Link} from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";
import { Form } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const email = useRef("");
    const password = useRef("");

    console.log("Login Render");

    const handleSubmit = () => {
        console.log("email:",email.current.value);
        console.log("password:",password.current.value);

        email.current.value = "";
        password.current.value = "";
    }

  return (
    <div className="signup-container">
      <Form onSubmit={handleSubmit} className="register-form">
        <div>
          <div className="form-logo">
            <FaUserSecret size={40} />{" "}
          </div>
          <h2>Login</h2>
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
            ref={email}
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
              ref={password}
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
      </Form>
    </div>
  );
}

export default Login