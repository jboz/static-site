import React from "react";
import { Helmet } from "react-helmet";
import Presentation from "sections/presentation.section";
import Header from "./sections/header.section";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <div>Home page</div>
      <Header />
      <hr />
      <div>
        <Presentation />
        <hr />
      </div>
    </>
  );
};

export default App;
