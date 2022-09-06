import { FC, ReactNode } from "react";

interface LoginWithPasswordlessProps {}
/**
 *
 */
export const LoginWithPasswordless: FC<LoginWithPasswordlessProps> = () => {
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input type="text" id="email" name="email" required />
    </>
  );
};
