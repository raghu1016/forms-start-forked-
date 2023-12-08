import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import useInput from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => {
    return isNotEmpty(value) && !isEmail(value);
  });

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => {
    return isNotEmpty(value) && hasMinLength(value, 6);
  });

  console.log(emailHasError, passwordHasError, emailValue, passwordValue);

  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  // function handleInputBlur(identifier) {
  //   setDidEdit((prevState) => ({
  //     ...prevState,
  //     [identifier]: true,
  //   }));
  // }

  // function handleInputChange(identifier, value) {
  //   setEnteredValues((prevState) => ({
  //     ...prevState,
  //     [identifier]: value,
  //   }));
  //   setDidEdit((prevState) => ({
  //     ...prevState,
  //     [identifier]: false,
  //   }));
  // }

  // const emailIsVaild =
  //   didEdit.email &&
  //   !isEmail(enteredValues.email) &&
  //   isNotEmpty(enteredValues.email);
  // const passwordIsVaild =
  //   didEdit.password &&
  //   !hasMinLength(enteredValues.password, 6) &&
  //   isNotEmpty(enteredValues.password);

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      console.log(emailHasError, passwordHasError, emailValue, passwordValue);
      return;
    }
    //console.log(enteredValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailHasError && "please enter a valid email"}
        />
        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={passwordHasError && "please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
