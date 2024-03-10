import EditWatch from "@/components/EditWatch";
import WatchForm from "@/components/WatchForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";

type Props = {};

export default async function WatchList({}: Props) {
  // Retrieve the cookie store from the Next.js headers
  const cookieStore = cookies();
  // Initialize the Supabase client for server-side operations using the cookie store for auth
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  // Fetch the current session data from Supabase, which includes the user details if logged in
  const {
    data: { session },
  } = await supabase.auth.getSession();
  // Extract the user information from the session if it exists
  const user = session?.user;

  const { data: watches, error } = await supabase
    .from("watches")
    .select("*")
    .eq("user_id", user?.id)
    .order("brand", { ascending: true });

  if (error) {
    console.error("error fetching watches:", error);
  }

  console.log({ watches });

  return (
    <div>
      <div>
        <div>
          <h1>My watch list</h1>
          <form action="/auth/signout" method="post">
            <button type="submit" className="">
              signout
            </button>
          </form>
        </div>
        <WatchForm />
        <div>
          {watches?.map((watch: any, index: number) => (
            <div key={watch.id}>
              <h2>
                {watch.brand} - {watch.name}
              </h2>
              <div>
                <form action={"deleteWatch"}>
                  <input type="hidden" name="id" value={watch.id} />
                  <button type="submit">Delete</button>
                </form>
                <EditWatch watch={watch} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
