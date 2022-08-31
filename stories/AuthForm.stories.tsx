import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";

import { AuthForm } from "@components/AuthForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/AuthForm",
  component: AuthForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AuthForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AuthForm> = (args) => (
  <AuthForm {...args} />
);

export const LoggedOut = Template.bind({});

LoggedOut.play = async () => {
  const emailInput = screen.getByLabelText("E-mail", {
    selector: "input",
  });

  await userEvent.type(emailInput, "example-email@email.com", {
    delay: 100,
  });
};
