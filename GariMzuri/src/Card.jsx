import React from "react"
import myCar from "./assets/car1.jpg"

export default function Card(){
    return(
        <>
        <img src={myCar} alt="This is my car"  className="card--image"/>
        <h1>This is my car  which is a n year old</h1>
        <button>Buy</button>
        </>
    )
}