import { FC } from "react";

interface LoginWithPasswordProps {}
/**
 *
 */
export const LoginWithPassword: FC<LoginWithPasswordProps> = () => {
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input type="text" id="email" name="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
    </>
  );
};
