import WatchForm from "@/components/WatchForm";
import React from "react";

type Props = {};

export default function WatchList({}: Props) {
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
        <div></div>
      </div>
    </div>
  );
}
