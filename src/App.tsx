import React from "react";
import { Form, ItemList } from "./components";

import "./App.css";

const App = () => {
  return (
    <section className=" mx-auto text-center">
      <h1 className="text-3xl my-3">Expanse Tracker</h1>
      <Form />
      <hr />
      <ItemList />
    </section>
  );
};

export default App;
