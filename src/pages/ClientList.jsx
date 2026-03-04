import React from "react";
import { Eye, Pencil, Trash2, Search, Plus } from "lucide-react";

const ClientList = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">

        <h1 className="text-xl text-yellow-400 font-semibold">
          Client |
        </h1>

        <div className="flex items-center gap-3">

          {/* Search */}
          <div className="flex items-center border border-yellow-600 rounded px-3 py-1">
            <Search size={16} className="text-yellow-400 mr-2" />
            <input
              type="text"
              placeholder="Search Customers"
              className="bg-transparent outline-none text-sm placeholder-gray-400"
            />
          </div>

          {/* Add Button */}
          <button className="flex items-center gap-2 border border-yellow-600
           text-yellow-400 px-4 py-1 rounded
           hover:bg-yellow-600 hover:text-black transition">

            <Plus size={16} />
            Add New Client
          </button>

        </div>
      </div>

      {/* TABLE */}
      <table className="w-full text-sm">

        {/* TABLE HEADER */}
        <thead className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-black">
          <tr>
            <th className="p-3 text-left">CLIENT NAME</th>
            <th className="p-3 text-left">EMAIL</th>
            <th className="p-3 text-left">CONTACT NO.</th>
            <th className="p-3 text-left">LOCATION</th>
            <th className="p-3 text-left">DOB</th>
            <th className="p-3 text-left">GENDER</th>
            <th className="p-3 text-left">ACTION</th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>

          <tr className="border-b border-yellow-700 hover:bg-yellow-900/20">

            <td className="p-3">Raj Kumar</td>

            <td className="p-3 text-blue-400 underline cursor-pointer">
              raj.kumar23@gmail.com
            </td>

            <td className="p-3">7654323423</td>
            <td className="p-3">Pune</td>
            <td className="p-3">10 Jul 1982</td>
            <td className="p-3">Male</td>

            {/* ACTION BUTTONS */}
            <td className="p-3">
              <div className="flex gap-2">

                <button className="border border-yellow-600 p-2 rounded
                text-yellow-400 hover:bg-yellow-600 hover:text-black">
                  <Eye size={16} />
                </button>

                <button className="border border-yellow-600 p-2 rounded
                text-yellow-400 hover:bg-yellow-600 hover:text-black">
                  <Pencil size={16} />
                </button>

                <button className="border border-yellow-600 p-2 rounded
                text-yellow-400 hover:bg-red-600 hover:text-white">
                  <Trash2 size={16} />
                </button>

              </div>
            </td>

          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default ClientList;