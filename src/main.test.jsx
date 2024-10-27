import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders App without crashing", () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(container).toBeTruthy();
});
