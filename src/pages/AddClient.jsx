import React from "react";

const AddClient = () => {

  const SelectField = ({ label }) => (
    <div>
      <label className="text-xs text-yellow-500 mb-1 block">
        {label}
        <span className="text-red-500">*</span>
      </label>

      <div className="relative">
        <select
          className="
          w-full appearance-none
          bg-[#0b0b0b]
          border border-yellow-600
          rounded-md
          px-3 py-2
          text-sm text-gray-200
          cursor-pointer
          focus:outline-none
          focus:border-yellow-400
          focus:ring-1
          focus:ring-yellow-400
          transition-all
        "
        >
          <option>Select {label}</option>
        </select>

        {/* Custom Arrow */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-400 pointer-events-none">
          ▼
        </span>
      </div>
    </div>
  );

  const InputField = ({ label, type = "text" }) => (
    <div>
      <label className="text-xs text-yellow-500 mb-1 block">
        {label}
        <span className="text-red-500">*</span>
      </label>

      <input
        type={type}
        className="
        w-full bg-transparent
        border border-yellow-600
        rounded-md
        px-3 py-2
        text-sm
        focus:outline-none
        focus:border-yellow-400
        focus:ring-1
        focus:ring-yellow-400
        transition-all
      "
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-200 px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-yellow-400 tracking-wide">
          Add Client
        </h1>

        <button className="
        px-4 py-2 rounded-md
        border border-yellow-500
        text-yellow-400
        hover:bg-yellow-500
        hover:text-black
        transition-all">
          Back
        </button>
      </div>

      {/* ================= PERSONAL DETAILS ================= */}
      <div className="
      bg-[#111]
      rounded-xl
      p-6
      shadow-lg
      border border-yellow-700/30">

        <h2 className="
        text-yellow-400 font-semibold mb-5
        border-b border-yellow-700 pb-2">
          Personal Details
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          <InputField label="First Name" />
          <InputField label="Last Name" />
          <InputField label="Contact" />
          <InputField label="Email" />

          <SelectField label="Gender" />

          <InputField label="Birthdate" type="date" />
        </div>
      </div>

      {/* ================= ADDRESS ================= */}
      <div className="
      bg-[#111]
      rounded-xl
      p-6
      shadow-lg
      border border-yellow-700/30
      mt-8">

        <h2 className="
        text-yellow-400 font-semibold mb-5
        border-b border-yellow-700 pb-2">
          Address Details
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

          <div className="lg:col-span-2">
            <InputField label="Address Line 1" />
          </div>

          <InputField label="Address Line 2" />

          <SelectField label="Country" />
          <SelectField label="State" />
          <SelectField label="City" />

          <div>
            <label className="text-xs text-yellow-500 mb-1 block">
              Pin<span className="text-red-500">*</span>
            </label>

            <input
              placeholder="411017"
              className="
              w-full bg-transparent
              border border-yellow-600
              rounded-md
              px-3 py-2
              text-sm
              focus:outline-none
              focus:border-yellow-400
              focus:ring-1
              focus:ring-yellow-400
            "
            />
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 mt-8">

          <button className="
          px-5 py-2 rounded-md
          border border-yellow-500
          text-yellow-400
          hover:bg-yellow-500
          hover:text-black
          transition-all">
            Cancel
          </button>

          <button className="
          px-6 py-2 rounded-md
          bg-yellow-500
          text-black font-medium
          hover:bg-yellow-400
          transition-all">
            Save Client
          </button>

        </div>

      </div>
    </div>
  );
};

export default AddClient;