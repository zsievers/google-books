import React from "react";
import { Input, FormBtn } from "../Form";
import "./style.css";
import logo from "../../google.jpg";

const Jumbotron = ({ q, handleInputChange, handleFormSubmit }) => {
  return (
    <div
      className="jumbotron"
      style={{
        height: 400,
        width: "100%",
        clear: "both",
        textAlign: "center",
        background: "white",
        borderTop: "1px solid #EBEBEB",
        color: "#777",
        fontFamily: "arial,sans-serif",
      }}
    >
      <img className="img img-fluid " src={logo} alt="logo" />

      <form>
        <Input
          value={q}
          name="query"
          onChange={handleInputChange}
        />
        <FormBtn onClick={handleFormSubmit} type="submit">
          Search
        </FormBtn>
      </form>
      <h2>Search.Save.Read</h2>
    </div>
  );
};

export default Jumbotron;