"use client";
import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type Props = {};

export default function AuthForm() {
  const supabase = createClientComponentClient();
  return (
    <>
      <Auth
        supabaseClient={supabase}
        view="magic_link"
        showLinks={false}
        providers={[]}
        redirectTo="http://localhost:3000/auth/callback"
      />
    </>
  );
}
