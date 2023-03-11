import { useEffect, useState } from "react";
import "./ViewTitle.scss";
import "../../views/Dashboard/Places/New";
function Title(props) {
  return <h1 className="Title">{props.newTitle}</h1>;
}

export default Title;
