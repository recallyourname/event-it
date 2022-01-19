import React from "react";
import s from "../styles/LoginPage.module.css";
import { useState } from "react";
import users from "../../mockup/users";
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={handleSubmit}>
          <div className={s.firstLine}>
            <label className={s.label}>
              Email:
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className={s.secondLine}>
            <label className={s.label}>
              Password:
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <input type="submit" value="Sign In" className={s.signInButton} />
        </form>
      </div>
    </>
  );
}
