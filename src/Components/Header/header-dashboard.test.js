import React from "react";
import ReactDOM from "react-dom";
import HeaderDash from "./Header-Dashboard";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <HeaderDash />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});