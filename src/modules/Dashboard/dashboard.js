import React from "react";
import { CounterComponent } from "./../index";

export const Dashboard = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <h1 style={{ textAlign: "center" }}>Dashboard</h1> */}
      <CounterComponent />
    </div>
  );
};
