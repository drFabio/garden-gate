import { FC } from "react";
import { LoginWithPassword } from "./LoginWithPassword";
import { LoginWithPasswordless } from "./LoginWithPasswordless";

export enum AUTH_STRATEGIES {
  PASSWORD = "PASSWORD",
  PASSWORDLESS = "PASSWORDLESS",
}
interface AuthFormProps {
  strategy?: AUTH_STRATEGIES;
}
/**
 *
 */
export const AuthForm: FC<AuthFormProps> = ({
  strategy = AUTH_STRATEGIES.PASSWORD,
}) => {
  switch (strategy) {
    case AUTH_STRATEGIES.PASSWORDLESS:
      return <LoginWithPasswordless />;
    case AUTH_STRATEGIES.PASSWORD:
    default:
      return <LoginWithPassword />;
  }
};
