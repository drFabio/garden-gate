import { AuthForm, AUTH_STRATEGIES } from "@components/AuthForm";
import type { NextPage } from "next";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import Account from "@components/Account";

const Home: NextPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          magicLink
          providers={["google"]}
        />
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default Home;
