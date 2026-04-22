import React from 'react';
import Divider from '../common/Divider';
import RadioOption from '../common/RadioOption';

const MultipleChoiceQuestion = ({ data, index, selectedValue, onChange, reviewMode }) => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <h3 className="font-bold text-gray-800 mb-2 text-lg">Câu {index + 1}:</h3>
    <p className="text-gray-800 font-medium text-lg mb-2">{data.text}</p>
    {data.image && (
      <div className="my-4 flex justify-center">
        <img src={data.image} alt="Hình minh họa" className="max-w-full h-auto rounded-lg border border-gray-200 shadow-sm" style={{ maxHeight: '400px' }} />
      </div>
    )}
    <Divider />
    <div className="flex flex-col space-y-1 mt-4">
      {data.options.map((opt, optIndex) => {
        let status = 'neutral';
        if (reviewMode) {
          if (opt.id === data.correctAnswer) status = 'correct';
          else if (selectedValue === opt.id) status = 'incorrect';
        }
        return (
          <RadioOption key={opt.id} id={`${data.id}-${opt.id}`} name={data.id} label={`${String.fromCharCode(65 + optIndex)}. ${opt.text}`} checked={selectedValue === opt.id} onChange={() => onChange(data.id, opt.id)} reviewMode={reviewMode} status={status} />
        );
      })}
    </div>
  </div>
);

export default MultipleChoiceQuestion;
