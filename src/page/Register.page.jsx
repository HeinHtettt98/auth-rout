import React, { useState } from "react";
import { ButtomComponents, Cointainer, InputForm } from "../components";
import CointainerComponent from "../components/Cointainer.component";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handalFuntion = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const formHandal = (e) => {
    e.preventDefault();
    console.log(registerData);
  };
  return (
    <CointainerComponent>
      <div className="box">
        <div className=" w-full border p-3 shadow rounded bg-white">
          <div className=" flex justify-center">
            <h1 className=" text-2xl font-bold">Registration</h1>
          </div>
          <form onSubmit={formHandal}>
            <InputForm
              value={registerData.name}
              onChange={handalFuntion}
              name="name"
              typee={"text"}
              chil={"eg.Mg Mg"}
              forr={"UserName"}
              lable={"User Name"}
            />
            <InputForm
              value={registerData.email}
              onChange={handalFuntion}
              name="email"
              typee={"email"}
              chil={"example@gmail.com"}
              forr={"Email"}
              lable={"Email"}
            />
            <InputForm
              value={registerData.password}
              onChange={handalFuntion}
              name="password"
              typee={"password"}
              chil={""}
              forr={"Password"}
              lable={"Password"}
            />
            <InputForm
              value={registerData.password_confirmation}
              onChange={handalFuntion}
              name="password_confirmation"
              typee={"password"}
              chil={""}
              forr={"ComfinePassword"}
              lable={"Password Again"}
            />
            <ButtomComponents type="submit">Register</ButtomComponents>
          </form>
          <div>
            <p>Already have an account? <span className="">Login</span></p>
          </div>
        </div>    
      </div>
    </CointainerComponent>
  );
};

export default RegisterPage;
