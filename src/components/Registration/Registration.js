import React, { useState } from "react";
import "./Registration.css";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import axios from "axios";

class Registration extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      lastname: "",
      email: "",
      piradi: "",
      phone: "",
      password: ""
    };
  }
  // const register = () => {
  //   axios.post("http://localhost:3000/register", {
  //     username: usernameReg,
  //     lastname: lastNameReg,
  //     email: mailReg,
  //     piradi: idinfoReg,
  //     phone: phoneReg,
  //     password: passwordReg,
  //   });
  // };
  

  return (
    <>
      <div className="reg__container">
        <div className="reg__container__mod">
          <div className="content__IconClose">
            <Link to="/" className="iconClose__class">
              <CloseIcon className="iconClose__class" />
            </Link>
          </div>
          <p className="bgColor__class">რეგისტრაცია</p>
          <input
            type="text"
            onChange={(val) => this.setInputValues("username", val)}
            placeholder="სახელი"
            className="nameRegistration__class"
            id="nameRegistration__id"
            name="nameRegistration__name"
            required
          />
          <input
            type="text"
            onChange={(e) => setLastNameReg(e.target.value)}
            placeholder="გვარი"
            className="surnameRegistration__class"
            id="surnameRegistration__id"
            name="surnameRegistration__name"
            required
          />
          <input
            type="email"
            onChange={(e) => setMailReg(e.target.value)}
            placeholder="ელექტრონული ფოსტა"
            className="emailRegistration__class"
            id="emailRegistration__id"
            name="emailRegistration__name"
            required
          />
          <input
            type="text"
            onChange={(e) => setPhoneReg(e.target.value)}
            placeholder="პირადი ნომერი"
            className="privateId__class"
            name="privateId__name"
            id="privateId__id"
          />
          <input
            type="number"
            onChange={(e) => setIdInformationReg(e.target.value)}
            placeholder="მობილური ტელეფონის ნომერი"
            className="mobileRegistration__class"
            setPasswordReg
            id="mobileRegistration__id"
            name="mobileRegistration__name"
            required
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="პაროლი"
            className="passwordRegistration__class"
            id="passwordRegistration__id"
            name="passwordRegistration__name"
            required
          />
          <button
            className="buttonSubmitContent__class"
            id="buttonSubmitContent__id"
            name="buttonSubmitContent__name"
            onClick={register}
          >
            რეგისტრაცია
          </button>
        </div>
      </div>
    </>
  );
};
export default Registration;
