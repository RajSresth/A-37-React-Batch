import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaUserSecret } from "react-icons/fa";
import { Form } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupForm = () => {
    console.log("fullname:", formData.fullname);
    console.log("email:", formData.email);
    console.log("password:", formData.password);

    setFormData({
      fullname: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-container">
      <Form action="" onSubmit={handleSignupForm} className="register-form">
        <div>
          <div className="form-logo">
            <FaUserSecret size={40} />{" "}
          </div>
          <h2> Signup</h2>
        </div>

        {error && <p className="error-text">{"All fields required"}</p>}

        {/* username */}
        <div>
          <label htmlFor="inp1">
            Username <sup>*</sup>
          </label>
          <input
            type="text"
            id="inp1"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
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
              value={formData.password}
              onChange={handleInputChange}
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
