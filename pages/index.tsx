import type { NextPage } from "next";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import Account from "@components/Account";
import { AppList } from "@components/AppList";

const Home: NextPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <h3>{process.env.NEXT_PUBLIC_SITE_URL}</h3>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          magicLink
          providers={["google"]}
          redirectTo={process.env.NEXT_PUBLIC_SITE_URL}
        />
      ) : (
        <>
          <AppList />
          <Account session={session} />
        </>
      )}
    </div>
  );
};

export default Home;
