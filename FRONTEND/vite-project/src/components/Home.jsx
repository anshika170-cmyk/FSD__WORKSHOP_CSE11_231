import React from "react";
import womenImg from "../assets/women.jpg";

const Home = () => {
  return (
    <div>
     
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px",
        }}
      >
        
        <h2 style={{ margin: 0 }}>MilesSbesta.com</h2>

        
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "30px",
            margin: 0,
            padding: 0,
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          <li>Teaching</li>
          <li>Web Designing</li>
          <li>Communication</li>
        </ul>
      </div>

      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "50px",
        }}
      >
        
        <div>
          <h1 style={{ fontSize: "30px" }}>Welcome to Tech the  World</h1>
          <p style={{ fontSize: "20px", color: "gray" }}>
            Learn Programming, Web Development, and Communication Skills with
            practical examples.
          </p>
 <br/>
          <button
            style={{
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
           
            Get Started
          </button>
        </div>

        
        <div>
          <img
            src={womenImg}
            alt="Woman"
            style={{
              width: "400px",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;