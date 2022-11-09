import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Database } from "../../utils/database.types";

type App = Database["public"]["Tables"]["apps"]["Row"];

export const AppList = () => {
  const supabase = useSupabaseClient<Database>();
  const [apps, setApps] = useState<App[]>([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("apps").select();
      if (data) {
        setApps(data);
      }
    };
    getData();
  }, [setApps]);

  return (
    <ul>
      <>
        <li>Profile</li>
        {apps.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </>
    </ul>
  );
};
