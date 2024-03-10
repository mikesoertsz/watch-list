import React from "react";

export default function WatchForm() {
  return (
    <div>
      <form
        action="addWatch"
        className="text-black w-[500px] bg-white border border-slate-200 rounded-xl p-8 gap-4 flex flex-col justify-center items-center"
      >
        <div className="flex items-center justify-start gap-2">
          <label htmlFor="brand">Brand</label>
          <Input type="text" id="brand" name="brand" required />
        </div>
        <div className="flex items-center justify-start gap-2">
          <label htmlFor="model">Model</label>
          <input type="text" name="model" id="model" required />
        </div>
        <div className="flex items-center justify-start gap-2">
          <label htmlFor="referenceNumber">Ref No.</label>
          <input
            type="text"
            name="referenceNumber"
            id="referenceNumber"
            required
          />
        </div>
        <button type="submit">Add watch</button>
      </form>
    </div>
  );
}
