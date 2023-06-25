import React from "react";
import cl from "./Loader.module.css";
import loader from "./../../../assets/img/loader.png";

function Loader() {
  return <img src={loader} alt="" className={cl.loader} />;
}

export default Loader;
