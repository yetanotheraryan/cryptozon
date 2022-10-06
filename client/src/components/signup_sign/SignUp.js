import React from "react";
import "./signup.css";

const SignUp = () => {
  return (
    <div>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./CryptoZon-logo-black.jpeg" alt="cryptozon logo" />
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign In</h1>
              <div className="form_data">
                <label htmlFor="email">Name</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form_data">
                <label htmlFor="password">Email</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Atleast 6 Characters"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Mobile </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Atleast 6 Characters"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Atleast 6 Characters"
                />
              </div>
              <button className="signin_btn">Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New to Cryptozon</p>
            <button>Create your Cryptozon Account</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
