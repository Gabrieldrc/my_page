import React from "react";

const style = {
  margin: "auto",
  color: "rgb(47, 218, 255)",
  fontSize: "4.5rem",
  fontWeight: "600",
  width: "fit-content",
}

function Title(props) {
  const {children} = props;

  return <h1 style= {style}>{children}</h1>;

}

export default Title;