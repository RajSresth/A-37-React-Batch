import { useState } from "react";
import { Link, useActionData } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";
import { Form } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const data = useActionData()

  return (
    <div className="signup-container">
      <Form method="POST" className="register-form">
        <div>
          <div className="form-logo">
            <FaUserSecret size={40} />{" "}
          </div>
          <h2> Signup</h2>
        </div>

        {error && <p className="error-text">{"All fields required"}</p>}
        {data?.message && <p className="success-text">{data?.message}</p>}

        {/* username */}
        <div>
          <label htmlFor="inp1">
            Username <sup>*</sup>
          </label>
          <input
            type="text"
            id="inp1"
            name="fullname"
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
      </Form>
    </div>
  );
};

export default Signup;