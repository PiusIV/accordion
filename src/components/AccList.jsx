// import { useState } from "react";
import "../App.css";

function AccList({ faq, num, title, onOpen, curOpen }) {
  // created a variable that checks if num equals to curOpen, note that curOpen has a setter function of onOpen
  const isOpen = num === curOpen;

  const handleOpen = () => {
    // for the sake of toggle type shii
    onOpen(!isOpen && num);
    // onOpen(isOpen ? null : num);
    // window.alert("wagwan");
    // console.log(num, isOpen);
  };

  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <p className="number">{`0${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon" onClick={handleOpen}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && <div className="content-box">{faq.text}</div>}
    </div>
  );
}

export default AccList;
