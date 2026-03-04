import React from "react";

const EditClient = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center border-b border-yellow-700 pb-2">
        <h1 className="text-lg text-yellow-400 font-semibold">
          Edit Client |
        </h1>

        <button className="border border-yellow-600 text-yellow-400 px-3 py-1 rounded
        hover:bg-yellow-600 hover:text-black transition">
          Back
        </button>
      </div>

      {/* PERSONAL DETAILS */}
      <section className="mt-5">
        <h2 className="text-yellow-400 font-semibold mb-3">
          Personal Details
        </h2>

        <div className="grid grid-cols-3 gap-6">

          <Input label="First Name" value="Raj" />
          <Input label="Last Name" value="Kumar" />
          <Input label="Gender" value="Male" />

          <Input label="Birthdate" value="10-07-1982" />
          <Input label="Contact" value="7654323423" />
          <Input label="Email" value="raj.kumar23@gmail.com" />

        </div>
      </section>

      {/* ADDRESS DETAILS */}
      <section className="mt-6 border-t border-yellow-700 pt-4">
        <h2 className="text-yellow-400 font-semibold mb-3">
          Address Details
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-4">
          <Input label="Address Line 1" value="Aundh-Sangavi Road" />
          <Input label="Address Line 2" value="2nd Floor" />
        </div>

        <div className="grid grid-cols-4 gap-6">
          <Input label="Country" value="India" />
          <Input label="State" value="Maharashtra" />
          <Input label="City" value="Pune" />
          <Input label="Pin" value="411007" />
        </div>
      </section>

      {/* ACTION BUTTONS */}
      <div className="flex justify-end gap-3 mt-6 border-t border-yellow-700 pt-4">
        <button className="border border-yellow-600 text-yellow-400 px-4 py-1 rounded
        hover:bg-yellow-600 hover:text-black">
          Cancel
        </button>

        <button className="border border-yellow-600 text-yellow-400 px-4 py-1 rounded
        hover:bg-yellow-600 hover:text-black">
          Save
        </button>
      </div>

    </div>
  );
};

/* REUSABLE INPUT */
const Input = ({ label, value }) => (
  <div>
    <label className="block text-sm mb-1 text-gray-200">
      {label}
    </label>

    <input
      defaultValue={value}
      className="w-full bg-black border border-yellow-700 rounded
      px-3 py-2 text-sm outline-none
      focus:border-yellow-500"
    />
  </div>
);

export default EditClient;