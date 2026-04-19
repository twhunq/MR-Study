import React, { useState } from 'react';
import { prepareQuizData } from './utils/shuffle';
import LESSONS_DATA from './data/lessonsData';
import MultipleChoiceQuestion from './components/questions/MultipleChoiceQuestion';
import MultipleSelectQuestion from './components/questions/MultipleSelectQuestion';
import TrueFalseGroupQuestion from './components/questions/TrueFalseGroupQuestion';
import DragDropFillQuestion from './components/questions/DragDropFillQuestion';
import DragDropCategoryQuestion from './components/questions/DragDropCategoryQuestion';

export default function App() {
  const [currentLesson, setCurrentLesson] = useState(null);
  const [quizData, setQuizData] = useState([]);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [dragCategoryState, setDragCategoryState] = useState({});
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [score, setScore] = useState(0);

  // Bắt đầu hoặc làm lại bài học
  const startLesson = (lessonId) => {
    const rawData = LESSONS_DATA[lessonId];
    if (!rawData) return;

    const shuffledData = prepareQuizData(rawData);
    setQuizData(shuffledData);

    const initialDragCategoryState = {};
    shuffledData.forEach(q => {
      if (q.type === 'drag-drop-category') {
        initialDragCategoryState[q.id] = { pool: q.items, cat1: [], cat2: [] };
      }
    });
    setDragCategoryState(initialDragCategoryState);
    
    setCurrentStep(0);
    setAnswers({});
    setIsSubmitted(false);
    setShowReview(false);
    setScore(0);
    setCurrentLesson(lessonId);
  };

  const goHome = () => {
    setCurrentLesson(null);
  };

  const handleOptionChange = (questionId, optionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleCheckboxChange = (questionId, optionId) => {
    setAnswers(prev => {
      const currentSelected = prev[questionId] || [];
      if (currentSelected.includes(optionId)) {
        return { ...prev, [questionId]: currentSelected.filter(id => id !== optionId) };
      }
      return { ...prev, [questionId]: [...currentSelected, optionId] };
    });
  };

  const calculateScore = () => {
    let totalScore = 0;
    quizData.forEach(q => {
      if (q.type === 'multiple-choice') {
        if (answers[q.id] === q.correctAnswer) totalScore++;
      } 
      else if (q.type === 'multiple-select') {
        const userAns = answers[q.id] || [];
        if (userAns.length === q.correctAnswers.length && userAns.every(v => q.correctAnswers.includes(v))) {
          totalScore++;
        }
      } 
      else if (q.type === 'true-false-group') {
        const allCorrect = q.subQuestions.every(subQ => answers[subQ.id] === subQ.correctAnswer);
        if (allCorrect) totalScore++;
      } 
      else if (q.type === 'drag-drop-category') {
        const state = dragCategoryState[q.id];
        const c1Ok = state.cat1.length === q.correct.cat1.length && state.cat1.every(i => q.correct.cat1.includes(i));
        const c2Ok = state.cat2.length === q.correct.cat2.length && state.cat2.every(i => q.correct.cat2.includes(i));
        if (c1Ok && c2Ok) totalScore++;
      }
      else if (q.type === 'drag-drop-fill') {
        const allCorrect = Object.keys(q.correct).every(key => answers[`${q.id}_${key}`] === q.correct[key]);
        if (allCorrect) totalScore++;
      }
    });

    setScore(totalScore);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentStep < quizData.length - 1) setCurrentStep(prev => prev + 1);
    else calculateScore();
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const renderQuestion = (question, index, isReview) => {
    switch (question.type) {
      case 'multiple-choice': return <MultipleChoiceQuestion key={question.id} data={question} index={index} selectedValue={answers[question.id]} onChange={handleOptionChange} reviewMode={isReview} />;
      case 'multiple-select': return <MultipleSelectQuestion key={question.id} data={question} index={index} selectedValues={answers[question.id]} onChange={handleCheckboxChange} reviewMode={isReview} />;
      case 'true-false-group': return <TrueFalseGroupQuestion key={question.id} data={question} index={index} answers={answers} onChange={handleOptionChange} reviewMode={isReview} />;
      case 'drag-drop-fill': return <DragDropFillQuestion key={question.id} data={question} index={index} answers={answers} setAnswers={setAnswers} reviewMode={isReview} />;
      case 'drag-drop-category': return <DragDropCategoryQuestion key={question.id} data={question} index={index} itemsState={dragCategoryState} setItemsState={setDragCategoryState} reviewMode={isReview} />;
      default: return null;
    }
  };

  // ----------------------------------------------------
  // GIAO DIỆN TRANG CHỦ (Hiển thị 6 bài)
  // ----------------------------------------------------
  if (currentLesson === null) {
    return (
      <div className="min-h-screen bg-[#f4f6f8] py-12 px-4 font-sans text-gray-800 flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-blue-800 mb-3 tracking-tight">Hệ Thống Kiểm Tra Trực Tuyến</h1>
            <p className="text-gray-500 text-lg">Vui lòng chọn bài học bên dưới để bắt đầu ôn tập</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(lessonId => {
              const isAvailable = !!LESSONS_DATA[lessonId];
              return (
                <div key={lessonId} className={`bg-white rounded-2xl shadow-sm border p-6 flex flex-col transition-all duration-300 ${isAvailable ? 'border-blue-100 hover:shadow-lg hover:-translate-y-1' : 'border-gray-100 opacity-70'}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-xl font-bold shadow-sm ${isAvailable ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-gray-50 text-gray-400 border border-gray-100'}`}>
                    {lessonId}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isAvailable ? 'text-gray-800' : 'text-gray-400'}`}>Bài {lessonId}</h3>
                  <p className="text-gray-500 text-sm mb-8 flex-1">
                    {isAvailable ? `Bộ câu hỏi ôn tập tổng hợp cho nội dung Bài ${lessonId}.` : 'Nội dung đang được cập nhật.'}
                  </p>
                  <button 
                    onClick={() => isAvailable && startLesson(lessonId)}
                    disabled={!isAvailable}
                    className={`w-full py-3.5 rounded-xl font-bold transition-colors ${isAvailable ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-blue-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                  >
                    {isAvailable ? 'Bắt Đầu Làm Bài' : 'Chưa Mở'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // GIAO DIỆN KẾT QUẢ ĐIỂM SỐ
  // ----------------------------------------------------
  if (isSubmitted && !showReview) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-green-600">✓</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Hoàn thành!</h2>
          <p className="text-gray-500 mb-6">Bạn đã hoàn thành bài kiểm tra Bài {currentLesson}.</p>
          
          <div className="bg-blue-50 py-6 rounded-lg mb-8">
            <p className="text-sm text-blue-600 font-bold uppercase tracking-wider mb-1">Tổng điểm</p>
            <p className="text-5xl font-extrabold text-blue-700">{score} <span className="text-2xl text-blue-400">/ {quizData.length}</span></p>
          </div>

          <div className="space-y-3">
            <button onClick={() => setShowReview(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md">Xem chi tiết đáp án</button>
            <button onClick={() => startLesson(currentLesson)} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-4 rounded-xl transition-colors">Làm lại bài này</button>
            <button onClick={goHome} className="w-full text-gray-500 hover:text-gray-800 font-semibold py-3 px-4 rounded-xl transition-colors">Về trang chủ</button>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // GIAO DIỆN LÀM BÀI / XEM LẠI ĐÁP ÁN
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#f4f6f8] font-sans text-gray-800 pb-28">
      
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto py-3 px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button onClick={goHome} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center" title="Về trang chủ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 hover:text-blue-600"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div>
              <h1 className="text-xl font-bold text-blue-700">Kiểm Tra: Bài {currentLesson}</h1>
              {showReview && <span className="inline-block mt-0.5 px-3 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full">Chế độ xem lại (Đáp án)</span>}
            </div>
          </div>
          {!showReview && (
            <div className="text-sm font-bold text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              Câu {currentStep + 1} / {quizData.length}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        {showReview ? (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow mb-8 text-center border-t-4 border-blue-500">
              <h2 className="text-2xl font-bold text-gray-800">Chi tiết bài làm (Bài {currentLesson})</h2>
              <p className="text-gray-600 mt-2">Tổng điểm: <strong className="text-blue-600 text-xl">{score}/{quizData.length}</strong></p>
            </div>
            {quizData.map((q, idx) => renderQuestion(q, idx, true))}
          </div>
        ) : (
          renderQuestion(quizData[currentStep], currentStep, false)
        )}
      </div>

      {/* Footer Navigation (Thi) */}
      {!showReview && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)] z-50">
          <div className="max-w-4xl mx-auto flex justify-between items-center p-4 px-6">
            <button onClick={handlePrev} disabled={currentStep === 0} className={`font-bold py-2.5 px-6 rounded-lg transition-colors ${currentStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>
              Quay lại
            </button>
            <button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-8 rounded-lg shadow-md transition-colors">
              {currentStep === quizData.length - 1 ? 'Nộp Bài' : 'Tiếp Theo'}
            </button>
          </div>
        </div>
      )}

      {/* Footer Navigation (Xem lại) */}
      {showReview && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="max-w-4xl mx-auto flex justify-center gap-4 p-4">
             <button onClick={() => startLesson(currentLesson)} className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-3 px-8 rounded-xl transition-colors shadow-sm">
              Làm lại bài này
            </button>
             <button onClick={goHome} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-md">
              Về trang chủ
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
