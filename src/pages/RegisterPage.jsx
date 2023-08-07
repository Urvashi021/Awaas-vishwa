import React from "react";
import { TextField, Button } from "@mui/material";
import alert from "../utility/alert";

const RegisterPage = () => {
  const name = React.useRef();
  const phone = React.useRef();
  const email = React.useRef();
  const username = React.useRef();
  const password = React.useRef();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const nameVal = name.current.value;
    const phoneVal = Number(phone.current.value);
    const emailVal = email.current.value;
    const usernameVal = username.current.value;
    const passwordVal = password.current.value;

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameVal, 
        phone: phoneVal, 
        email: emailVal, 
        username: usernameVal, 
        password: passwordVal
      })
    })
    
    const data = await response.json();
    //console.log(data);
    if (response.ok){
      alert('User Registered.', 'success')
    } else {
      alert(data.error, 'error')
    }
    
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Full Name"
              variant="filled"
              inputRef={name}
              required
              autoComplete='true'
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Phone"
              variant="filled"
              type="number"
              inputRef={phone}
              required
              autoComplete='true'
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="email"
              variant="filled"
              inputRef={email}
              required
              autoComplete='true'
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="User Name"
              variant="filled"
              inputRef={username}
              required
              autoComplete='true'
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="password"
              variant="filled"
              type="password"
              inputRef={password}
              required
              autoComplete='true'
            />
            <Button
              variant="contained"
              sx={{ marginTop: "20px", width: "100%" }}
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;