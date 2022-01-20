import React from "react";
import s from "../styles/LoginPage.module.css";
import { useState } from "react";
import users from "../../mockup/users";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  var isLoggedIn = localStorage.getItem("isLoggedIn")

  const handleSubmit = (event) => {
    users.forEach((element) => {
      if (email === element.email) {
        if (password === element.password) {
          localStorage.setItem("isLoggedIn", "true")

          localStorage.setItem("userId", element.userId)
          localStorage.setItem("email", element.email)
          localStorage.setItem("firstname", element.firstname)
          localStorage.setItem("lastname", element.lastname)
          navigate("/")
          return;
        } else {
          alert("Wrong Password");
          return;
        }
      }
    });
  };

  return (
    <>
      {
        isLoggedIn === "true" && navigate("/")
      }
      <div className={s.container}>
        <img src={logo} alt="logo" width={"400px"}/>
        <form onSubmit={handleSubmit}>
          <div className={s.firstLine}>
              <p>Email:</p>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className={s.secondLine}>
              <p>Password:</p>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div className={s.btnWrapper}>
            <input type="submit" value="Sign In" className={s.signInButton} />
          </div>
        </form>
      </div>
    </>
  );
}
