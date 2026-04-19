import React from 'react';

// Nút Radio cho dạng 1 lựa chọn hoặc Đúng/Sai
const RadioOption = ({ id, name, label, checked, onChange, reviewMode, status }) => {
  let containerClass = "flex items-center px-4 py-3 border rounded mb-2 transition-all duration-200 ";
  let ringClass = "appearance-none w-6 h-6 border-2 rounded-full focus:outline-none transition-all flex-shrink-0 ";
  let dotClass = "absolute w-3 h-3 rounded-full pointer-events-none ";

  if (!reviewMode) {
    containerClass += checked ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50 cursor-pointer";
    ringClass += checked ? "border-blue-500 bg-white" : "border-gray-400";
    dotClass += "bg-blue-500";
  } else {
    containerClass += "cursor-default ";
    if (status === 'correct') {
      containerClass += "border-green-500 bg-green-50 text-green-800 font-medium";
      ringClass += "border-green-500 bg-white";
      dotClass += "bg-green-500";
    } else if (status === 'incorrect') {
      containerClass += "border-red-500 bg-red-50 text-red-800";
      ringClass += "border-red-500 bg-white";
      dotClass += "bg-red-500";
    } else {
      containerClass += "border-gray-200 bg-gray-50 opacity-60";
      ringClass += "border-gray-300";
    }
  }

  return (
    <label className={containerClass}>
      <div className="relative flex items-center justify-center mr-3">
        <input type="radio" id={id} name={name} value={id} checked={checked} onChange={!reviewMode ? onChange : undefined} disabled={reviewMode} className={ringClass} />
        {checked && <div className={dotClass}></div>}
      </div>
      <span className="text-base">{label}</span>
      {reviewMode && status === 'correct' && <span className="ml-auto pl-2 text-green-600 font-bold text-xl">✓</span>}
      {reviewMode && status === 'incorrect' && <span className="ml-auto pl-2 text-red-500 font-bold text-xl">✗</span>}
    </label>
  );
};

export default RadioOption;
