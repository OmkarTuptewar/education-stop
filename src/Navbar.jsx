import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <nav
        class="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Education-Stop 📖
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <li>{isAuthenticated && <p>{user.name}</p>}</li>

        {isAuthenticated ? (
          <li>
            <button
              id="signInBtn"
              type="button"
              class="btn btn-primary"
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                })
              }
            >
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <button
              id="signInBtn"
              type="button"
              className="btn  btn-primary"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </li>
        )}
      </nav>
    </>
  );
};

export default Navbar;
