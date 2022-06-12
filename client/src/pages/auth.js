import React from 'react';
import '../style/auth.css';

const Auth = () => {
  return (
    <div class="auth">
      <div class="container">
        <div class="con-1">
          <div class="con-exit">Exit</div>
        </div>
        <div class="con-2">
          <div class="con-d-h">
            {' '}
            Dont have an account?
            <a class="con-href" href="url">
              Register
            </a>
          </div>
        </div>
        <div class="log-reg">
          <div class="lr-regist">
            <div class="reg-el">
              <input id="type" type="text" placeholder="Email" />
            </div>

            <div class="reg-log">
              <input id="type" type="password" placeholder="Password" />
            </div>

            <div class="reg-info">
              <div id="checkbox">
                <div>Remember me?</div>
                <div>
                  <a class="checkbox-href" href="url">
                    Forgot password or email mail
                  </a>
                </div>
              </div>
            </div>

            <div class="reg-buttom">
              <button class="buttom" type="button">
                <a href='auth' class="buttom">Log in</a>
              </button>
            </div>
          </div>
          <div class="lr-line">
            <div class="lr-line-1" />
          </div>
          <div class="lr-log">
            <div class="log-but-con1">
              <button class="log-but-google" type="button">
                <div class="display-but-google">
                  <div class="google-logo" />
                </div>
                <div class="but-contant">Sign in with Google</div>
              </button>
            </div>
            <div class="log-but-con2">
              <button class="log-but-facebook" type="button">
                <div class="display-but-facebook">
                  <div class="facebook-logo" />
                </div>
                <div class="but-contant">Log in with Facebook</div>
              </button>
            </div>
            <div class="log-but-con2">
              <button class="log-but-apple" type="button">
                <div class="display-but-apple">
                  <div class="apple-logo" />
                </div>
                <div class="but-contant-apple">Log in with Apple</div>
              </button>
            </div>
            <div class="login-with">
              <a class="href-login" href="url">
                Login with SSO
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="cont-info-1">
            By logging in, you accept the
            {' '}
            <a class="con-href" href="url">
              Terms of Use
            </a>
            , acknowledge that you 
            {' '}
            <br />
            {' '}
            read
            {' '}
            <a class="con-href" href="url">
              the Privacy Policy
            </a>
            , and agree to receive news from Wix by 
            {' '}
            <br />
            {' '}
            mail.
          </div>
          <div class="cont-info-2">
            This site is protected by reCAPTCHA Enterprise and is subject to
            {' '}
            <a class="con-href" href="url">
              the
              <br />
              {' '}
              Google Privacy Policy
            </a>
            {' '}
            and
            {' '}
            <a class="con-href" href="url">
              Terms of
            </a>
            {' '}
            Service.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
