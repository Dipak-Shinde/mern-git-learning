import React from "react";

const ViewClientDetails = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 px-8 py-6">

      {/* Header */}
      <div className="flex justify-between items-center border-b border-yellow-600 pb-2">
        <h1 className="text-xl font-semibold text-yellow-400">
          View Client Details |
        </h1>

        <button className="border border-yellow-500 text-yellow-400 px-4 py-1 rounded
        hover:bg-yellow-500 hover:text-black transition">
          Back
        </button>
      </div>

      {/* CLIENT DETAILS */}
      <section className="mt-5">
        <h2 className="text-yellow-400 font-semibold mb-3">
          Client Details
        </h2>

        <div className="grid grid-cols-3 gap-y-3 text-sm">

          <p><span className="text-yellow-500 font-medium">Name:</span> Raj Kumar</p>
          <p><span className="text-yellow-500 font-medium">Email:</span> raj.kumar23@gmail.com</p>
          <p><span className="text-yellow-500 font-medium">Phone No:</span> 7654323423</p>

          <p><span className="text-yellow-500 font-medium">Gender:</span> Male</p>
          <p><span className="text-yellow-500 font-medium">Date Of Birth:</span> 10 Jul 1982</p>

        </div>

        <p className="mt-3 text-sm">
          <span className="text-yellow-500 font-medium">Address:</span>{" "}
          Aundh-Sangavi Road, 2nd Floor, Pune, Maharashtra, India, 411007
        </p>
      </section>

      {/* CASE DETAILS */}
      <section className="mt-6 border-t border-yellow-700 pt-4">
        <h2 className="text-yellow-400 font-semibold mb-3">
          Case Details
        </h2>

        <div className="grid grid-cols-2 gap-y-3 text-sm">

          <p><span className="text-yellow-500 font-medium">Adverse Party Name:</span> Ravi Singh</p>
          <p><span className="text-yellow-500 font-medium">Advocate Name:</span> Kumar Joshi</p>

          <p><span className="text-yellow-500 font-medium">Case Title:</span> Criminal Defense</p>
          <p><span className="text-yellow-500 font-medium">Case Description:</span>
            Defense case for Raj Kumar accused of embezzlement.
          </p>

          <p><span className="text-yellow-500 font-medium">Court Name:</span> Sessions Court Delhi</p>
          <p><span className="text-yellow-500 font-medium">Court Location:</span> Delhi</p>

          <p><span className="text-yellow-500 font-medium">Start Date:</span> 1 Sep 2024</p>
          <p><span className="text-yellow-500 font-medium">End Date:</span> 1 Mar 2025</p>

        </div>
      </section>

      {/* TABLE SECTION */}
      <div className="grid grid-cols-2 gap-5 mt-6 border-t border-yellow-700 pt-4">

        {/* Documents */}
        <div>
          <h3 className="text-yellow-400 mb-2 font-semibold">
            Document Uploaded
          </h3>

          <table className="w-full text-sm border border-yellow-600">
            <thead className="bg-yellow-600 text-black">
              <tr>
                <th className="p-2 text-left">NO</th>
                <th className="p-2 text-left">DOCUMENT</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-yellow-600 hover:bg-yellow-900/20">
                <td className="p-2">1</td>
                <td className="p-2 text-yellow-300 underline cursor-pointer hover:text-yellow-400">
                  Criminal Defense
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div>
          <h3 className="text-yellow-400 mb-2 font-semibold">
            Notes
          </h3>

          <table className="w-full text-sm border border-yellow-600">
            <thead className="bg-yellow-600 text-black">
              <tr>
                <th className="p-2 text-left">NOTE DATE</th>
                <th className="p-2 text-left">NOTE TITLE</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-yellow-600 hover:bg-yellow-900/20">
                <td className="p-2">2024-08-03</td>
                <td className="p-2">
                  Criminal Defense Strategy Session
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ViewClientDetails;