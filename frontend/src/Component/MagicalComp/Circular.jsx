import React from "react";

export default function Circular({ className = "" }) {
  return (
    <div className={`absolute rounded-full    ${className}`}>
      <div className="bg-[#0e1630]   w-full h-full rounded-full p-4"></div>
    </div>
  );
}
