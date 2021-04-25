import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-image-lightbox/style.css";

import Layout from "./pages/Layout";

import Home from "./pages/home";
import About from "./pages/about";
import Referances from "./pages/referances";
import Works from "./pages/works";
import Contact from "./pages/contact";

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/kurumsal" component={About} />
          <Route path="/referanslar" component={Referances} />
          <Route path="/islerimiz/:token" component={Works} />
          <Route path="/iletisim" component={Contact} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
