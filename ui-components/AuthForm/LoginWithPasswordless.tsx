import { FC, useState } from "react";

interface LoginWithPasswordlessProps {
  onLogin?: (email: string) => void

}
/**
 *
 */
export const LoginWithPasswordless: FC<LoginWithPasswordlessProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('')

  const handleLogin = () => {
    onLogin?.(email)
  }
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input type="text" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

    </>
  );
};
