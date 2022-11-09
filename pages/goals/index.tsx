import Head from "next/head";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session } from "@supabase/auth-helpers-nextjs";
import { FC } from "react";

export interface GoalsProps {
  session?: Session;
}
export const Goals: FC<GoalsProps> = ({ session }) => {
  if (!session) {
    return <h1> Logged out! I Should redirect</h1>;
  }
  return (
    <>
      <Head>
        <title>Goals</title>
      </Head>
      <h1>Goals</h1>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const supabase = createServerSupabaseClient(context);

  const { data } = await supabase.auth.getSession();
  return { props: { session: data?.session } };
}

export default Goals;
