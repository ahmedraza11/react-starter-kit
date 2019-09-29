import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div
      style={{
        padding: 10,
        height: 50,
        backgroundColor: "#282b2a",
        color: "#fff",
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        boxShadow: "3px 3px 3px gray"
      }}
    >
      <h3>Header</h3>
      <div
        style={{
          marginTop: 20,
          width: 150,
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <NavLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
          Home
        </NavLink>
        <NavLink to="/about" style={{ textDecoration: "none", color: "#fff" }}>
          About
        </NavLink>
      </div>
    </div>
  );
};
