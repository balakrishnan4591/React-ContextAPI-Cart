// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";

import Total from "./Components/Total";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Card />
            <Total />
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </>
  );
}

export default App;
