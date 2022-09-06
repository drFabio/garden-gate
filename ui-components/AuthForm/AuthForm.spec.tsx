import { render } from "@testing-library/react";
import React from "react";
import { AuthForm } from "@components/AuthForm";

export const foo = "bnar";
describe(`<AuthForm />`, () => {
  it(`Renders`, () => {
    render(<AuthForm />);
  });
});
