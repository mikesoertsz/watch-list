import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import addWatch from "@/app/server-actions/addWatch";

export default function WatchForm() {
  return (
    <div>
      <form
        action={addWatch}
        className="text-black w-[500px] bg-white border border-slate-200 rounded-xl p-8 gap-4 flex flex-col justify-start items-center m-12 shadow-md"
      >
        <div className="flex items-center justify-start w-full gap-2">
          <Label htmlFor="brand" className="w-1/3 text-right">
            Brand
          </Label>
          <Input type="text" id="brand" name="brand" required />
        </div>
        <div className="flex items-center justify-start w-full gap-2">
          <Label htmlFor="model" className="w-1/3 text-right">
            Model
          </Label>
          <Input type="text" name="model" id="model" required />
        </div>
        <div className="flex items-center justify-start w-full gap-2">
          <Label htmlFor="referenceNumber" className="w-1/3 text-right">
            Ref No.
          </Label>
          <Input
            type="text"
            name="referenceNumber"
            id="referenceNumber"
            required
          />
        </div>
        <Button type="submit">Add watch</Button>
      </form>
    </div>
  );
}
