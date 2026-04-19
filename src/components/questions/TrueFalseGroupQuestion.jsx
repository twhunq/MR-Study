import React from 'react';
import Divider from '../common/Divider';
import RadioOption from '../common/RadioOption';

const TrueFalseGroupQuestion = ({ data, index, answers, onChange, reviewMode }) => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <h3 className="font-bold text-gray-800 mb-2 text-lg">Câu {index + 1}:</h3>
    <p className="text-gray-800 font-medium text-lg mb-2 leading-relaxed">{data.context}</p>
    <Divider />
    <div className="space-y-6 mt-4">
      {data.subQuestions.map((subQ) => (
        <div key={subQ.id} className="bg-gray-50 p-4 rounded border border-gray-200">
          <p className="text-gray-800 font-medium mb-3">{subQ.text}</p>
          <div className="flex flex-col space-y-2">
             {subQ.options.map((opt) => {
               let status = 'neutral';
               if (reviewMode) {
                 if (opt.id === subQ.correctAnswer) status = 'correct';
                 else if (answers[subQ.id] === opt.id) status = 'incorrect';
               }
               return (
                 <RadioOption key={opt.id} id={`${subQ.id}-${opt.id}`} name={subQ.id} label={`${opt.text}`} checked={answers[subQ.id] === opt.id} onChange={() => onChange(subQ.id, opt.id)} reviewMode={reviewMode} status={status} />
               );
             })}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TrueFalseGroupQuestion;
