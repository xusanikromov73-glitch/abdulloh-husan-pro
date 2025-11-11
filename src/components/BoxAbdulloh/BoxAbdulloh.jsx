import React from "react";
import "./BoxAbdulloh.css";
import img from "/public/img.png";
import img2 from "/public/img2.png";
import img3 from "/public/img3.png";
import img4 from "/public/img4.png";
import img5 from "/public/img5.png";
import img6 from "/public/img6.png";
import img7 from "/public/img7.png";
import img8 from "/public/img8.png";
function BoxAbdulloh() {
  return (
    <div className="container">
      <h1>User Card</h1>

      <div className="cards">

        <div className="card">
          <img src={img} alt="" />
          <h2>Emily Johnson</h2>
          <p>Product Manager</p>
          <p>Product Development</p>
        </div>

        <div className="card">
          <img src={img2} alt="" />
          <h2>Arjun Patel</h2>
          <p>Software Engineer</p>
          <p>Technology</p>
        </div>

        <div className="card">
          <img src={img3} alt="" />
          <h2>Carlos Hernández</h2>
          <p>UI Designer</p>
          <p>Design</p>
        </div>

        <div className="card">
          <img src={img4} alt="" />
          <h2>Amina Idris</h2>
          <p>Marketing Specialist</p>
          <p>Marketing</p>
        </div>

        <div className="card">
          <img src={img5} alt="" />
          <h2>Takumi Sato</h2>
          <p>HR Specialist</p>
          <p>Human Resources</p>
        </div>

        <div className="card">
          <img src={img6} alt="" />
          <h2>Chen Wei</h2>
          <p>Data Analyst</p>
          <p>Data Science</p>
        </div>

        <div className="card">
          <img src={img7} alt="" />
          <h2>Emma Dubois</h2>
          <p>Sales Manager</p>
          <p>Sales</p>
        </div>

        <div className="card">
          <img src={img8} alt="" />
          <h2>Igor Sokolov</h2>
          <p>Quality Assurance</p>
          <p>Quality Control</p>
        </div>

      </div>
    </div>
  );
}

export default BoxAbdulloh;
