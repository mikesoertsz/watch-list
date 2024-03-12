import React from "react";
import { TbEditCircle } from "react-icons/tb";

export default function EditWatch({ watch }: any) {
  return (
    <>
      <form
        action={"editWatch"}
        className="flex items-center justify-center gap-2"
      >
        <input type="hidden" name="id" value={watch.id} />
        <button type="submit" className="">
          <TbEditCircle className="flex items-center justify-center p-0.5 border rounded-sm w-7 h-7 hover:bg-red-600 hover:text-white hover:border-red-400" />
        </button>
      </form>
    </>
  );
}
