import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
      <div className="w-16 h-16 border-4 border-t-orange-800 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
