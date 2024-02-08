import React, { useState } from "react";
import { ButtomComponents, Cointainer, InputForm } from "../components";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handalFuntion = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const formHandal = (e) => {
    e.preventDefault();
    console.log(loginData);
  };
  return (
    <Cointainer>
      <div className=" box">
        <div className=" w-full border p-3 shadow rounded bg-white">
          <div className=" flex justify-center">
            <h1 className=" text-2xl font-bold">Please Login</h1>
          </div>
          <form onSubmit={formHandal}>
            <InputForm
              value={loginData.email}
              onChange={handalFuntion}
              name="email"
              typee={"text"}
              chil={""}
              forr={"UserName"}
              lable={"Your Email"}
            />
            <InputForm
              value={loginData.password}
              onChange={handalFuntion}
              name="password"
              typee={"password"}
              chil={""}
              forr={"Password"}
              lable={"Your Password"}
            />
            <ButtomComponents type="submit">Login</ButtomComponents>
          </form>
        </div>
      </div>
    </Cointainer>
  );
};

export default LoginPage;
