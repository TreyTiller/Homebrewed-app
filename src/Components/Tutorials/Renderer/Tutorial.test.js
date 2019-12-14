import React from "react";
import ReactDOM from "react-dom";
import Tutorials from "./Tutorials";
import { MemoryRouter } from "react-router-dom";

describe(`Tutorials component`, () => {
  it("renders the complete tutorial without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Tutorials />
      </MemoryRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
