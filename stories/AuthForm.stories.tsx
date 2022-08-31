import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

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
