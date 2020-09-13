import React from "react";
import preloader from "../../assets/img/preloader.svg"
import s from "./Preloader.module.css";

export const Preloader = () => {
    return ( <
        div className = { s.dsa } >
        <
        img src = { preloader }
        /> <
        /div>
    );
};