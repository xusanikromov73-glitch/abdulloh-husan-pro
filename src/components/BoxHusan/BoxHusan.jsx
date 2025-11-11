import React from 'react'
import "./BoxHusan.css"
import image from "/public/img.png"
function BoxHusan() {
  return (
    <div>
        <div className="boxes">
            <div className="box">
              <img src={image} alt="" />
            </div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
    </div>
  )
}

export default BoxHusan



// rfce