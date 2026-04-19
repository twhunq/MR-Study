import React, { useState } from 'react';
import Divider from '../common/Divider';

const DragDropFillQuestion = ({ data, index, answers, setAnswers, reviewMode }) => {
  const [selectedItem, setSelectedItem] = useState(null); 
  const usedItems = Object.keys(data.correct).map(key => answers[`${data.id}_${key}`]).filter(Boolean);
  const poolItems = data.items.filter(item => !usedItems.includes(item));

  const handleDragStart = (e, item, source) => {
    if (reviewMode) return;
    setSelectedItem(null); 
    e.dataTransfer.setData('itemName', item);
    e.dataTransfer.setData('sourceBlank', source);
    setTimeout(() => e.target.classList.add('opacity-50'), 0);
  };
  const handleDragEnd = (e) => e.target.classList.remove('opacity-50');
  const handleDragOver = (e) => { if (!reviewMode) e.preventDefault(); };

  const handleDropToBlank = (e, targetBlankId) => {
    if (reviewMode) return;
    e.preventDefault();
    executeMove(e.dataTransfer.getData('itemName'), e.dataTransfer.getData('sourceBlank'), targetBlankId);
  };

  const handleDropToPool = (e) => {
    if (reviewMode) return;
    e.preventDefault();
    const sourceBlank = e.dataTransfer.getData('sourceBlank');
    if (sourceBlank !== 'pool') setAnswers(prev => ({ ...prev, [sourceBlank]: null }));
  };

  const handleItemClick = (e, item, source) => {
    if (reviewMode) return;
    e.stopPropagation(); 
    if (selectedItem?.name === item) setSelectedItem(null); 
    else setSelectedItem({ name: item, source: source }); 
  };

  const handleBlankClick = (targetBlankId) => {
    if (reviewMode || !selectedItem) return;
    executeMove(selectedItem.name, selectedItem.source, targetBlankId);
    setSelectedItem(null); 
  };

  const handlePoolClick = () => {
    if (reviewMode || !selectedItem) return;
    if (selectedItem.source !== 'pool') setAnswers(prev => ({ ...prev, [selectedItem.source]: null }));
    setSelectedItem(null);
  };

  const executeMove = (itemName, sourceBlank, targetBlankId) => {
    if (!itemName) return;
    setAnswers(prev => {
      const newAns = { ...prev };
      if (sourceBlank !== 'pool') newAns[sourceBlank] = null; 
      newAns[`${data.id}_${targetBlankId}`] = itemName; 
      return newAns;
    });
  };

  const DraggableItem = ({ item, source }) => {
    const isSelected = selectedItem?.name === item;
    let baseClass = "inline-block px-3 py-1 rounded text-sm font-bold border transition-all mx-1 ";
    
    if (!reviewMode) {
      baseClass += "bg-white border-blue-400 text-blue-700 shadow-sm hover:bg-blue-50 cursor-pointer ";
      if (isSelected) baseClass += "ring-2 ring-offset-2 ring-blue-500 scale-105 z-10 relative bg-blue-100 "; 
    } else {
      baseClass += "cursor-default shadow-none ";
      if (source === 'pool') baseClass += "bg-gray-100 border-gray-300 text-gray-500 opacity-60";
      else {
         const isCorrect = data.correct[source.replace(`${data.id}_`, '')] === item;
         baseClass += isCorrect ? "bg-green-100 border-green-500 text-green-800" : "bg-red-100 border-red-500 text-red-800 line-through";
      }
    }

    return (
      <span draggable={!reviewMode} onDragStart={(e) => handleDragStart(e, item, source)} onDragEnd={handleDragEnd} onClick={(e) => handleItemClick(e, item, source)} className={baseClass}>
        {item}
      </span>
    );
  };

  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="font-bold text-gray-800 mb-2 text-lg">Câu {index + 1}:</h3>
      <p className="text-gray-800 font-medium text-lg mb-2">{data.text}</p>
      {!reviewMode && <p className="text-sm text-blue-600 mb-2 italic">Mẹo: Bạn có thể kéo thả hoặc <strong>bấm vào từ khoá</strong> sau đó <strong>bấm vào chỗ trống</strong> để điền.</p>}
      <Divider />
      <div className={`flex flex-wrap items-center gap-2 mb-6 min-h-[50px] p-3 border-2 border-dashed rounded-lg transition-colors ${reviewMode ? 'bg-gray-50 border-gray-200' : (selectedItem && selectedItem.source !== 'pool' ? 'bg-blue-100 border-blue-400 cursor-pointer' : 'bg-blue-50/50 border-blue-300')}`} onDragOver={handleDragOver} onDrop={handleDropToPool} onClick={handlePoolClick}>
        <span className="text-sm font-semibold text-gray-500 uppercase mr-2">Từ khoá:</span>
        {poolItems.map((item, idx) => <DraggableItem key={idx} item={item} source="pool" />)}
        {poolItems.length === 0 && !reviewMode && <span className="text-gray-400 italic text-sm">Đã dùng hết từ khoá</span>}
      </div>
      <div className="space-y-4 text-gray-800 text-lg leading-loose">
        {data.sentences.map((s) => {
          const blankId = `${data.id}_${s.id}`;
          const filledItem = answers[blankId];
          const isCorrectInReview = reviewMode && data.correct[s.id] === filledItem;
          
          let spanClass = `inline-flex items-center justify-center min-w-[120px] min-h-[36px] border-b-2 align-middle px-2 pb-1 transition-colors cursor-pointer `;
          if (!filledItem) spanClass += reviewMode ? 'border-red-300 bg-red-50/50' : (selectedItem ? 'border-blue-500 bg-blue-50 hover:bg-blue-100' : 'border-gray-400 bg-white hover:bg-gray-50');
          else spanClass += reviewMode ? (isCorrectInReview ? 'border-green-400' : 'border-red-400') : 'border-blue-400 hover:bg-gray-50';

          return (
            <p key={s.id} className="bg-gray-50 p-4 rounded border border-gray-100">
              {s.pre} <span className={spanClass} onDragOver={handleDragOver} onDrop={(e) => handleDropToBlank(e, s.id)} onClick={() => handleBlankClick(s.id)}>
                {filledItem ? <DraggableItem item={filledItem} source={blankId} /> : <span className="text-gray-400 text-sm italic">{selectedItem ? "Bấm để thả vào" : "(kéo thả vào đây)"}</span>}
              </span> {s.post}
              {reviewMode && !isCorrectInReview && <span className="block mt-2 text-sm text-green-600 font-bold bg-green-50 px-3 py-1 rounded inline-block">Đáp án đúng: {data.correct[s.id]}</span>}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default DragDropFillQuestion;
