import { FC, ReactNode } from "react";

interface AuthFormProps {}
/**
 *
 */
export const AuthForm: FC<AuthFormProps> = () => {
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input type="text" id="email" name="email" />
    </>
  );
};
