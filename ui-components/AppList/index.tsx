import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Database } from "../../utils/database.types";

export const AppList = () => {
  const supabase = useSupabaseClient<Database>();
  const [apps, setApps] = useState<string>();
  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("apps").select();
      if (data) {
        setApps(JSON.stringify(data, null, 4));
      }
      console.log({ data, error });
    };
    getData();
  }, [setApps]);

  return (
    <>
      <ul>
        <li>Profile</li>
      </ul>
      {apps}
    </>
  );
};
