import { Button } from "@stories/Button";
import { FC, ReactElement, ReactNode } from "react";
import { LoginWithPassword } from "./LoginWithPassword";
import { LoginWithPasswordless } from "./LoginWithPasswordless";

export enum AUTH_STRATEGIES {
  PASSWORD = "PASSWORD",
  PASSWORDLESS = "PASSWORDLESS",
}
interface AuthFormProps {
  strategy?: AUTH_STRATEGIES;
  onLogin?: (email: string) => void
}
/**
 *
 */
export const AuthForm: FC<AuthFormProps> = ({
  strategy = AUTH_STRATEGIES.PASSWORD,
  onLogin
}) => {
  let loginComponent: ReactElement
  switch (strategy) {
    case AUTH_STRATEGIES.PASSWORDLESS:
      loginComponent = <LoginWithPasswordless />;
    case AUTH_STRATEGIES.PASSWORD:
    default:
      loginComponent = <LoginWithPassword />;
  }

  return (
    <>
      {loginComponent}
      <br />
      <button>Login</button>
    </>
  )
};
