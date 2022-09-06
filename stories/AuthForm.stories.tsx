import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";

import { AuthForm, AUTH_STRATEGIES } from "@components/AuthForm";

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
/**
 * The basic component
 */
export const Standard = Template.bind({});
Standard.args = {
  strategy: AUTH_STRATEGIES.PASSWORD,
};

export const LoggingIn = Template.bind({});
LoggingIn.args = {
  strategy: AUTH_STRATEGIES.PASSWORD,
};

LoggingIn.play = async ({ args, canvasElement }) => {
  const fillEmail = async () => {
    const emailInput = screen.getByLabelText("E-mail", {
      selector: "input",
    });

    await userEvent.type(emailInput, "example-email@email.com", {
      delay: 100,
    });
  };
  switch (args.strategy) {
    case AUTH_STRATEGIES.PASSWORD:
      {
        await fillEmail();

        const passwordInput = screen.getByLabelText("Password", {
          selector: "input",
        });

        await userEvent.type(passwordInput, "secret", {
          delay: 100,
        });
      }
      break;
    case AUTH_STRATEGIES.PASSWORDLESS:
      {
        await fillEmail();
      }
      break;
  }
};
