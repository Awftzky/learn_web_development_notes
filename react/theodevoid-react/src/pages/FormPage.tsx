import { useRef, useState } from "react";

const FormPage = () => {
  // UNCONTROLLED COMPONEN/INPUT
  //   const inputRef = useRef<HTMLInputElement>(null);
  //   const inputEmailRef = useRef<HTMLInputElement>(null);

  // CONTROLLED COMPONEN/INPUT
  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const handleSubmit = () => {
    // const fullNameFormValue = inputRef.current?.value;
    // const emailFormValue = inputEmailRef.current?.value;
    // alert(
    //   `Form Submitted With Name : ${fullNameFormValue}, With and Email : ${emailFormValue}`,
    // );
  };

  return (
    <div>
      <h1>Form Page</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
          margin: "auto",
        }}
      >
        {/* UNCONTROLLED COMPONENT/INPUT */}
        {/* <label htmlFor="full-name">Full Name</label>
        <input ref={inputRef} id="full-name" type="text" />

        <label htmlFor="email">Email</label>
        <input ref={inputRef} id="email" type="text" />

        <button type="button" onClick={() => handleSubmit()}>
          Submit
        </button> */}
        <h3>{fullNameInput}</h3>

        <label htmlFor="full-name">Full Name</label>
        <input
          onChange={(e) => {
            setFullNameInput(e.target.value);

            const fullNameValidation = e.target.value.length < 3;

            if (fullNameValidation) {
              setUsernameErrorMessage("Name must be above 3 words");
            } else {
              setUsernameErrorMessage("");
            }
          }}
          id="full-name"
          type="text"
          value={fullNameInput}
        />
        <span style={{ color: "red" }}>{usernameErrorMessage}</span>

        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => {
            setEmailInput(e.target.value);

            const emailValidation = e.target.value;
            const hasAt = emailValidation.includes("@");

            if (!hasAt) {
              setEmailErrorMessage("Email must contain @");
            } else {
              setEmailErrorMessage("");
            }
          }}
          id="email"
          type="text"
          value={emailInput}
        />
        <span style={{ color: "red" }}>{emailErrorMessage}</span>

        <button type="button" onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormPage;
