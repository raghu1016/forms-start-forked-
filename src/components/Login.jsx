import { useState } from "react";
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsVaild = didEdit.email && !enteredValues.email.includes("@");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            value={enteredValues.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          <div className="control-error;">
            {emailIsVaild && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
