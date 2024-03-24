import { Title } from "@mantine/core";
import { redirect } from "next/navigation";

// import { createClient } from '@/utils/supabase/server'
import { createClient } from "../utils/supabase/server";

export default async function Dashboard() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <>
      <Title>Dashboard Home</Title>
      <p>Hello {data.user.email}</p>
    </>
  );
}
