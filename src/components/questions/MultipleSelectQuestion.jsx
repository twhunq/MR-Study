import React from 'react';
import Divider from '../common/Divider';
import CheckboxOption from '../common/CheckboxOption';

const MultipleSelectQuestion = ({ data, index, selectedValues = [], onChange, reviewMode }) => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <h3 className="font-bold text-gray-800 mb-2 text-lg">Câu {index + 1}:</h3>
    <p className="text-gray-800 font-medium text-lg mb-2">{data.text}</p>
    <Divider />
    <div className="flex flex-col space-y-1 mt-4">
      {data.options.map((opt, optIndex) => {
        let status = 'neutral';
        if (reviewMode) {
          const isCorrectAnswer = data.correctAnswers.includes(opt.id);
          const isSelected = selectedValues.includes(opt.id);
          if (isCorrectAnswer && isSelected) status = 'correct';
          else if (isCorrectAnswer && !isSelected) status = 'correct';
          else if (!isCorrectAnswer && isSelected) status = 'incorrect';
        }
        return (
          <CheckboxOption key={opt.id} id={`${data.id}-${opt.id}`} name={data.id} label={`${String.fromCharCode(65 + optIndex)}. ${opt.text}`} checked={selectedValues.includes(opt.id)} onChange={() => onChange(data.id, opt.id)} reviewMode={reviewMode} status={status} />
        );
      })}
    </div>
  </div>
);

export default MultipleSelectQuestion;
