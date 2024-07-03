import React from "react";

const Login = () => {
  return (
    <div>
      <form className="flex h-60 w-60 justify-center flex-col mx-auto gap-3 pt-5 items-center px-10">
        <h3>
          Login
        </h3>
        <div className="block">
        <label>username</label>
        <input className=""
        type="text"></input>
        </div>
        <div className="block">

        <label>password</label>
        <input className="" type="text"></input>
        </div>
        <div className="block">
        <button className="" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
