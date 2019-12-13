import React from "react";
import ReactDOM from "react-dom";
import BrewGuide from "./BrewGuide";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <BrewGuide />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
