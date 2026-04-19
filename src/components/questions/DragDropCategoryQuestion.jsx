import React, { useState } from 'react';
import Divider from '../common/Divider';

const DragDropCategoryQuestion = ({ data, index, itemsState, setItemsState, reviewMode }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDragStart = (e, item, source) => {
    if (reviewMode) return;
    setSelectedItem(null);
    e.dataTransfer.setData('itemName', item);
    e.dataTransfer.setData('sourceArea', source);
    setTimeout(() => e.target.classList.add('opacity-50'), 0);
  };
  const handleDragEnd = (e) => e.target.classList.remove('opacity-50');
  const handleDragOver = (e) => { if (!reviewMode) e.preventDefault(); };

  const handleDrop = (e, targetArea) => {
    if (reviewMode) return;
    e.preventDefault();
    executeMove(e.dataTransfer.getData('itemName'), e.dataTransfer.getData('sourceArea'), targetArea);
  };

  const handleItemClick = (e, item, source) => {
    if (reviewMode) return;
    e.stopPropagation(); 
    if (selectedItem?.name === item) setSelectedItem(null);
    else setSelectedItem({ name: item, sourceArea: source });
  };

  const handleContainerClick = (targetArea) => {
    if (reviewMode || !selectedItem) return;
    if (selectedItem.sourceArea === targetArea) { setSelectedItem(null); return; }
    executeMove(selectedItem.name, selectedItem.sourceArea, targetArea);
    setSelectedItem(null);
  };

  const executeMove = (itemName, sourceArea, targetArea) => {
    if (sourceArea === targetArea || !itemName) return;
    setItemsState(prev => {
      const qState = { ...prev[data.id] };
      qState[sourceArea] = qState[sourceArea].filter(i => i !== itemName);
      qState[targetArea] = [...qState[targetArea], itemName];
      return { ...prev, [data.id]: qState };
    });
  };

  const DraggableItem = ({ item, source }) => {
    const isSelected = selectedItem?.name === item;
    let itemClass = "px-4 py-2 rounded-md text-sm font-medium transition-all border ";
    if (!reviewMode) {
      itemClass += "bg-white hover:bg-gray-50 border-gray-300 text-gray-800 shadow-sm cursor-pointer ";
      if (isSelected) itemClass += "ring-2 ring-offset-2 ring-blue-500 scale-105 z-10 relative bg-blue-50 border-blue-400";
    } else {
      itemClass += "cursor-default shadow-none ";
      if (source === 'pool') itemClass += "bg-gray-100 border-gray-300 text-gray-500 opacity-60";
      else {
        const isCorrect = data.correct[source].includes(item);
        itemClass += isCorrect ? "bg-green-100 border-green-500 text-green-800" : "bg-red-100 border-red-500 text-red-800";
      }
    }
    return <div draggable={!reviewMode} onDragStart={(e) => handleDragStart(e, item, source)} onDragEnd={handleDragEnd} onClick={(e) => handleItemClick(e, item, source)} className={itemClass}>{item}</div>;
  };

  const currentState = itemsState[data.id] || { pool: [], cat1: [], cat2: [] };

  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="font-bold text-gray-800 mb-2 text-lg">Câu {index + 1}:</h3>
      <p className="text-gray-800 font-medium text-lg mb-2">{data.text}</p>
      {!reviewMode && <p className="text-sm text-blue-600 mb-2 italic">Mẹo: Bạn có thể kéo thả hoặc <strong>bấm vào hàng hóa</strong> sau đó <strong>bấm vào khoảng trống của cột tương ứng</strong>.</p>}
      <Divider />
      <div className={`flex flex-wrap gap-2 mb-6 min-h-[60px] p-3 border-2 border-dashed rounded-lg transition-colors ${reviewMode ? 'bg-gray-50 border-gray-200' : (selectedItem && selectedItem.sourceArea !== 'pool' ? 'bg-blue-100 border-blue-400 cursor-pointer' : 'bg-blue-50/50 border-blue-300')}`} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'pool')} onClick={() => handleContainerClick('pool')}>
        {currentState.pool.map((item, idx) => <DraggableItem key={idx} item={item} source="pool" />)}
        {currentState.pool.length === 0 && !reviewMode && <span className="text-gray-400 italic text-sm py-2 px-1">{selectedItem ? "Bấm vào đây để thu hồi từ khoá" : "Tất cả đã được phân loại"}</span>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['cat1', 'cat2'].map((cat, idx) => (
          <div key={cat} className="flex flex-col h-full group">
            <h4 className="text-gray-800 font-bold mb-3 text-center bg-gray-100 py-2 rounded">{data.categories[idx]}</h4>
            <div className={`border-2 rounded p-4 flex-1 flex flex-wrap content-start gap-2 transition-colors ${reviewMode ? 'border-gray-200 bg-gray-50' : (selectedItem && selectedItem.sourceArea !== cat ? 'border-blue-400 border-dashed bg-blue-50/30 cursor-pointer hover:bg-blue-50' : 'border-gray-300 bg-white')}`} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, cat)} onClick={() => handleContainerClick(cat)}>
              {currentState[cat].map((item, i) => <DraggableItem key={i} item={item} source={cat} />)}
              {currentState[cat].length === 0 && selectedItem && !reviewMode && <div className="w-full text-center text-blue-400 italic py-4 pointer-events-none">Bấm để thả vào đây</div>}
            </div>
          </div>
        ))}
      </div>
      {reviewMode && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="font-bold text-green-800 mb-2">Gợi ý đáp án đúng:</p>
          <ul className="text-sm text-green-700 list-disc pl-5">
            <li><strong>{data.categories[0]}:</strong> {data.correct.cat1.join(', ')}</li>
            <li><strong>{data.categories[1]}:</strong> {data.correct.cat2.join(', ')}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DragDropCategoryQuestion;
