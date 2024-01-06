import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./login.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []); 

  const handleLogin = async () => {
    try {
      setLoading(true);

      if (!username || !password) {
        alert("Please fill in both username and password");
        return;
      }

      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const { token } = data;

        if (!token) {
          alert("Invalid username or password");
          return;
        }

        setToken(token);
        setIsLoggedIn(true);
        localStorage.setItem("token", token);
      } else {
        alert("Invalid username or password");
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Login failed", error);
      setError("Error during login");
    } finally {
      setLoading(false);
    }
  };


  const handleLogout = () => {
    setToken("");
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <section class=" top-txt ">
            <div class="head container ">
              <div class="head-txt ">
                <p>Free shipping, 30-day return or refund guarantee.</p>
              </div>
              <div class="sing_in_up ">
                <a href="#" onClick={handleLogout}>
                  LOGOUT
                </a>
              </div>
            </div>
          </section>

          <Navbar/> 

          <section id="home">
            <div class="home_page ">
              <div class="home_img ">
                <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img " />
              </div>
              <div class="home_txt ">
                <p class="collectio ">SUMMER COLLECTION</p>
                <h2>
                  FALL - WINTER
                  <br />
                  Collection 2023
                </h2>
                <div class="home_label ">
                  <p>
                    A specialist label creating luxury essentials. Ethically
                    crafted
                    <br />
                    with an unwavering commitment to exceptional quality.
                  </p>
                </div>
                <button>
                  <a href="#sellers">SHOP NOW</a>
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
                <div class="home_social_icons">
                  <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-pinterest"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <Card />

          <Footer />
        </div>
      ) : (
        <div>
          <form class="login">
            <h2>Welcome, User!</h2>
            <p>Please log in</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={handleLogin}
              disabled={loading}
              id="logBtn"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div class="links">
              <a href="#">Forgot password</a>
              <a href="#">Register</a>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
