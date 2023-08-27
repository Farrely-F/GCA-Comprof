import React from "react";

function Skeleton() {
  return (
    <div className="max-w-[321px] min-h-[479px] aspect-auto p-4 rounded-2xl animate-pulse">
      <div className="bg-gray-300 h-[250px] w-full rounded-lg mb-2"></div>
      <div className="bg-gray-300 h-5 w-2/3 mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/2 mb-2"></div>
      <div className="flex gap-2 min-w-[321px] h-6 flex-wrap mb-4">
        <div className="bg-gray-300 h-5 w-1/4"></div>
        <div className="bg-gray-300 h-5 w-1/4"></div>
        <div className="bg-gray-300 h-5 w-1/4"></div>
        <div className="bg-gray-300 h-5 w-1/4"></div>
      </div>
      <div className="flex justify-end">
        <div className="bg-blue-300 hover:bg-blue-200 text-white px-5 py-2 rounded-xl cursor-not-allowed">Loading...</div>
      </div>
    </div>
  );
}

export default Skeleton;
