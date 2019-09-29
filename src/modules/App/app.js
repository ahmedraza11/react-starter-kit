import React from "react";

import { styles } from "./styles";
import Routes from "./../../config/routes";

export const App = () => {
  return (
    <div style={styles.AppContainer}>
      <Routes />
    </div>
  );
};
