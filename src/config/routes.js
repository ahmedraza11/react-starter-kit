import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Dashboard, About } from "./../modules";
import { Header, Footer } from "./../components";

export default () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Dashboard} />
      <Route path="/about" component={About} />
      <Footer />
    </Router>
  );
};
