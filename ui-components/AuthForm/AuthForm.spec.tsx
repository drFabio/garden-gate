import { Standard } from "@stories/AuthForm.stories";
import { render } from "@testing-library/react";
import React from "react";

describe(`<AuthForm />`, () => {
  it(`Renders`, () => {
    render(<Standard />);
  });
});
