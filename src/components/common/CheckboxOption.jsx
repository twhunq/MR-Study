import React from 'react';

// Nút Checkbox cho dạng nhiều lựa chọn
const CheckboxOption = ({ id, name, label, checked, onChange, reviewMode, status }) => {
  let containerClass = "flex items-center px-4 py-3 border rounded mb-2 transition-all duration-200 ";
  let boxClass = "appearance-none w-6 h-6 border-2 rounded focus:outline-none transition-all flex items-center justify-center flex-shrink-0 ";

  if (!reviewMode) {
    containerClass += checked ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50 cursor-pointer";
    boxClass += checked ? "border-blue-500 bg-blue-500" : "border-gray-400 bg-white";
  } else {
    containerClass += "cursor-default ";
    if (status === 'correct') {
      containerClass += "border-green-500 bg-green-50 text-green-800 font-medium";
      boxClass += "border-green-500 bg-green-500";
    } else if (status === 'incorrect') {
      containerClass += "border-red-500 bg-red-50 text-red-800";
      boxClass += "border-red-500 bg-red-500";
    } else {
      containerClass += "border-gray-200 bg-gray-50 opacity-60";
      boxClass += "border-gray-300 bg-gray-100";
    }
  }

  return (
    <label className={containerClass}>
      <div className="relative flex items-center justify-center mr-3">
        <input type="checkbox" id={id} name={name} value={id} checked={checked} onChange={!reviewMode ? onChange : undefined} disabled={reviewMode} className={boxClass} />
        {checked && <svg className="absolute w-4 h-4 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
      </div>
      <span className="text-base">{label}</span>
      {reviewMode && status === 'correct' && <span className="ml-auto pl-2 text-green-600 font-bold text-xl">✓</span>}
      {reviewMode && status === 'incorrect' && <span className="ml-auto pl-2 text-red-500 font-bold text-xl">✗</span>}
    </label>
  );
};

export default CheckboxOption;
