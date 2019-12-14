import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import HeaderBack from "./Header-Back";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <HeaderBack />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});