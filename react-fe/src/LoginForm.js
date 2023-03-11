import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your first name:
        <input
          type="text"
          name="first_name"
          value={inputs.first_name || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter your last name:
        <input
          type="text"
          name="last_name"
          value={inputs.last_name || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter your email:
        <input
          type="text"
          name="email_id"
          value={inputs.email_id || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default LoginForm;
