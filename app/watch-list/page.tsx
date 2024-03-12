import EditWatch from "@/components/EditWatch";
import WatchForm from "@/components/WatchForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import { FiTrash } from "react-icons/fi";
import deleteWatch from "../server-actions/deleteWatch";
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

  //   console.log({ watches });

  return (
    <main className="flex min-h-screen bg-zinc-100">
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
        <ul className="flex flex-col items-start justify-start gap-2 m-12 w-3xl">
          {watches?.map((watch: any, index: number) => (
            <li
              key={watch.id}
              className="flex items-center justify-between w-full p-4 bg-white border rounded-md border-slate-100"
            >
              <h2>
                {watch.brand} | {watch.model}
              </h2>
              <div className="flex items-center justify-center gap-1">
                <form
                  action={deleteWatch}
                  className="flex items-center justify-center gap-2"
                >
                  <input type="hidden" name="id" value={watch.id} />
                  <button type="submit" className="">
                    <FiTrash className="flex items-center justify-center p-1 border rounded-sm w-7 h-7 hover:bg-red-600 hover:text-white hover:border-red-400" />
                  </button>
                </form>
                <EditWatch watch={watch} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
