import React from "react";
import cl from "./Arrange.module.css";
import ImgExport from "../../../../assets/icons/imgExport";

function Arrange({
  mode,
  setMode,
}: {
  mode: string;
  setMode: (elem: string) => void;
}) {
  return (
    <div
      className={cl.arrange}
      onClick={() => {
        mode === "block" ? setMode("ul") : setMode("block");
      }}>
      <div
        className={
          mode === "block"
            ? cl.arrange__focus + " " + cl.left
            : cl.arrange__focus + " " + cl.right
        }></div>
      <div className={cl.arrange__block}>
        <ImgExport
          mode="block"
          fill={mode === "block" ? "#C73153" : "#828282"}
        />
      </div>
      <div className={cl.arrange__block}>
        <ImgExport mode="ul" fill={mode === "block" ? "#828282" : "#C73153"} />
      </div>
    </div>
  );
}

export default Arrange;
